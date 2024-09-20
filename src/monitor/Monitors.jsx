import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import MonitorApis from "../apis/MonitorApis.jsx"; // Importing monitor data
import Breadcrumb from "../component/Breadcrumb.jsx";
import { CartContext } from "../component/CartContext"; // Import CartContext

const Monitors = () => {
  const [monitorData, setMonitorData] = useState([]); // State for monitor data
  const [searchQuery, setSearchQuery] = useState(""); // State to handle search input
  const [showAll, setShowAll] = useState(false); // State to manage showing all monitors
  const [sortOption, setSortOption] = useState(""); // State to manage sorting option
  const { addToCart } = useContext(CartContext); // Use CartContext to get addToCart function

  // Load monitor data on component mount
  useEffect(() => {
    if (MonitorApis) {
      setMonitorData(MonitorApis);
    } else {
      console.error("Failed to load monitor data.");
    }
  }, []);

  // Filtered monitor data based on search query
  const filteredMonitors = monitorData.filter((monitor) =>
    monitor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort monitors by price based on selected sort option
  const sortedMonitors = filteredMonitors.sort((a, b) => {
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

  // Determine monitors to display (either all or a limited number)
  const displayedMonitors = showAll ? sortedMonitors : sortedMonitors.slice(0, 9);

  return (
    <div className="bg-teal-50 min-h-screen">
      <Breadcrumb />

      <h1 className="flex justify-end items-center text-teal-600 text-1xl">
        Discover Your New Monitor
      </h1>

      <div className="container mx-auto px-4 md:px-8 mt-8">
        <div>
          <img
            src="https://example.com/monitor-banner.jpg"
            alt="Monitor Banner"
            className="w-full lg:h[100px] px-4 md:px-8"
          />
        </div>

        {/* Search Bar */}
        <div className="mb-4 flex flex-wrap justify-between items-center mt-7 px-4 md:px-8">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for a monitor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
              className="w-full md:w-auto p-2 border border-teal-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-r-lg transition duration-300 ease-in-out transform hover:scale-105 ring-teal-500"
            >
              Search
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="mb-4">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)} // Update sort option state
              className="w-full md:w-auto p-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white text-teal-700"
            >
              <option value="" disabled>
                Sort by
              </option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Monitor Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedMonitors.length > 0 ? (
            displayedMonitors.map((monitor) => (
              <div
                key={monitor.id}
                className="bg-white border p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                {/* Monitor Image */}
                <img
                  src={monitor.imageUrl}
                  alt={monitor.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />

                {/* Monitor Name */}
                <h2 className="text-lg md:text-xl font-semibold text-teal-800 mb-2 truncate">
                  {monitor.name}
                </h2>

                {/* Monitor Specifications */}
                <ul className="text-sm md:text-base text-teal-600">
                  <li>
                    <strong>Price Range: $ </strong> {monitor.price}
                  </li>
                  <li>
                    <strong>Screen Size:</strong> {monitor.screenSize}
                  </li>
                  <li>
                    <strong>Resolution:</strong> {monitor.resolution}
                  </li>
                  <li>
                    <strong>Refresh Rate:</strong> {monitor.refreshRate}
                  </li>
                </ul>

                {/* Add to Cart and View Details Buttons */}
                <div className="flex flex-col gap-6 justify-between items-center mt-4 space-x-2 lg:flex-row md:flex-row">
                  <button
                    onClick={() =>
                      addToCart({
                        id: monitor.id,
                        name: monitor.name,
                        price: monitor.price, 
                        imageUrl: monitor.imageUrl,
                        quantity: 1, // Default quantity to 1
                      })
                    }
                    className="bg-green-400 hover:bg-green-500 text-white font-semibold px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                  >
                    Add to Cart
                  </button>
                  <Link to={`/monitors/${monitor.name.replace(/\s+/g, "-")}`}>
                    <button className="bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-1 md:col-span-3 text-center text-teal-600">
              No monitors found.
            </p>
          )}
        </div>

        {/* Show All/Show Less Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)} // Toggle showing all or limited monitors
            className="bg-green-400 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Monitors;
