// import React, { useState } from "react";
// import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

//         {/* Logo */}
//         <Link to="/" className="text-2xl font-extrabold tracking-tight text-black">
//           MINI<span className="text-pink-500">STORE</span>
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-12 text-sm font-semibold uppercase tracking-wider text-black">
//           {["Home", "About", "Shop", "Contact"].map((item) => (
//             <Link
//               key={item}
//               to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//               className="relative group"
//             >
//               <span className="group-hover:text-pink-500 transition-colors duration-300">
//                 {item}
//               </span>
//               <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
//             </Link>
//           ))}
//         </nav>

//         {/* Right Icons */}
//         <div className="flex items-center gap-6">
//           <Link to="/cart" className="relative group">
//             <FaShoppingCart className="text-xl text-black group-hover:text-pink-500 transition-colors" />
//             <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full bg-black text-white text-[10px] font-bold border-2 border-white group-hover:bg-pink-500 transition-all">
//               0
//             </span>
//           </Link>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-2xl text-black"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden fixed top-20 left-0 w-full bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ${
//           isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none"
//         }`}
//       >
//         <div className="flex flex-col py-6 gap-6 text-center font-bold uppercase tracking-wider">
//           {["Home", "About", "Shop", "Contact"].map((item) => (
//             <Link
//               key={item}
//               to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//               onClick={() => setIsOpen(false)}
//               className="text-black hover:text-pink-500 transition-colors"
//             >
//               {item}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



import { MdOutlineShoppingCart } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="w-full shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#4a90e2] to-[#7d4cdb] bg-clip-text text-transparent">m</div>
          <span className="text-xl font-semibold bg-gradient-to-r from-[#4a90e2] to-[#7d4cdb] bg-clip-text text-transparent">JigoMart</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-6 text-gray-600 font-medium">
          <a href="#" className="text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Products</a>
          <a href="#" className="hover:text-blue-600">Become an Ambassador</a>
          <a href="#" className="hover:text-blue-600">About Us</a>
        </div>

        {/* Search + Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:flex items-center border rounded-lg px-3 py-1.5 bg-gray-50">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search Products..."
              className="bg-transparent outline-none text-sm"
            />
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer">
            <MdOutlineShoppingCart className="text-gray-700 text-lg" />
            <span className="absolute -top-2 -right-2 bg-[#7d4cdb] text-white text-xs rounded-full px-1.5">
              2
            </span>
          </div>

          {/* Auth Buttons */}
          <button className="text-gray-600 font-medium hover:text-blue-600">
            Login
          </button>
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg font-medium hover:bg-blue-700">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
