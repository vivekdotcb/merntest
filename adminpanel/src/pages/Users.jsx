import React, { useState } from "react";

const Users = () => {
  // Default Users List
  const [users, setUsers] = useState([
    { id: 1, name: "Amit Sharma", email: "amit@example.com", role: "Admin" },
    { id: 2, name: "Priya Singh", email: "priya@example.com", role: "Editor" },
    { id: 3, name: "Ravi Kumar", email: "ravi@example.com", role: "User" },
  ]);

  // New User Form Data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "User",
  });

  // Form Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Add User Function
  const handleAddUser = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill all fields!");
      return;
    }
    const newUser = {
      id: users.length + 1,
      ...formData,
    };
    setUsers([...users, newUser]);
    setFormData({ name: "", email: "", role: "User" }); // Reset Form
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users List</h2>

      {/* Add User Form */}
      <form
        onSubmit={handleAddUser}
        className="bg-white shadow-md p-4 rounded mb-6"
      >
        <h3 className="text-xl font-semibold mb-3">Add New User</h3>
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option>User</option>
            <option>Editor</option>
            <option>Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          ➕ Add User
        </button>
      </form>

      {/* Users Table */}
      <table className="w-full bg-white shadow-md rounded border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t hover:bg-gray-100">
              <td className="p-3">{user.id}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
