"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t: number) => t,
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.4,
      lerp: 0.2,
      infinite: false,
      autoResize: true,
      syncTouch: false,
      syncTouchLerp: 0.1,
      __experimental__naiveDimensions: false,
    });

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
      delete (window as typeof window & { lenis?: Lenis }).lenis;
    };
  }, []);
};

function LenisProvider() {
  useLenis();
  return null;
}

export default LenisProvider;
