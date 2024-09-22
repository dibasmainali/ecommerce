import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import MobileApis from "../apis/MobileApis.jsx"; // Importing mobile data
import Breadcrumb from "../component/Breadcrumb.jsx";
import { CartContext } from "../component/CartContext"; // Import CartContext

const Mobiles = () => {
  const [mobileData, setMobileData] = useState([]); // State for mobile data
  const [searchQuery, setSearchQuery] = useState(""); // State to handle search input
  const [showAll, setShowAll] = useState(false); // State to manage showing all mobiles
  const [sortOption, setSortOption] = useState(""); // State to manage sorting option
  const { addToCart } = useContext(CartContext); // Use CartContext to get addToCart function

  // Load mobile data on component mount
  useEffect(() => {
    if (MobileApis) {
      setMobileData(MobileApis);
    } else {
      console.error("Failed to load mobile data.");
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Filtered mobile data based on search query
  const filteredMobiles = mobileData.filter((mobile) =>
    mobile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort mobiles by price based on selected sort option
  const sortedMobiles = filteredMobiles.sort((a, b) => {
    const priceA = parseFloat(
      a.price.split("-")[0].replace("$", "").replace(/,/g, "")
    );
    const priceB = parseFloat(
      b.price.split("-")[0].replace("$", "").replace(/,/g, "")
    );

    if (sortOption === "low-to-high") {
      return priceA - priceB; // Sort by price low to high
    } else if (sortOption === "high-to-low") {
      return priceB - priceA; // Sort by price high to low
    }
    return 0; // No sorting if no option is selected
  });

  // Determine mobiles to display (either all or a limited number)
  const displayedMobiles = showAll ? sortedMobiles : sortedMobiles.slice(0, 9);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Breadcrumb />

      <h1 className="flex justify-end items-center text-gray-400 text-1xl">
        Get a new Mobile
      </h1>

      <div className="container mx-auto px-4 md:px-8 mt-8">
        <div>
          <img
            src="https://www.blessmybucket.com/cdn/shop/collections/Cellphone_Accessories_Banner_99b74e88-cfa3-4fd6-bfb7-1586883a8905_2048x.jpg?v=1646478433"
            alt="Mobile Banner"
            className="w-full  lg:h-[300px] px-4 md:px-8 bg-contain"
            />
        </div>

        {/* Search Bar */}
        <div className="mb-4 flex flex-wrap justify-between items-center mt-7 px-4 md:px-8 ">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for a mobile..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
              className="w-full md:w-auto p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="bg-purple-400 hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded-r-lg transition duration-300 ease-in-out transform hover:scale-105 ring-blue-500"
            >
              Search
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="mb-4">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)} // Update sort option state
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

        {/* Mobile Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedMobiles.length > 0 ? (
            displayedMobiles.map((mobile) => (
              <div
                key={mobile.id}
                className="bg-white border p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                {/* Mobile Image */}
                <img
                  src={mobile.imageUrl}
                  alt={mobile.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />

                {/* Mobile Name */}
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 truncate">
                  {mobile.name}
                </h2>

                {/* Mobile Specifications */}
                <ul className="text-sm md:text-base text-gray-600">
                  <li>
                    <strong>Price Range: $ </strong> {mobile.price}
                  </li>
                  <li>
                    <strong>Screen Size:</strong> {mobile.screenSize}
                  </li>
                  <li>
                    <strong>Storage Capacity:</strong> {mobile.storageCapacity}
                  </li>
                  <li>
                    <strong>Processor:</strong> {mobile.processor}
                  </li>
                </ul>

                {/* Add to Cart and View Details Buttons */}
                <div className=" flex gap-6 justify-between items-center mt-4 space-x-2">
                  <button
                    onClick={() =>
                      addToCart({
                        id: mobile.id,
                        name: mobile.name,
                        price: mobile.price, 
                        imageUrl: mobile.imageUrl,
                        quantity: 1, // Default quantity to 1
                      })
                    }
                    className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                  >
                    Add to Cart
                  </button>
                  <Link to={`/mobiles/${mobile.name.replace(/\s+/g, "-")}`}>
                    <button className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-1 md:col-span-3 text-center text-gray-600">
              No mobiles found.
            </p>
          )}
        </div>

        {/* Show All/Show Less Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)} // Toggle showing all or limited mobiles
            className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobiles;
