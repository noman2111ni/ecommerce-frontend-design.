import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { BsBagDash } from "react-icons/bs";
import { LuMessageSquareText } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [togle, settogle] = useState(false);

  const handleToggle = () => {
    settogle(!togle);
  };

  return (
    <header className="bg-white shadow-md border-b border-gray-200 text-xs sm:text-sm">
      {/* Top Navigation */}
      <nav className="max-w-[1270px] mx-auto sm:px-2 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-2 lg:h-20 py-3 lg:py-0 border-b border-gray-300">

        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div
            style={{
              color: "#3B82F6",
              fontWeight: "bold",
              background: "rgba(0, 10, 266, 0.8)",
              fontSize: "1rem",
              padding: "0.5rem",
              boxShadow: "5px 0 10px rgba(59, 130, 24, 0.4)",
              borderRadius: "0.5rem",
            }}
          >
            <BsBagDash className="text-white" />
          </div>
          <h1 className="text-xl font-semibold text-blue-500">Brand</h1>
        </div>

        {/* Search Section */}
        <div className="flex flex-col sm:flex-row items-stretch w-full sm:w-auto lg:w-[650px] border border-blue-400 rounded-sm overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow px-4 py-2 text-xs bg-transparent border-none focus:outline-none"
          />
          <select className="text-blue-500 text-xs px-2 py-2 bg-white border-t sm:border-t-0 sm:border-l border-blue-300 focus:outline-none">
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home & Garden</option>
            <option value="toys">Toys & Games</option>
          </select>
          <button className="px-4 py-2 text-xs bg-blue-600 text-white hover:bg-blue-700 transition">
            Search
          </button>
        </div>

        {/* Icon Menu */}
        <ul className="flex justify-center flex-wrap items-center gap-4 sm:gap-6 text-gray-700 text-xs">
          <li className="flex flex-col items-center hover:text-blue-500 transition">
            <CgProfile className="text-2xl mb-1" />
            <span>Profile</span>
          </li>
          <li className="flex flex-col items-center hover:text-blue-500 transition">
            <LuMessageSquareText className="text-2xl mb-1" />
            <span>Messages</span>
          </li>
          <li className="flex flex-col items-center hover:text-blue-500 transition">
            <CiHeart className="text-2xl mb-1" />
            <span>Order</span>
          </li>
          <li className="flex flex-col items-center hover:text-blue-500 transition">
            <FaCartArrowDown className="text-2xl mb-1" />
            <span>Cart</span>
          </li>
        </ul>
      </nav>

      {/* Bottom Navigation / Category Menu */}
      <div className="max-w-[1200px] mx-auto px-8 py-1 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
          <div
            className="flex items-center text-gray-700 gap-2 cursor-pointer"
            onClick={handleToggle}
          >
            <GiHamburgerMenu className="text-2xl" />
            <span>All Categories</span>
          </div>

          {/* Navigation List */}
          <ul className={`flex-col sm:flex-row items-center gap-2 sm:gap-4 text-gray-700 w-full sm:w-auto text-center text-xs ${togle ? 'flex' : 'hidden'} sm:flex`}>
            <li className="hover:text-blue-500 cursor-pointer">Hot Offer</li>
            <li className="hover:text-blue-500 cursor-pointer">Gift Boxes</li>
            <li className="hover:text-blue-500 cursor-pointer">Project</li>
            <li className="hover:text-blue-500 cursor-pointer">Menu Items</li>
            <li>
              <select className="text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none w-full sm:w-auto">
                <option value="">Help</option>
                <option value="">Contact</option>
                <option value="">About</option>
              </select>
            </li>
          </ul>
        </div>

        {/* Language and Currency */}
        <div className="flex items-center gap-3 text-gray-700 text-xs px-4 py-2">
          <select className="border border-gray-300 rounded px-2 py-1 focus:outline-none bg-white">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
          </select>

          <select className="border border-gray-300 rounded px-2 py-1 focus:outline-none bg-white">
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
            <option value="jpy">JPY</option>
            <option value="cny">CNY</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
