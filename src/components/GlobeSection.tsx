"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import EarthGlobe from "./three/EarthGlobe";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function GlobeSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] bg-black overflow-hidden flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0" />

      {/* 3D Canvas Container */}
      <div className="absolute inset-0 z-10 w-full h-full md:w-1/2 md:right-0 md:left-auto">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <Environment preset="city" />
            <EarthGlobe />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2.5}
              maxPolarAngle={Math.PI / 1.5}
              autoRotate={false}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Text Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl md:w-1/2 bg-black/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-6 md:p-0 rounded-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-amber-500 w-5 h-5" />
              <h2 className="text-amber-500 font-medium tracking-widest uppercase text-sm">
                Global Reach
              </h2>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              The World is Your Canvas
            </h3>

            <p className="text-lg text-gray-300 font-light mb-8 leading-relaxed">
              We curate the most exceptional destinations across all seven continents.
              From the undiscovered corners to the most exclusive enclaves, your journey
              knows no boundaries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                Discover Continents
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">7</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Continents</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">200+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Experiences</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" />
    </section>
  );
}
