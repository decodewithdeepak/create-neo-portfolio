"use client";

import { useEffect, useState } from "react";

import LenisProvider from "../components/ui/lenis-provider";
import LoadingScreen from "../components/ui/loading-screen";

import Header from "../components/sections/header";
import Hero from "../components/sections/hero-section";
import DemoVideo from "../components/sections/demo-video";
import Features from "../components/sections/features-section";
import InstallationGuide from "../components/sections/installation-guide";
import HowItWorks from "../components/sections/how-it-works";
import Dependencies from "../components/sections/dependencies";
import CommandOptions from "../components/sections/command-options";
import CTASection from "../components/sections/cta-section";
import Footer from "../components/sections/footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add loading background effect
    document.body.classList.add("loading-background");
    setMounted(true);

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove("loading-background");
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("loading-background");
    };
  }, []);

  // Early return for better performance
  if (!mounted || isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <LenisProvider />

      {/* Main Page */}
      <div className="min-h-screen w-full relative bg-gradient-to-br from-black via-gray-900/90 to-black/90 text-white">
        <Header />
        <main className="space-y-20">
          <Hero />
          <DemoVideo />
          <Features />
          <InstallationGuide />
          <HowItWorks />
          <Dependencies />
          <CommandOptions />
          <CTASection />
        </main>
        <Footer />
      </div>
      
    </>
  );
}
