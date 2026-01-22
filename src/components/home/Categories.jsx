import React from "react";
import { FaMobileAlt, FaLaptop, FaGem, FaTshirt } from "react-icons/fa";

const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: <FaLaptop />,
  },
  {
    id: 2,
    name: "Mobile",
    icon: <FaMobileAlt />,
  },
  {
    id: 3,
    name: "Jewelry",
    icon: <FaGem />,
  },
  {
    id: 4,
    name: "Fashion",
    icon: <FaTshirt />,
  },
];

const Categories = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Shop by Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group border rounded-2xl p-6 text-center cursor-pointer hover:bg-black hover:text-white transition"
            >
              <div className="text-4xl mb-3 text-orange-500 group-hover:text-orange-400">
                {cat.icon}
              </div>

              <h3 className="font-semibold text-lg">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
