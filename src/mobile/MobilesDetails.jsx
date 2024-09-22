import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MobileApis from "../apis/MobileApis"; // Import mobile data
import Breadcrumb from "../component/Breadcrumb"; // Breadcrumb navigation
import MobileSpecification from "./MobileSpecification"; // Component for mobile specifications
import Reviews from "../component/Reviews"; // Component for reviews
import { CartContext } from "../component/CartContext"; // Import CartContext for managing cart

const MobileDetails = () => {
  const { name } = useParams(); // Get the mobile name from the URL
  const navigate = useNavigate();
  const decodedName = name.replace(/-/g, " "); // Convert URL-friendly name back to readable form
  const mobile = MobileApis.find(
    (item) => item.name.toLowerCase() === decodedName.toLowerCase()
  ); // Find the mobile details by name

  // State for managing quantity of items
  const [quantity, setQuantity] = useState(1);
  // State to toggle between specifications and reviews
  const [showSpecifications, setShowSpecifications] = useState(true);
  const { addToCart } = useContext(CartContext); // Get the addToCart function from CartContext

  // Scroll to top of the page when the component loads or when the name changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [name]);

  // If the mobile isn't found, display an error message
  if (!mobile) {
    return <div>Mobile not found</div>;
  }

  // Calculate the price of the mobile
  const price = mobile.price.split("-")[0].replace(/,/g, "").trim(); // Remove any commas or ranges from the price
  const originalPrice = parseFloat(price) || 0; // Convert price to a number
  const discountedPrice = originalPrice - originalPrice * 0.05; // Apply a 5% discount
  const discountedAmount = originalPrice - discountedPrice; // Calculate discount amount

  // Format the price in USD currency
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  // Increase the quantity by 1
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  // Decrease the quantity by 1 (minimum of 1)
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Add the item to the cart with the specified quantity and discounted price
  const handleAddToCart = () => {
    addToCart({
      id: mobile.id,
      name: mobile.name,
      price: discountedPrice,
      imageUrl: mobile.imageUrl,
      quantity: quantity,
    });
  };

  // Get a random list of recommended products (limit to 8)
  const recommendedProducts = MobileApis.sort(() => 0.5 - Math.random()).slice(0, 8);

  // Handle the logic when viewing details of another product
  const handleViewDetails = (productName) => {
    const formattedName = productName.replace(/\s+/g, "-").toLowerCase(); // Convert name to URL-friendly format
    navigate(`/mobiles/${formattedName}`); // Navigate to the mobile's details page
  };

  return (
    <div className=" max-w-screen-xl mx-auto">
      {/* Breadcrumb navigation for current mobile */}
      <Breadcrumb itemName={mobile.name} />

      {/* Mobile details: image and description */}
      <div className="flex flex-col lg:flex-row lg:space-x-8 lg:justify-center lg:items-center">
        <div className="lg:w-1/2 ">
          {/* Mobile name (visible only on small screens) */}
          <h1 className="text-3xl font-semibold mb-4 text-purple-600 lg:hidden">
            {mobile.name}
          </h1>
          <div className="shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
            {/* Mobile image with hover effect */}
            <img
              src={mobile.imageUrl}
              alt={mobile.name}
              className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="lg:w-1/2 p-6 bg-white shadow-lg rounded-lg">
          {/* Mobile name (visible on large screens) */}
          <h1 className="text-3xl font-semibold mb-4 text-purple-600">
            {mobile.name}
          </h1>
          {/* Mobile description */}
          <p className="text-lg mb-6 text-gray-700">{mobile.description}</p>

          {/* Price section with original and discounted prices */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 line-through">
                {formatPrice(originalPrice)}
              </p>
              <p className="text-xl text-blue-600 font-bold">
                {formatPrice(discountedPrice)}
              </p>
            </div>
            <p className="text-green-600 font-semibold">
              You save: {formatPrice(discountedAmount)} (5%)
            </p>
          </div>

          {/* Mobile specifications */}
          <div className="border-t pt-4">
            <ul className="space-y-2 text-sm text-gray-600">
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
                <strong>Operating System:</strong> {mobile.operatingSystem || "N/A"}
              </li>
            </ul>
          </div>

          {/* Quantity control and Add to Cart button */}
          <div className="flex items-center mt-6 space-x-4">
            <div>
              <strong>Quantity:</strong>
            </div>
            <button
              onClick={handleDecrease}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l"
            >
              -
            </button>
            <span className="font-semibold text-lg">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r"
            >
              +
            </button>
            {/* Display the total price for the selected quantity */}
            <div className="text-blue-600 font-semibold">
              {formatPrice(discountedPrice * quantity)}
            </div>
          </div>

          {/* Add to Cart button */}
          <button
            onClick={handleAddToCart}
            className="mt-6 w-full neumorph-btn text-white bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 py-3 px-6 rounded-full font-semibold tracking-wide shadow-lg transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Toggle between Specifications and Reviews */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowSpecifications(true)}
          className={`px-4 py-2 font-semibold rounded-full ${
            showSpecifications ? "bg-blue-500 text-white" : "bg-gray-200 text-blue-600"
          }`}
        >
          Specifications
        </button>
        <button
          onClick={() => setShowSpecifications(false)}
          className={`ml-4 px-4 py-2 font-semibold rounded-full ${
            !showSpecifications ? "bg-purple-500 text-white" : "bg-gray-200 text-purple-600"
          }`}
        >
          Reviews
        </button>
      </div>

      {/* Show either Specifications or Reviews based on the state */}
      <div className="mt-8">
        {showSpecifications ? (
          <MobileSpecification mobile={mobile} />
        ) : (
          <Reviews product={mobile} />
        )}
      </div>

      {/* Recommended products carousel */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Products You May Like</h2>
        <div className="flex space-x-4 overflow-x-auto p-4">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="flex-none w-60 p-4 bg-white shadow-lg rounded-lg">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg mb-2"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-blue-600 font-bold">
                {formatPrice(parseFloat(product.price.split("-")[0].replace(/,/g, "")))}
              </p>
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

export default MobileDetails;
