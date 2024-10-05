import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

// Utility function to parse the price and return a float value
const parsePrice = (price) => {
  if (typeof price === "string") {
    price = price.replace(/[^0-9.-]+/g, ""); // Remove non-numeric characters
  }
  const parsed = parseFloat(price);
  return isNaN(parsed) ? 0 : Math.floor(parsed);
};

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext); // Access cart context
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Store cart items in localStorage whenever they are updated
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // If cart is empty, show a message
  if (!cartItems || cartItems.length === 0) {
    return <div className="p-6 text-center text-xl">Your cart is empty.</div>;
  }

  // Format the price to USD currency
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  // Calculate the subtotal by summing up the price * quantity for each item
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = parsePrice(item.price);
    const itemQuantity = parseInt(item.quantity, 10) || 0;
    return total + itemPrice * itemQuantity;
  }, 0);

  const handleIncrease = (item) => {
    updateQuantity(item.id, item.quantity + 1); // Increase item quantity
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1); // Decrease item quantity
    }
  };

  const discount = 0; // Placeholder for potential discount logic
  const taxRate = 0.1; // 10% tax rate
  const tax = (subtotal * taxRate).toFixed(2);
  const total = (subtotal - discount + parseFloat(tax)).toFixed(2); // Calculate total price

  // Handle item removal from the cart with a loading state and feedback message
  const handleRemoveItem = async (itemId) => {
    setLoading(true);
    await removeFromCart(itemId);
    setLoading(false);
    setMessage("Item removed from cart!");
    setTimeout(() => setMessage(""), 4000); // Clear the message after 4 seconds
  };

  return (
    <div className="p-2 flex flex-col md:flex-row">
      {/* Cart items section */}
      <div className="w-full md:w-2/3 mr-4">
        <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
        {message && (
          <div className="bg-green-100 text-green-600 p-2 mb-4">{message}</div>
        )}
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="lg:flex lg:justify-between items-center border-b pb-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p>{formatPrice(parsePrice(item.price))}</p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3">
                  <div className="flex items-center space-x-4 ml-4">
                    <div>
                      <strong>Quantity:</strong>
                    </div>
                    {/* Decrease quantity button */}
                    <button
                      onClick={() => handleDecrease(item)}
                      className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-l"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    {/* Increase quantity button */}
                    <button
                      onClick={() => handleIncrease(item)}
                      className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-r"
                    >
                      +
                    </button>

                    {/* Display price for the current item based on quantity */}
                    <p>{formatPrice(parsePrice(item.price) * item.quantity)}</p>
                  </div>

                  {/* Remove item button */}
                  <div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Order summary section */}
      <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount:</span>
            <span>{formatPrice(discount)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (10%):</span>
            <span>{formatPrice(parseFloat(tax))}</span>
          </div>
          <div className="flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>{formatPrice(total)}</span>
          </div>
          {/* Checkout button */}
          <Link to="/order-confirmation">
            <button
              disabled={cartItems.length === 0}
              className={`bg-green-500 hover:bg-green-600 w-full text-white py-2 mt-4 rounded ${
                cartItems.length === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Checkout
            </button>
          </Link>
          {/* Back to Shop button */}
          <Link to="/">
            <button className="bg-gray-500 hover:bg-gray-600 w-full text-white py-2 mt-2 rounded">
              Back to Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
