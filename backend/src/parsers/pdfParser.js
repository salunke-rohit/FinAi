import fs from "fs";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

const parsePDF = async (filePath) => {
  try {
    // Read PDF
    const data = new Uint8Array(fs.readFileSync(filePath));

    // Load PDF
    const pdf = await pdfjsLib.getDocument({ data }).promise;

    let fullText = "";

    // Extract text from every page
    for (let page = 1; page <= pdf.numPages; page++) {
      const currentPage = await pdf.getPage(page);

      const textContent = await currentPage.getTextContent();

      fullText +=
        textContent.items
          .map((item) => item.str)
          .join(" ") + " ";
    }

    // ==========================
    // Supported Transaction Formats
    // ==========================

    const patterns = [

      // DD-MM-YYYY
      /(\d{2}-\d{2}-\d{4})\s+(.*?)\s+(DR|CR)\s+([\d,]+\.\d{2})\s+([\d,]+\.\d{2})/g,

      // DD/MM/YYYY
      /(\d{2}\/\d{2}\/\d{4})\s+(.*?)\s+(DR|CR)\s+([\d,]+\.\d{2})\s+([\d,]+\.\d{2})/g,

      // YYYY-MM-DD
      /(\d{4}-\d{2}-\d{2})\s+(.*?)\s+(DR|CR)\s+([\d,]+\.\d{2})\s+([\d,]+\.\d{2})/g,

    ];

    const transactions = [];

    // Try every supported pattern
    for (const regex of patterns) {

      regex.lastIndex = 0;

      let match;

      while ((match = regex.exec(fullText)) !== null) {

        transactions.push({

          Date: match[1],

          Description: match[2].trim(),

          Debit:
            match[3] === "DR"
              ? match[4].replace(/,/g, "")
              : "",

          Credit:
            match[3] === "CR"
              ? match[4].replace(/,/g, "")
              : "",

          Balance: match[5].replace(/,/g, ""),

        });

      }

      // Stop searching if we found transactions
      if (transactions.length > 0) {
        break;
      }
    }

    console.log("======================================");
    console.log("PDF Transactions");
    console.log(transactions);
    console.log("======================================");

    return transactions;

  } catch (error) {

    console.error("PDF Parser Error:", error);

    return [];

  }
};

export default parsePDF;