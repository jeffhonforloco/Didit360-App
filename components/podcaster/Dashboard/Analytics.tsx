import React from 'react';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Analytics() {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Listening Analytics',
      data: [89935, 23283.5, 46827, 124854, 98765, 78543],
      backgroundColor: '#22C55E',
    }]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: '#2E2E2E' },
        ticks: { color: '#9CA3AF' }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#9CA3AF' }
      }
    }
  };

  return (
    <div className="bg-[#1E1E1E] rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Listening Analytics</h2>
        <div className="flex space-x-4">
          <button className="text-gray-400 hover:text-white">Monthly</button>
          <button className="text-gray-400 hover:text-white">Features</button>
          <button className="text-gray-400 hover:text-white">Settings</button>
        </div>
      </div>
      <div className="h-64">
        <Chart type="bar" data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}