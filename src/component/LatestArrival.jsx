import React from "react";
import { Link } from "react-router-dom";
import LaptopApis from "../apis/LaptopApi";

const LatestArrival = () => {
  // Get the latest 4 products from LaptopApis and reverse their order to show the newest ones first
  const latestProducts = LaptopApis.slice(-4).reverse();
  
  return (
    <div
      className="p-6 bg-white rounded-lg shadow-lg mb-6"
      style={{
        // Set a background image using inline styling
        backgroundImage:
          'url("https://media.istockphoto.com/id/1330248664/vector/hexagonal-and-rectangular-abstracts-with-a-digital-network-image-blue-gradient-background.jpg?s=612x612&w=0&k=20&c=JgeKAVSAO_S-A0r61OP99BqNduP0CXE7gvc0jjoAD4Q=")',
      }}
    >
      {/* Section title */}
      <h2 className="text-2xl font-bold mb-4">Latest Arrivals</h2>
      
      {/* Display the products in a responsive grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {latestProducts.map((product) => {
          // Remove any commas from the product price to handle it as a number
          const price = product.price.replace(",", "");
          
          return (
            <div
              key={product.id} // Unique key for each product
              className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition max-w-xs mx-auto"
            >
              {/* Product image */}
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              
              {/* Product name */}
              <h3 className="text-xl font-semibold">{product.name}</h3>
              
              {/* Display the first 10 words of the product description */}
              <p className="text-gray-500">
                {product.description.split(" ").slice(0, 10).join(" ")}...
              </p>
              
              <div className="flex flex-col gap-3">
                {/* Original product price (strikethrough) */}
                <span className="text-red-500 line-through">
                  ${product.price}
                </span>
                
                {/* Discounted product price (5% off) */}
                <span className="text-green-500 font-bold">
                  ${price ? (price - price * 0.05).toFixed(2) : "Price not available"}
                </span>
              </div>
              
              {/* Link to product detail page, with the product name formatted as part of the URL */}
              <Link
                to={`/laptops/${product.name.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  View Product
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestArrival;
