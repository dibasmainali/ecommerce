// import React, { useContext, useEffect, useState } from "react";
// import { CartContext } from "./CartContext";
// import { Link } from "react-router-dom";

// const parsePrice = (price) => {
//   // Check if price is a string, if so, remove non-numeric characters
//   if (typeof price === "string") {
//     price = price.replace(/[^0-9.-]+/g, "");
//   }
//   // Ensure the price is converted to an integer using Math.floor (or another rounding method)
//   const parsed = parseFloat(price);
//   return isNaN(parsed) ? 0 : Math.floor(parsed);
// };

// const Cart = () => {
//   const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   // Handle cases where the cart is empty
//   if (!cartItems || cartItems.length === 0) {
//     return <div className="p-6 text-center text-xl">Your cart is empty.</div>;
//   }

//   // Function to format prices as currency
//   const formatPrice = (price) =>
//     new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//     }).format(price);

//   // Calculate subtotal, tax, and total
//   const subtotal = cartItems
//     .reduce((total, item) => {
//       const itemPrice = parsePrice(item.price);
//       const itemQuantity = parseInt(item.quantity, 10) || 0;
//       return total + itemPrice * itemQuantity;
//     }, 0)
//     .toFixed(2);

//   const discount = 0; // Add discount logic if needed
//   const taxRate = 0.1; // 10% tax
//   const tax = (subtotal * taxRate).toFixed(2);
//   const total = (subtotal - discount + parseFloat(tax)).toFixed(2);

//   // Handle removing items from the cart
//   const handleRemoveItem = async (itemId) => {
//     setLoading(true);
//     await removeFromCart(itemId);
//     setLoading(false);
//     setMessage("Item removed from cart!");
//     setTimeout(() => setMessage(""), 3000);
//   };
//   return (
//     <div className="p-6 flex flex-col md:flex-row">
//       {/* Left section: Cart items */}
//       <div className="w-full md:w-2/3 mr-4">
//         <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
//         {message && (
//           <div className="bg-green-100 text-green-600 p-2 mb-4">{message}</div>
//         )}
//         {loading ? (
//           <div className="text-center">Loading...</div>
//         ) : (
//           <ul className="space-y-4">
//             {cartItems.map((item) => (
//               <li
//                 key={item.id} // Use a unique identifier here
//                 className="lg:flex lg:justify-between items-center border-b pb-4"
//               >
//                 <div className="flex items-center space-x-4">
//                   <img
//                     src={item.imageUrl}
//                     alt={item.name}
//                     className="w-16 h-16 object-cover rounded"
//                   />
//                   <div>
//                     <h3 className="text-lg font-semibold">{item.name}</h3>
//                     <p>{formatPrice(item.price)}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-4 ml-4">
//                   <span>Quantity</span>
//                   <select
//                     className="border px-2 py-1"
//                     value={item.quantity}
//                     onChange={(e) =>
//                       updateQuantity(item.id, parseInt(e.target.value, 10))
//                     }
//                   >
//                     {[...Array(10).keys()].map((i) => (
//                       <option key={i + 1} value={i + 1}>
//                         {i + 1}
//                       </option>
//                     ))}
//                   </select>
//                   <p>{formatPrice(item.price * item.quantity)}</p>
//                   <button
//                     onClick={() => handleRemoveItem(item.id)}
//                     className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Right section: Order summary */}
//       <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg">
//         <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//         <div className="space-y-2">
//           <div className="flex justify-between">
//             <span>Subtotal:</span>
//             <span>{formatPrice(subtotal)}</span>
//           </div>
//           <div className="flex justify-between text-green-600">
//             <span>Discount:</span>
//             <span>{formatPrice(discount)}</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Tax (10%):</span>
//             <span>{formatPrice(tax)}</span>
//           </div>
//           <div className="flex justify-between text-xl font-bold">
//             <span>Total:</span>
//             <span>{formatPrice(total)}</span>
//           </div>
//           <Link to="/order-confirmation">
//             <button
//               disabled={cartItems.length === 0}
//               className={`bg-green-500 hover:bg-green-600 w-full text-white py-2 mt-4 rounded ${
//                 cartItems.length === 0 ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               Make Purchase
//             </button>
//           </Link>
//           <Link to="/shop">
//             <button className="bg-gray-500 hover:bg-gray-600 w-full text-white py-2 mt-2 rounded">
//               Back to Shop
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const parsePrice = (price) => {
  if (typeof price === "string") {
    price = price.replace(/[^0-9.-]+/g, "");
  }
  const parsed = parseFloat(price);
  return isNaN(parsed) ? 0 : Math.floor(parsed);
};

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  if (!cartItems || cartItems.length === 0) {
    return <div className="p-6 text-center text-xl">Your cart is empty.</div>;
  }

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

  const discount = 0; // Add discount logic if needed
  const taxRate = 0.1; // 10% tax
  const tax = (subtotal * taxRate).toFixed(2);
  const total = (subtotal - discount + parseFloat(tax)).toFixed(2);

  const handleRemoveItem = async (itemId) => {
    setLoading(true);
    await removeFromCart(itemId);
    setLoading(false);
    setMessage("Item removed from cart!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="p-6 flex flex-col md:flex-row">
      <div className="w-full md:w-2/3 mr-4">
        <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
        {message && (
          <div className="bg-green-100 text-green-600 p-2 mb-4">{message}</div>
        )}
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item,index) => (
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
                    <p>{formatPrice(item.price.replace(/[^0-9.-]+/g, ""))}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 ml-4">
                  <span>Quantity</span>
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
                    onClick={() => handleRemoveItem(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

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
            <span>{formatPrice(tax)}</span>
          </div>
          <div className="flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>{formatPrice(total)}</span>
          </div>
          <Link to="/order-confirmation">
            <button
              disabled={cartItems.length === 0}
              className={`bg-green-500 hover:bg-green-600 w-full text-white py-2 mt-4 rounded ${
                cartItems.length === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Make Purchase
            </button>
          </Link>
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
