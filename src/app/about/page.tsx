"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-text", 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.3,
        }
      );

      gsap.fromTo(".story-block", 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".story-container",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(".image-reveal", 
        { scale: 1.05, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".image-container",
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-40 pb-32 min-h-screen bg-lux-bg-alt">
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        {/* Hero */}
        <div className="mb-40 md:mb-56 text-center">
          <h1 className="hero-text text-5xl md:text-8xl font-serif text-lux-dark leading-tight tracking-tight">
            Luxury is not purchased. <br />
            <span className="text-lux-gold italic">It is curated.</span>
          </h1>
        </div>

        {/* Story Section */}
        <div className="story-container grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-40">
          <div className="story-block max-w-lg">
            <span className="uppercase tracking-widest text-lux-gold text-sm font-semibold mb-6 block">Our Philosophy</span>
            <h2 className="font-serif text-4xl text-lux-dark mb-8 leading-snug">
              We believe spaces should be composed with the same intention as fine art.
            </h2>
            <p className="font-sans text-lux-text-muted font-light text-lg leading-relaxed mb-6">
              Luxura was founded on a singular premise: true luxury cannot be mass-produced. It requires patience, global access, and an unrelenting dedication to craftsmanship.
            </p>
            <p className="font-sans text-lux-text-muted font-light text-lg leading-relaxed">
              Our team navigates the world to uncover hidden artisans, securing bespoke pieces that define the architectural narrative of the spaces they inhabit.
            </p>
          </div>
          <div className="image-container relative h-[600px] w-full overflow-hidden">
            <img 
              src="/images/marble_texture_1778847056035.webp" 
              alt="Architectural detail" 
              className="image-reveal absolute inset-0 w-full h-full object-cover filter sepia-[0.2]"
            />
          </div>
        </div>

        {/* Second Story Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="image-container relative h-[600px] w-full overflow-hidden order-2 md:order-1">
            <img 
              src="/images/brushed_gold_1778847073672.webp" 
              alt="Material texture" 
              className="image-reveal absolute inset-0 w-full h-full object-cover filter sepia-[0.2]"
            />
          </div>
          <div className="story-block max-w-lg order-1 md:order-2">
            <span className="uppercase tracking-widest text-lux-gold text-sm font-semibold mb-6 block">Craftsmanship</span>
            <h2 className="font-serif text-4xl text-lux-dark mb-8 leading-snug">
              Materials that tell a story.
            </h2>
            <p className="font-sans text-lux-text-muted font-light text-lg leading-relaxed mb-6">
              From the deep veins of Italian marble to the soft patina of aged brass, every material we select is chosen for its character and longevity.
            </p>
            <p className="font-sans text-lux-text-muted font-light text-lg leading-relaxed">
              We partner exclusively with workshops that share our uncompromising standards, ensuring that every piece delivered is a testament to enduring quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
