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
      

      <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
            <tr>
              <th scope="row">1</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age} yrs</td>
              <td><button className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => deleteUser(user._id)}
            >
              Delete
            </button></td>

            </tr>
            ))}
           
          </tbody>
        </table>

      
    </div>
  );
}
