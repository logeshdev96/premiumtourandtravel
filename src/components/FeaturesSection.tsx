"use client";

import { motion } from "framer-motion";
import { Compass, Shield, Crown, Clock } from "lucide-react";

const features = [
  {
    icon: <Crown className="w-8 h-8 text-amber-500" />,
    title: "VIP Treatment",
    description: "Enjoy exclusive access, skip-the-line privileges, and personalized services at every stage of your journey.",
  },
  {
    icon: <Compass className="w-8 h-8 text-amber-500" />,
    title: "Expert Guides",
    description: "Discover hidden gems and local secrets with our highly vetted, world-class local experts and historians.",
  },
  {
    icon: <Shield className="w-8 h-8 text-amber-500" />,
    title: "Secure & Private",
    description: "Travel with peace of mind knowing your privacy and security are our absolute top priorities.",
  },
  {
    icon: <Clock className="w-8 h-8 text-amber-500" />,
    title: "24/7 Concierge",
    description: "Our dedicated team is available around the clock to handle any request, no matter how small.",
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
    <section id="experiences" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-50 -skew-x-12 translate-x-20 z-0 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-medium tracking-widest uppercase text-sm mb-3"
          >
            The WanderLuxe Difference
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
          >
            Elevating the Art of Travel
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
