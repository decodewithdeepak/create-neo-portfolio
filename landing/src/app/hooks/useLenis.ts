"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export const useLenis = () => {
  useEffect(() => {
    // Create Lenis instance
    const lenis = new Lenis({
      duration: 0.8, // Lower for faster scroll
      easing: (t: number) => t, // Linear easing for snappier feel
      smoothWheel: true,
      wheelMultiplier: 1.2, // Slightly faster wheel scroll
      touchMultiplier: 1.4, // Slightly faster touch scroll
      lerp: 0.2, // Higher for more direct, less laggy scroll
      infinite: false,
      autoResize: true,
      syncTouch: false,
      syncTouchLerp: 0.1,
      __experimental__naiveDimensions: false,
    });

    // Attach Lenis instance to window with proper typing
    (window as typeof window & { lenis?: Lenis }).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      // Clean up global reference
      delete (window as typeof window & { lenis?: Lenis }).lenis;
    };
  }, []);
};