import React from 'react';

// Utility function to truncate long descriptions
const truncateDescription = (text, maxWords = 10) => {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + " ...";
  }
  return text;
};

const KeyboardDetails = ({ keyboard }) => {
  return (
    // <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
    <div>
      {/* Product Image */}
      <img
        src={keyboard.imageUrl}
        alt={keyboard.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      
      <div className='flex justify-center items-center'>
        <h2 className="text-xl mb-2 underline text-purple-700">{keyboard.code}</h2>
      </div>
      
      {/* Product Name */}
      <h2 className="text-xl font-semibold mb-2 text-blue-600">{keyboard.name}</h2>
      
      {/* Truncated Description */}
      <p className="text-gray-600 mb-4 line-clamp-2">
        {keyboard.description}
      </p>
      {/* Price */}
      <p className="text-gray-800 font-bold mb-4">
        <strong>Price:</strong> ${keyboard.priceRange}
      </p>
      
      {/* Type and Features */}
      <p className="text-gray-600 mb-2">
          <strong>Type:</strong> {keyboard.type}
        </p> 
        <p className="text-gray-600 mb-2">
        <strong>Features:</strong> {keyboard.features}
        </p>
    </div>
  );
};

export default KeyboardDetails;
