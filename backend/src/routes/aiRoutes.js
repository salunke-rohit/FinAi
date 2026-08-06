import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getFinancialSummary } from "../controllers/aiController.js";

const router = express.Router();

// =====================================
// Test Route
// =====================================

router.get("/test", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "🤖 AI Route Working Successfully",
  });
});

// =====================================
// AI Financial Summary
// =====================================

router.get(
  "/summary",
  authMiddleware,
  getFinancialSummary
);

export default router;