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
    <footer className=" text-gray-500  bg-white  text-[14px] py-5 px-8 mt-auto shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1100px] mx-auto flex flex-wrap justify-between pb-4 items-start gap-4 px-4">
        {/* Brand Info */}
        <div>
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
          <p className=" max-w-[260px] mt-3 leading-relaxed">
            Shop the best products at unbeatable prices. Discover new arrivals every week!
          </p>
          <div className="flex items-center space-x-3 mt-4">
            <a
              href="#"
              className="text-white bg-gray-400  00 p-2 rounded-full hover:text-[#3b5998] transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebookF size={17} />
            </a>
            <a
              href="#"
              className="text-white bg-gray-400 p-2 rounded-full hover:text-[#1DA1F2] transition-colors duration-200"
              aria-label="Twitter"
            >
              <CiTwitter size={18} />
            </a>
            <a
              href="#"
              className="text-white bg-gray-400 p-2 rounded-full hover:text-[#0077b5] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={17} />
            </a>
            <a
              href="#"
              className="text-white bg-gray-400 p-2 rounded-full hover:text-[#e4405f] transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram size={17} />
            </a>
            <a
              href="#"
              className="text-white bg-gray-400 p-2 rounded-full hover:text-[#FF0000] transition-colors duration-200"
              aria-label="YouTube"
            >
              <FaYoutube size={18} />
            </a>
          </div>

        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-black mb-3 text-lg font-semibold">About</h4>
          <ul className="space-y-1 ">
            <li>
              <a href="/" >About Us</a>
            </li>
            <li>
              <a href="/shop" >Fond store</a>
            </li>
            <li>
              <a href="/about" >Category</a>
            </li>
            <li>
              <a href="/contact" >Blogs</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-black mb-3  text-lg font-semibold">Partnership</h4>
          <ul className="space-y-1">
            <li>
              <a href="/" >About Us</a>
            </li>
            <li>
              <a href="/shop" >Fond store</a>
            </li>
            <li>
              <a href="/about" >Category</a>
            </li>
            <li>
              <a href="/contact" >Blogs</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-black mb-3   text-lg font-semibold">Information</h4>
          <ul className="space-y-1">
            <li>
              <a href="/" >Help Center</a>
            </li>
            <li>
              <a href="/shop" >Money Refound</a>
            </li>
            <li>
              <a href="/about" >Shopping</a>
            </li>
            <li>
              <a href="/contact" >Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-black  mb-3  text-lg font-semibold">For User</h4>
          <ul className="space-y-1">
            <li>
              <a href="/" >Login</a>
            </li>
            <li>
              <a href="/shop" >Registor</a>
            </li>
            <li>
              <a href="/about" >Setting</a>
            </li>
            <li>
              <a href="/contact" >My Order</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className=''>
          <h4 className="text-black  mb-3  text-lg font-semibold">Get App</h4>
          <div className="flex items-center gap-1 bg-black text-white px-3 py-2 rounded-lg   mt-2 shadow-md hover:shadow-lg transition-shadow">
            <FaApple className="text-2xl" />
            <div className="text-left leading-tight">
              <p className="text-[8px]  text-gray-300">Download on the</p>
              <p className="text-[15px] font-semibold">App Store</p>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-black text-white px-3 py-2 rounded-lg w-fit mt-2 shadow-md hover:shadow-lg transition-shadow">
            <IoMdAppstore className="text-2xl" />
            <div className="text-left leading-tight">
              <p className="text-[8px]  text-gray-300">GET IT ON</p>
              <p className="text-[15px] font-semibold">Google Play</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-4 border-t  border-[#444] pt-4 text-sm tracking-wide text-gray-400">
        &copy; {new Date().getFullYear()} Ecommerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
