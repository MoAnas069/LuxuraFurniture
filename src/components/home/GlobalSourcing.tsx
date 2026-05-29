"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GlobalSourcing() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".map-point",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.3,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          },
        }
      );
      
      gsap.fromTo(
        ".headline",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen bg-lux-bg flex items-center overflow-hidden">
      {/* Abstract Glowing Map Lines (Simulated with simple SVG for the moment) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex justify-center items-center">
        <svg viewBox="0 0 1000 500" className="w-full h-full stroke-lux-gold stroke-1 fill-none">
          <path d="M 200 250 Q 400 100 500 200 T 800 150" />
          <path d="M 300 350 Q 500 450 600 250 T 900 300" />
        </svg>
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-5xl h-[500px]">
          {/* Map Points */}
          <div className="map-point absolute top-[20%] left-[45%] flex flex-col items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-lux-gold shadow-[0_0_15px_rgba(199,161,107,0.8)]" />
            <span className="text-lux-gold text-xs uppercase tracking-widest">Italy</span>
          </div>
          <div className="map-point absolute top-[30%] left-[55%] flex flex-col items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-lux-gold shadow-[0_0_15px_rgba(199,161,107,0.8)]" />
            <span className="text-lux-gold text-xs uppercase tracking-widest">Turkey</span>
          </div>
          <div className="map-point absolute top-[40%] left-[65%] flex flex-col items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-lux-gold shadow-[0_0_15px_rgba(199,161,107,0.8)]" />
            <span className="text-lux-gold text-xs uppercase tracking-widest">Dubai</span>
          </div>
          <div className="map-point absolute top-[25%] left-[20%] flex flex-col items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-lux-gold shadow-[0_0_15px_rgba(199,161,107,0.8)]" />
            <span className="text-lux-gold text-xs uppercase tracking-widest">Canada</span>
          </div>
        </div>
      </div>

      <div className="relative z-20 container mx-auto px-6 md:px-12 pointer-events-auto mt-64">
        <h2 className="headline font-serif text-5xl md:text-7xl text-lux-dark text-center leading-tight">
          Curated globally.<br />
          <span className="text-lux-gold">Delivered personally.</span>
        </h2>
      </div>
    </section>
  );
}
