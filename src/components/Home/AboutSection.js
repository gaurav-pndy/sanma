"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="px-4">
      <div className="relative md:mt-10 w-full py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl rounded-xl relative bg-[#2894d1] mx-auto p-4 md:p-8 lg:p-16">
          <div className="flex flex-col-reverse md:flex-row">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-6 z-20 md:w-[75%] xl:w-[55%]"
            >
              <h2 className="text-xl lg:text-3xl font-semibold leading-tight">
                Sanma is a trusted name
              </h2>

              <p className="text-base md:text-lg opacity-95">
                in advanced microsurgical and visualisation solutions, across
                Neurosurgery, Spine, Ophthalmology, ENT, and Plastic &
                Reconstructive Surgery, Colposcopy.
              </p>

              <p className="text-base md:text-lg leading-relaxed opacity-95">
                We bring together cutting-edge technology, ergonomic design, and
                clinical insight to deliver medical devices that enhance
                surgical precision and best patient outcomes.
              </p>

              <p className="text-base md:text-lg leading-relaxed opacity-95">
                With a strong foundation in optical engineering, mechanical
                precision, and clinical insight, we aim to support surgeons with
                technologies that enhance accuracy, safety, and efficiency in
                complex procedures.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:absolute -right-8 bottom-6 lg:bottom-12 xl:bottom-0 flex items-center justify-center"
            >
              <div className="relative w-full max-w-110 lg:max-w-140 xl:max-w-175">
                <Image
                  src="/about.png"
                  alt="Sanma medical surgical equipment"
                  fill
                  className="object-contain relative! drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
