import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MonitorApis from "../apis/MonitorApis"; // Import Monitor APIs
import Breadcrumb from "../component/Breadcrumb"; // Breadcrumb component for navigation
import { CartContext } from "../component/CartContext"; // CartContext to manage cart
import Review from "../component/Reviews"; // Reviews component

const MonitorDetails = () => {
  // Extract the monitor name from the URL params
  const { name } = useParams();
  const navigate = useNavigate();
  const decodedName = name.replace(/-/g, " "); // Replace dashes with spaces for readable name

  // Find the specific monitor details based on the name in the URL
  const monitor = MonitorApis.find(
    (item) => item.name.toLowerCase() === decodedName.toLowerCase()
  );

  // State for managing the quantity of the product
  const [quantity, setQuantity] = useState(1);
  // State to toggle between specifications and reviews
  const [showSpecifications, setShowSpecifications] = useState(true);
  const { addToCart } = useContext(CartContext); // Retrieve the addToCart function from CartContext

  // Scroll to top when the component loads or when the name changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [name]);

  // If no monitor is found, display a message
  if (!monitor) {
    return <div>Monitor not found</div>;
  }

  // Extract and format the price details
  const price = monitor.price.split("-")[0].replace(/,/g, "").trim();
  const originalPrice = parseFloat(price) || 0;
  const discountedPrice = originalPrice - originalPrice * 0.07; // Apply a 7% discount
  const discountedAmount = originalPrice - discountedPrice; // Calculate how much is saved

  // Helper function to format the price into USD
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  // Increase the quantity
  const handleIncrease = () => setQuantity(quantity + 1);
  // Decrease the quantity (ensure it doesn't go below 1)
  const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);

  // Add the selected product to the cart with the current quantity
  const handleAddToCart = () => {
    addToCart({
      id: monitor.id,
      name: monitor.name,
      price: discountedPrice,
      imageUrl: monitor.imageUrl,
      quantity: quantity,
    });
  };

  // Navigate to the details page of another monitor
  const handleViewDetails = (productName) => {
    const formattedName = productName.replace(/\s+/g, "-").toLowerCase();
    navigate(`/monitors/${formattedName}`); // Correct the URL path to "monitors"
  };

  // Get related monitors (excluding the current one) and limit to 7
  const relatedMonitors = MonitorApis.filter(
    (item) => item.id !== monitor.id
  ).slice(0, 7); // Select up to 7 related monitors

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Breadcrumb for navigation */}
      <Breadcrumb itemName={monitor.name} />

      {/* Monitor details section */}
      <div className="flex flex-col lg:flex-row lg:space-x-8 lg:justify-center lg:items-center bg-gray-100 shadow-lg rounded-lg p-6 space-x-6 mt-5">
        <div className="md:w-1/2">
          {/* Monitor image */}
          <img
            src={monitor.imageUrl}
            alt={monitor.name}
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>

        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          {/* Monitor name */}
          <h1 className="text-2xl font-bold text-indigo-700 mb-4">
            {monitor.name}
          </h1>
          {/* Monitor description */}
          <p className="text-md text-gray-600 mb-6">{monitor.description}</p>
          <hr />
          <div className="flex flex-col">
            {/* Original and discounted price */}
            <div className="flex items-center mb-6">
              <p className="text-gray-500 line-through text-lg mr-4">
                {formatPrice(originalPrice)}
              </p>
              <p className="text-xl text-green-600 font-bold">
                {formatPrice(discountedPrice)}
              </p>
              <p className="text-sm text-green-600 ml-4">
                Save {formatPrice(discountedAmount)} (7%)
              </p>
            </div>

            {/* Monitor specifications */}
            <div>
              <p className="text-md text-gray-600">
                <strong>Screen Size: </strong>
                {monitor.screenSize}
              </p>
              <p className="text-md text-gray-600">
                <strong>Resolution: </strong>
                {monitor.resolution}
              </p>
              <p className="text-md text-gray-600 mb-6">
                <strong>Panel Type: </strong>
                {monitor.panelType}
              </p>
            </div>
          </div>

          {/* Quantity control */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <button
                onClick={handleDecrease}
                className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-3 rounded-lg"
              >
                -
              </button>
              <span className="text-lg font-bold">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-3 rounded-lg"
              >
                +
              </button>
            </div>
            {/* Display total price based on the selected quantity */}
            <p className="text-lg text-indigo-700">
              {formatPrice(discountedPrice * quantity)}
            </p>
          </div>

          {/* Add to Cart button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Toggle between Specifications and Reviews */}
      <div className="flex justify-center space-x-6 mt-8">
        <button
          onClick={() => setShowSpecifications(true)}
          className={`px-6 py-2 font-bold rounded-full ${
            showSpecifications
              ? "bg-indigo-500 text-white"
              : "bg-gray-200 text-indigo-700"
          }`}
        >
          Specifications
        </button>
        <button
          onClick={() => setShowSpecifications(false)}
          className={`px-6 py-2 font-bold rounded-full ${
            !showSpecifications
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-blue-600"
          }`}
        >
          Reviews
        </button>
      </div>

      {/* Render either specifications or reviews based on state */}
      <div className="mt-8">
        {showSpecifications ? (
          <div>
            No data found
          </div>
        ) : (
          <Review product={monitor} />
        )}
      </div>

      {/* Related products section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Products You May Like</h2>
        <div className="flex space-x-4 overflow-x-auto p-4">
          {relatedMonitors.map((product) => (
            <div
              key={product.id}
              className="flex-none w-60 p-4 bg-white shadow-lg rounded-lg"
            >
              {/* Related product image */}
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg mb-2"
              />
              {/* Related product name and price */}
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-blue-600 font-bold">
                {formatPrice(
                  parseFloat(product.price.split("-")[0].replace(/,/g, ""))
                )}
              </p>
              {/* View details button */}
              <button
                onClick={() => handleViewDetails(product.name)}
                className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonitorDetails;
