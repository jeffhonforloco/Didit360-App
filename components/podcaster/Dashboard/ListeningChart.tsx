```typescript
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { usePodcasterAnalytics } from '../../../hooks/usePodcasterAnalytics';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export function ListeningChart() {
  const { data, isLoading } = usePodcasterAnalytics();

  const chartData = {
    labels: data.labels,
    datasets: [{
      label: 'Listening Analytics',
      data: data.values,
      borderColor: '#22C55E',
      backgroundColor: 'rgba(34, 197, 94, 0.1)',
      fill: true,
      tension: 0.4
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1E1E1E',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 12,
        displayColors: false
      }
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

  if (isLoading) {
    return <div className="h-64 bg-[#2E2E2E] rounded-lg animate-pulse" />;
  }

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
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
```