import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold">Tech Store</h2>
          <p className="text-sm">© 2024 Tech Store. All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Support</h3>
          <ul>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/payment-options" className="hover:underline">Payment Options</Link></li>
            <li><Link to="/find-store" className="hover:underline">Find our store</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">links</h3>
          <ul>
            <li><Link to="/" className="hover:underline">Homes</Link></li>
            <li><Link to="/laptops" className="hover:underline">Laptops</Link></li>
            <li><Link to="/mobiles" className="hover:underline">Mobiles</Link></li>
            <li><Link to="/monitors" className="hover:underline">Monitors</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
          <ul>
            <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/refund-policy" className="hover:underline">Refund & Return Policy</Link></li>
            <li><Link to="/terms-conditions" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center mt-8">
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        <div className="mt-4 md:mt-0">
          <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
          <form>
            <input type="email" placeholder="Your email address" className="p-2 rounded-l-lg" />
            <button type="submit" className="bg-blue-500 p-2 rounded-r-lg">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
