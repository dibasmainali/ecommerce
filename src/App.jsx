import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Laptop from './laptop/Laptops';
import LaptopDetails from './laptop/LaptopDetails';
import Mobiles from './mobile/Mobiles';
import MobilesDetails from './mobile/MobilesDetails';
import Monitor from './monitor/Monitors';
import MonitorDetails from './monitor/MonitorDetails';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-4xl font-bold">Tech Store</h1>
            <nav>
              <Link to="/" className="text-lg mx-4 hover:underline">Home</Link>
              <Link to="/laptops" className="text-lg mx-4 hover:underline">Laptops</Link>
              <Link to="/mobiles" className="text-lg mx-4 hover:underline">Mobiles</Link>
              <Link to="/monitors" className="text-lg mx-4 hover:underline">Monitors</Link>
            </nav>
          </div>
        </header>

        <main className="container mx-auto p-6">
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

        <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 text-center">
          <p>© 2024 Tech Store. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
