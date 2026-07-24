import Expense from "../models/Expense.js";

// Create Expense
export const addExpense = async (req, res) => {
    try {
        const {
            title,
            amount,
            category,
            description,
            paymentMethod,
            transactionType,
            date,
        } = req.body;

        const expense = await Expense.create({
            user: req.user.id,
            title,
            amount,
            category,
            description,
            paymentMethod,
            transactionType,
            date,
        });

        res.status(201).json({
            success: true,
            message: "Expense added successfully",
            expense,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getExpenses = async (req, res) => {
    try {

        const expenses = await Expense.find({
            user: req.user.id,
        }).sort({ date: -1 });

        res.status(200).json({
            success: true,
            count: expenses.length,
            expenses,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const updateExpense = async (req, res) => {
    try {

        const expense = await Expense.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.user.id,
            },
            req.body,
            {
                returnDocument: 'after',
                runValidators: true,
            }
        );

        if (!expense) {
            return res.status(404).json({
                success: false,
                message: "Expense not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Expense updated successfully",
            expense,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteExpense = async (req, res) => {
    try {

        const expense = await Expense.findOneAndDelete({
            _id: req.params.id,
            user: req.user.id,
        });

        if (!expense) {
            return res.status(404).json({
                success: false,
                message: "Expense not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Expense deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};