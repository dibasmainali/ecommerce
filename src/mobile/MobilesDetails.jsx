import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MobileApis from "../apis/MobileApis.jsx"; // Correct path to import the mobile data
import Breadcrumb from "../component/Breadcrumb.jsx";
import { FaSpinner } from "react-icons/fa"; // Import a spinner icon

const MobilesDetails = () => {
  const { name } = useParams(); // Get the mobile name from the URL
  const [mobileDetails, setMobileDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the mobile that matches the name from the URL
    const decodedName = name.replace(/-/g, ' ');
    const selectedMobile = MobileApis.find(
      (mobile) => mobile.name.toLowerCase() === decodedName.toLowerCase()
    );
    if (selectedMobile) {
      setMobileDetails(selectedMobile);
    } else {
      console.error("Mobile not found.");
    }
    setLoading(false);
  }, [name]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-gray-500" />
      </div>
    );
  }

  if (!mobileDetails) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">Mobile not found.</p>
      </div>
    );
  }

  return (
    <div>
      <Breadcrumb />
      <div className="mx-4 md:mx-32 mt-16 bg-white p-8 border rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          <img
            src={mobileDetails.imageUrl}
            alt={mobileDetails.name}
            className="w-full md:w-1/2 h-64 object-cover mb-4 md:mb-0 rounded-lg"
          />
          <div className="md:ml-8">
            <h2 className="text-2xl font-bold mb-4">{mobileDetails.name}</h2>
            <ul className="mb-4 space-y-2">
              <li>
                <strong>Price Range:</strong> {mobileDetails.priceRange}
              </li>
              <li>
                <strong>Screen Size:</strong> {mobileDetails.screenSize}
              </li>
              <li>
                <strong>Storage Capacity:</strong> {mobileDetails.storageCapacity}
              </li>
              <li>
                <strong>Processor:</strong> {mobileDetails.processor}
              </li>
              <li>
                <strong>Battery Life:</strong> {mobileDetails.batteryLife}
              </li>
              <li>
                <strong>Operating System:</strong> {mobileDetails.operatingSystem}
              </li>
            </ul>
            <button className="bg-orange-300 hover:bg-orange-400 text-white px-4 py-2 rounded-lg mt-4 transition duration-300 ease-in-out transform hover:scale-105">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilesDetails;
