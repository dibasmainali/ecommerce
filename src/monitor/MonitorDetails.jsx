import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MonitorApis from "../apis/MonitorApis";
import Breadcrumb from "../component/Breadcrumb";
// import MonitorSpecification from "./MonitorSpecification";
// import Reviews from "../component/Reviews";
import { CartContext } from "../component/CartContext";

const MonitorDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const decodedName = name.replace(/-/g, " ");
  const monitor = MonitorApis.find(
    (item) => item.name.toLowerCase() === decodedName.toLowerCase()
  );

  const [quantity, setQuantity] = useState(1);
  const [showSpecifications, setShowSpecifications] = useState(true);
  const { addToCart } = useContext(CartContext);

  if (!monitor) {
    return <div>Monitor not found</div>;
  }

  const price = monitor.price.split("-")[0].replace(/,/g, "").trim();
  const originalPrice = parseFloat(price) || 0;
  const discountedPrice = originalPrice - originalPrice * 0.07;
  const discountedAmount = originalPrice - discountedPrice;

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);

  const handleAddToCart = () => {
    addToCart({
      id: monitor.id,
      name: monitor.name,
      price: discountedPrice,
      imageUrl: monitor.imageUrl,
      quantity: quantity,
    });
    navigate("/cart");
  };

  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      <Breadcrumb itemName={monitor.name} />
      
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 shadow-lg rounded-lg p-6 space-x-6">
        <div className="md:w-1/2">
          <img
            src={monitor.imageUrl}
            alt={monitor.name}
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
        
        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-indigo-700 mb-4">
            {monitor.name}
          </h1>
          <p className="text-md text-gray-600 mb-6">{monitor.description}</p>

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
            <p className="text-lg text-indigo-700">
              {formatPrice(discountedPrice * quantity)}
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>

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

      {/* <div className="mt-8">
        {showSpecifications ? (
          <MonitorSpecification monitor={monitor} />
        ) : (
          <Reviews product={monitor} />
        )}
      </div> */}
    </div>
  );
};

export default MonitorDetails;
