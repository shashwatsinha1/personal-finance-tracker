import Transaction from "../models/Transaction.js";

export const addTransaction = async (req, res) => {
  try {
    const newTransaction = await Transaction.create({
      userId: req.user,
      ...req.body
    });

    res.json({ message: "Transaction added", data: newTransaction });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user }).sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
