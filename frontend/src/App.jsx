import React from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { api } from "./api";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

export default function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  useEffect(() => { fetchUsers(); }, []);

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">MERN CRUD Example 🚀</h1>
      <UserForm fetchUsers={fetchUsers} />
      <UserList users={users} fetchUsers={fetchUsers} />
    </div>
  );
}
