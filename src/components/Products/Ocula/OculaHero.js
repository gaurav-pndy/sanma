"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function OculaHero() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      src: "/products/model1/1.png",
      alt: "Ocula main view",
    },
    {
      src: "/products/model1/2.png",
      alt: "Ocula detail view 1",
    },
    {
      src: "/products/model1/3.png",
      alt: "Ocula detail view 2",
    },
    {
      src: "/products/model1/4.png",
      alt: "Ocula detail view 3",
    },
  ];

  const badges = [
    { src: "/products/model1/01.jpg", alt: "Smooth Well Balanced" },
    { src: "/products/model1/02.jpg", alt: "ICG Filters" },
    {
      src: "/products/model1/03.jpg",
      alt: "6 Axis Electromagnetic Brake System",
    },
    { src: "/products/model1/04.jpg", alt: "4K Ultra HD" },
  ];

  return (
    <section className="w-full pt-32 px-4 md:pt-40 pb-16 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto ">
        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-[#384F5D] mb-12 md:mb-16"
        >
          Products
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-[#384F5D] text-xl md:text-2xl mb-12 md:mb-16"
        >
          Surgical Operating Microscope
        </motion.h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left: Product Image with Thumbnails */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Main Image */}
            <div className="relative w-full h-[350px] md:h-[450px] lg:h-120  rounded-lg overflow-hidden">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-6 ">
              {images.map((image, index) =>
                index === selectedImage ? null : (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20  md:h-32 rounded-lg overflow-hidden border transition-all
                    border-[#70707099] hover:border-gray-800 cursor-pointer`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="100px"
                    />
                  </button>
                )
              )}
            </div>
          </motion.div>

          {/* Right: Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-start space-y-4"
          >
            {/* Specialty Label */}
            <div>
              <p className="text-[#18348C]  md:text-lg font-medium leading-5 ">
                Neuro &amp; Spine, ENT and Plastic &amp; Reconstructive
              </p>
              <p className="text-[#384F5D] font-semibold text-xs md:text-sm ">
                Surgical Microscopes
              </p>
            </div>

            {/* Model Name */}
            <div>
              <h3 className="text-[#869BAF] text-sm md:text-sm font-medium ">
                Model
              </h3>
              <h1 className="text-4xl font-orbitron md:text-5xl lg:text-6xl font-semibold text-[#18348C]">
                Ocula
              </h1>
            </div>

            {/* Features */}
            <div className="">
              <p className="text-[#2894D1] text-sm md:text-base">
                Exceptional Depth Perception
              </p>
              <p className="text-[#2894D1]  text-sm md:text-base">
                Stable, Ergonomic Design
              </p>
            </div>

            {/* Description */}
            <p className="text-[#000000A1]  md:text-lg ">
              Engineered to meet the critical demands of neurosurgical and spine
              procedures, where precision and clarity are vital. High-definition
              optics, superior illumination, and smooth motorised movements
              allow surgeons to work with enhanced confidence and control.
            </p>

            {/* Features Badges */}
            <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-6 py-4">
              {badges.map((badge, index) => (
                <div key={index} className="w-auto h-10 md:h-12  relative">
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    fill
                    className="object-contain relative!"
                  />
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-6 md:px-8 py-3 md:py-3.5 bg-[#EE7500] hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                Download Brochure
              </button>
              <Link
                href={"/contact"}
                className="px-6 md:px-8 py-3 md:py-3.5 bg-[#2894D1] hover:bg-[#2B8FBF] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
