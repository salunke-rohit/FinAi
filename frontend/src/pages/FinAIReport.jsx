import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FinAIReport() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [summary, setSummary] = useState(null);
  const [report, setReport] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:5000/api/ai/summary",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setSummary(response.data.financialSummary);
        setReport(response.data.aiReport);
      } catch (err) {
        console.log(err);
        setError("Failed to load AI Report");
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        Loading FinAI Report...
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading">
        {error}
      </div>
    );
  }

  return (
    <div className="finai-report-page">

      {/* Header */}

      <div className="report-header">

        <button
          className="back-btn"
          onClick={() => navigate("/home")}
        >
          ← Back
        </button>

        <div>

          <h1>🤖 FinAI Financial Report</h1>

          <p>
            AI Powered Personal Financial Analysis
          </p>

        </div>

      </div>

      {/* Health Score */}

      <div className="report-card">

        <h2>🏆 Financial Health Score</h2>

        <div className="health-score">

          {report.healthScore}/100

        </div>

      </div>

      {/* Summary */}

      <div className="report-card">

        <h2>📋 Overall Summary</h2>

        <p>{report.summary}</p>

      </div>

      {/* Financial Overview */}

      <div className="report-card">

        <h2>💰 Financial Overview</h2>

        <div className="summary-grid">

          <div className="summary-item">

            <h3>Total <br /> Income</h3>

            <span>₹{summary.totalIncome}</span>

          </div>

          <div className="summary-item">

            <h3>Total Expense</h3>

            <span>₹{summary.totalExpense}</span>

          </div>

          <div className="summary-item">

            <h3>Balance</h3>

            <span>₹{summary.balance}</span>

          </div>

          <div className="summary-item">

            <h3>Savings Rate</h3>

            <span>{summary.savingsRate}%</span>

          </div>

        </div>

      </div>

      {/* Strengths */}

      <div className="report-card">

        <h2>✅ Strengths</h2>

        <ul>

          {report.strengths.map((item, index) => (

            <li key={index}>{item}</li>

          ))}

        </ul>

      </div>

      {/* Needs Attention */}

      <div className="report-card">

        <h2>⚠ Needs Attention</h2>

        <ul>

          {report.needsAttention.map((item, index) => (

            <li key={index}>{item}</li>

          ))}

        </ul>

      </div>

      {/* Suggestions */}

      <div className="report-card">

        <h2>💡 Personalized Suggestions</h2>

        <ul>

          {report.personalizedSuggestions.map((item, index) => (

            <li key={index}>{item}</li>

          ))}

        </ul>

      </div>

      {/* One Action */}

      <div className="report-card">

        <h2>🎯 One Action</h2>

        <p>{report.oneAction}</p>

      </div>

      {/* Estimated Savings */}

      <div className="report-card">

        <h2>💵 Estimated Monthly Savings</h2>

        <h3>

          ₹{report.estimatedSavings}

        </h3>

      </div>

    </div>
  );
}

export default FinAIReport;