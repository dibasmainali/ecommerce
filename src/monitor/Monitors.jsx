// src/components/Monitors.jsx

import React from 'react';
import MonitorDetails from './MonitorDetails';
import product from '../apis/MonitorApis'; // Adjust the path as needed
import Breadcrumb from '../component/Breadcrumb';

const Monitors = () => {
  return (
    <div className="container mx-auto p-6">
      <Breadcrumb/>
      <h1 className="text-3xl font-bold mb-8 text-center">Monitors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {product.map(monitor => (
          <MonitorDetails key={monitor.id} monitor={monitor} />
        ))}
      </div>
    </div>
  );
};

export default Monitors;
