import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Laptops from "./laptop/Laptops";
import FilterBar from "./laptop/FilterBar";
import Banner from "./laptop/Banner";
import Details from "./laptop/Details";
import Keyboards from "./keyboards/KeyboardMouse";
import Monitors from "./monitor/Monitors";

function App() {
  return (
    <Router>
      <div className="bg-orange-50">
        <Banner />
        <FilterBar />
        <Keyboards/>
        <Monitors/>

        <Routes>
          {/* Route for the laptops list */}
          <Route path="/" element={<Laptops />} />
          {/* Route for the laptop details */}
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
