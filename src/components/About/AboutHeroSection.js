"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="relative w-full xl:mb-96 ">
      <div className="relative w-full h-140 xl:h-screen overflow-hidden  px-4">
        {/* Background Image with Next.js Image */}
        <div className="absolute inset-0">
          <Image
            src="/About_Us.jpg"
            alt="About Us"
            fill
            quality={75}
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end pb-10 xl:pb-20 2xl:pb-32 max-w-7xl mx-auto">
          <div className="max-w-xl xl:max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 md:mb-10">
              Precision in Every Procedure. Excellence in Every Outcome.
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 md:px-12 py-3 bg-sky-400 hover:bg-sky-500 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Contact
              </button>
              <button className="px-8 md:px-12 py-3 bg-transparent border-2 border-white/80 hover:bg-white/10 text-white font-medium rounded-full transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className=" z-20 xl:absolute top-[calc(100%-6rem)]  left-1/2 xl:translate-x-[-50%] mt-10 w-full max-w-7xl  text-white px-4 xl:px-0"
      >
        <div className="space-y-6 max-w-7xl w-full bg-[#2894D1] p-4 md:p-10  lg:p-12 rounded-xl">
          <p className="lg:text-lg leading-relaxed">
            Sanma Medineers, in making of advanced surgical visualisation
            systems dedicated to empowering surgeons with precision, clarity,
            and reliability. Established in 2005 and headquartered in Chennai,
            India.
          </p>

          <p className="lg:text-lg leading-relaxed">
            We specialised in designing and developing surgical operating
            microscopes, 3D exoscopes, and optical imaging solutions for
            microsurgical disciplines like Neuro, Spine, Ophthalmology, ENT, and
            Plastic & Reconstructive Surgery, colposcopy.
          </p>

          <p className="lg:text-lg leading-relaxed">
            Driven by innovation and engineering excellence, Sanma integrates
            optical precision, ergonomic design, and intelligent illumination to
            enhance surgical outcomes and user comfort. Our systems are
            developed with deep clinical insight and built to meet the evolving
            demands of modern microsurgery.
          </p>

          <p className="lg:text-lg leading-relaxed">
            At Sanma, we believe that technology should serve precision, not
            complexity. Every product reflects our commitment to simplicity in
            operation, durability in performance, and consistency in results.
            With a growing presence in medical device market, Sanma Medineers
            continues to advance its mission — to make world-class reliable,
            truly surgeon-centric, best clinical outcome.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
