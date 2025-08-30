import React from 'react' 
import { api } from "../api";

export default function UserList({ users, fetchUsers }) {
  const deleteUser = async (id) => {
    await api.delete(`/users/${id}`);
    fetchUsers();
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold text-danger">User List</h2>
      {/* <ul className="space-y-2">
        {users.map(user => (
          <li key={user._id} className="flex justify-between p-2 border rounded">
            <span>{user.name} ({user.email}) - {user.age} yrs</span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => deleteUser(user._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul> */}

      <div className='text-danger'>hii</div>
    </div>
  );
}
