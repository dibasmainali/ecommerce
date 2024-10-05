// import React, { useState } from 'react';
// import KeyboardDetails from './KeyboardDetails';
// import MouseDetails from './MouseDetails';
// import products from '../apis/KeyboardApis';

// const KeyboardMouse = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortOrder, setSortOrder] = useState('');
//   const [filterType, setFilterType] = useState('');

//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//     (filterType === '' || product.code === filterType)
//   );

//   const sortProducts = (products) => {
//     if (sortOrder === 'lowToHigh') {
//       return products.sort((a, b) => a.priceRange - b.priceRange);
//     } else if (sortOrder === 'highToLow') {
//       return products.sort((a, b) => b.priceRange - a.priceRange);
//     }
//     return products;
//   };

//   return (
//     // <div className="container mx-auto p-4">
//     <div className="bg-blue-50 min-h-screen">

//       <h1 className="text-4xl font-bold mb-8 text-center underline text-purple-700">Keyboards and Mouse</h1>

//       {/* Search, Filter, and Sort Bar */}
//       <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
//         {/* Search Bar */}
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="border border-gray-300 rounded-md p-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         {/* Filter Options */}
//         <div className="flex space-x-4">
//           <select
//             value={filterType}
//             onChange={(e) => setFilterType(e.target.value)}
//             className="border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//           >
//             <option value="">All Products</option>
//             <option value="keyboard">Keyboards</option>
//             <option value="mouse">Mouse</option>
//           </select>

//           {/* Sort Options */}
//           <select
//             value={sortOrder}
//             onChange={(e) => setSortOrder(e.target.value)}
//             className="border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//           >
//             <option value="">Sort by Price</option>
//             <option value="lowToHigh">Low to High</option>
//             <option value="highToLow">High to Low</option>
//           </select>
//         </div>
//       </div>

//       {/* Products Section */}
//       <section className="my-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-0">
//           {sortProducts(filteredProducts).map(product => (
//             <div
//               key={product.id}
//               className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 border border-gray-200"
//             >
//               {product.code === 'keyboard' ? (
//                 <KeyboardDetails keyboard={product} />
//               ) : (
//                 <MouseDetails mouse={product} />
//               )}
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default KeyboardMouse;

import React, { useState, useContext } from 'react';
import KeyboardDetails from './KeyboardDetails';
import MouseDetails from './MouseDetails';
import products from '../apis/KeyboardApis';
import { CartContext } from '../component/CartContext'; // Import CartContext
import Breadcrumb from '../component/Breadcrumb';

const KeyboardMouse = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [filterType, setFilterType] = useState('');

  const { addToCart } = useContext(CartContext); // Access addToCart from CartContext

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterType === '' || product.code === filterType)
  );

  const sortProducts = (products) => {
    if (sortOrder === 'lowToHigh') {
      return products.sort((a, b) => a.priceRange - b.priceRange);
    } else if (sortOrder === 'highToLow') {
      return products.sort((a, b) => b.priceRange - a.priceRange);
    }
    return products;
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      <Breadcrumb/>

      <h1 className="text-4xl font-bold mb-8 text-center underline text-purple-700">Keyboards and Mouse</h1>

      {/* Search, Filter, and Sort Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Filter Options */}
        <div className="flex space-x-4">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All Products</option>
            <option value="keyboard">Keyboards</option>
            <option value="mouse">Mouse</option>
          </select>

          {/* Sort Options */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Sort by Price</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Section */}
      <section className="my-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-0">
          {sortProducts(filteredProducts).map(product => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 border border-gray-200"
            >
              {product.code === 'keyboard' ? (
                <KeyboardDetails keyboard={product} />
              ) : (
                <MouseDetails mouse={product} />
              )}

              {/* Add to Cart Button */}
              <button
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.priceRange,
                    imageUrl: product.imageUrl, // Assuming your products have imageUrl
                    quantity: 1,
                  })
                }
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-4 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default KeyboardMouse;
