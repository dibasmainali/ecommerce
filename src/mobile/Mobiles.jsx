// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import MobileApis from "../apis/MobileApis.jsx"; // Correct path to import the mobile data
// import Breadcrumb from "../component/Breadcrumb.jsx";

// const Mobiles = () => {
//   const [mobileData, setMobileData] = useState([]);
//   const [showAll, setShowAll] = useState(false); // State to manage showing all mobiles

//   useEffect(() => {
//     if (MobileApis) {
//       setMobileData(MobileApis);
//     } else {
//       console.error("Failed to load mobile data.");
//     }
//   }, []);

//   const displayedMobiles = showAll ? mobileData : mobileData.slice(0, 6); // Determine mobiles to display

//   return (
//     <div>
//       <Breadcrumb />
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-32 mt-16 bg-white">
//         {displayedMobiles.length > 0 ? (
//           displayedMobiles.map((mobile) => (
//             <div key={mobile.id} className="border p-4 rounded-lg shadow-lg">
//               <img
//                 src={mobile.imageUrl}
//                 alt={mobile.name}
//                 className="w-full h-48 object-cover mb-4"
//               />
//               <h2 className="text-xl font-bold mb-2">{mobile.name}</h2>
//               <ul>
//                 <li>
//                   <strong>Price Range:</strong> {mobile.priceRange}
//                 </li>
//                 <li>
//                   <strong>Screen Size:</strong> {mobile.screenSize}
//                 </li>
//                 <li>
//                   <strong>Storage Capacity:</strong> {mobile.storageCapacity}
//                 </li>
//                 <li>
//                   <strong>Processor:</strong> {mobile.processor}
//                 </li>
//               </ul>
//               <div className="flex justify-between mt-4">
//                 <button className="bg-orange-300 hover:bg-orange-400 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
//                   Add to Cart
//                 </button>
//                 <Link to={`/mobiles/${mobile.name.replace(/\s+/g, '-')}`}>
//                   <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded mt-6">
//                     View Details
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No mobiles available at the moment.</p>
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

// export default Mobiles;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileApis from "../apis/MobileApis.jsx"; // Correct path to import the mobile data
import Breadcrumb from "../component/Breadcrumb.jsx";

const Mobiles = () => {
  const [mobileData, setMobileData] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to manage showing all mobiles

  useEffect(() => {
    if (MobileApis) {
      setMobileData(MobileApis);
    } else {
      console.error("Failed to load mobile data.");
    }
  }, []);

  const displayedMobiles = showAll ? mobileData : mobileData.slice(0, 6); // Determine mobiles to display

  return (
    <div className="bg-gray-50 min-h-screen">
      <Breadcrumb />
      <div className="container mx-auto px-4 md:px-8 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedMobiles.length > 0 ? (
            displayedMobiles.map((mobile) => (
              <div key={mobile.id} className="bg-white border p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                <img
                  src={mobile.imageUrl}
                  alt={mobile.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 truncate">
                  {mobile.name}
                </h2>
                <ul className="text-sm md:text-base text-gray-600">
                  <li>
                    <strong>Price Range:</strong> {mobile.priceRange}
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
                <div className="flex justify-between items-center mt-4 space-x-2">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50">
                    Add to Cart
                  </button>
                  <Link to={`/mobiles/${mobile.name.replace(/\s+/g, '-')}`}>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-1 md:col-span-3 text-center text-gray-600">
              No mobiles available at the moment.
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

export default Mobiles;
