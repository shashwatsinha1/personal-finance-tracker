import React from "react";
import TransactionItem from "./TransactionItem";

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div>
      {transactions.map(t => (
        <div key={t.id} 
             className={`transaction ${t.type}`} 
             style={{
               display:'flex', 
               justifyContent:'space-between', 
               padding:'10px', 
               borderBottom:'1px solid #ddd',
               color: t.type === 'income' ? 'green' : 'red'
             }}>
          <span>{t.text}</span>
          <span>${t.amount}</span>
          <button onClick={() => deleteTransaction(t.id)} style={{color:'white', backgroundColor:'red', border:'none', borderRadius:'5px'}}>Delete</button>
        </div>
      ))}
    </div>
  );
};


export default TransactionList;
