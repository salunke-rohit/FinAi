import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Welcome {user?.name} 👋</h1>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Home;