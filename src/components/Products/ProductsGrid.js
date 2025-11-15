"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const productsData = [
  {
    id: 1,
    name: "Ocula",
    specialties: "Neuro, Spine, ENT and Plastic & Reconstructive",
    image: "/products/model1/1.png",
    slug: "ocula",
  },
  {
    id: 2,
    name: "Yoko NeVu",
    specialties: "Neuro, Spine, ENT and Plastic & Reconstructive",
    image: "/products/model2/1.png",
    slug: "yoko-nevu",
  },
  {
    id: 3,
    name: "CAPLA",
    specialties: "IGS Navigation",
    image: "/products/model3/1.png",
    slug: "capla",
  },
  {
    id: 4,
    name: "Glo-i",
    specialties: "Ophthalmology",
    image: "/products/model4/1.png",
    slug: "glo-i",
  },
  {
    id: 5,
    name: "VisPro",
    specialties: "Ophthalmology",
    image: "/products/model5/1.png",
    slug: "vispro",
  },
  {
    id: 6,
    name: "Crisp-i",
    specialties: "ENT",
    image: "/products/model6/1.png",
    slug: "crisp-i",
  },
  {
    id: 7,
    name: "LuminPro",
    specialties: "ENT and Plastic & Reconstructive",
    image: "/products/model7/1.png",
    slug: "luminpro",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function ProductsGrid() {
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {productsData.map((product, index) => (
            <motion.div
              key={product.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className=" rounded-lg border border-[#D9D9D980] transition-all duration-300 overflow-hidden group "
            >
              {/* Product Image */}
              <div className="relative  h-52 my-4 flex   overflow-visible!">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover "
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Product Content */}
              <div className="p-6 h-52 bg-[#F0F1F2] flex flex-col justify-between">
                {/* Product Name */}
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold text-[#000000A1] mb-2">
                    {product.name}
                  </h3>

                  {/* Specialties */}
                  <p className="text-sm md:text-base text-[#000000A1]  ">
                    {product.specialties}
                  </p>
                </div>

                {/* Explore Button */}
                <Link
                  href={`/products/${product.slug}`}
                  className="block w-full py-3.5 px-4 bg-[#2894D1] hover:bg-[#2B8FBF] text-white font-semibold \ transition-all duration-300 text-center transform hover:scale-105"
                >
                  Explore
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
