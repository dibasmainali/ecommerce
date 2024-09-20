// import React, { useState, useContext } from 'react';
// import { CartContext } from './CartContext'; // Assuming CartContext exists and provides cartItems

// const ConfirmOrder = () => {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('credit_card');

//   // Get cartItems from CartContext
//   const { cartItems } = useContext(CartContext);

//   // Calculate subtotal from cart items
//   const subtotal = cartItems.reduce((total, item) => {
//     const itemPrice = parseFloat(item.price) || 0;
//     const itemQuantity = parseInt(item.quantity, 10) || 0;
//     return total + itemPrice * itemQuantity;
//   }, 0);

//   // Set tax rate and calculate tax and total
//   const taxRate = 0.1; // 10% tax
//   const tax = subtotal * taxRate;
//   const total = subtotal + tax;

//   const handleOrderSubmit = (e) => {
//     e.preventDefault();
//     // Process order details, such as sending it to the backend
//     console.log('Order confirmed:', { name, address, paymentMethod, total });
//     // You can redirect or show a success message here
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-8">Confirm Your Order</h1>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Order Form Section */}
//         <div className="bg-white shadow-lg p-6 rounded-lg">
//           <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>

//           <form onSubmit={handleOrderSubmit}>
//             <div className="mb-6">
//               <label className="block text-lg font-medium mb-2">Full Name</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//                 placeholder="Enter your full name"
//                 required
//               />
//             </div>

//             <div className="mb-6">
//               <label className="block text-lg font-medium mb-2">Address</label>
//               <textarea
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//                 placeholder="Enter your shipping address"
//                 rows="4"
//                 required
//               />
//             </div>

//             <div className="mb-6">
//               <label className="block text-lg font-medium mb-2">Payment Method</label>
//               <select
//                 value={paymentMethod}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//                 className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//               >
//                 <option value="cash">Cash</option>
//                 <option value="credit_card">Credit Card</option>
//                 <option value="esewa">esewa</option>
//               </select>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white p-3 rounded-lg font-bold text-lg hover:bg-indigo-700 transition mt-4"
//             >
//               Confirm Order
//             </button>
//           </form>
//         </div>

//         {/* Order Summary Section */}
//         <div className="bg-gray-100 shadow-lg p-6 rounded-lg">
//           <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

//           <div className="mb-4">
//             {cartItems.map((item, index) => (
//               <div key={index} className="flex justify-between items-center mb-2">
//                 <span className="text-lg">{item.name}</span>
//                 <span className="text-lg font-bold">
//                   ${parseFloat(item.price).toFixed(2)} x {item.quantity}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <div className="border-t border-gray-300 mt-4 pt-4">
//             <div className="flex justify-between mb-2">
//               <span className="text-lg">Subtotal:</span>
//               <span className="text-lg">${subtotal.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span className="text-lg">Tax (10%):</span>
//               <span className="text-lg">${tax.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between font-bold text-xl">
//               <span>Total:</span>
//               <span>${total.toFixed(2)}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConfirmOrder;
import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext'; // Assuming CartContext exists and provides cartItems

const ConfirmOrder = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash on delivery');
  const [error, setError] = useState('');

  // Get cartItems from CartContext
  const { cartItems } = useContext(CartContext);

  // Calculate subtotal from cart items
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, '')) || 0; // Clean and parse price
    const itemQuantity = parseInt(item.quantity, 10) || 0;
    return total + itemPrice * itemQuantity;
  }, 0);

  // Set tax rate and calculate tax and total
  const taxRate = 0.1; // 10% tax
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (!name || !address) {
      setError('Please provide both name and address.');
      return;
    }

    // Clear error if all fields are valid
    setError('');

    // Process order details
    console.log('Order confirmed:', { name, address, paymentMethod, total });

    // Optionally reset form after submission
    setName('');
    setAddress('');
    setPaymentMethod('Cash on delivery');

    // Show a success message
    alert('Order confirmed! Thank you for your purchase.');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Confirm Your Order</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Form Section */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleOrderSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-medium mb-2">Full Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="address" className="block text-lg font-medium mb-2">Address</label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="Enter your shipping address"
                rows="4"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="paymentMethod" className="block text-lg font-medium mb-2">Payment Method</label>
              <select
                id="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              >
                <option value="cash">Cash on delivery</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-lg font-bold text-lg hover:bg-indigo-700 transition mt-4"
            >
              Confirm Order
            </button>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="bg-gray-100 shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

          {cartItems.length === 0 ? (
            <p className="text-lg">Your cart is empty</p>
          ) : (
            <div className="mb-4">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-2">
                  <span className="text-lg">{item.name}</span>
                  <span className="text-lg font-bold">
                    ${parseFloat(item.price.replace(/[^0-9.-]+/g, '')).toFixed(2)} x {item.quantity}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="border-t border-gray-300 mt-4 pt-4">
            <div className="flex justify-between mb-2">
              <span className="text-lg">Subtotal:</span>
              <span className="text-lg">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-lg">Tax (10%):</span>
              <span className="text-lg">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-xl">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
