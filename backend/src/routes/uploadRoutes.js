import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadStatement } from "../controllers/uploadController.js";

const router = express.Router();

router.post(
  "/",
  upload.single("statement"),
  uploadStatement
);

export default router;