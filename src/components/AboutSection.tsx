"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-24 bg-[#4a0404] overflow-hidden flex items-center">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* Text Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=2930&auto=format&fit=crop"
            alt="Bakery Interior"
            className="w-full h-[500px] object-cover rounded-2xl shadow-2xl border-4 border-amber-500/20"
          />
        </div>

        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-amber-500 w-5 h-5" />
              <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm">
                Our Location
              </h2>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Baked with Passion in Gobichettipalayam
            </h3>

            <p className="text-lg text-amber-50 font-light mb-8 leading-relaxed">
              We are a home bakery dedicated to bringing the finest quality, freshly baked goods to our community. Every pastry, bread, and cake is crafted with care, using traditional methods and the finest ingredients.
            </p>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 mb-8">
              <h4 className="text-amber-400 font-bold mb-2 uppercase tracking-wide text-sm">Visit Us At</h4>
              <p className="text-white text-lg">
                OPP - PKR ARTS<br />
                PARIYUR ROAD<br />
                GOBICHETTIPALAYAM
              </p>
            </div>

            <button className="bg-amber-500 hover:bg-amber-600 text-[#4a0404] px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(245,158,11,0.2)] uppercase tracking-wider">
              Get Directions
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
