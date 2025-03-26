import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Task Manager
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-gray-300">
            Profile
          </Link>
          <button className="hover:text-gray-300">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
