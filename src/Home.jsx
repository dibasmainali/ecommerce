import React from "react";
import { Link } from "react-router-dom";
import FlashSale from "./component/FlashSale";
import LatestArrival from "./component/LatestArrival";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <div
        className="bg-gray-800 text-blue-900 p-6 rounded-lg mb-8 text-center"
        style={{
          backgroundImage:
            "url('https://l10brand.com/wp-content/uploads/2022/10/tech-store-accessories.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Tech Store</h1>
        <p className="text-lg">
          Explore the latest tech products at unbeatable prices!
        </p>
        <Link to="/laptops">
          <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Shop Laptops
          </button>
        </Link>
      </div>
      {/* Featured Categories */}
      <div className="bg-slate-200 p-5 mb-10 rounded-lg">
        <>
          <h2 className="text-3xl font-bold mb-6 flex justify-center">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Laptops Category */}
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <Link to="/laptops">
                <img
                  src="https://www.shutterstock.com/image-photo/hall-shopping-center-shop-digital-260nw-1445581070.jpg"
                  alt="Laptops"
                  className="w-full h-48 object-cover mb-4"
                />

                <h3 className="text-xl font-semibold">Laptops</h3>
                <p className="text-gray-500">
                  Discover high-performance laptops for all your needs.
                </p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Explore Laptops
                </button>
              </Link>
            </div>

            {/* Mobiles Category */}
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <Link to="/mobiles">

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzh4BjQC-Ms15O9xQIRteXJg1I-IgTOAYP3g&s"
                alt="Mobiles"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Mobiles</h3>
              <p className="text-gray-500">
                Stay connected with the latest smartphones.
              </p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Explore Mobiles
                </button>
              </Link>
            </div>

            {/* Monitors Category */}
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <Link to="/monitors">

              <img
                src="https://cdn.shopify.com/s/files/1/0570/2218/5644/files/curved-monitor-setup.jpg?v=1685083880"
                alt="Monitors"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Monitors</h3>
              <p className="text-gray-500">
                Enhance your setup with top-quality monitors.
              </p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Explore Monitors
                </button>
              </Link>
            </div>
          </div>
        </>
      </div>
      <LatestArrival/>
      <FlashSale /> {/* Flash Sale Component */}
    </div>
  );
};

export default Home;
