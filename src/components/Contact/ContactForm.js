"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [selectedOption, setSelectedOption] = useState("dr");
  const [formData, setFormData] = useState({
    name: "",
    specialty: "Neuro - Spine",
    email: "",
    phone: "",
    message: "",
  });

  const specialties = [
    "Neuro - Spine",
    "Ophthalmology",
    "ENT",
    "Plastic & Reconstructive",
    "Colposcopy",
  ];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setFormData({
      name: "",
      specialty: "Neuro - Spine",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      ...formData,
      contactType: selectedOption,
    });
    // Add your form submission logic here
  };

  const renderFormFields = () => {
    switch (selectedOption) {
      case "dr":
        return (
          <>
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#575578] mb-2">
                Dr / hospital / institute
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2894D1] focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#575578] mb-2">
                Specialty
              </label>
              <select
                name="specialty"
                value={formData.specialty}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2894D1] focus:border-transparent appearance-none bg-white"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%232894D1' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                  backgroundSize: "16px",
                  paddingRight: "40px",
                }}
              >
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#575578] mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2894D1] focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#575578] mb-2">
                Phone number
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value="+91"
                  disabled
                  className="px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 w-16"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2894D1] focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#575578] mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2894D1] focus:border-transparent resize-none"
              ></textarea>
            </div>
          </>
        );

      case "dealer":
        return (
          <>
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#575578] mb-2">
                Dealer / Distributor
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2894D1] focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#575578] mb-2">
                GST/CIN
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2894D1] focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#575578] mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2894D1] focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#575578] mb-2">
                Phone number/Whatsapp
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value="+91"
                  disabled
                  className="px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 w-16"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2894D1] focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#575578] mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2894D1] focus:border-transparent resize-none"
              ></textarea>
            </div>
          </>
        );

      case "oem":
        return (
          <>
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#575578] mb-2">
                Dealer / Distributor
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2894D1] focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#575578] mb-2">
                GST/CIN
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2894D1] focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#575578] mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2894D1] focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#575578] mb-2">
                Phone number/Whatsapp
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value="+91"
                  disabled
                  className="px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 w-16"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2894D1] focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#575578] mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2894D1] focus:border-transparent resize-none"
              ></textarea>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <section className="w-full pt-32 md:pt-40 pb-16 md:pb-24 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 md:px-6 lg:px-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold text-center text-[#384F5D] mb-12 md:mb-16"
        >
          Contact
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className=""
        >
          {/* Radio Options */}
          <div className="space-y-2 max-w-56 mb-10  mx-auto">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                value="dr"
                checked={selectedOption === "dr"}
                onChange={handleOptionChange}
                className="w-5 h-5 accent-[#2894D1]"
              />
              <span className="text-[#000000A1] font-semibold">
                Dr / hospital / institute
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                value="dealer"
                checked={selectedOption === "dealer"}
                onChange={handleOptionChange}
                className="w-5 h-5 accent-[#2894D1]"
              />
              <span className="text-[#000000A1] font-semibold">
                Dealer / Distributor
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                value="oem"
                checked={selectedOption === "oem"}
                onChange={handleOptionChange}
                className="w-5 h-5 accent-[#2894D1]"
              />
              <span className="text-[#000000A1] font-semibold">
                OEM / collaboration
              </span>
            </label>
          </div>

          {/* Form Fields */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white rounded-lg shadow-lg p-8 md:p-10 "
          >
            {renderFormFields()}

            {/* Submit Button */}
            <button
              type="submit"
              className="px-8 py-3 bg-[#2894D1] hover:bg-[#2B8FBF] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
