// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <img 
//             src="https://dypdvfcjkqkg2.cloudfront.net/large/279735-7872.jpg" 
//             alt="Tech Store Logo" 
//             className="h-12 w-12 mr-4" 
//           />
//           <h1 className="text-4xl font-bold">Tech Store</h1>
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//             </svg>
//           </button>
//         </div>
//         <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
//           <Link to="/" className="block md:inline-block text-lg mx-4 hover:underline">Home</Link>
//           <Link to="/laptops" className="block md:inline-block text-lg mx-4 hover:underline">Laptops</Link>
//           <Link to="/mobiles" className="block md:inline-block text-lg mx-4 hover:underline">Mobiles</Link>
//           <Link to="/monitors" className="block md:inline-block text-lg mx-4 hover:underline">Monitors</Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
        <nav className="hidden md:flex md:items-center">
          <Link to="/" className="text-lg mx-4 hover:underline">Home</Link>
          <Link to="/laptops" className="text-lg mx-4 hover:underline">Laptops</Link>
          <Link to="/mobiles" className="text-lg mx-4 hover:underline">Mobiles</Link>
          <Link to="/monitors" className="text-lg mx-4 hover:underline">Monitors</Link>
        </nav>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50">
          <button onClick={toggleMenu} className="absolute top-4 right-4 focus:outline-none">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <nav className="flex flex-col items-center space-y-4">
            <Link to="/" className="text-2xl text-white hover:underline" onClick={toggleMenu}>Home</Link>
            <Link to="/laptops" className="text-2xl text-white hover:underline" onClick={toggleMenu}>Laptops</Link>
            <Link to="/mobiles" className="text-2xl text-white hover:underline" onClick={toggleMenu}>Mobiles</Link>
            <Link to="/monitors" className="text-2xl text-white hover:underline" onClick={toggleMenu}>Monitors</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
