"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email submitted:", email);
    // You can integrate with your email service or backend API here
    setEmail("");
  };

  return (
    <section className="px-4">
      <div className="relative w-full my-16 max-w-7xl rounded-3xl mx-auto overflow-hidden">
        {/* Background Image with Next.js Image */}
        <div className="absolute inset-0 -top-12">
          <Image
            src="/hero/hero1.jpg"
            alt="Contact background"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1280px) 100vw, 1280px"
            quality={75}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center p-6 md:p-12">
          <div className="w-full rounded-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-lg"
            >
              {/* Heading */}
              <p className="text-white/90 text-base md:text-lg">
                Want to know more about our exclusive products?
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Contact us
              </h2>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  placeholder="Enter your email here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-3 md:py-4 rounded-lg bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E67E50] transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-3 md:py-4 bg-[#CF5C49] hover:bg-[#d4693d] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                >
                  Enquire Now
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
