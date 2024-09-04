// src/components/KeyboardDetails.jsx

import React from 'react';

const MouseDetails = ({ mouse }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={mouse.imageUrl} alt={mouse.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold mb-2">{mouse.name}</h2>
      <p className="text-gray-600 mb-2">{mouse.description}</p>
      <p className="text-gray-800 font-bold mb-2">{mouse.priceRange}</p>
      <p className="text-gray-600 mb-2"><strong>Type:</strong> {mouse.type}</p>
      <p className="text-gray-600 mb-2"><strong>Features:</strong> {mouse.features}</p>
    </div>
  );
};

export default MouseDetails;
