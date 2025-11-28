import React from "react";

const TransactionItem = ({ transaction, deleteTransaction }) => {
  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      {transaction.text} <span>${transaction.amount}</span>
      <button onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  );
};

export default TransactionItem;
