import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Charts({ data }) {
  const formatted = data.map(d => ({ name: d.month, users: d.users }));
  return (
    <div className="bg-white p-4 shadow rounded flex-1 min-w-[400px]">
      <h3 className="font-semibold mb-2">User Growth</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={formatted}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="users" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
