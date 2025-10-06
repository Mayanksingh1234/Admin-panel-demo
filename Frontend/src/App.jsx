import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/users" element={<ProtectedRoute role="admin"><Users /></ProtectedRoute>} />
      <Route path="/analytics" element={<ProtectedRoute role="admin"><Analytics /></ProtectedRoute>} />
      <Route path="/settings" element={<div className="font-bold flex justify-center items-center h-screen">Settings Page (Coming Soon)</div>} />
    </Routes>
  );
}

export default App;
