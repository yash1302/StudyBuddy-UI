import React from "react";
import { FaChevronDown, FaPlus } from "react-icons/fa";
import Sidebar from "../components/Sidebar.jsx"; // Importing the separate Sidebar component

// Assuming you have images in src/assets
import { CgProfile } from "react-icons/cg";
import illustration from "../assets/dashboard-illustration.png";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-dashboard-bg rounded-3xl overflow-hidden shadow-2xl m-4">
      {/* 1. The separate Sidebar component */}
      <Sidebar />

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-8 bg-white border-b-2 border-gray-200">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold" style={{ color: "#2C1D4A" }}>
              Hello, Margaret
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Lorem ipsum dolor sit amet consectetur. Sit in ut turpis sit
              tortor.
            </p>
          </div>

          <div className="flex items-center space-x-4 cursor-pointer">
            <CgProfile className="w-12 h-12 rounded-full object-cover" />
            <FaChevronDown className="text-gray-400 text-sm" />
          </div>
        </header>

        {/* Content Section */}
        <main className="flex-1 p-8 flex flex-col items-center justify-center">
          <img
            src={illustration}
            alt="Dashboard Illustration"
            className="max-w-md w-full mb-8"
          />
          <button
            className="flex items-center space-x-2 px-8 py-4 rounded-lg text-white font-semibold shadow-md transition-shadow hover:shadow-lg"
            style={{ backgroundColor: "#7E5BE8" }}
          >
            <FaPlus className="text-white" />
            <span>Create New Course</span>
          </button>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
