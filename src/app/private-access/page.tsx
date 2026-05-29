"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { Lock, ArrowRight } from "lucide-react";


export default function PrivateAccessPage() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 80, opacity: 0, filter: "blur(20px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.4, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        ".pa-reveal",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: "power3.out", delay: 0.5 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Please provide both your name and email.");
      return;
    }
    setIsSubmitting(true);
    setError("");



    // 2. Grant access via sessionStorage
    sessionStorage.setItem(
      "luxura_private_access",
      JSON.stringify({ name: formData.name, email: formData.email, ts: Date.now() })
    );

    // 4. Animate out → redirect
    gsap.to(cardRef.current, {
      y: -50,
      opacity: 0,
      filter: "blur(15px)",
      duration: 0.9,
      ease: "power2.inOut",
      onComplete: () => router.push("/private-catalogue"),
    });
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-lux-bg flex items-center justify-center px-5 py-28 md:py-32 relative overflow-hidden"
    >
      {/* Background grain */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Ambient glow */}
      <div className="absolute top-1/4 -right-40 w-[700px] h-[700px] bg-lux-gold/5 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-lux-gold/[0.03] blur-[160px] rounded-full pointer-events-none" />

      <div ref={cardRef} className="relative w-full max-w-[480px]">
        {/* Glass card backdrop */}
        <div className="absolute inset-0 bg-white/55 backdrop-blur-2xl border border-white/70 shadow-[0_50px_100px_-25px_rgba(0,0,0,0.07)] rounded-sm pointer-events-none" />

        <div className="relative px-10 py-14 md:px-14 md:py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="pa-reveal w-14 h-14 mx-auto rounded-full border border-lux-gold/20 flex items-center justify-center mb-6">
              <Lock size={18} className="text-lux-gold" strokeWidth={1.5} />
            </div>
            <div className="pa-reveal uppercase tracking-[0.35em] text-[10px] text-lux-gold font-semibold mb-3">
              Private Access
            </div>
            <h1 className="pa-reveal font-serif text-3xl md:text-4xl text-lux-dark leading-tight mb-3">
              Exclusive{" "}
              <span className="italic text-lux-gold">Collections</span>
            </h1>
            <p className="pa-reveal text-lux-text-muted font-sans text-sm leading-relaxed max-w-xs mx-auto">
              Verify your identity to access our curated catalogue of luxury furniture and bespoke interiors.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="pa-reveal">
              <label className="uppercase tracking-[0.2em] text-[10px] text-lux-text-muted mb-2.5 block font-semibold">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                className="w-full bg-lux-bg border border-black/[0.06] px-5 py-4 font-sans text-lux-dark placeholder:text-lux-text-muted/40 focus:outline-none focus:ring-1 focus:ring-lux-gold/40 focus:border-lux-gold/20 transition-all duration-500 rounded-sm text-[15px]"
              />
            </div>

            <div className="pa-reveal">
              <label className="uppercase tracking-[0.2em] text-[10px] text-lux-text-muted mb-2.5 block font-semibold">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full bg-lux-bg border border-black/[0.06] px-5 py-4 font-sans text-lux-dark placeholder:text-lux-text-muted/40 focus:outline-none focus:ring-1 focus:ring-lux-gold/40 focus:border-lux-gold/20 transition-all duration-500 rounded-sm text-[15px]"
              />
            </div>

            {error && (
              <p className="text-red-600/80 text-xs font-sans tracking-wide">{error}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="pa-reveal w-full mt-2 py-5 bg-lux-dark text-white uppercase tracking-[0.2em] text-[11px] font-semibold relative overflow-hidden group disabled:opacity-60 transition-all rounded-sm flex items-center justify-center gap-3"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-lux-gold-deep via-lux-gold to-lux-gold-deep opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <span className="relative z-10">
                {isSubmitting ? "Verifying..." : "Verify & Access Catalogues"}
              </span>
              {!isSubmitting && (
                <ArrowRight
                  size={14}
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                />
              )}
            </button>
          </form>

          {/* Footer note */}
          <p className="pa-reveal text-center text-[10px] text-lux-text-muted/50 mt-8 tracking-wide font-sans">
            Your information is kept private and never shared.
          </p>
        </div>
      </div>
    </div>
  );
}
