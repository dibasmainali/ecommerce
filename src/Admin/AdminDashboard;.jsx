import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Users from './Users';
import Reports from './Reports';
import Analytics from './Analytics';

const AdminDashboard = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Router>
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 text-white flex flex-col">
          <div className="p-4 text-center text-2xl font-bold border-b border-gray-700">
            Admin Dashboard
          </div>
          <nav className="flex-1 p-4">
            <ul>
              <li className="mb-2">
                <Link to="/" className="block p-2 rounded hover:bg-gray-700">Dashboard</Link>
              </li>
              <li className="mb-2">
                <Link to="/users" className="block p-2 rounded hover:bg-gray-700">Users</Link>
              </li>
              <li className="mb-2">
                <Link to="/analytics" className="block p-2 rounded hover:bg-gray-700">Analytics</Link>
              </li>
              <li className="mb-2">
                <Link to="/reports" className="block p-2 rounded hover:bg-gray-700">Reports</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100">
          

          {/* Routes */}
          <Routes>
            <Route exact path="/" element={
              <div>
                {/* <h2 className="text-2xl font-semibold mb-4">Dashboard</h2> */}
                <header className="flex justify-between items-center mb-6">
                <p>Welcome to the admin dashboard.</p>
            {/* <h1 className="text-3xl font-semibold">Dashboard</h1> */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Logout</button>
          </header>
          <div className='text-3xl flex items-ceneter justify-end underline text-blue-500 hover:text-blue-600 cursor-pointer '>
            Visit store
          </div>

          {/* Greeting and Date */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Good Afternoon, Dibas mainali!</h2>
            <p className="text-gray-600">Here are your stats for today {currentDate}</p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-4 rounded shadow flex items-center">
              <div className="bg-purple-500 text-white p-3 rounded-full mr-4">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Revenue</h3>
                <p className="text-gray-600">$0.00 from last Friday</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow flex items-center">
              <div className="bg-green-500 text-white p-3 rounded-full mr-4">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Orders</h3>
                <p className="text-gray-600">0 from last Friday</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow flex items-center">
              <div className="bg-pink-500 text-white p-3 rounded-full mr-4">
                <i className="fas fa-wallet"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Average Order Value</h3>
                <p className="text-gray-600">$0.00 from last Friday</p>
              </div>
            </div>
          </div>
              </div>
            } />
            <Route path="/users" element={<Users />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AdminDashboard;
