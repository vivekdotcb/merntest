import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-4 rounded">Card 1</div>
        <div className="bg-white shadow-md p-4 rounded">Card 2</div>
        <div className="bg-white shadow-md p-4 rounded">Card 3</div>
      </div>
    </div>
  );
};

export default Dashboard;
