import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-black to-gray-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <FaShoppingBag className="text-5xl mx-auto mb-4 text-orange-400" />

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to MiniStore
        </h1>

        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Discover modern, stylish and affordable products for your daily life.
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
