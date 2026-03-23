// import React, { useEffect } from "react";
// import { FaMobileAlt, FaLaptop, FaGem, FaTshirt } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const categories = [
//   { id: 1, name: "Electronics", icon: <FaLaptop /> },
//   { id: 2, name: "Mobile", icon: <FaMobileAlt /> },
//   { id: 3, name: "Jewelry", icon: <FaGem /> },
//   { id: 4, name: "Fashion", icon: <FaTshirt /> },
// ];

// const Categories = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 900,
//       once: true,
//       easing: "ease-out-cubic",
//     });
//   }, []);

//   return (
//     <section className="bg-white py-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2
//           className="text-3xl md:text-4xl font-extrabold text-center text-black mb-14"
//           data-aos="fade-up"
//         >
//           Shop by <span className="text-pink-500">Categories</span>
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
//           {categories.map((cat, index) => (
//             <div
//               key={cat.id}
//               data-aos="zoom-in"
//               data-aos-delay={index * 100}
//               className="group cursor-pointer rounded-3xl border border-gray-200 p-8 text-center transition-all hover:bg-black hover:shadow-xl"
//             >
//               <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-pink-500/10 text-pink-500 text-3xl group-hover:bg-pink-500 group-hover:text-white transition-all">
//                 {cat.icon}
//               </div>

//               <h3 className="font-semibold text-lg text-black group-hover:text-white transition">
//                 {cat.name}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Categories;


import React, { useEffect } from "react";
import { FiLayers } from "react-icons/fi";
import { FaPlug } from "react-icons/fa";
import { BiChair } from "react-icons/bi";
import { GiHighHeel } from "react-icons/gi";

const categories = [
  {
    id: 1,
    title: "Textbooks",
    items: "2,300+ items",
    color:"#61B2E4",
    icon: <FiLayers />,
  },
  {
    id: 2,
    title: "Electronics",
    items: "1,800+ items",
    color:"#F4AA41",
    icon: <FaPlug />,
  },
  {
    id: 3,
    title: "Furnitures",
    items: "800+ items",
    color:"#77381F",
    icon: <BiChair />,
  },
  {
    id: 4,
    title: "Fashion",
    items: "1,300+ items",
    color:"#F44336",
    icon: <GiHighHeel />,
  },
];

const PopularCategories = () => {

  // Load Poppins font like Hero
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="bg-gray-100 py-16 px-6 font-[Poppins]">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">
          <span className="text-[#4a90e2] italic">Popular</span> Categories
        </h2>
        <p className="text-gray-500 mt-2">
          Find what you need across different product categories
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-gradient-to-r from-[#4a90e2] to-[#3b7cc4] rounded-xl py-10 text-center text-white shadow-md hover:scale-105 transition duration-300 cursor-pointer"
          >
            {/* Icon Circle */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span style={{ color: cat.color }} className="text-3xl">
                {cat.icon}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-xl">
              {cat.title}
            </h3>

            {/* Items */}
            <p className="text-xs text-blue-100 mt-1">
              {cat.items}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;