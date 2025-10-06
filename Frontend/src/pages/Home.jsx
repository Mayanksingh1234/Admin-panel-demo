import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome, {user?.name}</h1>
      <p className="text-gray-700">This is your dashboard overview.</p>
    </div>
  );
}
