import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">MiniStore</h3>
          <p className="text-gray-400">
            Your one-stop shop for trendy products. Quality, style and affordability all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-orange-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-orange-500 transition">About</a></li>
            <li><a href="/shop" className="hover:text-orange-500 transition">Shop</a></li>
            <li><a href="/contact" className="hover:text-orange-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><a href="/shop?category=electronics" className="hover:text-orange-500 transition">Electronics</a></li>
            <li><a href="/shop?category=mobile" className="hover:text-orange-500 transition">Mobile</a></li>
            <li><a href="/shop?category=jewelry" className="hover:text-orange-500 transition">Jewelry</a></li>
            <li><a href="/shop?category=fashion" className="hover:text-orange-500 transition">Fashion</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-500 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-500 transition"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
        &copy; 2026 MiniStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
