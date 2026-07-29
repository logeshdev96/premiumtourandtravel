"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Artisan Sourdough",
    category: "Breads",
    price: "$8",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?q=80&w=2940&auto=format&fit=crop",
    details: "Naturally leavened",
  },
  {
    id: 2,
    title: "Classic Croissant",
    category: "Pastries",
    price: "$4",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1555507036-ab1f40ce88cb?q=80&w=2826&auto=format&fit=crop",
    details: "Buttery & flaky",
  },
  {
    id: 3,
    title: "Red Velvet Cake",
    category: "Cakes",
    price: "$45",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2889&auto=format&fit=crop",
    details: "Cream cheese frosting",
  },
  {
    id: 4,
    title: "Chocolate Chip Cookies",
    category: "Cookies",
    price: "$12",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=2928&auto=format&fit=crop",
    details: "Box of 6",
  }
];

export default function ProductsSection() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-3">Our Menu</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#4a0404] tracking-tight">Signature Bakes</h3>
            <p className="mt-4 text-lg text-gray-600 font-light">
              Explore our delicious selection of freshly baked goods, crafted with love and the finest ingredients to bring joy to your taste buds.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button className="flex items-center gap-2 text-[#4a0404] font-medium hover:text-amber-600 transition-colors group">
              View Full Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-[#fff9f2] shadow-xl shadow-gray-200/50 cursor-pointer"
            >
              {/* Image Container with Hover Scale */}
              <div className="relative h-64 w-full overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 z-10 shadow-sm">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">{product.category}</span>
                    <h4 className="text-xl font-bold text-[#4a0404] mt-1 group-hover:text-amber-600 transition-colors">{product.title}</h4>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4 pt-4 border-t border-amber-500/20">
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-xs uppercase tracking-wider">Price</span>
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                  </div>
                  <div className="text-gray-600 flex items-center gap-2 text-sm italic">
                    {product.details}
                  </div>
                </div>
              </div>

              {/* Hover Overlay Button */}
              <div className="absolute inset-0 bg-[#4a0404]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-500 text-white px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                >
                  Order Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
