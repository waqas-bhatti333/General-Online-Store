import React from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-black">
          Mini<span className="text-orange-500">Store</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          <Link to="/" className="hover:text-orange-500 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-orange-500 transition">
            About
          </Link>
          <Link to="/shop" className="hover:text-orange-500 transition">
            Shop
          </Link>
          <Link to="/contact" className="hover:text-orange-500 transition">
            Contact
          </Link>
        </nav>

        {/* Cart + Mobile Icon */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl hover:text-orange-500 transition" />

            {/* Cart Count (Redux se later) */}
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>

          {/* Mobile Menu Icon */}
          <FaBars className="text-xl md:hidden cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
