// import React, { useEffect } from "react";
// import { FaLaptop, FaMobileAlt, FaGem, FaTshirt } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const trendingCategories = [
//   { id: 1, name: "Electronics", icon: <FaLaptop />, image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEVsZWN0cm9uaWNzfGVufDB8fDB8fHwwhttps://unsplash.com/photos/electronic-circuit-boards-near-tester-3GZi6OpSDcY" },
//   { id: 2, name: "Mobile", icon: <FaMobileAlt />, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
//   { id: 3, name: "Jewelry", icon: <FaGem />, image: "https://media.istockphoto.com/id/2218969499/photo/grand-bazaar-istanbul-gold-jewelry-store-window-display.webp?a=1&b=1&s=612x612&w=0&k=20&c=C3W864H29RR1So36HcgEdsR7a53sZlL6BDkI18HWvD8=" },
//   { id: 4, name: "Fashion", icon: <FaTshirt />, image: "https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" },
// ];

// const TrendingByCategory = () => {
//   useEffect(() => {
//     AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
//   }, []);

//   return (
//     <section className="bg-gray-50 py-30 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black mb-14" data-aos="fade-up">
//           Trending <span className="text-pink-500">By Category</span>
//         </h2>

//         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {trendingCategories.map((cat, index) => (
//             <div
//               key={cat.id}
//               data-aos="fade-up"
//               data-aos-delay={index * 150}
//               className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
//             >
//               {/* Category Image */}
//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all"></div>

//               {/* Category Label */}
//               <div className="absolute bottom-12 md:bottom-6 left-1/2 transform -translate-x-1/2 text-left text-white">
//                 <div className="text-5xl md:text-4xl mb-2">{cat.icon}</div>
//                 <h3 className="text-4xl md:text-xl font-bold">{cat.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingByCategory;



export default function WhyChooseUs() {
  return (
    <section className="bg-[#f5f7fb] py-20 px-6 font-[Poppins]">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-semibold text-[#1f2937]">
          Why Choose us?
        </h2>

        {/* Blue Line */}
        <div className="flex justify-center relative">
    <div className="w-80 h-3 border-b-1 border-blue-400 rotate-3"></div>
</div>


        <p className="text-gray-500 mt-5 text-sm md:text-base leading-relaxed">
          Because buying and selling on campus should be simple, fast,
          <br className="hidden md:block"/> and safe.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center mx-auto max-w-7xl">

        {/* Left Cards */}
        <div className="flex flex-col gap-6">

          <div className="bg-[#3b82f6] text-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold text-xl">
              Safe & Secure Transactions
            </h3>
            <p className="text-md mt-2 text-blue-100 leading-relaxed">
              Every user is verified, so you can buy and sell with confidence
            </p>
          </div>

          <div className="bg-[#3b82f6] text-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold text-xl">
              Fast & Easy to Use
            </h3>
            <p className="text-md mt-2 text-blue-100 leading-relaxed">
              No stress - create an account, post or shop, and get things done
              in minutes.
            </p>
          </div>

          <div className="bg-[#3b82f6] text-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold text-xl">
              Built for Students
            </h3>
            <p className="text-md mt-2 text-blue-100 leading-relaxed">
              JigoMart is designed specifically for institutions, keeping the
              community close and trustworthy.
            </p>
          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="w-[330px] h-[330px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-[2px] border-[#3b82f6] shadow-lg">
            <img
              src="./w1.jpg"
              alt="student"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}