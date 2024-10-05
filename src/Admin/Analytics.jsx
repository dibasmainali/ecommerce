import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Analytics
 = () => {
  const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales Over Time',
        data: [120, 190, 300, 500, 230, 340],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
  const CostomerData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales Over Time',
        data: [1200, 1900, 2000, 2200, 3000, 5000],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };



  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Analytics
        
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Total Sales */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">TOTAL SALES</h3>
          <p className="text-2xl">$12,345</p>
        </div>
        {/* Total Products */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">TOTAL PRODUCTS</h3>
          <p className="text-2xl">150</p>
        </div>
        {/* New Customers */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">NEW CUSTOMERS</h3>
          <p className="text-2xl">45</p>
        </div>
        {/* Total Orders */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">TOTAL ORDERS</h3>
          <p className="text-2xl">320</p>
        </div>
        {/* Pending Orders */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">PENDING ORDERS</h3>
          <p className="text-2xl">12</p>
        </div>
        {/* Issues */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">ISSUES</h3>
          <p className="text-2xl">5</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sales Graph */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Sales Over Time</h3>
          <Line data={salesData} />
        </div>
        
        {/* Customer Growth Graph */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Customer Growth</h3>
          <Line data={CostomerData} />
        </div>
      </div>
    </div>
  );
};

export default Analytics
;
