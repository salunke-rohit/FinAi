export const merchantDatabase = [
  

    /**
 * Merchant Database
 *
 * Contains verified merchants used to categorize
 * bank statement transactions.
 *
 * Unknown merchants are handled separately.
 */

  {
    merchantName: "HPCL",
    keywords: ["hpcl", "hindustan petroleum"],
    category: "Transportation",
    subcategory: "Fuel",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "IOCL",
    keywords: ["iocl", "indian oil"],
    category: "Transportation",
    subcategory: "Fuel",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Bharat Petroleum",
    keywords: ["bharat petroleum", "bpcl"],
    category: "Transportation",
    subcategory: "Fuel",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Shell",
    keywords: ["shell"],
    category: "Transportation",
    subcategory: "Fuel",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Nayara",
    keywords: ["nayara"],
    category: "Transportation",
    subcategory: "Fuel",
    transactionType: "Merchant",
    isVerified: true
  },

  // Food Delivery
  {
    merchantName: "Swiggy",
    keywords: ["swiggy"],
    category: "Food",
    subcategory: "Food Delivery",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Zomato",
    keywords: ["zomato"],
    category: "Food",
    subcategory: "Food Delivery",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "EatClub",
    keywords: ["eatclub"],
    category: "Food",
    subcategory: "Food Delivery",
    transactionType: "Merchant",
    isVerified: true
  },

  // Shopping
  {
    merchantName: "Amazon",
    keywords: ["amazon","amazon pay"],
    category: "Shopping",
    subcategory: "Online Shopping",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Flipkart",
    keywords: ["flipkart"],
    category: "Shopping",
    subcategory: "Online Shopping",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Myntra",
    keywords: ["myntra"],
    category: "Shopping",
    subcategory: "Fashion",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Ajio",
    keywords: ["ajio"],
    category: "Shopping",
    subcategory: "Fashion",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Meesho",
    keywords: ["meesho"],
    category: "Shopping",
    subcategory: "Online Shopping",
    transactionType: "Merchant",
    isVerified: true
  },

  // Grocery
  {
    merchantName: "DMart",
    keywords: ["dmart"],
    category: "Groceries",
    subcategory: "Supermarket",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "BigBasket",
    keywords: ["bigbasket"],
    category: "Groceries",
    subcategory: "Online Grocery",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Blinkit",
    keywords: ["blinkit"],
    category: "Groceries",
    subcategory: "Instant Delivery",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Zepto",
    keywords: ["zepto"],
    category: "Groceries",
    subcategory: "Instant Delivery",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "JioMart",
    keywords: ["jiomart"],
    category: "Groceries",
    subcategory: "Online Grocery",
    transactionType: "Merchant",
    isVerified: true
  },

  // Pharmacy
  {
    merchantName: "Apollo Pharmacy",
    keywords: ["apollo pharmacy"],
    category: "Healthcare",
    subcategory: "Medicine",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "PharmEasy",
    keywords: ["pharmeasy"],
    category: "Healthcare",
    subcategory: "Medicine",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "1mg",
    keywords: ["1mg"],
    category: "Healthcare",
    subcategory: "Medicine",
    transactionType: "Merchant",
    isVerified: true
  },

  // Travel
  {
    merchantName: "Uber",
    keywords: ["uber"],
    category: "Transportation",
    subcategory: "Taxi",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Ola",
    keywords: ["ola"],
    category: "Transportation",
    subcategory: "Taxi",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Rapido",
    keywords: ["rapido"],
    category: "Transportation",
    subcategory: "Bike Taxi",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "IRCTC",
    keywords: ["irctc"],
    category: "Transportation",
    subcategory: "Railway",
    transactionType: "Merchant",
    isVerified: true
  },

  // Bills
  {
    merchantName: "BSNL",
    keywords: ["bsnl"],
    category: "Bills",
    subcategory: "Mobile",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Jio",
    keywords: ["jio"],
    category: "Bills",
    subcategory: "Mobile",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Airtel",
    keywords: ["airtel"],
    category: "Bills",
    subcategory: "Mobile",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Vi",
    keywords: ["vi"],
    category: "Bills",
    subcategory: "Mobile",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Tata Power",
    keywords: ["tata power"],
    category: "Bills",
    subcategory: "Electricity",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "MSEB",
    keywords: ["mseb"],
    category: "Bills",
    subcategory: "Electricity",
    transactionType: "Merchant",
    isVerified: true
  },

  // Entertainment
  {
    merchantName: "Netflix",
    keywords: ["netflix"],
    category: "Entertainment",
    subcategory: "OTT",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Amazon Prime",
    keywords: ["amazon prime"],
    category: "Entertainment",
    subcategory: "OTT",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Hotstar",
    keywords: ["hotstar"],
    category: "Entertainment",
    subcategory: "OTT",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Spotify",
    keywords: ["spotify"],
    category: "Entertainment",
    subcategory: "Music",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "YouTube Premium",
    keywords: ["youtube premium"],
    category: "Entertainment",
    subcategory: "Subscription",
    transactionType: "Merchant",
    isVerified: true
  },

  // Payments
  {
    merchantName: "PhonePe",
    keywords: ["phonepe","phone pe"],
    category: "Money Transfer",
    subcategory: "UPI",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Google Pay",
    keywords: ["google pay", "gpay", "googlepay"],
    category: "Money Transfer",
    subcategory: "UPI",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Paytm",
    keywords: ["paytm"],
    category: "Payments",
    subcategory: "Wallet",
    transactionType: "Merchant",
    isVerified: true
  },

  // Food Chains
  {
    merchantName: "McDonald's",
    keywords: ["mcdonald"],
    category: "Food",
    subcategory: "Restaurant",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Burger King",
    keywords: ["burger king"],
    category: "Food",
    subcategory: "Restaurant",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Domino's",
    keywords: ["dominos","domino's"],
    category: "Food",
    subcategory: "Restaurant",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Pizza Hut",
    keywords: ["pizza hut"],
    category: "Food",
    subcategory: "Restaurant",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "KFC",
    keywords: ["kfc"],
    category: "Food",
    subcategory: "Restaurant",
    transactionType: "Merchant",
    isVerified: true
  },

  // Healthcare
  {
    merchantName: "Apollo Hospital",
    keywords: ["apollo hospital"],
    category: "Healthcare",
    subcategory: "Hospital",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Fortis",
    keywords: ["fortis"],
    category: "Healthcare",
    subcategory: "Hospital",
    transactionType: "Merchant",
    isVerified: true
  },

  // Education
  {
    merchantName: "Udemy",
    keywords: ["udemy"],
    category: "Education",
    subcategory: "Online Course",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Coursera",
    keywords: ["coursera"],
    category: "Education",
    subcategory: "Online Course",
    transactionType: "Merchant",
    isVerified: true
  },

  // Banking
  {
    merchantName: "ATM Withdrawal",
    keywords: ["atm"],
    category: "Cash Withdrawal",
    subcategory: "ATM",
    transactionType: "System",
    isVerified: true
  },
  {
    merchantName: "Bank Interest",
    keywords: ["interest credit"],
    category: "Income",
    subcategory: "Bank Interest",
    transactionType: "System",
    isVerified: true
  },
  {
    merchantName: "Salary Credit",
    keywords: ["salary"],
    category: "Income",
    subcategory: "Salary",
    transactionType: "System",
    isVerified: true
  },
  {
    merchantName: "Personal Transfer",
    keywords: ["upi/", "vpa", "imps"],
    category: "Personal Payments",
    subcategory: "UPI Transfer",
    transactionType: "Person",
    isVerified: true
  },
  {
    merchantName: "NEFT Transfer",
    keywords: ["neft"],
    category: "Personal Payments",
    subcategory: "NEFT",
    transactionType: "Person",
    isVerified: true
  },
  {
    merchantName: "RTGS Transfer",
    keywords: ["rtgs"],
    category: "Personal Payments",
    subcategory: "RTGS",
    transactionType: "Person",
    isVerified: true
  },
  {
    merchantName: "Cheque Payment",
    keywords: ["cheque", "chq"],
    category: "Banking",
    subcategory: "Cheque",
    transactionType: "System",
    isVerified: true
  },
  {
    merchantName: "LIC",
    keywords: ["lic"],
    category: "Insurance",
    subcategory: "Life Insurance",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "HDFC Ergo",
    keywords: ["ergo"],
    category: "Insurance",
    subcategory: "Health Insurance",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Groww",
    keywords: ["groww"],
    category: "Investment",
    subcategory: "Stocks",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Zerodha",
    keywords: ["zerodha", "kite"],
    category: "Investment",
    subcategory: "Stocks",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "FASTag",
    keywords: ["fastag"],
    category: "Transportation",
    subcategory: "Toll",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Income Tax",
    keywords: ["income tax"],
    category: "Government",
    subcategory: "Tax",
    transactionType: "System",
    isVerified: true
  },
  {
    merchantName: "GST",
    keywords: ["gst"],
    category: "Government",
    subcategory: "Tax",
    transactionType: "System",
    isVerified: true
  },

  // Investment
  {
    merchantName: "Upstox",
    keywords: ["upstox"],
    category: "Investment",
    subcategory: "Stocks",
    transactionType: "Merchant",
    isVerified: true
  },

  // Credit Card
  {
    merchantName: "Credit Card Payment",
    keywords: ["credit card"],
    category: "Bills",
    subcategory: "Credit Card",
    transactionType: "System",
    isVerified: true
  },

  // Rent
  {
    merchantName: "Rent Payment",
    keywords: ["rent"],
    category: "Housing",
    subcategory: "Rent",
    transactionType: "Person",
    isVerified: true
  },

  // Loan
  {
    merchantName: "Loan EMI",
    keywords: ["emi", "loan"],
    category: "Loans",
    subcategory: "EMI",
    transactionType: "System",
    isVerified: true
  },

  // Airlines
  {
    merchantName: "IndiGo",
    keywords: ["indigo"],
    category: "Travel",
    subcategory: "Flight",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Air India",
    keywords: ["air india"],
    category: "Travel",
    subcategory: "Flight",
    transactionType: "Merchant",
    isVerified: true
  },

  // Hotels
  {
    merchantName: "OYO",
    keywords: ["oyo"],
    category: "Travel",
    subcategory: "Hotel",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "MakeMyTrip",
    keywords: ["makemytrip"],
    category: "Travel",
    subcategory: "Booking",
    transactionType: "Merchant",
    isVerified: true
  },

  // Cafes
  {
    merchantName: "Starbucks",
    keywords: ["starbucks"],
    category: "Food",
    subcategory: "Cafe",
    transactionType: "Merchant",
    isVerified: true
  },
  {
    merchantName: "Cafe Coffee Day",
    keywords: ["ccd", "cafe coffee day"],
    category: "Food",
    subcategory: "Cafe",
    transactionType: "Merchant",
    isVerified: true
  },

  {
    merchantName: "Unknown Merchant",
    keywords: [],
    category: "Others",
    subcategory: "Uncategorized",
    transactionType: "Unknown",
    isVerified: false,
}
];