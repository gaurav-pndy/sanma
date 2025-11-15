"use client";

import React from "react";
import { motion } from "framer-motion";

export default function LuminDesc() {
  const specifications = [
    {
      category: "Optical System",
      description:
        "Apochromatic optics for superior resolution and color fidelity",
    },
    {
      category: "Illumination",
      description: "High-intensity coaxial LED with red-reflex enhancement",
    },
    {
      category: "Optional Magnification",
      description: "0.4x, 0.6x, 1.0x, 1.6x, 2.5x or continuous 1:6 ratio zoom",
    },
    {
      category: "Working Distance",
      description: "200 - 500mm continuous variable motorised handgrip control",
    },
    {
      category: "Ergonomics",
      description:
        "Adjustable binoculars and balanced suspension for long procedures",
    },
    {
      category: "Connectivity",
      description:
        "Integrated camera FUll HD camera with live video recording and still image storage",
    },
    {
      category: "Applications",
      description:
        "Perfect for advanced ENT microsurgeries cochlear implant procedures and head and neck procedures",
    },
  ];

  return (
    <section className="w-full pb-16 px-4  bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Blue Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-linear-to-r from-[#1B3686] to-[#2894D1] text-white rounded-lg p-4 md:p-6 mb-12 "
        >
          <p className="text-3xl md:text-4xl text-center ">
            Advanced visualization for complex ENT microsurgery.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className=" text-[#000000A1]">
          <p className="flex items-start gap-3 font-semibold md:text-lg ">
            The Crisp I delivers stable magnification, smooth maneuverability,
            and clear optics — ideal for otologic and general ENT procedures
            requiring consistent performance and ease of use.
          </p>
        </div>

        {/* Specifications Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-hidden mt-10"
        >
          <div className="border border-[#707070] rounded-lg overflow-hidden max-w-5xl mx-auto text-[#707070]">
            {/* Table Rows */}
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
                className={`grid grid-cols-3 ${
                  index !== specifications.length - 1
                    ? "border-b border-[#707070]"
                    : ""
                }`}
              >
                <div className="p-4 md:p-6 border-r border-[#707070] ">
                  <p className=" font-medium  md:text-lg">{spec.category}</p>
                </div>
                <div className="p-4 md:p-6 col-span-2">
                  <p className=" md:text-lg">{spec.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
