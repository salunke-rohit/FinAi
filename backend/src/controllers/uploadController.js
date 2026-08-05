import path from "path";
import fs from "fs-extra";

import Expense from "../models/Expense.js";
import parseCSV from "../parsers/csvParser.js";
import parsePDF from "../parsers/pdfParser.js";
import normalizeTransaction from "../utils/columnMapper.js";

export const uploadStatement = async (req, res) => {
  try {
    // ===========================
    // Check File
    // ===========================

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a file.",
      });
    }

    const filePath = req.file.path;

    const extension = path
      .extname(req.file.originalname)
      .toLowerCase();

    let rawTransactions = [];
    let transactions = [];

    // ===========================
    // Parse File
    // ===========================

    if (extension === ".csv") {
      rawTransactions = await parseCSV(filePath);
    } else if (extension === ".pdf") {
      rawTransactions = await parsePDF(filePath);
    } else {
      await fs.remove(filePath);

      return res.status(400).json({
        success: false,
        message: "Unsupported file format.",
      });
    }

    // ===========================
    // Normalize Transactions
    // ===========================

    transactions = rawTransactions.map((row) =>
      normalizeTransaction(row)
    );

    console.log("====================================");
    console.log("RAW TRANSACTIONS");
    console.log(rawTransactions);

    console.log("====================================");
    console.log("NORMALIZED TRANSACTIONS");
    console.log(transactions);
    console.log("====================================");

    // ===========================
    // Create Expense Documents
    // ===========================

    const expenses = transactions
      .filter(
        (transaction) =>
          transaction.description &&
          transaction.amount > 0
      )
      .map((transaction) => {

        let formattedDate = transaction.date;

        // PDF: DD-MM-YYYY → YYYY-MM-DD
        if (/^\d{2}-\d{2}-\d{4}$/.test(transaction.date)) {
          const [day, month, year] = transaction.date.split("-");
          formattedDate = `${year}-${month}-${day}`;
        }

        return {
          user: req.user.id,

          description: transaction.description,

          amount: transaction.amount,

          category: transaction.category,

          transactionType: transaction.transactionType,

          balance: transaction.balance,

          paymentMethod: "Unknown",

          bankName: "Unknown",

          sourceFile: req.file.originalname,

          date: new Date(formattedDate),
        };
      });

    // ===========================
    // No Valid Transactions
    // ===========================

    if (expenses.length === 0) {
      await fs.remove(filePath);

      return res.status(400).json({
        success: false,
        message: "No valid transactions found.",
      });
    }

    console.log("Raw Transactions:", rawTransactions.length);
    console.log("Normalized Transactions:", transactions.length);
    console.log("Valid Expenses:", expenses.length);

    // ===========================
    // Save to MongoDB
    // ===========================

    await Expense.insertMany(expenses);

    console.log(`✅ ${expenses.length} transactions saved successfully.`);

    // ===========================
    // Delete Uploaded File
    // ===========================

    await fs.remove(filePath);

    // ===========================
    // Success Response
    // ===========================

    return res.status(200).json({
      success: true,
      message: "Statement imported successfully.",
      totalTransactions: expenses.length,
    });

  } catch (error) {

    console.error(error);

    if (req.file?.path) {
      await fs.remove(req.file.path);
    }

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};