import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("🚀 FinAI Backend is Running...");
});

export default app;