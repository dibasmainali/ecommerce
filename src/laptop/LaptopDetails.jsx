import React from "react";
import { useParams } from "react-router-dom";
import LaptopApis from "../apis/LaptopApi";
import Breadcrumb from "../component/Breadcrumb";
import Specification from "./Specification";

const LaptopDetails = () => {
  const { name } = useParams();
  const decodedName = name.replace(/-/g, ' '); // Replace hyphens with spaces

  const laptop = LaptopApis.find(
    (item) => item.name.toLowerCase() === decodedName.toLowerCase()
  );

  if (!laptop) {
    return <div>Laptop not found</div>;
  }

  // Safely handle price extraction and calculation
  const priceRange = laptop.priceRange
    .split("-")[0]
    .replace("$", "")
    .replace(",", "")
    .trim();
  const originalPrice = parseFloat(priceRange) || 0;
  const discountedPrice = originalPrice - originalPrice * 0.05;
  const discountedAmount = originalPrice - discountedPrice;
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  return (
    <div className="p-6">
      <Breadcrumb itemName={laptop.name} />

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2 mx-auto md:mx-0 mt-24">
          <img
            src={laptop.imageUrl}
            alt={laptop.name}
            className="w-full max-w-md border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">{laptop.name}</h1>
          <p className="text-justify mb-4">{laptop.description}</p>

          <hr className="mb-4" />

          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <p className="font-semibold">Actual amount:</p>
              <p className="text-xl text-gray-600 line-through">
                {formatPrice(originalPrice)}
              </p>
            </div>
            <p className="text-xl text-red-600 font-semibold">
              Price: {formatPrice(discountedPrice)}
            </p>
            <p className="text-xl text-gray-600">
              You save: {formatPrice(discountedAmount)}
              <span className="text-red-600"> (5%)</span>
            </p>
          </div>

          <div className="space-y-2">
            <ul className="list-none">
              <li>
                <strong>Screen Size:</strong> {laptop.screenSize}
              </li>
              <li>
                <strong>Storage Capacity:</strong> {laptop.storageCapacity}
              </li>
              <li>
                <strong>Processor:</strong> {laptop.processor}
              </li>
              <li>
                <strong>Graphics:</strong> {laptop.graphics}
              </li>
              <li>
                <strong>Operating System:</strong> {laptop.os}
              </li>
              <li>
                <strong>Color:</strong> {laptop.color}
              </li>
              <li>
                <strong>Warranty:</strong> {laptop.warranty}
              </li>
            </ul>
          </div>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded mt-6">
            Add to Cart
          </button>
        </div>
      </div>

      <Specification laptop={laptop} />
    </div>
  );
};

export default LaptopDetails;
