import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

function Logo() {
  return (
    <Link href="/">
      <div className="flex flex-col items-center w-fit space-y-2 cursor-pointer">
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
        <p className="text-[0.5rem] text-center xl:text-xs text-[#2D333A] tracking-wide">
          Empowering Surgeons
        </p>
      </div>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer Content */}
      <div className="max-w-340 mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.4fr_1fr] gap-8 lg:gap-12">
          {/* Logo and Tagline */}
          <Logo />

          {/* Explore Column */}
          <div>
            <h3 className="text-lg font-semibold text-[#000000] mb-4">
              Explore
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-1">
              <li>
                <Link
                  href="/about"
                  className="text-[#000000A1] hover:text-gray-900 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Products
                </Link>
              </li>
              {/* <li>
                <Link
                  href="#specialities"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Specialities
                </Link>
              </li> */}
              <li>
                <Link
                  href="#news"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  News/Activities
                </Link>
              </li>
              <li>
                <Link
                  href="#careers"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Resources</h3>
            <ul className="grid grid-cols-2 md:grid-cols-1">
              <li>
                <Link
                  href="#automation"
                  className="text-[#000000A1] hover:text-gray-900 transition-colors text-sm"
                >
                  Automation Tools
                </Link>
              </li>
              <li>
                <Link
                  href="#security"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  AI Security Tips
                </Link>
              </li>
              <li>
                <Link
                  href="#api"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Developer API
                </Link>
              </li>
              <li>
                <Link
                  href="#faqs"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#support"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Support Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch Column */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">
              Get in Touch
            </h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <HiLocationMarker className="w-5 h-5 text-gray-600 mt-0.5 shrink-0" />
                <div className="text-sm text-[#000000A1]">
                  <p>Sanma Medinears Vision PVT LTD.</p>
                  <p>68, Aavin Dairy Road, North Phase,</p>
                  <p>SIDCO Industrial Estate,</p>
                  <p>Ambattur - 600 098,</p>
                  <p>Chennai, India.</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <HiMail className="w-5 h-5 text-gray-600 shrink-0" />
                <a
                  href="mailto:sales@sanmas.com"
                  className="text-sm text-[#000000A1] hover:text-gray-900 transition-colors"
                >
                  sales@sanmas.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <HiPhone className="w-5 h-5 text-gray-600 shrink-0" />
                <a
                  href="tel:+919444444624"
                  className="text-sm text-[#000000A1] hover:text-gray-900 transition-colors"
                >
                  +91 94444 44624
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Column */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#facebook"
                className="w-9 h-9 bg-[#7F8F9C] hover:bg-gray-400 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5 text-white" />
              </a>
              <a
                href="#instagram"
                className="w-9 h-9 bg-[#7F8F9C] hover:bg-gray-400 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#twitter"
                className="w-9 h-9 bg-[#7F8F9C] hover:bg-gray-400 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#whatsapp"
                className="w-9 h-9 bg-[#7F8F9C] hover:bg-gray-400 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
              </a>
              <a
                href="#linkedin"
                className="w-9 h-9 bg-[#7F8F9C] hover:bg-gray-400 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5 text-white" />
              </a>
            </div>

            {/* Tagline */}
            <p className="text-sm text-center lg:text-left text-[#000000A1] pt-2">
              Whether it&apos;s enhancing efficiency, optimizing
              decision-making.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full bg-[#384F5D] py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#DBE5F2]">
            © Copyright 2025. All rights reserved by SANMAS
          </p>
          <div className="flex gap-6">
            <Link
              href="#terms"
              className="text-sm text-[#DBE5F2] hover:text-white transition-colors"
            >
              Terms of use
            </Link>
            <Link
              href="#privacy"
              className="text-sm text-[#DBE5F2] hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-sm text-[#DBE5F2] hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
