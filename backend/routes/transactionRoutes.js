import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { addTransaction, getTransactions } from "../controllers/transactionController.js";

const router = express.Router();

router.post("/add", authMiddleware, addTransaction);
router.get("/all", authMiddleware, getTransactions);

export default router;