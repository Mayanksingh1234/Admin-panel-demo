import React from "react";

export default function DashboardCards({ overview }) {
  if (!overview) return null;
  return (
    <div className="flex gap-4 mt-4">
      {[
        { label: "Total Users", value: overview.totalUsers },
        { label: "Active (7d)", value: overview.activeUsers },
        { label: "Total Sales", value: "₹" + overview.totalSales },
      ].map((card) => (
        <div key={card.label} className="bg-white shadow p-4 rounded w-40 text-center">
          <p className="text-gray-600 text-sm">{card.label}</p>
          <p className="text-xl font-semibold mt-1">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
