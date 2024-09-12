import React from "react";

function MobileSpecification({ mobile }) {
  return (
    <div className="sm:ml-1">
      <h2 className="text-3xl underline mb-4 lg:ml-40 sm:ml-2">
        Specification
      </h2>
      <div className="mt-8 lg:ml-20 sm:ml-1 flex flex-wrap">
        <div>
          <ul className="list-none space-y-2">
            <li>
              <strong>Name:</strong> {mobile.name}
            </li>
            <li>
              <strong>Price Range:</strong> {mobile.priceRange}
            </li>
            <li>
              <strong>Screen Size:</strong> {mobile.screenSize}
            </li>
            <li>
              <strong>Display Type:</strong> {mobile.displayType}
            </li>
            <li>
              <strong>Storage Capacity:</strong> {mobile.storageCapacity}
            </li>
            <li>
              <strong>RAM:</strong> {mobile.ram}
            </li>
            <li>
              <strong>Processor:</strong> {mobile.processor}
            </li>
            <li>
              <strong>Battery Capacity:</strong> {mobile.batteryCapacity}
            </li>
            <li>
              <strong>Charging:</strong> {mobile.charging}
            </li>
            <li>
              <strong>Weight:</strong> {mobile.weight}
            </li>
            <li>
              <strong>Colors:</strong> {mobile.colors.join(", ")}
            </li>
            <li>
              <strong>Material:</strong> {mobile.material}
            </li>
            <li>
              <strong>Water Resistance:</strong> {mobile.waterResistance}
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-none space-y-2">
            <li>
              <strong>SIM Type:</strong> {mobile.simType}
            </li>
            <li>
              <strong>Main Camera:</strong> {mobile.camera.mainCamera}
            </li>
            <li>
              <strong>Selfie Camera:</strong> {mobile.camera.selfieCamera}
            </li>
            <li>
              <strong>Camera Features:</strong> {mobile.camera.features}
            </li>
            <li>
              <strong>Video Capabilities:</strong> {mobile.camera.video}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileSpecification;
