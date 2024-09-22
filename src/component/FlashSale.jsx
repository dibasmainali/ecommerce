
import React from "react";
import LaptopApis from "../apis/LaptopApi";
import MobileApis from "../apis/MobileApis";
import MonitorApis from "../apis/MonitorApis";

const FlashSale = () => {
  // Extract a few products from each API
  const laptopProducts = LaptopApis.slice(0, 2); // Take 2 products
  const mobileProducts = MobileApis.slice(0, 2); // Take 2 products
  const monitorProducts = MonitorApis.slice(0, 2); // Take 2 products

  // Combine the products into one array
  const flashSaleProducts = [
    ...laptopProducts,
    ...mobileProducts,
    ...monitorProducts,
  ];

  // Function to truncate description
  const truncateDescription = (description) => {
    const words = description.split(" ");
    return words.length > 10
      ? words.slice(0, 10).join(" ") + "..."
      : description;
  };

  return (
    <div className="bg-blue-100 p-4 rounded-lg mb-8 text-center">
      <div>
        <img
          src="https://media.istockphoto.com/id/1401375760/vector/flash-sale-limited-time-banner.jpg?s=612x612&w=0&k=20&c=l4jsKGP3ZIAy-pji4hsbedL_dVZOaPiWfYNocwVMRhQ="
          alt="Flash Sale Banner"
          className="w-full h-auto mx-auto mb-6"
        />
      </div>
      <h2 className="text-3xl font-bold text-black mb-4">
        Flash Sale - Limited Time Offer!
      </h2>
      <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 gap-10 scrollbar-track-gray-200">
        {flashSaleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex-shrink-0 w-64"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-500">
              {truncateDescription(product.description)}
            </p>
            <div className="text-red-500 line-through">
              ${product.price.replace(",", "")}
            </div>
            <span className="text-green-500 font-bold">
              ${(product.price.replace(",", "") * 0.5).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
