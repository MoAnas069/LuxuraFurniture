"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Globe, PenTool, Layout, Package } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Global Sourcing",
    description: "Accessing exclusive pieces from the world's most hidden ateliers and private collections.",
    icon: Globe,
  },
  {
    title: "Bespoke Manufacturing",
    description: "Commissioning one-of-a-kind furniture tailored to the precise architectural dimensions of your space.",
    icon: PenTool,
  },
  {
    title: "Interior Styling",
    description: "Curating textures, art, and furniture into a cohesive narrative that elevates the everyday.",
    icon: Layout,
  },
  {
    title: "Worldwide Delivery",
    description: "White-glove logistics ensuring pristine arrival and installation anywhere on the globe.",
    icon: Package,
  },
];

const timeline = [
  { step: "01", title: "Consultation", desc: "Understanding your vision, space, and lifestyle requirements." },
  { step: "02", title: "Curation", desc: "Presenting a tailored selection of exclusive pieces and materials." },
  { step: "03", title: "Sourcing", desc: "Procuring or manufacturing the selected items with meticulous quality control." },
  { step: "04", title: "Delivery", desc: "White-glove installation to finalize the composed space." },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-text", 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.2,
        }
      );

      gsap.fromTo(".service-card", 
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(".timeline-item", 
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-32 pb-32 px-6 md:px-12 max-w-[1400px] mx-auto min-h-screen">
      {/* Hero */}
      <div className="mb-32 text-center max-w-4xl mx-auto">
        <h1 className="hero-text text-5xl md:text-7xl font-serif text-lux-dark leading-tight">
          Luxury begins long <br className="hidden md:block"/> before delivery.
        </h1>
        <p className="hero-text mt-8 text-xl font-sans text-lux-text-muted font-light">
          A meticulously refined process designed to eliminate friction and elevate the curation experience.
        </p>
      </div>

      {/* Services Grid */}
      <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-12 mb-40">
        {services.map((service) => (
          <div
            key={service.title}
            className="service-card group p-12 border border-lux-border bg-white transition-all duration-700 hover:border-lux-gold/50 hover:shadow-[0_10px_40px_-15px_rgba(200,169,107,0.3)] hover:-translate-y-2 flex flex-col"
          >
            <service.icon className="w-10 h-10 text-lux-gold mb-8 transition-transform duration-500 group-hover:scale-110" strokeWidth={1} />
            <h3 className="font-serif text-3xl text-lux-dark mb-4">{service.title}</h3>
            <p className="font-sans font-light text-lux-text-muted text-lg leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Timeline Section */}
      <div className="timeline-container max-w-2xl mx-auto">
        <h2 className="text-4xl font-serif text-lux-dark mb-20 text-center">The Process</h2>
        <div className="relative border-l border-lux-gold/30 pl-12 md:pl-20 space-y-20">
          {timeline.map((item, index) => (
            <div key={item.step} className="timeline-item relative">
              {/* Dot */}
              <div className="absolute -left-[54px] md:-left-[86px] top-1 w-3 h-3 bg-lux-bg border-2 border-lux-gold rounded-full" />
              
              <span className="text-lux-gold font-serif text-xl tracking-widest block mb-2">
                {item.step}
              </span>
              <h3 className="font-serif text-3xl text-lux-dark mb-3">{item.title}</h3>
              <p className="font-sans font-light text-lux-text-muted text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
