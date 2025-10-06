import React from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Analytics() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sign-ups",
        data: [12, 19, 8, 14, 10],
        backgroundColor: "rgba(59, 130, 246, 0.7)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "User Sign-ups" },
    },
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <div className="bg-white p-6 rounded shadow">
        <Chart type="bar" data={data} options={options} />
      </div>
    </div>
  );
}
