// import React from "react";
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import SubscribeSection from "./SubscribeSection";


// const Footer = () => {
//   return (
//   <>
// <SubscribeSection/>
    
//     <footer className="bg-black text-gray-300 pt-20 pb-8 border-t border-gray-800 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

//         {/* Brand */}
//         <div>
//           <h3 className="text-2xl font-extrabold text-white tracking-tight mb-4">
//             MINI<span className="text-pink-500">STORE</span>
//           </h3>
//           <p className="text-gray-400 leading-relaxed">
//             Your one-stop shop for trendy products. Style, quality and affordability — all in one place.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-white font-bold uppercase tracking-wider mb-4">Quick Links</h4>
//           <ul className="space-y-3 text-sm">
//             <li><Link to="/" className="hover:text-pink-500 transition">Home</Link></li>
//             <li><Link to="/about" className="hover:text-pink-500 transition">About</Link></li>
//             <li><Link to="/shop" className="hover:text-pink-500 transition">Shop</Link></li>
//             <li><Link to="/contact" className="hover:text-pink-500 transition">Contact</Link></li>
//           </ul>
//         </div>

//         {/* Categories */}
//         <div>
//           <h4 className="text-white font-bold uppercase tracking-wider mb-4">Categories</h4>
//           <ul className="space-y-3 text-sm">
//             <li><Link to="/shop?category=electronics" className="hover:text-pink-500 transition">Electronics</Link></li>
//             <li><Link to="/shop?category=mobile" className="hover:text-pink-500 transition">Mobile</Link></li>
//             <li><Link to="/shop?category=jewelry" className="hover:text-pink-500 transition">Jewelry</Link></li>
//             <li><Link to="/shop?category=fashion" className="hover:text-pink-500 transition">Fashion</Link></li>
//           </ul>
//         </div>

//         {/* Social */}
//         <div>
//           <h4 className="text-white font-bold uppercase tracking-wider mb-4">Follow Us</h4>
//           <div className="flex gap-4">
//             {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all"
//               >
//                 <Icon />
//               </a>
//             ))}
//           </div>
//         </div>

//       </div>

//       {/* Bottom */}
//       <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
//         © 2026 <span className="text-white font-semibold">MiniStore</span>. All rights reserved.
//       </div>
//     </footer>
//     </>
//   );
// };

// export default Footer;


import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";


export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white font-[Poppins] px-6 py-14">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo + Info */}
          <div>
            <h2 className="text-2xl font-semibold text-[#60a5fa]">JigoMart</h2>
            <p className="text-[#d1d5db] mt-4 text-sm leading-relaxed">
              Connecting students through buying and selling made easy.
            </p>

            <div className="mt-4 space-y-2 text-sm text-[#d1d5db]">
              <div className="flex items-center gap-2">
                <MdEmail size={16} className="text-[#7D4CDB]"/>
                <span>emmaogbidi@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MdPhoneInTalk size={16} className="text-[#7D4CDB]"/>
                <span>+234 7086984841</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-[#d1d5db]">
              <li>Home</li>
              <li>Shop</li>
              <li>Sell</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Support & Legal</h3>
            <ul className="space-y-2 text-sm text-[#d1d5db]">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Return Policy</li>
              <li>Help Center</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Payment */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Payment & Trust Indicators</h3>
            <p className="text-sm text-[#d1d5db] leading-relaxed">
              Accepted payment methods (e.g escrow, paystack)
            </p>
            <p className="text-sm text-[#d1d5db] mt-3 leading-relaxed">
              All transactions are secured and verified.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#7c3aed] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-[#9ca3af]">
            <span className="text-[#7D4CDB] text-lg">©</span> 2025 JigoMart. All rights reserved. Built for students
          </p>

          <div className="flex gap-4 text-[#d1d5db]">
            <FaLinkedinIn size={18} />
            <FaTwitter size={18} />
            <FaInstagram size={18} />
            <FaFacebookF size={18} />
          </div>
        </div>

      </div>
    </footer>
  );
}
