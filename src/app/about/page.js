import AboutHeroSection from "@/components/About/AboutHeroSection";
import MissionSection from "@/components/About/MissionSection";
import ValueSection from "@/components/About/ValueSection";
import React from "react";

export const metadata = {
  title: "About Sanma - Empowering Surgeons",
  description:
    "Learn about Sanma's mission to deliver world-class surgical solutions with precision and reliability.",
};

const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
      <MissionSection />
      <ValueSection />
    </div>
  );
};

export default AboutPage;
