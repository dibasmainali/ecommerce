import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (!cartItems || cartItems.length === 0) {
    return <div className="p-6 text-center text-xl">Your cart is empty.</div>;
  }

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul className="space-y-4">
        {cartItems.map((item, index) => (
          <li key={index} className="flex justify-between items-center border-b pb-4">
            <div className="flex items-center space-x-4">
              <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>{formatPrice(item.price)}</p> {/* Assuming `price` is correct */}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <p>Quantity: {item.quantity}</p>
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
  );
};

export default Cart;
