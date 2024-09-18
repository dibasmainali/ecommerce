// import React, { useState, useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";
// import MobileApis from "../apis/MobileApis"; // Assuming MobileApis is imported
// import Breadcrumb from "../component/Breadcrumb"; // Assuming Breadcrumb component exists
// import MobileSpecification from "./MobileSpecification"; // Assuming MobileSpecification component exists
// import Reviews from "../component/Reviews"; // Assuming Reviews component exists
// import { CartContext } from "../component/CartContext"; // Import CartContext for cart functionality

// const MobileDetails = () => {
//   const { name } = useParams();
//   const decodedName = name.replace(/-/g, " "); // Replace hyphens with spaces for matching

//   const mobile = MobileApis.find(
//     (item) => item.name.toLowerCase() === decodedName.toLowerCase()
//   );

//   const [quantity, setQuantity] = useState(1); // Manage quantity
//   const [showSpecifications, setShowSpecifications] = useState(true); // Toggle for specs/reviews
//   const { addToCart } = useContext(CartContext); // Use CartContext to manage cart state

//   if (!mobile) {
//     return <div>Mobile not found</div>;
//   }

//   // Safely handle price extraction and calculation
//   const price = mobile.price.split("-")[0].replace(/,/g, "").trim(); // Remove the comma
//   const originalPrice = parseFloat(price) || 0; // Parse the price to float
//   const discountedPrice = originalPrice - originalPrice * 0.05; // Calculate discounted price
//   const discountedAmount = originalPrice - discountedPrice;

//   // Format price function
//   const formatPrice = (price) =>
//     new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//     }).format(price);

//   const handleIncrease = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecrease = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     addToCart({
//       id: mobile.id,
//       name: mobile.name,
//       price: discountedPrice * quantity, // Use discounted price and multiply by quantity
//       imageUrl: mobile.imageUrl,
//       quantity: 1, // Pass the correct quantity
//     });
//   };

//   return (
//     <div className="p-6">
//       <Breadcrumb itemName={mobile.name} /> {/* Display breadcrumb */}
//       <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
//         <div className="md:w-1/2 mx-auto md:mx-0 mt-24">
//           <img
//             src={mobile.imageUrl}
//             alt={mobile.name}
//             className="w-full max-w-md border border-gray-300 rounded-lg p-2"
//           />
//         </div>

//         <div className="md:w-1/2">
//           <h1 className="text-2xl font-semibold mb-4">{mobile.name}</h1>
//           <p className="text-justify mb-4">{mobile.description}</p>

//           <hr className="mb-4" />

//           <div className="mb-4">
//             <div className="flex items-center space-x-2">
//               <p className="font-semibold">Actual amount:</p>
//               <p className="text-xl text-gray-600 line-through">
//                 {formatPrice(originalPrice)}
//               </p>
//             </div>
//             <p className="text-xl text-red-600 font-semibold">
//               Price: {formatPrice(discountedPrice)}
//             </p>
//             <p className="text-xl text-gray-600">
//               You save: {formatPrice(discountedAmount)}
//               <span className="text-red-600"> (5%)</span>
//             </p>
//           </div>

//           <div className="space-y-2">
//             <ul className="list-none">
//               <li>
//                 <strong>Screen Size:</strong> {mobile.screenSize}
//               </li>
//               <li>
//                 <strong>Storage Capacity:</strong> {mobile.storageCapacity}
//               </li>
//               <li>
//                 <strong>Processor:</strong> {mobile.processor}
//               </li>
//               <li>
//                 <strong>Battery Capacity:</strong> {mobile.batteryCapacity}
//               </li>
//               <li>
//                 <strong>Operating System:</strong>{" "}
//                 {mobile.operatingSystem || "N/A"}
//               </li>
//             </ul>
//           </div>

//           <div className="flex items-center mt-6 space-x-4">
//             <div>
//               <strong>Quantity:</strong>
//             </div>
//             <button
//               onClick={handleDecrease}
//               className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-l"
//             >
//               -
//             </button>
//             <span>{quantity}</span>
//             <button
//               onClick={handleIncrease}
//               className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-r"
//             >
//               +
//             </button>
//             <div>({formatPrice(discountedPrice * quantity)})</div>
//           </div>

//           <button
//             onClick={handleAddToCart} // Handle Add to Cart
//             className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded mt-6"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//       {/* Toggle for Specifications and Reviews */}
//       <div className="flex flex-col justify-center space-x-4 mt-8 lg:ml-20">
//         <div>
//           <button
//             onClick={() => setShowSpecifications(true)}
//             className={`px-4 py-2 font-semibold rounded ${
//               showSpecifications ? "underline" : ""
//             }`}
//           >
//             Specifications
//           </button>
//           <button
//             onClick={() => setShowSpecifications(false)}
//             className={`px-4 py-2 font-semibold rounded ${
//               !showSpecifications ? "underline" : ""
//             }`}
//           >
//             Reviews
//           </button>
//         </div>

//         {showSpecifications ? (
//           <MobileSpecification mobile={mobile} /> // Display mobile specifications
//         ) : (
//           <Reviews product={mobile} /> // Display mobile reviews
//         )}
//       </div>
//     </div>
//   );
// };

// export default MobileDetails;

import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import MobileApis from "../apis/MobileApis";
import Breadcrumb from "../component/Breadcrumb";
import MobileSpecification from "./MobileSpecification";
import Reviews from "../component/Reviews";
import { CartContext } from "../component/CartContext";

const MobileDetails = () => {
  const { name } = useParams();
  const decodedName = name.replace(/-/g, " ");
  const mobile = MobileApis.find(
    (item) => item.name.toLowerCase() === decodedName.toLowerCase()
  );

  const [quantity, setQuantity] = useState(1);
  const [showSpecifications, setShowSpecifications] = useState(true);
  const { addToCart } = useContext(CartContext);

  if (!mobile) {
    return <div>Mobile not found</div>;
  }

  const price = mobile.price.split("-")[0].replace(/,/g, "").trim();
  const originalPrice = parseFloat(price) || 0;
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
  const handleAddToCart = () => {
    addToCart({
      id: mobile.id,
      name: mobile.name,
      price: discountedPrice,
      imageUrl: mobile.imageUrl,
      quantity: quantity,
    });
  };

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <Breadcrumb itemName={mobile.name} />

      <div className="flex flex-col lg:flex-row lg:space-x-8 lg:justify-center lg:items-center">
        <div className="lg:w-1/2 p-4">
          <h1 className="text-3xl font-semibold mb-4 text-purple-600 lg:hidden">
            {mobile.name}
          </h1>
          <div className="shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <img
              src={mobile.imageUrl}
              alt={mobile.name}
              className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="lg:w-1/2 p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-semibold mb-4 text-purple-600">
            {mobile.name}
          </h1>
          <p className="text-lg mb-6 text-gray-700">{mobile.description}</p>

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
            <div className="text-blue-600 font-semibold">
              {formatPrice(discountedPrice * quantity)}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-6 w-full neumorph-btn text-white bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 py-3 px-6 rounded-full font-semibold tracking-wide shadow-lg transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowSpecifications(true)}
          className={`px-4 py-2 font-semibold rounded-full ${
            showSpecifications
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-blue-600"
          }`}
        >
          Specifications
        </button>
        <button
          onClick={() => setShowSpecifications(false)}
          className={`ml-4 px-4 py-2 font-semibold rounded-full ${
            !showSpecifications
              ? "bg-purple-500 text-white"
              : "bg-gray-200 text-purple-600"
          }`}
        >
          Reviews
        </button>
      </div>

      <div className="mt-8">
        {showSpecifications ? (
          <MobileSpecification mobile={mobile} />
        ) : (
          <Reviews product={mobile} />
        )}
      </div>
    </div>
  );
};

export default MobileDetails;
