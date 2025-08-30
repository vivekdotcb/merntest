import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">Hotel</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="block hover:bg-gray-700 p-2 rounded">
            🏠 Dashboard
          </Link>
        </li>
        <li>
          <Link to="/product" className="block hover:bg-gray-700 p-2 rounded">
            👥 Product
          </Link>
        </li>
        <li>
          <Link to="/users" className="block hover:bg-gray-700 p-2 rounded">
            👥 Users
          </Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">📊 Reports</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">⚙️ Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
