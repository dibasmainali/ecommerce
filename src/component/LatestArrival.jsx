// // src/components/LatestArrival.jsx

// import React from 'react';
// import { Link } from 'react-router-dom';
// import LaptopApis from '../apis/LaptopApi'; // Assuming you have a similar API for other products

// const LatestArrival = () => {
//   // Extract the latest 5 products from the API
//   const latestProducts = LaptopApis.slice(-4).reverse(); // Adjust the number and source as needed

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Latest Arrivals</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {latestProducts.map((product) => (
//           <div key={product.id} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover mb-4"
//             />
//             <h3 className="text-xl font-semibold">{product.name}</h3>
//             <p className="text-gray-500">{product.description.split(' ').slice(0, 10).join(' ')}...</p>
//             <div className="text-red-500 line-through">${product.price}</div>
//             <span className="text-green-500 font-bold">${(product.priceRange * 0.9).toFixed(2)}</span>
//             <Link to={`/LaptopDetails/${product.name.replace(/\s+/g, '-').toLowerCase()}`}>
//               <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                 View Product
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LatestArrival;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import LaptopApis from '../apis/LaptopApi'; // Assuming you have a similar API for other products

// const LatestArrival = () => {
//   // Extract the latest 5 products from the API
//   const latestProducts = LaptopApis.slice(-4).reverse(); // Adjust the number and source as needed

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Latest Arrivals</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {latestProducts.map((product) => (
//           <div key={product.id} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover mb-4"
//             />
//             <h3 className="text-xl font-semibold">{product.name}</h3>
//             <p className="text-gray-500">{product.description.split(' ').slice(0, 10).join(' ')}...</p>
//             <div className="text-red-500 line-through">${product.priceRange}</div>
//             <span className="text-green-500 font-bold">${(product.priceRange * 0.9)}</span>
//             <Link to={`/laptops/${product.name.replace(/\s+/g, '-').toLowerCase()}`}>
//               <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                 View Product
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LatestArrival;



import React from 'react';
import { Link } from 'react-router-dom';
import LaptopApis from '../apis/LaptopApi'; // Assuming you have a similar API for other products

const LatestArrival = () => {
  // Extract the latest 5 products from the API
  const latestProducts = LaptopApis.slice(-4).reverse(); // Adjust the number and source as needed

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Latest Arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestProducts.map((product) => {
          const price = parseFloat(product.priceRange);
          const discountedPrice = (price * 0.5).toFixed(2);

          return (
            <div key={product.id} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-500">{product.description.split(' ').slice(0, 10).join(' ')}...</p>
              <div className="text-red-500 line-through">${price.toFixed(2)}</div>
              <span className="text-green-500 font-bold">${discountedPrice}</span>
              <Link to={`/laptops/${product.name.replace(/\s+/g, '-').toLowerCase()}`}>
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
