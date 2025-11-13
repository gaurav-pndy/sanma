"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const valueCards = [
  {
    id: 1,
    image: "/about/Value_01.png",
    title: "Technology That Empowers",
    description:
      "Our innovations combine optical excellence, precision mechanics, and digital integration — creating systems that surgeons trust for accuracy, reliability, and ease of use.",
  },
  {
    id: 2,
    image: "/about/Value_02.png",
    title: "Quality and Trust",
    description:
      "Made under quality systems and certified as per regualtory guidlines and standards. <br/><br/> Our products ensure consistent performance and long-term durability in demanding surgical environments.",
  },
  {
    id: 3,
    image: "/about/Value_03.png",
    title: "Market Reach",
    description:
      "Our innovations combine optical excellence, precision mechanics, and digital integration — creating systems that surgeons trust for accuracy, reliability, and ease of use.",
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

export default function ValueSection() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto  ">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-[#384F5D] mb-12 "
        >
          Value
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-6 xl:gap-12">
          {valueCards.map((card, index) => (
            <motion.div
              key={card.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group bg-white   transition-all duration-300 "
            >
              {/* Image */}
              <div className="relative w-full h-80 md:h-48 lg:h-64 xl:h-90 overflow-hidden bg-gray-200">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="mt-6">
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-semibold text-[#000000A1] mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#000000A1]  text-sm lg:text-base"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                ></p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
