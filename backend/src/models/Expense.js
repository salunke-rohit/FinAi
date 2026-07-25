import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    paymentMethod: {
      type: String,
      enum: ["Cash", "UPI", "Card", "Net Banking", "Wallet", "Bank Transfer"],
      default: "UPI",
    },

    transactionType: {
      type: String,
      enum: ["Expense", "Income"],
      default: "Expense",
    },

    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense; 