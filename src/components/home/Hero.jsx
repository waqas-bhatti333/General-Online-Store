// import React, { useEffect } from "react";
// import { FaShoppingBag } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Hero = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       easing: "ease-out-cubic",
//     });
//   }, []);

//   return (
//     <section
//       className="relative min-h-[95vh] flex items-center bg-cover bg-center overflow-hidden"
//       style={{
//         backgroundImage:
//           "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f')",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       <div className="relative max-w-9xl mx-auto px-6 py-24 pt-25 md:pt-40 grid grid-cols-1 md:grid-cols-2 gap-50 items-center">
//         {/* Left Content */}
//         <div className="text-white" data-aos="fade-right">
//           <div className="flex items-center gap-3 mb-6" data-aos="fade-down">
//             <FaShoppingBag className="text-pink-500 text-3xl" />
//             <span className="uppercase tracking-widest text-sm font-semibold text-pink-400">
//               Trending Products
//             </span>
//           </div>

//           <h1
//             className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
//             data-aos="fade-up"
//           >
//             Discover Your <br />
//             <span className="text-pink-500">Perfect Style</span>
//           </h1>

//           <p
//             className="text-gray-200 max-w-lg mb-8"
//             data-aos="fade-up"
//             data-aos-delay="150"
//           >
//             Shop the latest fashion, electronics and lifestyle products with premium quality at affordable prices.
//           </p>

//           <div className="flex gap-4" data-aos="zoom-in" data-aos-delay="300">
//             <Link
//               to="/shop"
//               className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-600 transition-all"
//             >
//               Shop Now
//             </Link>
//             <Link
//               to="/about"
//               className="border border-white px-8 py-4 rounded-full font-semibold text-white hover:bg-white hover:text-black transition-all"
//             >
//               Learn More
//             </Link>
//           </div>
//         </div>

//         {/* Right Visual */}
//         <div
//           className="relative hidden md:flex justify-center"
//           data-aos="fade-left"
//         >
//           <div className="w-72 h-72 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
//             <div className="w-56 h-56 rounded-full bg-pink-500 flex items-center justify-center">
//               <FaShoppingBag className="text-white text-6xl" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import { MdOutlineShoppingCart } from "react-icons/md";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="relative w-full h-[95vh] font-[Poppins]">
      {/* Background Image */}
      <img
        src="./f1.jpg"
        alt="students"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white leading-snug md:leading-tight">
          The{" "}
          <span className="text-[#4a90e2] font-bold">
            Student MarketPlace
          </span>{" "}
          you’ve <br className="hidden sm:block" /> been waiting for 🛒
        </h1>

        <p className="mt-4 text-gray-200 max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg">
          Buy and sell textbooks, electronics, and campus essentials with fellow
          students. Plus, earn extra income through our Ambassador program!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#4a90e2] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#3b7cc4] transition cursor-pointer">
            Become a Seller <MdOutlineShoppingCart />
          </button>

          <button className="w-full sm:w-auto border border-white text-white px-5 py-2.5 rounded-lg font-medium hover:bg-white hover:text-black transition cursor-pointer">
            Shop
          </button>
        </div>

        {/* Stats */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-6 sm:gap-10 text-white">
          <div>
            <h2 className="text-lg sm:text-2xl font-semibold">12500+</h2>
            <p className="text-[12px] text-gray-300">Active Students</p>
          </div>

          <div>
            <h2 className="text-lg sm:text-2xl font-semibold">8,900+</h2>
            <p className="text-[12px] text-gray-300">Products Listed</p>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h2 className="text-lg sm:text-2xl font-semibold">$450k</h2>
            <p className="text-[12px] text-gray-300">Total Sales</p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Bar */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-r from-[#4a90e2] to-[#7d4cdb]"></div>
    </div>
  );
}

