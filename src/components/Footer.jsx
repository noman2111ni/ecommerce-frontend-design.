import React from 'react'
import { BsBagDash } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoMdAppstore } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#232526] to-[#414345] text-gray-200 text-[14px] py-8 px-4 mt-auto shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1200px] mx-auto flex flex-wrap md:flex-nowrap justify-between items-start gap-8 md:gap-4 px-2">
        {/* Brand Info */}
        <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
          <div className="flex items-center space-x-2 mb-3">
            <div
              className="bg-blue-600 p-2 rounded-lg shadow-md"
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              <BsBagDash className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-yellow-400 tracking-wider">Ecommerce</h1>
          </div>
          <p className="max-w-[260px] mt-2 leading-relaxed text-gray-300">
            Shop the best products at unbeatable prices. Discover new arrivals every week!
          </p>
          <div className="flex items-center space-x-3 mt-4">
            <a
              href="#"
              className="bg-gray-700 hover:bg-blue-600 p-2 rounded-full transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF size={17} />
            </a>
            <a
              href="#"
              className="bg-gray-700 hover:bg-sky-400 p-2 rounded-full transition-colors"
              aria-label="Twitter"
            >
              <CiTwitter size={18} />
            </a>
            <a
              href="#"
              className="bg-gray-700 hover:bg-blue-800 p-2 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={17} />
            </a>
            <a
              href="#"
              className="bg-gray-700 hover:bg-pink-600 p-2 rounded-full transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={17} />
            </a>
            <a
              href="#"
              className="bg-gray-700 hover:bg-red-600 p-2 rounded-full transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[140px] mb-8 md:mb-0">
          <h4 className="text-yellow-400 mb-3 text-lg font-semibold">About</h4>
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:text-yellow-300 transition">About Us</a>
            </li>
            <li>
              <a href="/shop" className="hover:text-yellow-300 transition">Fond store</a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-300 transition">Category</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-300 transition">Blogs</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 min-w-[140px] mb-8 md:mb-0">
          <h4 className="text-yellow-400 mb-3 text-lg font-semibold">Partnership</h4>
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:text-yellow-300 transition">About Us</a>
            </li>
            <li>
              <a href="/shop" className="hover:text-yellow-300 transition">Fond store</a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-300 transition">Category</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-300 transition">Blogs</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 min-w-[140px] mb-8 md:mb-0">
          <h4 className="text-yellow-400 mb-3 text-lg font-semibold">Information</h4>
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:text-yellow-300 transition">Help Center</a>
            </li>
            <li>
              <a href="/shop" className="hover:text-yellow-300 transition">Money Refound</a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-300 transition">Shopping</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-300 transition">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 min-w-[140px] mb-8 md:mb-0">
          <h4 className="text-yellow-400 mb-3 text-lg font-semibold">For User</h4>
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:text-yellow-300 transition">Login</a>
            </li>
            <li>
              <a href="/shop" className="hover:text-yellow-300 transition">Register</a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-300 transition">Setting</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-300 transition">My Order</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1 min-w-[180px]">
          <h4 className="text-yellow-400 mb-3 text-lg font-semibold">Get App</h4>
          <div className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg mt-2 shadow-md hover:shadow-lg transition-shadow w-fit">
            <FaApple className="text-2xl" />
            <div className="text-left leading-tight">
              <p className="text-[10px] text-gray-400">Download on the</p>
              <p className="text-[15px] font-semibold">App Store</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg mt-2 shadow-md hover:shadow-lg transition-shadow w-fit">
            <IoMdAppstore className="text-2xl" />
            <div className="text-left leading-tight">
              <p className="text-[10px] text-gray-400">GET IT ON</p>
              <p className="text-[15px] font-semibold">Google Play</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm tracking-wide text-gray-400">
        &copy; {new Date().getFullYear()} Ecommerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;