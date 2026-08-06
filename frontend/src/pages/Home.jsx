import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import UploadBox from "../components/UploadBox";
import SummaryCards from "../components/SummaryCards";
import RecentTransactions from "../components/RecentTransactions";
import CategoryPieChart from "../components/CategoryPieChart";
import MonthlyBarChart from "../components/MonthlyBarChart";

import { getDashboardSummary } from "../services/dashboardService";
import { getRecentTransactions } from "../services/transactionService";

function Home() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const [summary, setSummary] = useState({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
    totalTransactions: 0,
  });

  const [showTransactions, setShowTransactions] = useState(false);

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    try {
      const data = await getDashboardSummary();

      setSummary({
        totalIncome: data.totalIncome,
        totalExpense: data.totalExpense,
        balance: data.balance,
        totalTransactions: data.totalTransactions,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewTransactions = async () => {
    if (showTransactions) {
      setShowTransactions(false);
      return;
    }

    try {
      const data = await getRecentTransactions();

      setTransactions(data);

      setShowTransactions(true);
    } catch (error) {
      console.log(error);

      alert("Failed to load transactions.");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="home">
      {/* Header */}

      <div
        className="home-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        {/* No fixed px width / no window.innerWidth check — let it flow
            naturally so it never overflows on phones or tablets. */}
        <div style={{ width: "100%", maxWidth: "1000px" }}>
          <h1 style={{ color: "#2563eb" }}>Welcome, {user?.name} 🪽</h1>
          <br />

          <p>Upload your bank statement and analyze your finances.</p>
        </div>
      </div>

      {/* Upload Box */}

      <section className="section">
        <UploadBox />
      </section>

      {/* Summary Cards */}

      <section className="section">
        <SummaryCards summary={summary} />
      </section>

      {/* pie chart */}
      <section className="section">
        <CategoryPieChart />
      </section>

      {/* bar chart */}
      <section className="section">
        <MonthlyBarChart />
      </section>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {/* Recent Transactions */}

        <div
          onClick={() => navigate("/transactions")}
          style={{
            flex: "1 1 320px",
            maxWidth: "500px",
            minWidth: "280px",
            background: "#fff",
            borderRadius: "16px",
            padding: "25px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textAlign: "center",
            border: "1px solid #e5e7eb",
          }}
        >
          <div style={{ fontSize: "40px" }}>📋</div>

          <h3 style={{ marginTop: "15px", color: "#1e3a8a" }}>
            Recent Transactions
          </h3>
        </div>

        {/* FinAI Suggestions */}

        <div
          onClick={() => navigate("/finai-report")}
          style={{
            flex: "1 1 320px",
            maxWidth: "500px",
            minWidth: "280px",
            background: "#fff",
            borderRadius: "16px",
            padding: "25px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textAlign: "center",
            border: "1px solid #e5e7eb",
          }}
        >
          <div style={{ fontSize: "40px" }}>🤖</div>

          <h3 style={{ marginTop: "15px", color: "#1e3a8a" }}>
            FinAI Suggestions
          </h3>
        </div>
      </div>
      <br />
      <br />

      {/* Was width: "1000px" inline (overriding .btn's width:100% and
          forcing horizontal scroll on anything under 1000px wide).
          Removed so the .btn class's responsive width:100% applies,
          capped so it doesn't stretch edge-to-edge on large desktops. */}
      <button
        className="btn"
        style={{ maxWidth: "1000px", width: "100%", color: "red" }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;