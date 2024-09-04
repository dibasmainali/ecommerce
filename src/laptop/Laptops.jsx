import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Apis from "../apis/LaptopApi.jsx"; // Correct path to import the laptop data

const Laptops = () => {
  const [laptopData, setLaptopData] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to manage showing all laptops

  useEffect(() => {
    setLaptopData(Apis); // Set the laptop data from apis.jsx
  }, []);

  const displayedLaptops = showAll ? laptopData : laptopData.slice(0, 6); // Determine laptops to display

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-32 mt-16 bg-white">
        {displayedLaptops.map((laptop) => (
          <div key={laptop.id} className="border p-4 rounded-lg shadow-lg">
            <img
              src={laptop.imageUrl}
              alt={laptop.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{laptop.name}</h2>
            <ul>
              <li>
                <strong>Price Range:</strong> {laptop.priceRange}
              </li>
              <li>
                <strong>Screen Size:</strong> {laptop.screenSize}
              </li>
              <li>
                <strong>Storage Capacity:</strong> {laptop.storageCapacity}
              </li>
              <li>
                <strong>Processor:</strong> {laptop.processor}
              </li>
              <div className="flex justify-between">
                <button className="mt-4 bg-orange-300 hover:bg-orange-400 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
                  Add to Cart
                </button>
                <button className=" flex items-end  justify-end mt-4 text-black px-4 py-2 underline rounded-lg  border-2">
                  <Link to={`/details/${laptop.id}`}>Details</Link>
                </button>
              </div>
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-orange-700 text-white px-4 py-2 rounded"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default Laptops;
