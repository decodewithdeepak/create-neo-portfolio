"use client"
import { useEffect, useState } from "react";
import Footer from "../components/sections/Footer";
import { Header } from "../components/sections/Header";
import { CommandOptions } from "../components/sections/CommandOptions";
import { CTASection } from "../components/sections/CTASection";
import { DemoVideo } from "../components/sections/DemoVideo";
import { Dependencies } from "../components/sections/Dependencies";
import { Features } from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import { HowItWorks } from "../components/sections/HowItWorks";
import { InstallationGuide } from "../components/sections/InstallationGuide";
import LoadingScreen from "../components/ui/LoadingScreen";
import { LenisProvider } from "../components/ui/LenisProvider";

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.body.classList.add('loading-background');
    setMounted(true);
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('loading-background');
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loading-background');
    };
  }, []);

  if (!mounted || isLoading) {
    return <LoadingScreen />;
  }


  return (
    <>
      <LenisProvider />
      <div className="min-h-screen w-full relative bg-gradient-to-br from-black via-gray-900/90 to-black/90 text-white">
        {/* Pearl Mist Background with Top Glow */}
        {/* <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 120% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
          }}
        /> */}
        <Header />

        <main>
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
