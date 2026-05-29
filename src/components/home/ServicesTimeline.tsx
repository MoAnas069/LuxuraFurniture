"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  { step: "01", title: "Consultation", desc: "Understanding your vision, space, and lifestyle requirements." },
  { step: "02", title: "Curation", desc: "Presenting a tailored selection of exclusive pieces and materials." },
  { step: "03", title: "Sourcing", desc: "Procuring or manufacturing the selected items with meticulous quality control." },
  { step: "04", title: "Delivery", desc: "White-glove installation to finalize the composed space." },
];

export default function ServicesTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".timeline-item", 
        { x: -50, opacity: 0, filter: "blur(10px)" },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          stagger: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-lux-bg px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="font-serif text-5xl md:text-7xl text-lux-dark mb-8">Architecting<br/>The Process</h2>
          <p className="font-sans text-xl text-lux-text-muted font-light max-w-md">
            A meticulously refined process designed to eliminate friction and elevate the curation experience.
          </p>
        </div>
        
        <div className="relative border-l border-lux-gold/30 pl-12 space-y-24">
          {timeline.map((item) => (
            <div key={item.step} className="timeline-item relative">
              <div className="absolute -left-[54px] top-2 w-3 h-3 bg-lux-bg border border-lux-gold rounded-full" />
              <span className="text-lux-gold font-serif text-2xl tracking-widest block mb-4">
                {item.step}
              </span>
              <h3 className="font-serif text-4xl text-lux-dark mb-4">{item.title}</h3>
              <p className="font-sans font-light text-lux-text-muted text-lg max-w-md">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
