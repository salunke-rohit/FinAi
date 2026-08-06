import Expense from "../models/Expense.js";

export const generateFinancialSummary = async (userId) => {
  // =====================================
  // Fetch All Transactions
  // =====================================
  const transactions = await Expense.find({ user: userId }).sort({
    date: -1,
  });

  // =====================================
  // No Transactions
  // =====================================
  if (transactions.length === 0) {
    return {
      totalIncome: 0,
      totalExpense: 0,
      balance: 0,
      savingsRate: 0,
      totalTransactions: 0,
      totalIncomeTransactions: 0,
      totalExpenseTransactions: 0,
    };
  }

  // =====================================
  // Separate Income & Expense
  // =====================================
  const incomeTransactions = transactions.filter(
    (transaction) => transaction.transactionType === "Income"
  );

  const expenseTransactions = transactions.filter(
    (transaction) => transaction.transactionType === "Expense"
  );

  // =====================================
  // Calculate Total Income
  // =====================================
  const totalIncome = incomeTransactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );

  // =====================================
  // Calculate Total Expense
  // =====================================
  const totalExpense = expenseTransactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );

  // =====================================
  // Calculate Balance
  // =====================================
  const balance = totalIncome - totalExpense;

  // =====================================
  // Savings Rate
  // =====================================
  const savingsRate =
    totalIncome > 0
      ? Number(((balance / totalIncome) * 100).toFixed(2))
      : 0;

  // =====================================
  // Highest Income
  // =====================================
  const highestExpense =
  expenseTransactions.length > 0
    ? (() => {
        const expense = expenseTransactions.reduce((max, current) =>
          current.amount > max.amount ? current : max
        );

        return {
          description: expense.description,
          amount: expense.amount,
          category: expense.category,
          date: expense.date,
        };
      })()
    : null;

const highestIncome =
  incomeTransactions.length > 0
    ? (() => {
        const income = incomeTransactions.reduce((max, current) =>
          current.amount > max.amount ? current : max
        );

        return {
          description: income.description,
          amount: income.amount,
          category: income.category,
          date: income.date,
        };
      })()
    : null;
  // =====================================
  // Average Income
  // =====================================
  const averageIncome =
    incomeTransactions.length > 0
      ? Number((totalIncome / incomeTransactions.length).toFixed(2))
      : 0;

  // =====================================
  // Average Expense
  // =====================================
  const averageExpense =
    expenseTransactions.length > 0
      ? Number((totalExpense / expenseTransactions.length).toFixed(2))
      : 0;

  // =====================================
  // Category Breakdown
  // =====================================
  const categoryMap = {};

  expenseTransactions.forEach((transaction) => {
    const category = transaction.category || "Others";

    if (!categoryMap[category]) {
      categoryMap[category] = 0;
    }

    categoryMap[category] += transaction.amount;
  });

  // Convert Object -> Array
  const categoryBreakdown = Object.entries(categoryMap)
    .map(([category, amount]) => ({
      category,
      amount: Number(amount.toFixed(2)),
    }))
    .sort((a, b) => b.amount - a.amount);

  // Top 5 Categories
  const topCategories = categoryBreakdown.slice(0, 5);

  // =====================================
  // Monthly Summary
  // =====================================
  const monthlyMap = {};

  transactions.forEach((transaction) => {
    const month = transaction.date.toISOString().slice(0, 7);

    if (!monthlyMap[month]) {
      monthlyMap[month] = {
        month,
        income: 0,
        expense: 0,
      };
    }

    if (transaction.transactionType === "Income") {
      monthlyMap[month].income += transaction.amount;
    } else {
      monthlyMap[month].expense += transaction.amount;
    }
  });

  const monthlySummary = Object.values(monthlyMap)
    .map((month) => ({
      month: month.month,
      income: Number(month.income.toFixed(2)),
      expense: Number(month.expense.toFixed(2)),
      savings: Number((month.income - month.expense).toFixed(2)),
    }))
    .sort((a, b) => a.month.localeCompare(b.month));

  // =====================================
  // Recent Transactions
  // =====================================
  const recentTransactions = transactions.slice(0, 5).map((transaction) => ({
    description: transaction.description,
    amount: transaction.amount,
    category: transaction.category,
    transactionType: transaction.transactionType,
    paymentMethod: transaction.paymentMethod,
    bankName: transaction.bankName,
    balance: transaction.balance,
    date: transaction.date,
  }));

  // =====================================
  // Spending Insights
  // =====================================
  const spendingInsights = {
    // Highest spending category
    largestCategory: topCategories.length > 0 ? topCategories[0].category : "N/A",

    // Amount spent in highest category
    largestCategoryAmount: topCategories.length > 0 ? topCategories[0].amount : 0,

    // Expense as percentage of income
    expenseRatio:
      totalIncome > 0
        ? Number(((totalExpense / totalIncome) * 100).toFixed(2))
        : 0,

    // Approximate daily expense
    averageDailyExpense:
      expenseTransactions.length > 0
        ? Number((totalExpense / 30).toFixed(2))
        : 0,
  };

  // =====================================
  // Return Summary
  // =====================================
  return {
    // Basic Financial Metrics
    totalIncome,
    totalExpense,
    balance,
    savingsRate,
    totalTransactions: transactions.length,
    totalIncomeTransactions: incomeTransactions.length,
    totalExpenseTransactions: expenseTransactions.length,

    // Income & Expense Statistics
    highestIncome,
    highestExpense,
    averageIncome,
    averageExpense,

    // Category Analysis
    categoryBreakdown,
    topCategories,

    // Monthly Analysis
    monthlySummary,

    // Recent Activity
    recentTransactions,

    // AI Insights
    spendingInsights,
  };
};  