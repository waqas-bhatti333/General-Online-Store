import React from "react";
import { FaCartPlus, FaStar } from "react-icons/fa";

const Products = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Products
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Product Card */}
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-5"
          >
            <img
              src="https://via.placeholder.com/300"
              alt="product"
              className="h-48 w-full object-contain mb-4"
            />

            <h3 className="font-semibold text-lg mb-1">
              Product Name
            </h3>

            <div className="flex items-center text-yellow-400 text-sm mb-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-gray-300" />
            </div>

            <p className="text-gray-600 mb-3">$99.00</p>

            <button className="flex items-center justify-center gap-2 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
              <FaCartPlus />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
