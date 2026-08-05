import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getRecentTransactions } from "../services/transactionService";

function Transactions() {
  const navigate = useNavigate();

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const data = await getRecentTransactions();

    setTransactions(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1>Recent Transactions</h1>

        <button
          className="btn" style={{ width: "700px" }}
          onClick={() => navigate("/home")}
        >
          ← Back
        </button>
      </div>

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

          {transactions.map((item) => (

            <tr key={item._id}>

              <td>
                {new Date(item.date).toLocaleDateString()}
              </td>

              <td>{item.description}</td>

              <td>{item.category}</td>

              <td>{item.transactionType}</td>

              <td>₹ {item.amount}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Transactions;