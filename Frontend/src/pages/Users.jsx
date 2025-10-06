import React, { useEffect, useState } from "react";
import API from "../utils/api";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await API.get("/users", { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>
      <table className="w-full border-collapse border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-3 py-2">Name</th>
            <th className="border px-3 py-2">Email</th>
            <th className="border px-3 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u,i)=>(
            <tr key={i} className="hover:bg-gray-100">
              <td className="border px-3 py-2">{u.name}</td>
              <td className="border px-3 py-2">{u.email}</td>
              <td className="border px-3 py-2">{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
