import React from 'react';
import { FaTh, FaBookOpen, FaChartBar } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-sidebar-bg text-white p-6 flex flex-col">
      {/* Logo */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold">Logo</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-4 font-semibold">
          <li>
            <a href="#" className="flex items-center space-x-4 p-3 rounded-lg bg-sidebar-active text-text-purple">
              <FaTh className="text-xl" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4 p-3 rounded-lg text-white hover:bg-sidebar-active/50 transition-colors">
              <FaBookOpen className="text-xl" />
              <span>Courses</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4 p-3 rounded-lg text-white hover:bg-sidebar-active/50 transition-colors">
              <FaChartBar className="text-xl" />
              <span>Level Question</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;