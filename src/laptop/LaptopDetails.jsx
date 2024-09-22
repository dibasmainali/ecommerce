import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LaptopApis from "../apis/LaptopApi";
import { CartContext } from "../component/CartContext";
import Breadcrumb from "../component/Breadcrumb";
import Specification from "./Specification";
import Reviews from "../component/Reviews";

const LaptopDetails = () => {
  // Get the laptop name from the URL parameters
  const { name } = useParams();
  const navigate = useNavigate();
  
  // Decode the laptop name to match the API format
  const decodedName = name.replace(/-/g, " ");
  const laptop = LaptopApis.find(
    (item) => item.name.toLowerCase() === decodedName.toLowerCase()
  );

  // State for quantity and whether to show specifications or reviews
  const [quantity, setQuantity] = useState(1);
  const [showSpecifications, setShowSpecifications] = useState(true);
  const { addToCart } = useContext(CartContext);

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [name]);

  // Return a message if the laptop is not found
  if (!laptop) {
    return <div>Laptop not found</div>;
  }

  // Price calculations
  const price = laptop.price.split("-")[0].replace(/,/g, "").trim();
  const originalPrice = parseFloat(price) || 0;
  const discountedPrice = originalPrice - originalPrice * 0.05;
  const discountedAmount = originalPrice - discountedPrice;

  // Format price for display
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  // Increase quantity handler
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  // Decrease quantity handler
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Add to cart handler
  const handleAddToCart = () => {
    addToCart({
      id: laptop.id,
      name: laptop.name,
      price: discountedPrice,
      imageUrl: laptop.imageUrl,
      quantity: quantity,
    });
  };

  // Navigate to product details
  const handleViewDetails = (productName) => {
    const formattedName = productName.replace(/\s+/g, "-").toLowerCase();
    navigate(`/laptops/${formattedName}`);
  };

  // Get related products, excluding the current laptop
  const relatedProducts = LaptopApis.filter(
    (item) => item.id !== laptop.id
  ).slice(0, 9);

  return (
    <div className="max-w-screen-xl mx-auto">
      <Breadcrumb itemName={laptop.name} />

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2 mx-auto md:mx-0 mt-24">
          <img
            src={laptop.imageUrl}
            alt={laptop.name}
            className="w-full max-w-md border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-2xl font-semibold mb-4 text-blue-600">{laptop.name}</h1>
          <p className="text-justify mb-4 text-gray-700">{laptop.description}</p>

          <hr className="mb-4" />

          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <p className="font-semibold text-purple-700">Actual amount:</p>
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
                <strong>Screen Size:</strong> {laptop.screenSize}
              </li>
              <li>
                <strong>Storage Capacity:</strong> {laptop.storageCapacity}
              </li>
              <li>
                <strong>Processor:</strong> {laptop.processor}
              </li>
              <li>
                <strong>Graphics:</strong> {laptop.graphics}
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
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6"
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
              showSpecifications ? "underline text-blue-600" : ""
            }`}
          >
            Specifications
          </button>
          <button
            onClick={() => setShowSpecifications(false)}
            className={`px-4 py-2 font-semibold rounded ${
              !showSpecifications ? "underline text-blue-600" : ""
            }`}
          >
            Reviews
          </button>
        </div>

        {showSpecifications ? (
          <Specification laptop={laptop} />
        ) : (
          <Reviews product={laptop} />
        )}
      </div>

      {/* Products You May Like Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Products You May Like</h2>
        <div className="flex space-x-4 overflow-x-auto p-4">
          {relatedProducts.map((product) => (
            <div key={product.id} className="flex-none w-60 p-4 bg-white shadow-lg rounded-lg">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg mb-2"
              />
              <h3 className="text-lg font-semibold text-blue-600">{product.name}</h3>
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

export default LaptopDetails;
