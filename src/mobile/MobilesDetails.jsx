import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MobileApis from "../apis/MobileApis.jsx"; // Correct path to import the mobile data
import Breadcrumb from "../component/Breadcrumb.jsx";
import { FaSpinner } from "react-icons/fa"; // Import a spinner icon
import MobileSpecification from "./MobileSpecification.jsx";
import Reviews from "../component/Reviews.jsx"; // Assuming you have a component for reviews

const MobilesDetails = () => {
  const { name } = useParams(); // get the mobile name from the URL
  const [mobileDetails, setMobileDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [showSpecifications, setShowSpecifications] = useState(true); // State to toggle between specifications and reviews

  useEffect(() => {
    // Find the mobile that matches the name from the URL
    const decodedName = name.replace(/-/g, " ");
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

  // Safely handle price extraction and calculation
  const priceRange = mobileDetails.priceRange
    .split("-")[0]
    .replace("$", "")
    .replace(",", "")
    .trim();
  const originalPrice = parseFloat(priceRange) || 0;
  const discountedPrice = originalPrice - originalPrice * 0.05;
  const discountedAmount = originalPrice - discountedPrice;
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <Breadcrumb />
      <div className="mx-4 md:mx-14 mt-16 bg-white p-8 border rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          <img
            src={mobileDetails.imageUrl}
            alt={mobileDetails.name}
            className="w-full h-64 object-cover mb-4 md:mb-0 rounded-lg md:w-1/2 md:h-auto"
          />
          <div className="md:ml-8 lg:flex lg:flex-col lg:flex-wrap">
            <h2 className="text-2xl font-bold mb-4">{mobileDetails.name}</h2>
            <ul className="mb-4 space-y-2">
              <li>
                <strong>Price Range:</strong> {mobileDetails.priceRange}
              </li>
              <li>
                <strong>Screen Size:</strong> {mobileDetails.screenSize}
              </li>
              <li>
                <strong>Storage Capacity:</strong>{" "}
                {mobileDetails.storageCapacity}
              </li>
              <li>
                <strong>Processor:</strong> {mobileDetails.processor}
              </li>
              <li>
                <strong>Battery Capacity:</strong>{" "}
                {mobileDetails.batteryCapacity}
              </li>
              <li>
                <strong>Operating System:</strong>{" "}
                {mobileDetails.operatingSystem || "N/A"}
              </li>
            </ul>

            <div className="flex items-center mt-6 space-x-4 lg:flex-wrap">
              <div>
                <strong>Quantity:</strong>
              </div>
              <button
                onClick={handleDecrease}
                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-l"
              >
                -
              </button>
              <span className="bg-white text-black font-bold py-2 px-4 border border-gray-300 rounded">
                {quantity}
              </span>
              <button
                onClick={handleIncrease}
                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-r"
              >
                +
              </button>
              <div className="flex items-center">
                ({formatPrice(discountedPrice * quantity)})
              </div>
            </div>

            <button className="bg-orange-300 hover:bg-orange-400 text-white px-4 py-2 rounded-lg mt-4 transition duration-300 ease-in-out transform hover:scale-105">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center space-x-4 mt-8 lg:ml-20">
        <div>
          <button
            onClick={() => setShowSpecifications(true)}
            className={`px-4 py-2 font-semibold rounded ${
              showSpecifications ? "underline" : ""
            }`}
          >
            Specifications
          </button>
          <button
            onClick={() => setShowSpecifications(false)}
            className={`px-4 py-2 font-semibold rounded ${
              !showSpecifications ? "underline" : ""
            }`}
          >
            Reviews
          </button>
        </div>

        {showSpecifications ? (
          <MobileSpecification mobile={mobileDetails} />
        ) : (
          <Reviews mobile={mobileDetails} />
        )}
      </div>
    </div>
  );
};

export default MobilesDetails;
