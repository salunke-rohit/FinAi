import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getDashboardSummary, getCategorySummary, getMonthlySummary, getRecentTransactions} from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/summary", authMiddleware, getDashboardSummary);
router.get("/category", authMiddleware, getCategorySummary);
router.get("/monthly", authMiddleware, getMonthlySummary);
router.get("/recent", authMiddleware, getRecentTransactions);

export default router;