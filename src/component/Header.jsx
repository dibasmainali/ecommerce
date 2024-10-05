
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartContext';

const Header = () => {
  const { cartItems } = useContext(CartContext);

  // State for controlling menus
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false); // State for product dropdown in desktop
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false); // State for product dropdown in mobile

  // Toggle for mobile main menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle for product dropdown (desktop)
  const toggleProductDropdown = () => {
    setIsProductOpen(!isProductOpen);
  };

  // Toggle for product dropdown (mobile)
  const toggleMobileProductDropdown = () => {
    setIsMobileProductOpen(!isMobileProductOpen);
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
    <header className="header bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 md:p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Store Name */}
        <div className="flex items-center">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrMwmvwMMgoMRQJMHeMDWnWPrr3WzuWILAA&s" 
            alt="Tech Store Logo" 
            className="h-10 w-10 md:h-12 md:w-12 mr-2 md:mr-4" 
          />
          <h1 className="text-2xl md:text-4xl font-bold">Tech Store</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center space-x-6">
          <Link to="/" className="text-lg hover:underline">Home</Link>
          
          {/* Product Dropdown (Desktop) */}
          <div className="relative">
            <button 
              onClick={toggleProductDropdown} 
              className="flex items-center text-lg hover:underline focus:outline-none"
            >
              Product
              <FontAwesomeIcon icon={faChevronDown} className="ml-1 w-4 h-4" />
            </button>

            {/* Dropdown Menu (Desktop) */}
            {isProductOpen && (
             <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-20">
             <Link 
               to="/laptops" 
               className="relative block px-4 py-2 overflow-hidden group"
               onClick={() => setIsProductOpen(false)}
             >
               {/* Diagonal background on hover */}
               <span className="absolute inset-0 bg-blue-500 transform -translate-x-full translate-y-full rotate-45 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 transition-transform duration-500 ease-in-out"></span>
               {/* Text */}
               <span className="relative z-10 text-black group-hover:text-white">Laptops</span>
             </Link>
             <Link 
               to="/mobiles" 
               className="relative block px-4 py-2 overflow-hidden group"
               onClick={() => setIsProductOpen(false)}
             >
               <span className="absolute inset-0 bg-blue-500 transform -translate-x-full translate-y-full rotate-45 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 transition-transform duration-500 ease-in-out"></span>
               <span className="relative z-10 text-black group-hover:text-white">Mobiles</span>
             </Link>
             <Link 
               to="/monitors" 
               className="relative block px-4 py-2 overflow-hidden group"
               onClick={() => setIsProductOpen(false)}
             >
               <span className="absolute inset-0 bg-blue-500 transform -translate-x-full translate-y-full rotate-45 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 transition-transform duration-500 ease-in-out"></span>
               <span className="relative z-10 text-black group-hover:text-white">Monitors</span>
             </Link>
             <Link 
               to="/keyboard&Mouse" 
               className="relative block px-4 py-2 overflow-hidden group"
               onClick={() => setIsProductOpen(false)}
             >
               <span className="absolute inset-0 bg-blue-500 transform -translate-x-full translate-y-full rotate-45 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 transition-transform duration-500 ease-in-out"></span>
               <span className="relative z-10 text-black group-hover:text-white">Keyboard&Mouse</span>
             </Link>
           </div>
           
            )}
          </div>

          <Link to="/About-us" className="text-lg hover:underline">About Us</Link>
          <Link to="/contact-us" className="text-lg hover:underline">Contact Us</Link>
        </nav>

        {/* Desktop Cart */}
        <div className="hidden md:flex md:items-center">
          <Link to="/cart" className="text-lg hover:underline flex items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6 mr-2" />
            Cart ({cartItemCount})
          </Link>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50">
          <button onClick={toggleMenu} className="absolute top-4 right-4 focus:outline-none">
            <FontAwesomeIcon icon={faTimes} className="w-8 h-8 text-white" />
          </button>
          <nav className="flex flex-col items-center space-y-6">
            <Link to="/" className="text-2xl text-white hover:underline" onClick={toggleMenu}>Home</Link>
            
            {/* Mobile Product Dropdown */}
            <div className="flex flex-col items-center space-y-4">
              <button 
                onClick={toggleMobileProductDropdown} 
                className="flex items-center text-2xl text-white hover:underline focus:outline-none"
              >
                Product
                <FontAwesomeIcon icon={faChevronDown} className="ml-2 w-4 h-4" />
              </button>

              {/* Mobile Dropdown Menu */}
              {isMobileProductOpen && (
                <div className="flex flex-col items-center mt-2 space-y-4">
                  <Link 
                    to="/laptops" 
                    className="text-xl text-white hover:underline"
                    onClick={() => { toggleMenu(); setIsMobileProductOpen(false); }}
                  >
                    Laptops
                  </Link>
                  <Link 
                    to="/mobiles" 
                    className="text-xl text-white hover:underline"
                    onClick={() => { toggleMenu(); setIsMobileProductOpen(false); }}
                  >
                    Mobiles
                  </Link>
                  <Link 
                    to="/monitors" 
                    className="text-xl text-white hover:underline"
                    onClick={() => { toggleMenu(); setIsMobileProductOpen(false); }}
                  >
                    Monitors
                  </Link>
                  <Link 
                    to="/Keyboar&dMouse" 
                    className="text-xl text-white hover:underline"
                    onClick={() => { toggleMenu(); setIsMobileProductOpen(false); }}
                  >
                    Keyboard&Mouse
                  </Link>
                </div>
              )}
            </div>

            <Link to="/About-Us" className="text-2xl text-white hover:underline" onClick={toggleMenu}>About Us</Link>
            <Link to="/contact-us" className="text-2xl text-white hover:underline" onClick={toggleMenu}>Contact Us</Link>
            
            <Link to="/cart" className="text-2xl text-white hover:underline flex items-center" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faShoppingCart} className="w-8 h-8 mr-2" />
              Cart ({cartItemCount})
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
