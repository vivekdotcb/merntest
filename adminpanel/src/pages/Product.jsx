import React, { useState } from "react";

const Users = () => {
  // Default Users List
  

 
 

  

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users List</h2>

      {/* Add User Form */}
      <form
       
        className="bg-white shadow-md p-4 rounded mb-6"
      >
        <h3 className="text-xl font-semibold mb-3">Add New User</h3>
        <div className="grid grid-cols-3 gap-4">
          <input type="text" name="name" placeholder="Full Name"
           
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
           
            className="border p-2 rounded"
          />
          <select
            name="role"
            
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
          
            <tr  className="border-t hover:bg-gray-100">
              <td className="p-3"></td>
              <td className="p-3"></td>
              <td className="p-3"></td>
              <td className="p-3"></td>
            </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default Users;
