import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Apis from "../apis/LaptopApi.jsx"; // Importing the Laptop API
import Breadcrumb from "../component/Breadcrumb.jsx"; // Importing Breadcrumb component
import { CartContext } from "../component/CartContext"; // Importing CartContext for cart operations
import laptop from "../Asset/laptop.mp4"; // import videohidden 

const Laptops = () => {
  // State to hold laptop data from API
  const [laptopData, setLaptopData] = useState([]);
  // State for search query input
  const [searchQuery, setSearchQuery] = useState("");
  // State to control whether all laptops are shown or just a few
  const [showAll, setShowAll] = useState(false);
  // State for sorting option (price low-to-high, high-to-low)
  const [sortOption, setSortOption] = useState("");
  // Accessing addToCart function from CartContext
  const { addToCart } = useContext(CartContext);

  // Effect to set laptop data from API when the component mounts
  useEffect(() => {
    if (Apis) {
      setLaptopData(Apis);
    }
  }, []);

  // Effect to scroll to top of the page on component load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Filtering laptops based on the search query
  const filteredLaptops = laptopData.filter((laptop) =>
    laptop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sorting laptops based on the selected sort option (low-to-high or high-to-low)
  const sortedLaptops = filteredLaptops.sort((a, b) => {
    const priceA = parseFloat(
      a.price.split("-")[0].replace("$", "").replace(",", "")
    );
    const priceB = parseFloat(
      b.price.split("-")[0].replace("$", "").replace(",", "")
    );

    if (sortOption === "low-to-high") {
      return priceA - priceB;
    } else if (sortOption === "high-to-low") {
      return priceB - priceA;
    }
    return 0;
  });

  // Control how many laptops are shown (if showAll is true, show all; else, show 6)
  const displayedLaptops = showAll ? sortedLaptops : sortedLaptops.slice(0, 6);

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Breadcrumb navigation */}
      <Breadcrumb />

      {/* Page header */}
      <h1 className="flex justify-end items-center text-gray-400 text-1xl">
        Quality is what we offer
      </h1>

      {/* Banner Image */}
      <div className="container mx-auto px-4 md:px-8 mt-8 hidden lg:block">
        <img
          src="https://i.pinimg.com/originals/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg"
          alt=""
          className="w-full  lg:h-[300px] px-4 md:px-8 bg-contain"
        />
      </div>
      <div className="container mx-auto px-4 md:px-8 mt-8 lg:hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-auto lg:h-[300px] bg-contain"
        >
          <source src={laptop} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto px-4 md:px-8 mt-8">
        <div className="mb-4 flex flex-wrap justify-between items-center mt-7 px-4 md:px-8">
          {/* Search Bar */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for a laptop..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-auto p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() =>
                setLaptopData(
                  Apis.filter((laptop) =>
                    laptop.name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                )
              }
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-lg transition duration-300 ease-in-out transform hover:scale-105 ring-blue-500"
            >
              Search
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="mb-4">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="w-full md:w-auto p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
            >
              <option value="" disabled>
                Sort by
              </option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Displaying the laptops in a grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedLaptops.length > 0 ? (
            displayedLaptops.map((laptop) => (
              <div
                key={laptop.id}
                className="bg-white border p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                {/* Laptop Image */}
                <img
                  src={laptop.imageUrl}
                  alt={laptop.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />

                {/* Laptop Name */}
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 truncate">
                  {laptop.name}
                </h2>

                {/* Laptop Details */}
                <ul className="text-sm md:text-base text-gray-600">
                  <li>
                    <strong>Price Range: $</strong> {laptop.price}
                  </li>
                  <li>
                    <strong>Screen Size:</strong> {laptop.screenSize}
                  </li>
                  <li>
                    <strong>Storage Capacity:</strong> {laptop.storageCapacity}
                  </li>
                  <li>
                    <strong>Processor:</strong> {laptop.processor}
                  </li>
                </ul>

                {/* Buttons for adding to cart and viewing details */}
                <div className="flex justify-between items-center mt-4 space-x-2">
                  <button
                    onClick={() =>
                      addToCart({
                        id: laptop.id,
                        name: laptop.name,
                        price: laptop.price.replace(",", " "),
                        imageUrl: laptop.imageUrl,
                        quantity: 1,
                      })
                    }
                    className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                  >
                    Add to Cart
                  </button>
                  {/* Link to laptop details page */}
                  <Link to={`/laptops/${laptop.name.replace(/\s+/g, "-")}`}>
                    <button className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-1 md:col-span-3 text-center text-gray-600">
              No laptops available at the moment.
            </p>
          )}
        </div>

        {/* Show All / Show Less Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-orange-700 hover:bg-orange-800 text-white font-semibold px-6 py-3 rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-opacity-50"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Laptops;
