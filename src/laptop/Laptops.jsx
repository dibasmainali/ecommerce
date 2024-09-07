// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Apis from "../apis/LaptopApi.jsx"; // Correct path to import the laptop data
// import Breadcrumb from "../component/Breadcrumb.jsx";

// const Laptops = () => {
//   const [laptopData, setLaptopData] = useState([]);
//   const [showAll, setShowAll] = useState(false); // State to manage showing all laptops

//   useEffect(() => {
//     if (Apis) {
//       setLaptopData(Apis);
//     } else {
//       console.error("Failed to load laptop data.");
//     }
//   }, []);

//   const displayedLaptops = showAll ? laptopData : laptopData.slice(0, 6); // Determine laptops to display

//   return (
//     <div>
//       <Breadcrumb />
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-32 mt-16 bg-white">
//         {displayedLaptops.length > 0 ? (
//           displayedLaptops.map((laptop) => (
//             <div key={laptop.id} className="border p-4 rounded-lg shadow-lg">
//               <img
//                 src={laptop.imageUrl}
//                 alt={laptop.name}
//                 className="w-full h-48 object-cover mb-4"
//               />
//               <h2 className="text-xl font-bold mb-2">{laptop.name}</h2>
//               <ul>
//                 <li>
//                   <strong>Price Range:</strong> {laptop.priceRange}
//                 </li>
//                 <li>
//                   <strong>Screen Size:</strong> {laptop.screenSize}
//                 </li>
//                 <li>
//                   <strong>Storage Capacity:</strong> {laptop.storageCapacity}
//                 </li>
//                 <li>
//                   <strong>Processor:</strong> {laptop.processor}
//                 </li>
//               </ul>
//               <div className="flex justify-between mt-4">
//                 <button className="bg-orange-300 hover:bg-orange-400 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
//                   Add to Cart
//                 </button>
//                 <Link to={`/laptops/${laptop.name.replace(/\s+/g, '-')}`}>
//                   <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded mt-6">
//                     View Details
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No laptops available at the moment.</p>
//         )}
//       </div>
//       <div className="text-center mt-4">
//         <button
//           onClick={() => setShowAll(!showAll)}
//           className="bg-orange-700 text-white px-4 py-2 rounded"
//         >
//           {showAll ? "Show Less" : "Show All"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Laptops;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Apis from "../apis/LaptopApi.jsx"; // Correct path to import the laptop data
import Breadcrumb from "../component/Breadcrumb.jsx";

const Laptops = () => {
  const [laptopData, setLaptopData] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to manage showing all laptops

  useEffect(() => {
    if (Apis) {
      setLaptopData(Apis);
    } else {
      console.error("Failed to load laptop data.");
    }
  }, []);

  const displayedLaptops = showAll ? laptopData : laptopData.slice(0, 6); // Determine laptops to display

  return (
    <div className="bg-gray-50 min-h-screen">
      <Breadcrumb />
      <div className="container mx-auto px-4 md:px-8 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedLaptops.length > 0 ? (
            displayedLaptops.map((laptop) => (
              <div key={laptop.id} className="bg-white border p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                <img
                  src={laptop.imageUrl}
                  alt={laptop.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 truncate">
                  {laptop.name}
                </h2>
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
                <div className="flex justify-between items-center mt-4 space-x-2">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50">
                    Add to Cart
                  </button>
                  <Link to={`/laptops/${laptop.name.replace(/\s+/g, '-')}`}>
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
