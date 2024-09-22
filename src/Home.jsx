import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FlashSale from "./component/FlashSale"; // FlashSale component to display flash sale items
import LatestArrival from "./component/LatestArrival"; // LatestArrival component for the newest products
import Slider from "./component/Slider"; // Slider component for showcasing featured products

const Home = () => {
  // Scroll to the top of the page when the component is loaded
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="container mx-auto p-4">
      {/* Hero Section - Welcome message and Call to Action */}
      <div
        className="bg-gray-800 text-blue-900 p-6 rounded-lg mb-8 text-center"
        style={{
          backgroundImage:
            "url('https://l10brand.com/wp-content/uploads/2022/10/tech-store-accessories.jpg')", // Background image for the hero section
          backgroundSize: "cover", // Ensure the background covers the entire section
          backgroundPosition: "center", // Center the background image
        }}
      >
        {/* Hero title and description */}
        <h1 className="text-4xl font-bold mb-4">Welcome to Tech Store</h1>
        <p className="text-lg">
          Explore the latest tech products at unbeatable prices!
        </p>

        {/* Call to Action button leading to Laptops category */}
        <Link to="/laptops">
          <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Shop Laptops
          </button>
        </Link>
      </div>

      {/* Featured Categories Section */}
      <div className="bg-slate-200 p-5 mb-10 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 flex justify-center">
          Featured Categories
        </h2>

        {/* Category grid for Laptops, Mobiles, and Monitors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Laptops Category */}
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <Link to="/laptops">
              {/* Laptops category image */}
              <img
                src="https://www.shutterstock.com/image-photo/hall-shopping-center-shop-digital-260nw-1445581070.jpg"
                alt="Laptops"
                className="w-full h-48 object-cover mb-4" // Image styling for consistent size
              />
              {/* Laptops category name and description */}
              <h3 className="text-xl font-semibold">Laptops</h3>
              <p className="text-gray-500">
                Discover high-performance laptops for all your needs.
              </p>
              {/* Button to explore laptops */}
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Explore Laptops
              </button>
            </Link>
          </div>

          {/* Mobiles Category */}
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <Link to="/mobiles">
              {/* Mobiles category image */}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzh4BjQC-Ms15O9xQIRteXJg1I-IgTOAYP3g&s"
                alt="Mobiles"
                className="w-full h-48 object-cover mb-4" // Image styling for consistent size
              />
              {/* Mobiles category name and description */}
              <h3 className="text-xl font-semibold">Mobiles</h3>
              <p className="text-gray-500">
                Stay connected with the latest smartphones.
              </p>
              {/* Button to explore mobiles */}
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Explore Mobiles
              </button>
            </Link>
          </div>

          {/* Monitors Category */}
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <Link to="/monitors">
              {/* Monitors category image */}
              <img
                src="https://cdn.shopify.com/s/files/1/0570/2218/5644/files/curved-monitor-setup.jpg?v=1685083880"
                alt="Monitors"
                className="w-full h-48 object-cover mb-4" // Image styling for consistent size
              />
              {/* Monitors category name and description */}
              <h3 className="text-xl font-semibold">Monitors</h3>
              <p className="text-gray-500">
                Enhance your setup with top-quality monitors.
              </p>
              {/* Button to explore monitors */}
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Explore Monitors
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Components for additional sections on the homepage */}
      <Slider /> {/* Slider component for displaying featured items */}
      <LatestArrival /> {/* LatestArrival component for the newest products */}
      <FlashSale /> {/* FlashSale component for time-limited discounts */}
    </div>
  );
};

export default Home;
