import AboutSection from "@/components/Home/AboutSection";
import ContactSection from "@/components/Home/ContactSection";
import ExpertiseSection from "@/components/Home/ExpertiseSection";
import Hero from "@/components/Home/Hero";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ExpertiseSection />
      <ContactSection />
    </div>
  );
};

export default Home;
