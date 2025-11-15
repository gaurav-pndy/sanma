"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function YokoDesc() {
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
            Heads Up Surgical Experience
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-6 text-[#000000A1]">
          <p className="flex items-start gap-3 font-semibold md:text-lg ">
            Sanma 3D Exoscope is an innovative visualisation platform that
            bridges the gap between traditional surgical microscopes and modern
            digital imaging. It delivers ultra-high-definition 3D surgical
            visual experience of the operative field on a large monitor,
            allowing surgeons to procedures with unmatched clarity, depth
            perception, and comfort ever.
          </p>
          <p className="flex items-start gap-3 font-semibold md:text-lg mt-4">
            Ideal for Neurosurgery, Spine, ENT, Ophthalmology, and Plastic &
            Reconstructive procedures, the system transforms the surgical
            workflow by satisfactory and ownership.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center md:justify-start"
            >
              <div className="relative w-full h-60 md:h-40 lg:h-60 xl:h-80">
                <Image
                  src="/products/model2/5.png"
                  alt="Co-observer tube diagram"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Right: Co-Observer Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-[#000000A1] md:col-span-2"
            >
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3  md:text-lg ">
                    <span>
                      A high quality time tested sensors in the robotic arm
                      responds well to the surgeon’s convenient positioning
                      during the surgical applications
                    </span>
                  </li>
                  <li className="flex items-start gap-3  md:text-lg ">
                    <span>
                      {" "}
                      The computerised graphic techniques allow tracking to
                      perform poetic smooth ergonomic movements, resulting
                      satisfactory surgeries
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <p className="flex items-start gap-3  md:text-lg mt-4 text-[#000000A1]">
            Ideal for Neurosurgery, Spine, ENT, Ophthalmology, and Plastic &
            Reconstructive procedures, the system transforms the surgical
            workflow by satisfactory and ownership.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center md:justify-start"
            >
              <div className="relative w-full h-[300px] md:h-140">
                <Image
                  src="/products/model2/6.png"
                  alt="Co-observer tube diagram"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Right: Co-Observer Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-[#000000A1] md:col-span-2"
            >
              <div>
                <h3 className="text-xl mb-2 md:text-2xl font-semibold">
                  Key Features:
                </h3>

                <ul className="space-y-1">
                  <li className="  md:text-lg ">
                    <span className="font-semibold">
                      {" "}
                      4K 3D Visualisation:{" "}
                    </span>
                    Crystal-clear stereoscopic imaging with lifelike depth
                    perception.
                  </li>
                  <li className="  md:text-lg ">
                    <span className="font-semibold"> Ergonomic Freedom: </span>
                    Operate in a natural, upright posture — reducing fatigue
                    during long surgeries.
                  </li>
                  <li className=" md:text-lg ">
                    <span className="font-semibold">
                      {" "}
                      Digital Zoom & Focus:{" "}
                    </span>
                    Seamless magnification with precision control.
                  </li>
                  <li className=" md:text-lg ">
                    <span className="font-semibold">
                      {" "}
                      Extended Working Distance:
                    </span>{" "}
                    Ideal for complex and deep surgical fields.
                  </li>
                  <li className="  md:text-lg ">
                    <span className="font-semibold">
                      {" "}
                      Compact & Flexible Design:
                    </span>{" "}
                    Easy positioning with smooth mechanical arm movement.
                  </li>
                  <li className=" md:text-lg ">
                    <span className="font-semibold">
                      {" "}
                      Image & Video Documentation:
                    </span>{" "}
                    High-quality recording for teaching, training, and review.
                  </li>
                  <li className="  md:text-lg ">
                    <span className="font-semibold">
                      {" "}
                      Large 3D Display Integration:
                    </span>{" "}
                    Enables the entire surgical team to view the same
                    perspective in real-time.
                  </li>
                  <li className="  md:text-lg ">
                    <span className="font-semibold">Modular System: </span>
                    Compatible with multiple surgical specialties and imaging
                    workflows.
                  </li>
                  <li className=" md:text-lg ">
                    <span className="font-semibold">
                      {" "}
                      Clinical Advantages:{" "}
                    </span>
                    Enhanced Precision: True-to-life 3D depth aids delicate
                    dissection and suturing.
                  </li>
                  <li className=" md:text-lg ">
                    <span className="font-semibold">
                      Improved Team Dynamics:
                    </span>{" "}
                    Shared 3D visualization enhances coordination in complex
                    cases.
                  </li>
                  <li className="md:text-lg ">
                    <span className="font-semibold">
                      {" "}
                      Reduced Eye & Neck Strain:
                    </span>{" "}
                    No eyepieces — operate from a comfortable viewing distance.
                  </li>
                  <li className=" md:text-lg ">
                    <span className="font-semibold">Optimized OR Space:</span>{" "}
                    Compact footprint and minimal cabling improve workflow
                    efficiency.
                  </li>
                  <li className=" md:text-lg ">
                    <span className="font-semibold">
                      {" "}
                      Superior Educational Tool:
                    </span>{" "}
                    Perfect for training and academic demonstration in real-time
                    3D. Optimal surgical results and succesful ownership growth
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
