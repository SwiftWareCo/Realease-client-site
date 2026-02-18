"use client";

import { useState, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

import Navbar from "./components/Navbar";
import DemoForm from "./components/DemoForm";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LeadFlowSection from "./components/LeadFlowSection";
import AIToolsSection from "./components/AIToolsSection";
import ComparisonSection from "./components/ComparisonSection";
import CTASection from "./components/CTASection";

const CALENDLY_URL = "https://calendly.com/amarramadann/30min";

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);

  /* Scroll-driven cog rotation */
  const { scrollYProgress } = useScroll();
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [0, 1800]);
  const scrollRotateReverse = useTransform(scrollYProgress, [0, 1], [0, -1200]);

  /* Load Calendly widget script */


  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  };

  return (
    <>
      <Navbar />
      <DemoForm isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      <HeroSection openCalendly={openCalendly} />
      <LeadFlowSection />
      <AIToolsSection scrollRotate={scrollRotate} scrollRotateReverse={scrollRotateReverse} />
      <ComparisonSection />
      <CTASection openCalendly={openCalendly} />
      <Footer />
    </>
  );
}
