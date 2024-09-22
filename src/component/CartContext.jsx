import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load cart items from localStorage or initialize as an empty array
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Persist cart items in localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add an item to the cart
  const addToCart = (newItem) => {
    if (newItem.quantity <= 0) return; // Guard against adding invalid quantity

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        // Update quantity of the existing item
        return prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        // Add new item to cart
        return [...prevItems, newItem];
      }
    });
  };

  // Function to remove an item from the cart based on its ID
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to update the quantity of an item
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) return; // Guard against invalid quantities

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]); // Clear state
    localStorage.removeItem("cartItems"); // Also clear from localStorage
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
