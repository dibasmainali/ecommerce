import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import MobileApis from "../apis/MobileApis"; // Assuming MobileApis is imported
import Breadcrumb from "../component/Breadcrumb"; // Assuming Breadcrumb component exists
import MobileSpecification from "./MobileSpecification"; // Assuming MobileSpecification component exists
import Reviews from "../component/Reviews"; // Assuming Reviews component exists
import { CartContext } from "../component/CartContext"; // Import CartContext for cart functionality

const MobileDetails = () => {
  const { name } = useParams();
  const decodedName = name.replace(/-/g, " "); // Replace hyphens with spaces for matching

  const mobile = MobileApis.find(
    (item) => item.name.toLowerCase() === decodedName.toLowerCase()
  );

  const [quantity, setQuantity] = useState(1); // Manage quantity
  const [showSpecifications, setShowSpecifications] = useState(true); // Toggle for specs/reviews
  const { addToCart } = useContext(CartContext); // Use CartContext to manage cart state

  if (!mobile) {
    return <div>Mobile not found</div>;
  }

  // Safely handle price extraction and calculation
  const price = mobile.price.split("-")[0].replace(/,/g, "").trim(); // Remove the comma
  const originalPrice = parseFloat(price) || 0; // Parse the price to float
  const discountedPrice = originalPrice - originalPrice * 0.05; // Calculate discounted price
  const discountedAmount = originalPrice - discountedPrice;

  // Format price function
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

  const handleAddToCart = () => {
    addToCart({
      id: mobile.id,
      name: mobile.name,
      price: discountedPrice * quantity, // Use discounted price and multiply by quantity
      imageUrl: mobile.imageUrl,
      quantity: 1, // Pass the correct quantity
    });
  };

  return (
    <div className="p-6">
      <Breadcrumb itemName={mobile.name} /> {/* Display breadcrumb */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2 mx-auto md:mx-0 mt-24">
          <img
            src={mobile.imageUrl}
            alt={mobile.name}
            className="w-full max-w-md border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">{mobile.name}</h1>
          <p className="text-justify mb-4">{mobile.description}</p>

          <hr className="mb-4" />

          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <p className="font-semibold">Actual amount:</p>
              <p className="text-xl text-gray-600 line-through">
                {formatPrice(originalPrice)}
              </p>
            </div>
            <p className="text-xl text-red-600 font-semibold">
              Price: {formatPrice(discountedPrice)}
            </p>
            <p className="text-xl text-gray-600">
              You save: {formatPrice(discountedAmount)}
              <span className="text-red-600"> (5%)</span>
            </p>
          </div>

          <div className="space-y-2">
            <ul className="list-none">
              <li>
                <strong>Screen Size:</strong> {mobile.screenSize}
              </li>
              <li>
                <strong>Storage Capacity:</strong> {mobile.storageCapacity}
              </li>
              <li>
                <strong>Processor:</strong> {mobile.processor}
              </li>
              <li>
                <strong>Battery Capacity:</strong> {mobile.batteryCapacity}
              </li>
              <li>
                <strong>Operating System:</strong>{" "}
                {mobile.operatingSystem || "N/A"}
              </li>
            </ul>
          </div>

          <div className="flex items-center mt-6 space-x-4">
            <div>
              <strong>Quantity:</strong>
            </div>
            <button
              onClick={handleDecrease}
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-l"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={handleIncrease}
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-r"
            >
              +
            </button>
            <div>({formatPrice(discountedPrice * quantity)})</div>
          </div>

          <button
            onClick={handleAddToCart} // Handle Add to Cart
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded mt-6"
          >
            Add to Cart
          </button>
        </div>
      </div>
      {/* Toggle for Specifications and Reviews */}
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
          <MobileSpecification mobile={mobile} /> // Display mobile specifications
        ) : (
          <Reviews product={mobile} /> // Display mobile reviews
        )}
      </div>
    </div>
  );
};

export default MobileDetails;
