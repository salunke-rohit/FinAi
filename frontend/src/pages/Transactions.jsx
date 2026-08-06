import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRecentTransactions } from "../services/transactionService";

function Transactions() {
  const navigate = useNavigate();

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const data = await getRecentTransactions();
      setTransactions(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="transactions-page">

      <div className="transactions-header">

        <h1>Recent Transactions</h1>

        <button
          className="btn"
          onClick={() => navigate("/home")}
        >
          ← Back
        </button>

      </div>

      <div className="table-wrapper">

        <table className="transaction-table">

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

            {transactions.length === 0 ? (

              <tr>

                <td colSpan="5" className="empty-row">
                  No Transactions Found
                </td>

              </tr>

            ) : (

              transactions.map((item) => (

                <tr key={item._id}>

                  <td>
                    {new Date(item.date).toLocaleDateString()}
                  </td>

                  <td>{item.description}</td>

                  <td>{item.category}</td>

                  <td>

                    <span
                      className={
                        item.transactionType === "Income"
                          ? "income"
                          : "expense"
                      }
                    >
                      {item.transactionType}
                    </span>

                  </td>

                  <td className="amount">

                    ₹ {item.amount.toLocaleString()}

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Transactions;