"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".parallax-panel");
      
      panels.forEach((panel: any, i) => {
        gsap.to(panel, {
          yPercent: -20 * (i + 1), // Different depth speeds
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-lux-dark overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-lux-dark/40 z-10" />
        <img src="/images/marble_texture_1778847056035.webp" alt="Marble Texture" className="parallax-panel absolute top-[10%] left-[5%] w-[40%] h-[60%] object-cover opacity-80" />
        <img src="/images/brushed_gold_1778847073672.webp" alt="Brushed Gold" className="parallax-panel absolute top-[30%] right-[10%] w-[35%] h-[50%] object-cover opacity-90" />
        <img src="/images/velvet_fabric_1778847088719.webp" alt="Velvet Fabric" className="parallax-panel absolute top-[60%] left-[20%] w-[45%] h-[40%] object-cover opacity-70" />
      </div>

      <div className="relative z-20 text-center px-6 mix-blend-difference text-white">
        <h2 className="font-serif text-6xl md:text-8xl tracking-tight">
          Materials & <br /> Craftsmanship
        </h2>
      </div>
    </section>
  );
}
