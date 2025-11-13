"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "About us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Specialities", href: "/specialities" },
  { name: "Contact", href: "/contact" },
];

function Logo() {
  return (
    <Link href="/">
      <div className="flex flex-col items-center space-y-2 cursor-pointer">
        {/* Oval Logo */}
        <div className="relative w-22 lg:w-26 h-12 lg:h-16 flex items-center justify-center">
          {/* Blue oval */}
          <div className="absolute flex justify-center items-center inset-0 bg-[#2894D1] rounded-[50%] overflow-hidden">
            <p className="relative lg:text-xl leading-4 lg:leading-6 font-semibold text-center text-[#15146B] tracking-wide bg-white w-full">
              Sanma
            </p>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-[0.5rem] lg:text-xs text-gray-300 font-light tracking-wide">
          Empowering Surgeons
        </p>
      </div>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Check if link is active
  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full bg-transparent absolute top-0 left-0 px-4 z-50">
      <div className="flex items-center justify-between py-4 max-w-7xl mx-auto">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-10 xl:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-light transition-all duration-300 ${
                isActive(item.href)
                  ? "text-white underline underline-offset-4 font-normal decoration-2"
                  : "text-white hover:underline underline-offset-4  decoration-2"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Search */}
        <div className="hidden border border-white/50 md:flex items-center bg-white/20 rounded-full px-4 py-2 backdrop-blur-md">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-white placeholder:text-white placeholder:opacity-60 w-32 xl:w-56"
          />
          <svg
            className="w-5 h-5 ml-2 text-white opacity-80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 z-50 relative"
          aria-label="Toggle navigation"
        >
          <motion.div
            animate={open ? "open" : "closed"}
            className="flex flex-col gap-1.5"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 8 },
              }}
              transition={{ duration: 0.3 }}
              className="w-7 h-0.5 bg-white block"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
              className="w-7 h-0.5 bg-white block"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -8 },
              }}
              transition={{ duration: 0.3 }}
              className="w-7 h-0.5 bg-white block"
            />
          </motion.div>
        </button>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              />

              {/* Slide-in Menu */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 h-full w-[90vw] bg-linear-to-b from-[#1a2332] to-[#0f1419] shadow-2xl z-40 md:hidden"
              >
                <nav className="flex flex-col gap-1 px-6 pt-24 pb-6 h-full">
                  {/* Navigation Links */}
                  <div className="flex flex-col gap-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={`text-lg py-3 px-4 rounded-lg transition-all border-b border-white/10 block ${
                            isActive(item.href)
                              ? "bg-white/10 text-white font-semibold"
                              : "text-white hover:bg-white/10"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile Search */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="mt-6"
                  >
                    <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-3 backdrop-blur-md">
                      <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent outline-none text-white placeholder:text-white placeholder:opacity-60 w-full text-sm"
                      />
                      <svg
                        className="w-5 h-5 ml-2 text-white opacity-80"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </div>
                  </motion.div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
