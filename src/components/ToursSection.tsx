"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const tours = [
  {
    id: 1,
    title: "Amalfi Coast Serenity",
    location: "Italy",
    price: "$5,400",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?q=80&w=2940&auto=format&fit=crop",
    duration: "7 Days",
  },
  {
    id: 2,
    title: "Kyoto Autumn Retreat",
    location: "Japan",
    price: "$4,200",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2940&auto=format&fit=crop",
    duration: "10 Days",
  },
  {
    id: 3,
    title: "Serengeti Safari Royale",
    location: "Tanzania",
    price: "$8,900",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2936&auto=format&fit=crop",
    duration: "8 Days",
  },
  {
    id: 4,
    title: "Santorini Villa Escape",
    location: "Greece",
    price: "$6,100",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2940&auto=format&fit=crop",
    duration: "6 Days",
  }
];

export default function ToursSection() {
  return (
    <section id="tours" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-amber-600 font-medium tracking-widest uppercase text-sm mb-3">Curated Journeys</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Iconic Destinations</h3>
            <p className="mt-4 text-lg text-gray-600 font-light">
              Immerse yourself in our handpicked selection of premium tours, offering unparalleled access and luxury across the globe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button className="flex items-center gap-2 text-gray-900 font-medium hover:text-amber-600 transition-colors group">
              View All Tours
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl shadow-gray-200/50 cursor-pointer"
            >
              {/* Image Container with Hover Scale */}
              <div className="relative h-80 w-full overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 z-10">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-sm font-semibold text-gray-900">{tour.rating}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-amber-600 text-sm font-medium uppercase tracking-wider">{tour.location}</span>
                    <h4 className="text-2xl font-bold text-gray-900 mt-1 group-hover:text-amber-600 transition-colors">{tour.title}</h4>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">From</span>
                    <span className="text-xl font-bold text-gray-900">{tour.price} <span className="text-gray-500 text-sm font-normal">/ person</span></span>
                  </div>
                  <div className="text-gray-600 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                    {tour.duration}
                  </div>
                </div>
              </div>

              {/* Hover Overlay Button */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  Explore Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
