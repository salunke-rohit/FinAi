import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import UploadBox from "../components/UploadBox";
import SummaryCards from "../components/SummaryCards";
import Charts from "../components/Charts";
import Insights from "../components/Insights";

function Home() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="home">

      {/* Header */}

      <div className="home-header">

        <div>
          <h1>Welcome, {user?.name} 👋</h1>

          <p>
            Upload your bank statement and analyze your finances.
          </p>
        </div>


      </div>

      {/* Upload */}

      <section className="section">
        <UploadBox />
      </section>

      {/* Summary */}

      <section className="section">
        <SummaryCards />
      </section>

      {/* Charts */}

      <section className="section">
        <Charts />
      </section>

      {/* AI */}

      <section className="section">
        <Insights />
      </section>

      <button className="btn" onClick={handleLogout}>
          Logout
        </button>

    </div>
  );
}

export default Home;