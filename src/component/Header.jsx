import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartContext'; // Import CartContext

const Header = () => {
  const { cartItems } = useContext(CartContext); // Access cartItems from context

  // Calculate total number of items in the cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Disable scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrMwmvwMMgoMRQJMHeMDWnWPrr3WzuWILAA&s" 
            alt="Tech Store Logo" 
            className="h-12 w-12 mr-4" 
          />
          <h1 className="text-4xl font-bold">Tech Store</h1>
        </div>
        <div className="hidden md:flex md:items-center space-x-4">
          <Link to="/" className="text-lg hover:underline">Home</Link>
          <Link to="/laptops" className="text-lg hover:underline">Laptops</Link>
          <Link to="/mobiles" className="text-lg hover:underline">Mobiles</Link>
          <Link to="/monitors" className="text-lg hover:underline">Monitors</Link>
        </div>
        <div className="hidden md:flex md:items-center">
          <Link to="/cart" className="text-lg hover:underline flex items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6 mr-2" />
            Cart ({cartItemCount}) {/* Display dynamic cart count */}
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50">
          <button onClick={toggleMenu} className="absolute top-4 right-4 focus:outline-none">
            <FontAwesomeIcon icon={faTimes} className="w-8 h-8 text-white" />
          </button>
          <nav className="flex flex-col items-center space-y-4">
            <Link to="/" className="text-2xl text-white hover:underline" onClick={toggleMenu}>Home</Link>
            <Link to="/laptops" className="text-2xl text-white hover:underline" onClick={toggleMenu}>Laptops</Link>
            <Link to="/mobiles" className="text-2xl text-white hover:underline" onClick={toggleMenu}>Mobiles</Link>
            <Link to="/monitors" className="text-2xl text-white hover:underline" onClick={toggleMenu}>Monitors</Link>
            <Link to="/cart" className="text-2xl text-white hover:underline" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faShoppingCart} className="w-8 h-8 mr-2" />
              Cart ({cartItemCount}) {/* Display dynamic cart count */}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
