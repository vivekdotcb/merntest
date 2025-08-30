import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-14 bg-blue-600 text-white flex items-center justify-between px-6 shadow-md">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      <div className="flex items-center space-x-4">
        <span className="cursor-pointer">🔔</span>
        <span className="cursor-pointer">👤</span>
      </div>
    </div>
  );
};

export default Navbar;
