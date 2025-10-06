import React, { useEffect, useState } from "react";
import API from "../utils/api";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const load = async () => {
    const { data } = await API.get("/users");
    setUsers(data);
  };
  useEffect(() => { load(); }, []);

  const del = async (id) => {
    if (confirm("Delete user?")) {
      await API.delete(`/users/${id}`);
      load();
    }
  };

  return (
    <div className="bg-white p-4 shadow rounded flex-1 min-w-[400px]">
      <h3 className="font-semibold mb-2">Users</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b text-left">
            <th>Name</th><th>Email</th><th>Role</th><th></th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id} className="border-b">
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td><button onClick={()=>del(u._id)} className="text-red-600">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
