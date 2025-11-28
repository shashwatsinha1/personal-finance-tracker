import React, { useState, useEffect } from "react";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import Dashboard from "./components/Dashboard";
import PieChart from './components/PieChart';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState(() => {
    // Load transactions from localStorage on initial render
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  // Update localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="App">
      <h1>Personal Finance Tracker</h1>
      <Dashboard transactions={transactions} />
      <AddTransaction addTransaction={addTransaction} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
      <PieChart transactions={transactions} />
    </div>
  );
}

export default App;
