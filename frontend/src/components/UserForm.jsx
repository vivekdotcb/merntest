import React from 'react' 
import { useState } from "react";
import { api } from "../api";

export default function UserForm({ fetchUsers }) {
  const [form, setForm] = useState({ name: "", email: "", age: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/users", form);
    setForm({ name: "", email: "", age: "" });
    fetchUsers();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 border rounded">
      <input className="border p-2 w-full"
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <input className="border p-2 w-full"
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
      />
      <input className="border p-2 w-full"
        placeholder="Age"
        value={form.age}
        onChange={e => setForm({ ...form, age: e.target.value })}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
        Add User
      </button>
    </form>
  );
}
