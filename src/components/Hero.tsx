"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#4a0404]/60 z-10" /> {/* Maroon Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2944&auto=format&fit=crop"
        >
          {/* High-quality bakery stock video URL */}
          <source src="https://cdn.pixabay.com/video/2016/11/21/6462-192663071_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <h2 className="text-amber-400 font-medium tracking-widest uppercase text-sm md:text-base mb-1">
              Home Bakery
            </h2>
            <h3 className="text-amber-400 font-bold tracking-widest uppercase text-lg md:text-2xl">
              DUST & DOUGH
            </h3>
            <p className="text-white mt-2 tracking-wider text-sm md:text-base">
              YOU ARE INVITED TO
            </p>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-amber-400 tracking-tight leading-tight py-4"
            style={{
              fontFamily: 'var(--font-playfair)',
              textShadow: '0 0 20px rgba(251, 191, 36, 0.4), 2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Grand <br /> Opening
          </motion.h1>

          <motion.div variants={itemVariants} className="space-y-2 mt-8">
            <p className="text-lg md:text-xl text-white font-medium tracking-wide">
              MONDAY | 22 DEC, 2025 | AT 9.30 AM
            </p>
            <p className="text-lg md:text-xl text-amber-400 font-medium tracking-wide">
              COME ON GET IT AND FEEL IT
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="w-24 h-1 bg-amber-500 my-6 mx-auto rounded-full" />

          <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-[#4a0404] px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.5)] uppercase tracking-wider">
              Explore Our Menu
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-amber-500 to-transparent"
        />
      </motion.div>
    </div>
  );
}
