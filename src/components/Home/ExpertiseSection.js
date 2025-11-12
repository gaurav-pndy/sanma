"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const expertiseData = [
  {
    id: 1,
    icon: "/expertise/Neuro.svg",
    title: "Neuro & Spine Surgery",
    features: [
      "Advanced surgical microscopes for delicate micro-neurosurgical procedures",
      "Sharp visualization, stable positioning, and seamless integration with navigation systems",
      "Precision-designed instruments for cranial and spinal interventions",
    ],
  },
  {
    id: 2,
    icon: "/expertise/Opthal.svg",
    title: "Ophthalmology",
    features: [
      "Compact, high-clarity microscopes for anterior and posterior segment surgeries",
      "Brilliant illumination and superior red reflex",
      "Smooth operation and digital imaging integration",
    ],
  },
  {
    id: 3,
    icon: "/expertise/ENT.svg",
    title: "ENT",
    subtitle: "(Otorhinolaryngology)",
    features: [
      "Ergonomic ENT surgical microscopes with crystal-clear optics",
      "Ideal for otology and laryngeal surgeries",
    ],
  },
  {
    id: 4,
    icon: "/expertise/P&R.svg",
    title: "Plastic & Reconstructive Surgery",
    features: [
      "High-definition visualization for microsurgical procedures and free flap reconstructions",
      "Lightweight, flexible microscopes for maximum maneuverability",
      "Exceptional depth of field and optical performance",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function ExpertiseSection() {
  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-[#384F5D] mb-12 md:mb-16"
        >
          Expertise
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseData.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-[#384F5D] rounded-xl p-6 xl:p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#7F8F9C] rounded-full flex items-center justify-center">
                  <div className="relative w-10 h-10">
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      fill
                      className="object-contain"
                      sizes="40px"
                    />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="mb-4 md:min-h-26">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-sm text-white/70">{item.subtitle}</p>
                )}
              </div>

              {/* Features */}
              <div className="grow mb-6">
                <ul className="space-y-5 text-[#DBE5F2] text-sm leading-relaxed">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Explore Button */}
              <button className="w-full bg-[#2894D1] hover:bg-[#2B8FBF] text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                Explore
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
