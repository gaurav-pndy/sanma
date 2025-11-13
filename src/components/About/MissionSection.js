"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const values = [
  {
    id: 1,
    icon: "/about/Mission_Innovation.svg",
    title: "Innovation",
    description:
      "Continuous investment in R&D to deliver updated medical technologies.",
  },
  {
    id: 2,
    icon: "/about/Mission_Quality.svg",
    title: "Quality",
    description:
      "Commitment to global regulatory standards and precision manufacturing.",
  },
  {
    id: 3,
    icon: "/about/Mission_Integrity.svg",
    title: "Integrity",
    description:
      "Ethical business practices and long-term partnerships with healthcare professionals.",
  },
  {
    id: 4,
    icon: "/about/Mission_Excellence.svg",
    title: "Excellence",
    description:
      "Unwavering focus on surgeon comfort, patient safety, and technological advancement.",
  },
];

const valueVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function MissionSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16 flex flex-col-reverse  md:flex-row gap-12 items-center">
        {/* Section Title */}
        <div className="md:w-[60%]">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#384F5D] mb-4 md:mb-6"
          >
            Mission &amp; Vision
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl mb-12 md:mb-16"
          >
            <p className="lg:text-lg text-[#384F5D]  mb-4">
              To deliver innovative, reliable, and user-focused medical
              technologies that redefine surgical precision and improve patient
              care.
            </p>
            <p className="lg:text-lg text-[#384F5D] ">
              To be a global partner in surgical excellence, enabling safer,
              smarter, and more efficient procedures across specialties.
            </p>
          </motion.div>

          {/* Values Grid and Lightbulb */}

          {/* Left: Values Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={valueVariants}
                className="flex-1 space-y-3"
              >
                {/* Icon - Simple monochrome style */}
                <div className="relative w-10 h-10 mb-4">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#000000A1]">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#000000A1] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Lightbulb Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:w-[40%] lg:justify-end"
        >
          <div className="relative w-full  h-60 md:h-120">
            <Image
              src="/about/Bulb_Icon.svg"
              alt="Innovation lightbulb"
              fill
              className="object-contain relative!"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
