import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const parsePrice = (price) => {
  // Check if price is a string, if so, remove non-numeric characters
  if (typeof price === "string") {
    price = price.replace(/[^0-9.-]+/g, "");
  }
  // Ensure the price is converted to an integer using Math.floor (or another rounding method)
  return Math.floor(parseFloat(price) || 0);
};

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  if (!cartItems || cartItems.length === 0) {
    return <div className="p-6 text-center text-xl">Your cart is empty.</div>;
  }

  // Format price function
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = parsePrice(item.price);
    const itemQuantity = parseInt(item.quantity, 10) || 0;
    return total + itemPrice * itemQuantity;
  }, 0);

  const discount = 0;
  const tax = 14;
  const total = subtotal - discount + tax;

  return (
    <div className="p-6 flex flex-col md:flex-row">
      {/* Left section: Cart items */}
      <div className="w-full md:w-2/3 mr-4">
        <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b pb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p>{formatPrice(parsePrice(item.price))}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {/* Quantity selection dropdown */}
                <select
                  className="border px-2 py-1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value, 10))
                  }
                >
                  {[...Array(10).keys()].map((i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <p>{formatPrice(parsePrice(item.price) * item.quantity)}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right section: Order summary */}
      <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount:</span>
            <span>-{formatPrice(discount)}</span>
          </div>
          <div className="flex justify-between">
            <span>TAX:</span>
            <span>{formatPrice(tax)}</span>
          </div>
          <div className="flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>{formatPrice(total)}</span>
          </div>
          <button className="bg-green-500 hover:bg-green-600 w-full text-white py-2 mt-4 rounded">
            Make Purchase
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 w-full text-white py-2 mt-2 rounded">
            Back to shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
