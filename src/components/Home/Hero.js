"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Engineering the Future of Healthcare",
    image: "/hero/hero1.jpg",
    alt: "Surgeon in operating room with medical equipment",
  },
  {
    id: 2,
    title: "Precision-Driven. Technology-Led. Patient-Focused.",
    image: "/hero/hero2.jpg",
    alt: "Doctor examining patient with eye equipment",
  },
  {
    id: 3,
    title: "Innovating with Precision. Healing with Purpose.",
    image: "/hero/hero3.jpg",
    alt: "Cosmetic surgery procedure",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full h-140 xl:h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass:
            "swiper-pagination-bullet-active custom-bullet-active",
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full px-4">
              {/* Background Image with Next.js Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  quality={75}
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-end pb-10 xl:pb-20 2xl:pb-32 max-w-7xl mx-auto">
                <div className="max-w-xl xl:max-w-2xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 md:mb-10">
                    {slide.title}
                  </h1>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={"/contact"}
                      className="px-8 md:px-12 py-3 bg-sky-400 hover:bg-sky-500 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex justify-center items-center"
                    >
                      Contact
                    </Link>
                    <button className="px-8 md:px-12 py-3 bg-transparent border-2 border-white/80 hover:bg-white/10 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 cursor-pointer">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .custom-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .custom-bullet-active {
          width: 32px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.95);
        }

        .swiper-pagination {
          bottom: 40px !important;
        }

        @media (max-width: 768px) {
          .swiper-pagination {
            bottom: 30px !important;
          }
        }
      `}</style>
    </section>
  );
}
