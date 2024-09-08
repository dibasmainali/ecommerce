import React from "react";

function Specification({ laptop }) {
  return (
    <div>
      <hr className="m-10"></hr>
      <h2 className="text-3xl underline mb-4 ml-40">Specification</h2>
      <div className="mt-8 ml-20 flex">
        <div>
          <ul className="list-none space-y-2">
            <li>
              <strong>Brand:</strong> {laptop.brand}
            </li>
            <li>
              <strong>Series:</strong> {laptop.series}
            </li>
            <li>
              <strong>Type:</strong> {laptop.type}
            </li>
            <li>
              <strong>Processor:</strong> {laptop.processorDetails}
            </li>
            <li>
              <strong>Graphics:</strong> {laptop.graphicsDetails}
            </li>
            <li>
              <strong>Chipset:</strong> {laptop.chipset}
            </li>
            <li>
              <strong>Memory:</strong> {laptop.memory}
            </li>
            <li>
              <strong>Memory Slots:</strong> {laptop.memorySlots}
            </li>
            <li>
              <strong>Max Memory:</strong> {laptop.maxMemory}
            </li>
            <li>
              <strong>Storage:</strong> {laptop.storage}
            </li>
            <li>
              <strong>Storage Support:</strong> {laptop.storageSupport}
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-none space-y-2">
            <li>
              <strong>Storage Slot:</strong> {laptop.storageSlot}
            </li>
            <li>
              <strong>Card Reader:</strong> {laptop.cardReader}
            </li>
            <li>
              <strong>Optical:</strong> {laptop.optical}
            </li>
            <li>
              <strong>Audio Chip:</strong> {laptop.audioChip}
            </li>
            <li>
              <strong>Speakers:</strong> {laptop.speakers}
            </li>
            <li>
              <strong>Camera:</strong> {laptop.camera}
            </li>
            <li>
              <strong>Microphone:</strong> {laptop.microphone}
            </li>
            <li>
              <strong>Battery:</strong> {laptop.battery}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Specification;
