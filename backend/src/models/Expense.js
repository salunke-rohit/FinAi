import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    description: {
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
      default: "Others",
    },

    transactionType: {
      type: String,
      enum: ["Income", "Expense"],
      required: true,
    },

    balance: {
      type: Number,
      default: 0,
    },

    paymentMethod: {
      type: String,
      default: "Unknown",
    },

    bankName: {
      type: String,
      default: "Unknown",
    },

    sourceFile: {
      type: String,
      default: "",
    },

    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;