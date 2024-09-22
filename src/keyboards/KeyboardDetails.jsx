import React from 'react';

const KeyboardDetails = ({ keyboard }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={keyboard.imageUrl} alt={keyboard.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold mb-2">{keyboard.name}</h2>
      <p className="text-gray-600 mb-2">{keyboard.description}</p>
      <p className="text-gray-800 font-bold mb-2">{keyboard.priceRange}</p>
      <p className="text-gray-600 mb-2"><strong>Type:</strong> {keyboard.type}</p>
      <p className="text-gray-600 mb-2" ><strong>Features:</strong> {keyboard.features}</p>
    </div>
  );
};

export default KeyboardDetails;
