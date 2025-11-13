"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

const navItems = [
  { name: "About us", href: "/about" },
  {
    name: "Products",
    href: "/products",
    submenu: [
      {
        id: 1,
        name: "Surgical Operating Microscope",
        image: "/products/SOM.png",
        href: "/products/surgical-microscope",
      },
      {
        id: 2,
        name: "3D 4K Robotic Exoscope",
        image: "/products/Robotic Exoscope.png",
        href: "/products/robotic-exoscope",
      },
      {
        id: 3,
        name: "IGS - Navigation",
        image: "/products/Navigation.png",
        href: "/products/igs-navigation",
      },
    ],
  },
  {
    name: "Specialities",
    href: "/specialities",
    submenu: [
      {
        id: 1,
        name: "Nuero",
        href: "/specialities/neuro",
        normal: "/special/Normal/Neuro.svg",
        selected: "/special/Selected/Neuro.svg",
      },
      {
        id: 2,
        name: "Spine",
        href: "/specialities/spine",
        normal: "/special/Normal/Spine.svg",
        selected: "/special/Selected/Spine.svg",
      },
      {
        id: 3,
        name: "Opthalmology",
        href: "/specialities/opthalmology",
        normal: "/special/Normal/Opthal.svg",
        selected: "/special/Selected/Opthal.svg",
      },
      {
        id: 4,
        name: "ENT",
        href: "/specialities/ent",
        normal: "/special/Normal/ENT.svg",
        selected: "/special/Selected/ENT.svg",
      },
      {
        id: 5,
        name: "Plastic & Reconstructive",
        href: "/specialities/plastic-and-reconstructive",
        normal: "/special/Normal/P&R.svg",
        selected: "/special/Selected/P&R.svg",
      },
      {
        id: 6,
        name: "Dental",
        href: "/specialities/dental",
        normal: "/special/Normal/Dental.svg",
        selected: "/special/Selected/Dental.svg",
      },
    ],
  },
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
  const [openDropdown, setOpenDropdown] = useState(null);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [specialDropdown, setSpecialDropdown] = useState(false);
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

  // Desktop Dropdown Component
  const DesktopProductsDropdown = () => {
    const productsItem = navItems.find((item) => item.name == "Products");

    return (
      <div
        onMouseEnter={() => setProductsDropdown(true)}
        onMouseLeave={() => setProductsDropdown(false)}
        className="relative group  py-4"
      >
        <button
          className={`flex items-center gap-1 text-sm font-light transition-all duration-300 cursor-pointer ${
            isActive("/products")
              ? "text-white underline underline-offset-4 font-normal decoration-2"
              : "text-white group-hover:underline underline-offset-4 decoration-2"
          }`}
        >
          {productsItem.name}
          {/* <FaChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" /> */}
        </button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {productsDropdown && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: 10 }}
              //   transition={{ duration: 0.2 }}
              className="absolute left-1/2 translate-x-[-50%] mt-4 w-lg xl:w-2xl bg-white/60 backdrop-blur-lg rounded-lg overflow-hidden shadow-2xl  transition-all duration-300  z-50"
            >
              <div className=" grid grid-cols-3 ">
                {productsItem.submenu.map((product) => (
                  <Link
                    key={product.id}
                    href={product.href}
                    className="flex flex-col items-center gap-6 p-8 pb-4 border-b-4 border-transparent hover:border-[#5493d7] hover:bg-[#f7f7f7] transition-all duration-300 group/item"
                  >
                    {/* Product Image */}
                    <div className="relative w-28 xl:w-40 h-20 xl:h-32 rounded-lg shrink-0 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        //   sizes="80px"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-center">
                      <h4 className="text-xs xl:text-sm text-center font-semibold text-[#384F5D] ">
                        {product.name}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  const DesktopSpecialDropdown = () => {
    const specialsItem = navItems.find((item) => item.name == "Specialities");

    return (
      <div
        onMouseEnter={() => setSpecialDropdown(true)}
        onMouseLeave={() => setSpecialDropdown(false)}
        className="relative group  py-4"
      >
        <button
          className={`flex items-center gap-1 text-sm font-light transition-all duration-300 cursor-pointer ${
            isActive("/specialities")
              ? "text-white underline underline-offset-4 font-normal decoration-2"
              : "text-white group-hover:underline underline-offset-4 decoration-2"
          }`}
        >
          {specialsItem.name}
          {/* <FaChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" /> */}
        </button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {specialDropdown && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: 10 }}
              //   transition={{ duration: 0.2 }}
              className="absolute left-1/2 translate-x-[-50%] mt-4 w-3xl xl:w-5xl bg-white/60 backdrop-blur-lg rounded-lg overflow-hidden shadow-2xl  transition-all duration-300  z-50"
            >
              <div className=" grid grid-cols-6 ">
                {specialsItem.submenu.map((s) => (
                  <Link
                    key={s.id}
                    href={s.href}
                    className="flex flex-col items-center gap-6 p-8 pb-4 border-b-4 border-transparent hover:border-[#5493d7] hover:bg-[#f7f7f7] transition-all duration-300 group/item"
                  >
                    {/* Product Image */}
                    <div className="relative w-16 h-16 rounded-lg shrink-0 overflow-hidden group/item">
                      <Image
                        src={s.normal}
                        alt={s.name}
                        fill
                        className="object-cover transition-opacity duration-500 group-hover/item:opacity-0"
                      />
                      <Image
                        src={s.selected}
                        alt={s.name}
                        fill
                        className="object-cover opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-center">
                      <h4 className="text-xs xl:text-sm text-center font-semibold text-[#384F5D] ">
                        {s.name}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <header className="w-full bg-transparent absolute top-0 left-0 px-4 z-50">
      <div className="flex items-center justify-between py-4 max-w-7xl mx-auto">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-10 xl:gap-12">
          {navItems.map((item) => {
            if (item.name == "Products") {
              return <DesktopProductsDropdown key={item.name} />;
            }
            if (item.name == "Specialities") {
              return <DesktopSpecialDropdown key={item.name} />;
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm py-4 font-light transition-all duration-300 ${
                  isActive(item.href)
                    ? "text-white underline underline-offset-4 font-normal decoration-2"
                    : "text-white hover:underline underline-offset-4 decoration-2"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Search */}
        <div className="hidden border border-white/50 lg:flex items-center bg-white/20 rounded-full px-4 py-2 backdrop-blur-md">
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
          className="lg:hidden p-2 z-50 relative"
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
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              />

              {/* Slide-in Menu */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 h-full w-[90vw] bg-gradient-to-b from-[#1a2332] to-[#0f1419] shadow-2xl z-40 lg:hidden overflow-y-auto"
              >
                <nav className="flex flex-col gap-1 px-6 pt-24 pb-6">
                  {/* Navigation Links */}
                  <div className="flex flex-col gap-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        {item.name == "Products" ? (
                          // Mobile Products Dropdown
                          <div>
                            <button
                              onClick={() =>
                                setOpenDropdown(
                                  openDropdown === "products"
                                    ? null
                                    : "products"
                                )
                              }
                              className="w-full text-left text-lg py-3 px-4 rounded-lg transition-all border-b border-white/10 text-white hover:bg-white/10 flex items-center justify-between"
                            >
                              {item.name}
                              <FaChevronDown
                                className={`w-4 h-4 transition-transform ${
                                  openDropdown === "products"
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>

                            {/* Mobile Submenu */}
                            <AnimatePresence>
                              {openDropdown === "products" && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="bg-white/5 border-b border-white/10"
                                >
                                  {item.submenu.map((product) => (
                                    <Link
                                      key={product.id}
                                      href={product.href}
                                      onClick={() => setOpen(false)}
                                      className="flex gap-4 p-4 text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-b-0"
                                    >
                                      {/* Product Image */}
                                      <div className="relative w-16 h-16  rounded-lg flex-shrink-0 overflow-hidden">
                                        <Image
                                          src={product.image}
                                          alt={product.name}
                                          fill
                                          className="object-cover"
                                          sizes="64px"
                                        />
                                      </div>

                                      {/* Product Info */}
                                      <div className="flex flex-col justify-center">
                                        <h4 className="text-sm font-semibold text-white">
                                          {product.name}
                                        </h4>
                                      </div>
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : item.name == "Specialities" ? (
                          // Mobile Products Dropdown
                          <div>
                            <button
                              onClick={() =>
                                setOpenDropdown(
                                  openDropdown === "specialities"
                                    ? null
                                    : "specialities"
                                )
                              }
                              className="w-full text-left text-lg py-3 px-4 rounded-lg transition-all border-b border-white/10 text-white hover:bg-white/10 flex items-center justify-between"
                            >
                              {item.name}
                              <FaChevronDown
                                className={`w-4 h-4 transition-transform ${
                                  openDropdown === "specialities"
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>

                            {/* Mobile Submenu */}
                            <AnimatePresence>
                              {openDropdown === "specialities" && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="bg-white/5 border-b border-white/10"
                                >
                                  {item.submenu.map((s) => (
                                    <Link
                                      key={s.id}
                                      href={s.href}
                                      onClick={() => setOpen(false)}
                                      className="flex gap-4 p-4 text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-b-0"
                                    >
                                      {/* Product Image */}
                                      <div className="relative w-10 h-10  rounded-lg flex-shrink-0 overflow-hidden">
                                        <Image
                                          src={s.selected}
                                          alt={s.name}
                                          fill
                                          className="object-cover"
                                          sizes="64px"
                                        />
                                      </div>

                                      {/* Product Info */}
                                      <div className="flex flex-col justify-center">
                                        <h4 className="text-sm font-semibold text-white">
                                          {s.name}
                                        </h4>
                                      </div>
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
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
                        )}
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
