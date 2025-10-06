import React, { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Analytics from "./Analytics";
import Users from "./Users";
import Home from "./Home";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <button
          onClick={() => navigate("/")}
          className="block w-full py-2 mb-2 text-left hover:bg-gray-200 rounded"
        >
          Dashboard
        </button>
        {user.role === "admin" && (
          <>
            <button
              onClick={() => navigate("/analytics")}
              className="block w-full py-2 mb-2 text-left hover:bg-gray-200 rounded"
            >
              Analytics
            </button>
            <button
              onClick={() => navigate("/users")}
              className="block w-full py-2 mb-2 text-left hover:bg-gray-200 rounded"
            >
              Users
            </button>
            <button
              onClick={() => navigate("/settings")}
              className="block w-full py-2 mb-2 text-left hover:bg-gray-200 rounded"
            >
              Settings
            </button>
          </>
        )}
        <button
          onClick={logout}
          className="block w-full py-2 mt-auto text-left bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<div>Settings Page (Coming Soon)</div>} />
        </Routes>
      </div>
    </div>
  );
}
