import React from 'react';

// Utility function to truncate long descriptions (if needed for other purposes)
const truncateDescription = (text, maxWords = 10) => {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + " ...";
  }
  return text;
};

const MouseDetails = ({ mouse }) => {
  return (
    // <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
    <div>
      {/* Mouse Image */}
      <img
        src={mouse.imageUrl}
        alt={mouse.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className='flex justify-center items-center'>
        <h2 className="text-xl mb-2 underline text-purple-700">{mouse.code}</h2>
      </div>

      {/* Mouse Name */}
      <h2 className="text-xl font-semibold mb-2 text-blue-600">{mouse.name}</h2>

      {/* Mouse Description (Truncated to 2 lines) */}
      <p className="text-gray-600 mb-4 line-clamp-2">
        {mouse.description}
      </p>

      {/* Mouse Price */}
      <p className="text-gray-800 font-bold mb-4"><strong>Price: $</strong>{mouse.priceRange}</p>

      {/* Mouse Type */}
      <p className="text-gray-600 mb-2">
        <strong>Type:</strong> {mouse.type}
      </p>

      {/* Mouse Features */}
      <p className="text-gray-600 mb-2">
        <strong>Features:</strong> {mouse.features}
      </p>
    </div>
  );
};

export default MouseDetails;
