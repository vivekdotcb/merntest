import React, { useState, useEffect } from "react";
import { api } from "../api";

const Users = () => {
  const [users, setUsers] = useState([]);

  // New User Form Data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "User",
  });

  // Fetch Users from API
  const fetchUsers = async () => {
    try {
      const res = await api.get("/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Form Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add User Function
  const handleAddUser = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill all fields!");
      return;
    }

    try {
      await api.post("/users", formData);
      fetchUsers(); // refresh list
      setFormData({ name: "", email: "", role: "User" });
    } catch (err) {
      console.error("Error adding user:", err);
    }
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
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user._id} className="border-t hover:bg-gray-100">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">
                  <button
                    onClick={async () => {
                      if (window.confirm("Delete this user?")) {
                        await api.delete(`/users/${user._id}`);
                        fetchUsers();
                      }
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-3 text-gray-500">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
