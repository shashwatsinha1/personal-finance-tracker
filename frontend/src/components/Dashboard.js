import React from "react";

const Dashboard = ({ transactions }) => {
    const income = transactions
        .filter(t => t.type === 'income')
        .reduce((acc, t) => acc + Number(t.amount), 0);  // <-- ensure Number()

    const expense = transactions
        .filter(t => t.type === 'expense')
        .reduce((acc, t) => acc + Number(t.amount), 0);

    const balance = income - expense;

    return (
        <div className="dashboard" style={{display:'flex', justifyContent:'space-around', marginBottom:'20px'}}>
            <div style={{color:'green'}}>Income: ${income}</div>
            <div style={{color:'red'}}>Expense: ${expense}</div>
            <div>Balance: ${balance}</div>
        </div>
    );
};

export default Dashboard;
