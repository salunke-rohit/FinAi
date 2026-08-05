function SummaryCards({ summary }) {
  return (
    <div className="summary-grid">

      <div className="summary-card">
        <h3>Total Income</h3>
        <h2>₹ {summary.totalIncome}</h2>
      </div>

      <div className="summary-card">
        <h3>Total Expense</h3>
        <h2>₹ {summary.totalExpense}</h2>
      </div>

      <div className="summary-card">
        <h3>Balance</h3>
        <h2>₹ {summary.balance.toFixed(2)}</h2>
      </div>

      <div className="summary-card">
        <h3>Transactions</h3>
        <h2>{summary.totalTransactions}</h2>
      </div>

    </div>
  );
}

export default SummaryCards;