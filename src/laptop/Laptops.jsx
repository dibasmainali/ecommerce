// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Apis from "../apis/LaptopApi.jsx"; // Correct path to import the laptop data
// import Breadcrumb from "../component/Breadcrumb.jsx";

// const Laptops = () => {
//   const [laptopData, setLaptopData] = useState([]); // State for laptop data
//   const [searchQuery, setSearchQuery] = useState(""); // State to handle search input
//   const [showAll, setShowAll] = useState(false); // State to manage showing all laptops
//   const [sortOption, setSortOption] = useState(""); // State to manage sorting option

//   // Load laptop data on component mount
//   useEffect(() => {
//     if (Apis) {
//       setLaptopData(Apis);
//     } else {
//       console.error("Failed to load laptop data.");
//     }
//   }, []);

//   // Filtered laptop data based on search query
//   const filteredLaptops = laptopData.filter((laptop) =>
//     laptop.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Sort laptops by price based on selected sort option
//   const sortedLaptops = filteredLaptops.sort((a, b) => {
//     const priceA = parseFloat(
//       a.priceRange.split("-")[0].replace("$", "").replace(",", "")
//     );
//     const priceB = parseFloat(
//       b.priceRange.split("-")[0].replace("$", "").replace(",", "")
//     );

//     if (sortOption === "low-to-high") {
//       return priceA - priceB; // Sort by price low to high
//     } else if (sortOption === "high-to-low") {
//       return priceB - priceA; // Sort by price high to low
//     }
//     return 0; // No sorting if no option is selected
//   });

//   // Determine laptops to display (either all or a limited number)
//   const displayedLaptops = showAll ? sortedLaptops : sortedLaptops.slice(0, 6);

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Breadcrumb />
//       <div className="container mx-auto px-4 md:px-8 mt-8">
//         <img
//           src="https://i.pinimg.com/originals/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg"
//           alt=""
//           className="w-full lg:h[0px] px-4 md:px-8"
//         />
//       </div>

//       <div className="container mx-auto px-4 md:px-8 mt-8">
//         {/* Search Bar */}
//         <div className="mb-4 flex flex-wrap justify-between items-center mt-7 px-4 md:px-8">
//           <div className="flex items-center">
//             <input
//               type="text"
//               placeholder="Search for a mobile..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
//               className="w-full md:w-auto p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               // onClick={handleSearch} // Add the search function here
//               className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-lg transition duration-300 ease-in-out transform hover:scale-105 ring-blue-500"
//             >
//               Search
//             </button>
//           </div>

//           {/* Sort Dropdown */}
//           <div className="mb-4">
//             <select
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)} // Update sort option state
//               className="w-full md:w-auto p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
//             >
//               <option value="" disabled>
//                 Sort by
//               </option>
//               <option value="low-to-high">Price: Low to High</option>
//               <option value="high-to-low">Price: High to Low</option>
//             </select>
//           </div>
//         </div>

//         {/* Laptop Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {displayedLaptops.length > 0 ? (
//             displayedLaptops.map((laptop) => (
//               <div
//                 key={laptop.id}
//                 className="bg-white border p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
//               >
//                 {/* Laptop Image */}
//                 <img
//                   src={laptop.imageUrl}
//                   alt={laptop.name}
//                   className="w-full h-40 object-cover rounded-md mb-4"
//                 />

//                 {/* Laptop Name */}
//                 <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 truncate">
//                   {laptop.name}
//                 </h2>

//                 {/* Laptop Specifications */}
//                 <ul className="text-sm md:text-base text-gray-600">
//                   <li>
//                     <strong>Price Range:</strong> {laptop.priceRange}
//                   </li>
//                   <li>
//                     <strong>Screen Size:</strong> {laptop.screenSize}
//                   </li>
//                   <li>
//                     <strong>Storage Capacity:</strong> {laptop.storageCapacity}
//                   </li>
//                   <li>
//                     <strong>Processor:</strong> {laptop.processor}
//                   </li>
//                 </ul>

//                 {/* Add to Cart and View Details Buttons */}
//                 <div className="flex justify-between items-center mt-4 space-x-2">
//                   <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50">
//                     Add to Cart
//                   </button>
//                   <Link to={`/laptops/${laptop.name.replace(/\s+/g, "-")}`}>
//                     <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
//                       View Details
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="col-span-1 md:col-span-3 text-center text-gray-600">
//               No laptops available at the moment.
//             </p>
//           )}
//         </div>

//         {/* Show All/Show Less Button */}
//         <div className="text-center mt-8">
//           <button
//             onClick={() => setShowAll(!showAll)} // Toggle showing all or limited laptops
//             className="bg-orange-700 hover:bg-orange-800 text-white font-semibold px-6 py-3 rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-opacity-50"
//           >
//             {showAll ? "Show Less" : "Show All"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Laptops;
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Apis from "../apis/LaptopApi.jsx"; // Correct path to import the laptop data
import Breadcrumb from "../component/Breadcrumb.jsx";
import { CartContext } from "../component/CartContext"; // Import CartContext

const Laptops = () => {
  const [laptopData, setLaptopData] = useState([]); // State for laptop data
  const [searchQuery, setSearchQuery] = useState(""); // State to handle search input
  const [showAll, setShowAll] = useState(false); // State to manage showing all laptops
  const [sortOption, setSortOption] = useState(""); // State to manage sorting option
  const { addToCart } = useContext(CartContext); // Use CartContext to get addToCart function

  // Load laptop data on component mount
  useEffect(() => {
    if (Apis) {
      setLaptopData(Apis);
    } else {
      console.error("Failed to load laptop data.");
    }
  }, []);

  // Filtered laptop data based on search query
  const filteredLaptops = laptopData.filter((laptop) =>
    laptop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort laptops by price based on selected sort option
  const sortedLaptops = filteredLaptops.sort((a, b) => {
    const priceA = parseFloat(
      a.priceRange.split("-")[0].replace("$", "").replace(",", "")
    );
    const priceB = parseFloat(
      b.priceRange.split("-")[0].replace("$", "").replace(",", "")
    );

    if (sortOption === "low-to-high") {
      return priceA - priceB; // Sort by price low to high
    } else if (sortOption === "high-to-low") {
      return priceB - priceA; // Sort by price high to low
    }
    return 0; // No sorting if no option is selected
  });

  // Determine laptops to display (either all or a limited number)
  const displayedLaptops = showAll ? sortedLaptops : sortedLaptops.slice(0, 6);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Breadcrumb />
      <div className="container mx-auto px-4 md:px-8 mt-8">
        <img
          src="https://i.pinimg.com/originals/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg"
          alt=""
          className="w-full lg:h[0px] px-4 md:px-8"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 mt-8">
        {/* Search Bar */}
        <div className="mb-4 flex flex-wrap justify-between items-center mt-7 px-4 md:px-8">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for a laptop..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
              className="w-full md:w-auto p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-lg transition duration-300 ease-in-out transform hover:scale-105 ring-blue-500"
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

        {/* Laptop Products Grid */}
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

                {/* Laptop Specifications */}
                <ul className="text-sm md:text-base text-gray-600">
                  <li>
                    <strong>Price Range:</strong> {laptop.priceRange}
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

                {/* Add to Cart and View Details Buttons */}
                <div className="flex justify-between items-center mt-4 space-x-2">
                  <button
                    onClick={() =>
                      addToCart({
                        id: laptop.id,
                        name: laptop.name,
                        price: laptop.priceRange, // Assuming price is part of the priceRange
                        imageUrl: laptop.imageUrl,
                        quantity: 1, // Default quantity to 1
                      })
                    }
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
                  >
                    Add to Cart
                  </button>
                  <Link to={`/laptops/${laptop.name.replace(/\s+/g, "-")}`}>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
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

        {/* Show All/Show Less Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)} // Toggle showing all or limited laptops
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
