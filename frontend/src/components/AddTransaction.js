import React, { useState } from "react";

const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
  e.preventDefault();
  if(!text || !amount) return;

  addTransaction({ 
    id: Date.now(), 
    text, 
    amount: Number(amount),  // <-- convert to number
    type 
  });

  setText('');
  setAmount('');
};


  return (
    <form onSubmit={handleSubmit} style={{marginBottom:'20px'}}>
      <input 
        type="text" 
        placeholder="Description" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit" style={{backgroundColor:'#4CAF50', color:'#fff', border:'none'}}>Add</button>
    </form>
  );
};

export default AddTransaction;
