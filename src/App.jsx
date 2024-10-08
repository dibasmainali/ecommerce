import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Laptop from './laptop/Laptops';
import LaptopDetails from './laptop/LaptopDetails';
import Mobiles from './mobile/Mobiles';
import MobilesDetails from './mobile/MobilesDetails';
import Monitor from './monitor/Monitors';
import MonitorDetails from './monitor/MonitorDetails';
import KeyboardMouse from './keyboards/KeyboardMouse';
import Header from './component/Header';  // Import the Header component
import Footer from './component/Footer';  // Import the Footer component
import { CartProvider } from './component/CartContext';
import Cart from './component/Cart';
import ContactUs from './component/ContactUs';
import ConfirmOrder from './component/ConfirmOrder';
import AboutUs from './component/AboutUs';
import PurchasePopup from './component/PurchasePopup';
import AdminDashboard from './Admin/AdminDashboard;';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
          <Header />  

          <main className="container mx-auto p-6   flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Dashboard" element={ <AdminDashboard/> } />

              <Route path='/About-Us' element={<AboutUs/>}/>
              <Route path="/laptops" element={<Laptop />} />
              <Route path="/laptops/:name" element={<LaptopDetails />} />
              <Route path="/mobiles" element={<Mobiles />} />
              <Route path="/mobiles/:name" element={<MobilesDetails />} />
              <Route path="/monitors" element={<Monitor />} />
              <Route path="/monitors/:name" element={<MonitorDetails />} />
              <Route path="/Keyboard&Mouse" element={<KeyboardMouse />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact-us" element={<ContactUs/>}/>
              <Route path="/order-confirmation" element={<ConfirmOrder/>}/>

            </Routes>
          </main>
          <PurchasePopup />

          <Footer /> 
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;