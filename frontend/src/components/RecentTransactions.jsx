function RecentTransactions({ transactions }) {
  return (
    <div className="recent-transactions">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>
                {new Date(transaction.date).toLocaleDateString()}
              </td>

              <td>{transaction.description}</td>

              <td>{transaction.category}</td>

              <td>{transaction.transactionType}</td>

              <td>₹ {transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentTransactions;