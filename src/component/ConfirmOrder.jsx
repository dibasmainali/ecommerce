import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConfirmOrder = () => {
  // States to hold user input data and error/loading states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const [city, setCity] = useState("Kathmandu");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Access cartItems and clearCart method from the CartContext
  const { cartItems, clearCart } = useContext(CartContext);

  // Utility function to parse string prices to numerical values
  const parsePrice = (price) => {
    if (typeof price === "string") {
      price = price.replace(/[^0-9.-]+/g, "");
    }
    const parsedPrice = parseFloat(price);
    return isNaN(parsedPrice) ? 0 : parsedPrice;
  };

  // Calculate subtotal by summing up the prices of cart items
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = parsePrice(item.price);
    const itemQuantity = parseInt(item.quantity, 10) || 0;
    return total + itemPrice * itemQuantity;
  }, 0);

  // Define tax rate and calculate tax and total amounts
  const taxRate = 0.1;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  // Validation function to check phone number format
  const isValidPhoneNumber = (number) => {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(number);
  };

  // Validation function to check email format for specific domains
  const isValidEmail = (email) => {
    const emailPattern = /^[a-z][a-z0-9_.]*@(gmail|yahoo).com$/;
    return emailPattern.test(email);
  };

  // Function to handle order submission
  const handleOrderSubmit = async (e) => {
    e.preventDefault();

    // Basic validation checks
    if (
      !name ||
      !address ||
      !email ||
      !isValidEmail(email) ||
      !phoneNumber ||
      !isValidPhoneNumber(phoneNumber)
    ) {
      setError(
        "Please provide all required information correctly, including a valid email and phone number."
      );
      toast.error("Please fill out all fields correctly.");
      return;
    }

    // Clear error if validation passes
    setError("");

    // Format cart items into a readable string format
    const formattedItems = cartItems
      .map(
        (item) =>
          `${item.name} (x${item.quantity}): $${parsePrice(item.price).toFixed(
            2
          )}`
      )
      .join(", ");

    // Start loading state during the order submission
    setLoading(true);

    // Construct payload for API request
    const payload = {
      access_key: "2565719d-94e5-4b43-ab5e-d79ce9ce49fc",
      name,
      address,
      email,
      contact: phoneNumber,
      paymentMethod,
      total: total.toFixed(2),
      items: formattedItems,
    };

    // Send order data to API
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Handle success or error based on API response
      if (response.ok) {
        toast.success("Order confirmed! Thank you for your purchase.");
        setName("");
        setAddress("");
        setEmail("");
        setPhoneNumber("");
        setOrderNote("");
        setPaymentMethod("cash");
        clearCart(); // Clear cart after successful order
      } else {
        const errorData = await response.json();
        toast.error(`Order submission failed: ${errorData.message}`);
      }
    } catch (error) {
      // Handle network error
      toast.error("Network error. Please check your connection.");
    } finally {
      // End loading state after the order submission
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-2">
      {/* Toast notifications for success or error messages */}
      <ToastContainer />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Order form section */}
        <div className="lg:col-span-8 bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6">Checkout</h1>

          {/* Display error message if present */}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* General Information Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              1. General Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name Input */}
              <div className="mb-4">
                <label className="block font-medium mb-2" htmlFor="name">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border w-full p-3 rounded-md"
                  placeholder="eg: Ram Bahadur"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label className="block font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border w-full p-3 rounded-md"
                  placeholder="eg: john@gmail.com"
                  required
                />
              </div>

              {/* Phone Number Input */}
              <div className="mb-4 relative">
                <label className="block font-medium mb-2" htmlFor="phoneNumber">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="border w-full p-3 rounded-md"
                  placeholder="eg: 9862200000"
                  required
                />
              </div>

              {/* Order Note Input */}
              <div className="mb-4">
                <label className="block font-medium mb-2" htmlFor="orderNote">
                  Order Note (any message for us)
                </label>
                <input
                  id="orderNote"
                  type="text"
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  className="border w-full p-3 rounded-md"
                  placeholder="eg: I was searching for this product for so long."
                />
              </div>
            </div>
          </section>

          {/* Delivery Address Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Delivery Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* City Input */}
              <div className="mb-4">
                <label className="block font-medium mb-2" htmlFor="city">
                  City / District <span className="text-red-500">*</span>
                </label>
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="border w-full p-3 rounded-md"
                  required
                />
              </div>

              {/* Address Input */}
              <div className="mb-4">
                <label className="block font-medium mb-2" htmlFor="address">
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="border w-full p-3 rounded-md"
                  placeholder="eg: Kathmandu, Tinkune"
                  required
                />
              </div>

              {/* Landmark Input */}
              <div className="mb-4">
                <label className="block font-medium mb-2" htmlFor="landmark">
                  Landmark
                </label>
                <input
                  id="landmark"
                  type="text"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                  className="border w-full p-3 rounded-md"
                  placeholder="eg: Madan Bhandari"
                />
              </div>
            </div>
          </section>

          {/* 3. Payment Methods */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Payment Methods</h2>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="border w-full p-3 rounded-md"
            >
              <option value="cash">Cash on Delivery</option>
              <option value="creditCard">Credit Card</option>
              <option value="esewa">eSewa</option>
            </select>
          </section>
        </div>

        {/* Order Summary */}

        <div className="lg:col-span-4 bg-gray-100 p-6 rounded-lg shadow-lg">
          <div>
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <div className="max-h-96 overflow-y-auto bg-white p-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div>
                      <p className="font-medium">{item.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$ {item.price}</p>
                    <p className="text-sm text-gray-600">x {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-5"></hr>
          <div className="lg:col-span-4 bg-white p-6 rounded-lg shadow-lg">
            {/* Subtotal */}
            <div className="flex items-center justify-between font-medium mb-2">
              <p>Subtotal:</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>

            {/* Tax */}
            <div className="flex items-center justify-between font-medium mb-2">
              <p>Tax (10%):</p>
              <p>${tax.toFixed(2)}</p>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between font-bold text-xl mb-6">
              <p>Total:</p>
              <p>${total.toFixed(2)}</p>
            </div>

            {/* Confirm Order Button */}

            <button
              disabled={loading || cartItems.length === 0}
              className={`w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600${
                loading ? "cursor-not-allowed" : "hover:bg-blue-600"
              }`}
              onClick={handleOrderSubmit}
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
