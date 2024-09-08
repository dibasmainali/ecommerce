
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './Home';
// import Laptop from './laptop/Laptops';
// import LaptopDetails from './laptop/LaptopDetails';
// import Mobiles from './mobile/Mobiles';
// import MobilesDetails from './mobile/MobilesDetails';
// import Monitor from './monitor/Monitors';
// import MonitorDetails from './monitor/MonitorDetails';
// import Footer from './component/Footer';  // Import the Footer component

// const App = () => {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
//         <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 shadow-lg">
//           <div className="container mx-auto flex justify-between items-center">
//             <h1 className="text-4xl font-bold">Tech Store</h1>
//             <nav>
//               <Link to="/" className="text-lg mx-4 hover:underline">Home</Link>
//               <Link to="/laptops" className="text-lg mx-4 hover:underline">Laptops</Link>
//               <Link to="/mobiles" className="text-lg mx-4 hover:underline">Mobiles</Link>
//               <Link to="/monitors" className="text-lg mx-4 hover:underline">Monitors</Link>
//             </nav>
//           </div>
//         </header>

//         <main className="container mx-auto p-6 flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/laptops" element={<Laptop />} />
//             <Route path="/laptops/:name" element={<LaptopDetails />} />
//             <Route path="/mobiles" element={<Mobiles />} />
//             <Route path="/mobiles/:name" element={<MobilesDetails />} />
//             <Route path="/monitors" element={<Monitor />} />
//             <Route path="/monitors/:name" element={<MonitorDetails />} />
//           </Routes>
//         </main>

//         <Footer /> {/* Add Footer at the bottom */}
//       </div>
//     </Router>
//   );
// };

// export default App;


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Laptop from './laptop/Laptops';
import LaptopDetails from './laptop/LaptopDetails';
import Mobiles from './mobile/Mobiles';
import MobilesDetails from './mobile/MobilesDetails';
import Monitor from './monitor/Monitors';
import MonitorDetails from './monitor/MonitorDetails';
import Header from './component/Header';  // Import the Header component
import Footer from './component/Footer';  // Import the Footer component

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
        <Header /> {/* Use the Header component here */}

        <main className="container mx-auto p-6 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/laptops" element={<Laptop />} />
            <Route path="/laptops/:name" element={<LaptopDetails />} />
            <Route path="/mobiles" element={<Mobiles />} />
            <Route path="/mobiles/:name" element={<MobilesDetails />} />
            <Route path="/monitors" element={<Monitor />} />
            <Route path="/monitors/:name" element={<MonitorDetails />} />
          </Routes>
        </main>

        <Footer /> {/* Add Footer at the bottom */}
      </div>
    </Router>
  );
};

export default App;
