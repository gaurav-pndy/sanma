"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OculaDesc() {
  const features = [
    {
      title: "Superior Visualisation",
      points: [
        "Provides high-resolution, stereoscopic magnification for intricate neural and spinal structures.",
        "Enhances differentiation between healthy tissue, lesions, and critical vascular structures.",
      ],
    },
    {
      title: "Enhanced Surgical Precision",
      points: [
        "Enables accurate dissection and micro-manipulation within confined anatomical spaces. ",
        "Facilitates delicate suturing and nerve preservation during microsurgical interventions. ",
      ],
    },
    {
      title: "Improved Depth Perception & Illumination",
      points: [
        "Coaxial LED or xenon illumination ensures uniform lighting without shadows. ",
        "Three-dimensional depth perception improves hand-eye coordination and procedural safety. ",
      ],
    },
    {
      title: "Better Ergonomics for the Surgeon ",
      points: [
        "Adjustable viewing angles and motorised positioning reduce surgeon fatigue during long procedures. ",
        "Promotes steady hand posture and minimizes tremors for more controlled movements. ",
        "Supports image and video documentation for teaching, review, and medico-legal record. ",
      ],
    },
    {
      title: "Enhanced Outcomes & Reduced Complications ",
      points: [
        "Greater surgical accuracy leads to minimal tissue trauma and reduced blood loss. ",
        "Improves postoperative recovery and reduces complication rates. ",
      ],
    },
    {
      title: "Educational & Collaborative Benefits ",
      points: [
        "Integrated 4K ultra definition visualisation and recording options aid in training, live demonstrations, and team coordination. ",
      ],
    },
  ];

  const coObserverFeatures = [
    "The co-observer tube allows an assistant surgeon, trainee, or observer to view the same surgical field seen by the main surgeon in real time.",
    "It provides binocular vision, maintaining the same magnification and depth perception as the primary surgeon. - Enhanced Team Coordination",
    "The assistant can monitor every movement and step of the surgeon.",
    "This enables better instrument handling, anticipation of needs, and smoother surgical workflow.",
    "Educational and Training Purpose",
    "In teaching hospitals and training centers, co - observer tubes allow residents and fellows to learn from live surgeries directly through the microscope optics.",
    "Facilitates hands - on guidance, as the trainer can correct or demonstrate techniques while the trainee observes simultaneously.",
    "Documentation and Demonstration",
    "When coupled with a camera adapter or video system, the co - observer tube can also assist in recording or broadcasting the procedure for academic or review purposes.",
    "Flexible Positioning",
    "It can be mounted on either side of the microscope to suit surgeon–assistant ergonomics",
    "Adjustable inter - pupillary distance ensures comfortable viewing for different users.",
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
          <p className="text-xl md:text-2xl ">
            Enables real-time interaction and verbal coordination between the
            surgeon and co-observer, improving teaching clarity and procedural
            teamwork.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-6 text-[#000000A1]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className=""
            >
              <h3 className="text-xl md:text-2xl font-semibold ">
                {feature.title}
              </h3>
              <ul className="">
                {feature.points.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1 + idx * 0.05,
                      duration: 0.5,
                    }}
                    className="flex items-start gap-3  md:text-lg "
                  >
                    <span>- {point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
          <ul className="">
            {coObserverFeatures.map((point, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.05, duration: 0.5 }}
                className="flex items-start gap-3  md:text-lg "
              >
                <span>- {point}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Co-Observer Section */}
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
              <div className="relative w-full h-[300px] md:h-80">
                <Image
                  src="/products/model1/5.png"
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
                  Side Co-observer tube
                </h3>
                <ul className="font-semibold">
                  <li className="flex items-start gap-3  md:text-lg ">
                    <span>
                      - Binocular optical design with independent focusing.
                    </span>
                  </li>
                  <li className="flex items-start gap-3  md:text-lg ">
                    <span>
                      {" "}
                      - Image parity identical to the main binoculars—so no
                      inversion or mirror effect.
                    </span>
                  </li>
                  <li className="flex items-start gap-3  md:text-lg ">
                    <span>
                      - Optional rotatable mount for flexible positioning during
                      multi-surgeon setups
                    </span>
                  </li>
                  <li className="flex items-start gap-3  md:text-lg ">
                    <span>- 3 axis adjustable angles and image rotating</span>
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
