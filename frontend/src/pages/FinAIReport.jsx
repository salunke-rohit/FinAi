import { useNavigate } from "react-router-dom";

function FinAIReport() {
  const navigate = useNavigate();

  return (
    <div className="finai-report-page">

      {/* Header */}

      <div className="report-header">
        <button
          className="btn"
          onClick={() => navigate("/home")}
        >
          ← Back
        </button>

        <div>
          <h1>🤖 FinAI Financial Report</h1>
          <p>
            AI-powered financial insights based on your uploaded bank statements.
          </p>
        </div>
      </div>

      {/* FinAI Advice */}

      <div className="report-card">
        <h2>🧠 FinAI Advice</h2>

        <p>
          Your AI financial advice will appear here...
        </p>
      </div>

      {/* Monthly Trends */}

      <div className="report-card">
        <h2>📈 Monthly Trends</h2>

        <p>
          Monthly trends will appear here...
        </p>
      </div>

      {/* Personalized Suggestions */}

      <div className="report-card">
        <h2>💡 Personalized Suggestions</h2>

        <p>
          Personalized suggestions will appear here...
        </p>
      </div>

      {/* Need Action */}

      <div className="report-card">
        <h2>⚠ Need Action</h2>

        <p>
          Important alerts will appear here...
        </p>
      </div>

    </div>
  );
}

export default FinAIReport;