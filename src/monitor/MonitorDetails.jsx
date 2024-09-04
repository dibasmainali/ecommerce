// src/components/MonitorDetails.jsx

import React from 'react';

const MonitorDetails = ({ monitor }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={monitor.imageUrl} alt={monitor.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{monitor.name}</h2>
        <p className="text-gray-600 mb-2">{monitor.description}</p>
        <p className="text-gray-800 font-bold mb-2">{monitor.priceRange}</p>
        <div className="text-gray-600 mb-2">
          <p><strong>Screen Size:</strong> {monitor.screenSize}</p>
          <p><strong>Resolution:</strong> {monitor.resolution}</p>
          <p><strong>Panel Type:</strong> {monitor.panelType}</p>
        </div>
      </div>
    </div>
  );
};

export default MonitorDetails;
