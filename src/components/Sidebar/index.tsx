import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-4">
      <div className="space-y-4">
        <Link to="/todo" className="block p-2 hover:bg-blue-600 rounded">
          To-Do
        </Link>
        <Link to="/in-progress" className="block p-2 hover:bg-blue-600 rounded">
          In Progress
        </Link>
        <Link to="/done" className="block p-2 hover:bg-blue-600 rounded">
          Done
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
