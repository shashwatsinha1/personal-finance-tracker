import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ transactions }) => {
  const income = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + Number(t.amount), 0);
  const expense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + Number(t.amount), 0);

  const data = {
    labels: ['Income', 'Expense'],
    datasets: [{
      data: [income, expense],
      backgroundColor: ['#4CAF50', '#F44336'],
      hoverBackgroundColor: ['#45a049', '#d32f2f']
    }]
  };

  return <div style={{maxWidth:'400px', margin:'20px auto'}}><Pie data={data} /></div>;
};

export default PieChart;
