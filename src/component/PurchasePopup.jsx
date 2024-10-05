import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation for detecting current route
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PurchasePopup = () => {
  const location = useLocation(); // Get the current route

  // Sample list of customers and products
  const customers = [
    "Dibas mainali",
    "Pratik sharma",
    "Kapish sha",
    "Manik bro",
    "Utsav acharya",
    "Sameer sir",
    "Ram sir",
  ];
  const products = [
    "Laptop",
    "Phone",
    "Tablet",
    "Monitor",
    "Phone",
    "Laptop",
    "Monitor",
    "Phone",
    "Phone",
    "Monitor",
    "Laptop",
    "Tablet",
    "Monitor",
    "Phone",
    "Tablet",
  ];

  // Function to generate random popup message
  const showRandomToast = () => {
    // Clear existing toasts
    toast.dismiss();

    const randomCustomer =
      customers[Math.floor(Math.random() * customers.length)];
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const message = `${randomCustomer} just bought a ${randomProduct}!`;

    toast.success(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "text-xs md:text-sm p-1 md:p-4", // Combined class names
    });
  };

  // Show popup every 3 seconds, except on the cart and soo on
  useEffect(() => {
    if (
      location.pathname !== "/cart" &&
      location.pathname !== "/order-confirmation" &&
      location.pathname !== "/About-Us" &&
      location.pathname !== "/contact-us"
    ) {
      const interval = setInterval(() => {
        showRandomToast();
      }, 6000);

      // Clear interval when component unmounts or path changes
      return () => {
        clearInterval(interval);
        toast.dismiss(); // Clear all toasts
      };
    }
  }, [location.pathname]); // Run effect only when location changes

  return (
    <div>
      <ToastContainer
        limit={1} // Limit the number of toasts displayed at once
        className="w-52 sm:w-64 md:w-80 lg:w-96 text-xs" // Responsive width for the toast container
      />
    </div>
  );
};

export default PurchasePopup;
