import mongoose from "mongoose";
import Expense from "../models/Expense.js";

export const getDashboardSummary = async (req, res) => {
    try {

        const summary = await Expense.aggregate([
            {
                $match: {
                            user: new mongoose.Types.ObjectId(req.user.id)
                        }
            },
            {
                $group: {
                    _id: null,
                    totalIncome: {
                        $sum: {
                            $cond: [
                                { $eq: ["$transactionType", "Income"] },
                                "$amount",
                                0
                            ]
                        }
                    },
                    totalExpense: {
                        $sum: {
                            $cond: [
                                { $eq: ["$transactionType", "Expense"] },
                                "$amount",
                                0
                            ]
                        }
                    },
                    totalTransactions: {
                        $sum: 1
                    }
                }
            }
        ]);

        const data = summary[0] || {
            totalIncome: 0,
            totalExpense: 0,
            totalTransactions: 0
        };

        res.status(200).json({
            success: true,
            totalIncome: data.totalIncome,
            totalExpense: data.totalExpense,
            balance: data.totalIncome - data.totalExpense,
            totalTransactions: data.totalTransactions
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getCategorySummary = async (req, res) => {
    try {

        const categories = await Expense.aggregate([
            {
                $match: {
                    user: new mongoose.Types.ObjectId(req.user.id),
                    transactionType: "Expense"
                }
            },
            {
                $group: {
                    _id: "$category",
                    totalAmount: {
                        $sum: "$amount"
                    }
                }
            },
            {
                $sort: {
                    totalAmount: -1
                }
            }
        ]);

        res.status(200).json({
            success: true,
            categories
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getMonthlySummary = async (req, res) => {
    try {

        const monthlyExpenses = await Expense.aggregate([
            {
                $match: {
                    user: new mongoose.Types.ObjectId(req.user.id),
                    transactionType: "Expense"
                }
            },
            {
                $group: {
                    _id: {
                        year: { $year: "$date" },
                        month: { $month: "$date" }
                    },
                    totalAmount: {
                        $sum: "$amount"
                    }
                }
            },
            {
                $sort: {
                    "_id.year": 1,
                    "_id.month": 1
                }
            }
        ]);

        res.status(200).json({
            success: true,
            monthlyExpenses
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getRecentTransactions = async (req, res) => {
  try {

    const recentTransactions = await Expense.find({
      user: req.user.id
    })
      .select(
        "description amount category transactionType date"
      )
      .sort({ date: -1 })
      .limit(10);

    res.status(200).json({
      success: true,
      recentTransactions
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};