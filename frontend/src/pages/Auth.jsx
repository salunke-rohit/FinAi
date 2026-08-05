import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    let response;

    if (isLogin) {
      response = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      // Save user and token using AuthContext
      login(response.data.user, response.data.token);

      navigate("/home");
    } else {
      response = await api.post("/auth/register", formData);

      alert(response.data.message);

      setIsLogin(true);

      setFormData({
        name: "",
        email: "",
        password: "",
      });
    }
  } catch (error) {
    alert(error.response?.data?.message || "Something went wrong");
  }
};

  return (
    <div className="center-screen">
      <div className="card">
        {/* Logo */}
        <h1 className="logo">FinAI 🐳</h1>

        <p className="subtitle">Personal Finance Tracker</p>

        {/* Heading */}
        <h2 className="heading" style={{ color: "#000000" }}>
  {isLogin ? "Login" : "Create Account"}
</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Field (Signup Only) */}
          {!isLogin && (
            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>
          )}

          {/* Email */}
          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          {/* Button */}
          <button type="submit" className="btn">
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        {/* Toggle */}
        <p className="auth-switch">
          {isLogin ? "Don't have an account? " : "Already have an account? "}

          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Auth;
