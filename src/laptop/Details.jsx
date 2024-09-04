import React from "react";
import { useParams } from "react-router-dom";
import Apis from "../apis/LaptopApi"; // Adjust the path as needed

const Details = () => {
  const { id } = useParams(); // Get the laptop ID from the URL params
  const laptop = Apis.find((item) => item.id === parseInt(id));

  if (!laptop) {
    return <div>Laptop not found</div>;
  }

  // Extract the original price and calculate the discounted price
  const originalPrice = parseFloat(
    laptop.priceRange.split("-")[0].replace("$", "").replace(",", "").trim()
  );
  const discountedPrice = originalPrice - originalPrice * 0.05;
  const discountedAmount = originalPrice - discountedPrice;

  return (
    <div>
      <div className="flex flex-col md:flex-row p-6 space-y-4 md:space-y-0 md:space-x-8">
        <div className="md:flex-1 flex mx-44">
          <img
            src={laptop.imageUrl}
            alt={laptop.name}
            className="w-full max-w-md border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div className="mr-64 md:flex-1">
          <h1 className="text-2xl font-semibold mb-4">{laptop.name}</h1>
          <p className="text-justify">{laptop.description}</p>
          <br />
          <hr />
          <div className="mb-4">
            <div className="flex">
              <p>Actual amount:</p>
              <p className="text-xl text-gray-600 line-through">
                ${originalPrice.toFixed(2)}
              </p>
            </div>
            <p className="text-xl text-red-600">
              Price: ${discountedPrice.toFixed(2)}
            </p>
            <p className="text-xl text-gray-600">
              You save: ${discountedAmount.toFixed(2)}
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
            </ul>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded mt-6">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
