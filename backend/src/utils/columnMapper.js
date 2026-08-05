import CATEGORY_MAP from "./categoryMapper.js";

// Different possible column names
const COLUMN_MAP = {
  date: [
    "Date",
    "Txn Date",
    "Transaction Date",
    "Value Date",
    "Posting Date",
  ],

  description: [
    "Description",
    "Narration",
    "Remarks",
    "Particulars",
    "Merchant",
    "Details",
  ],

  debit: [
    "Debit",
    "Withdrawal",
    "Withdraw",
    "DR",
  ],

  credit: [
    "Credit",
    "Deposit",
    "CR",
  ],

  amount: [
    "Amount",
    "Transaction Amount",
  ],

  balance: [
    "Balance",
    "Closing Balance",
    "Available Balance",
  ],

  type: [
    "Type",
    "Transaction Type",
  ],
};

// Find the correct column automatically
const getValue = (row, aliases) => {
  for (const key of aliases) {
    if (row[key] !== undefined && row[key] !== "") {
      return row[key];
    }
  }
  return "";
};

// Find category
const getCategory = (description = "") => {

  const merchant = description.toUpperCase();

  for (const category in CATEGORY_MAP) {

    const keywords = CATEGORY_MAP[category];

    for (const keyword of keywords) {

      if (merchant.includes(keyword)) {
        return category;
      }

    }

  }

  return "Others";
};

// Convert one raw row into FinAI format
const normalizeTransaction = (row) => {

  const date = getValue(row, COLUMN_MAP.date);

  const description = getValue(row, COLUMN_MAP.description);

  const debit = parseFloat(getValue(row, COLUMN_MAP.debit) || 0);

  const credit = parseFloat(getValue(row, COLUMN_MAP.credit) || 0);

  const amountColumn = parseFloat(
    getValue(row, COLUMN_MAP.amount) || 0
  );

  const type = getValue(row, COLUMN_MAP.type);

  const balance = parseFloat(
    getValue(row, COLUMN_MAP.balance) || 0
  );

  let amount = 0;

  let transactionType = "";

  // Case 1 : Debit / Credit columns
  if (debit > 0) {
    amount = debit;
    transactionType = "Expense";
  } else if (credit > 0) {
    amount = credit;
    transactionType = "Income";
  }

  // Case 2 : Amount + Type column
  else if (amountColumn > 0) {

    amount = amountColumn;

    if (
      type.toUpperCase() === "DR" ||
      type.toUpperCase() === "DEBIT"
    ) {
      transactionType = "Expense";
    }

    else {
      transactionType = "Income";
    }

  }

  return {

    date,

    description,

    amount,

    transactionType,

    balance,

    category: getCategory(description),

  };

};

export default normalizeTransaction;