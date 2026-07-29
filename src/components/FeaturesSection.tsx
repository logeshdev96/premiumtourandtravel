"use client";

import { motion } from "framer-motion";
import { Flame, Cake, Heart, Leaf } from "lucide-react";

const features = [
  {
    icon: <Flame className="w-8 h-8 text-[#4a0404]" />,
    title: "Freshly Baked",
    description: "Every item is baked fresh daily in our home kitchen, ensuring the highest quality and taste.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-[#4a0404]" />,
    title: "Quality Ingredients",
    description: "We use only the finest, carefully sourced ingredients to create our signature pastries and breads.",
  },
  {
    icon: <Heart className="w-8 h-8 text-[#4a0404]" />,
    title: "Made with Love",
    description: "Baking is our passion. We pour our hearts into every recipe, crafting delightful treats for your family.",
  },
  {
    icon: <Cake className="w-8 h-8 text-[#4a0404]" />,
    title: "Custom Orders",
    description: "Looking for something special? We offer custom cakes and pastries for all your celebrations.",
  },
];

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="features" className="py-24 bg-[#fff9f2] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#fceddd] -skew-x-12 translate-x-20 z-0 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-3"
          >
            Why Choose Us
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#4a0404] tracking-tight"
          >
            The Dust & Dough Difference
          </motion.h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-stone-50 flex items-center justify-center mb-6 shadow-sm group-hover:bg-amber-50 group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-2">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
