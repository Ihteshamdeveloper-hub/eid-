import React, { useState } from "react";
import { IMAGES } from "../constants";
import { motion } from "motion/react";
import { ChevronDown, RefreshCw, Key, Shield } from "lucide-react";

interface Chapter2Props {
  onNext: () => void;
}

export default function Chapter2Metamorphosis({ onNext }: Chapter2Props) {
  const [activeKeySpec, setActiveKeySpec] = useState<string | null>(null);

  const keySpecs = [
    { key: "SPACEBAR", meat: "Sirloin Ribbon Cut", desc: "Allows developers to jump gracefully into the beef gravy pit." },
    { key: "ESC", meat: "Kebab Patty Cube", desc: "Safely escapes the Client Revision Loop to immediately enter BBQ state." },
    { key: "CTRL + Z", meat: "Double Collagen Tendon", desc: "Instantly untenders the steak in case of overcooking." },
    { key: "ENTER", meat: "Ribeye Marbled Core", desc: "Confirms submission of design specs into the oven." }
  ];

  const triggerClickSound = (label: string) => {
    setActiveKeySpec(label);
    if ((window as any).triggerTick) {
      (window as any).triggerTick();
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col justify-center bg-luxury-black text-cream-white overflow-hidden">
      
      {/* Background Graphic Asset with deep vignette mapping */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={IMAGES.meatKeyboard}
          alt="Keyboard keys transforming into beef steak blocks"
          className="w-full h-full object-cover opacity-60 md:opacity-85 transform scale-102"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-luxury-black/90" />
        <div className="absolute inset-0 bg-gradient-to-l from-luxury-black/85 via-transparent to-luxury-black/85" />
      </div>

      {/* Title Scene Meta Indicator */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 font-mono text-[10px] uppercase tracking-widest text-cream-white/40 hidden md:block">
        <span className="text-brand-orange mr-2">SEC_02_MORPHING</span> • RENDERING KEY_UNITS • RAW_STEAK_GEL
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 justify-center md:justify-between h-full pt-20 md:pt-28 pb-16">
        
        {/* Left Hand: Descriptive Text Column */}
        <div className="flex flex-col max-w-lg text-left self-center">
          <p className="font-display font-medium text-xs md:text-sm text-brand-orange uppercase tracking-[0.3em] mb-2 leading-none">
            The Tech Metamorphosis
          </p>

          <h2 className="font-serif italic font-semibold text-3xl md:text-5xl text-cream-white leading-tight mb-4 tracking-wide">
            Cubes of Pure<br/>
            <span className="not-italic font-display font-black text-4xl md:text-6xl text-brand-orange tracking-tight uppercase">
              Tender Steak
            </span>
          </h2>

          {/* Minimal dividing line */}
          <div className="h-0.5 w-12 bg-white/25 mb-5" />

          <p className="font-sans font-light text-sm text-cream-white/70 leading-relaxed mb-6">
            As midnight approaches, the workspace transforms. Modern aluminum alloys are traded for high-grade grass-fed beef structures. Mechanical linear keys now deliver an actual mouthwatering barbecue spring response.
          </p>

          {/* Key Layout Map Specs Interactive Selector */}
          <div className="space-y-2 select-none">
            <span className="font-mono text-[9px] uppercase tracking-widest text-cream-white/40 block mb-2">
              Select key to map barbecue value:
            </span>
            <div className="flex flex-wrap gap-2">
              {keySpecs.map((spec) => (
                <button
                  key={spec.key}
                  onClick={() => triggerClickSound(spec.key)}
                  className={`px-3 py-1.5 font-mono text-[10px] tracking-wider uppercase border transition-all duration-300 rounded-none ${
                    activeKeySpec === spec.key 
                      ? "border-brand-orange bg-brand-orange/15 text-brand-orange" 
                      : "border-cream-white/10 hover:border-cream-white/40 text-cream-white/60 hover:text-cream-white"
                  }`}
                >
                  {spec.key}
                </button>
              ))}
            </div>

            {/* Spec Panel Reveal */}
            <div className="mt-4 min-h-[56px] relative">
              {activeKeySpec ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={activeKeySpec}
                  className="bg-brand-orange/5 border border-brand-orange/20 p-3"
                >
                  <p className="font-mono text-xs font-bold text-brand-orange uppercase mb-1">
                    {activeKeySpec} MAPS TO → {keySpecs.find(k => k.key === activeKeySpec)?.meat}
                  </p>
                  <p className="font-sans text-xs font-light text-cream-white/70">
                    {keySpecs.find(k => k.key === activeKeySpec)?.desc}
                  </p>
                </motion.div>
              ) : (
                <div className="border border-cream-white/5 bg-luxury-black/30 p-3 italic font-sans text-xs text-cream-white/45 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-cream-white/20" />
                  Hover or tap keys above to inspect technical barbecue structure.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Hand: Aesthetic Showcase Display Details */}
        <div className="flex flex-col max-w-xs md:items-end text-left md:text-right self-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="glass-panel p-6 border border-brand-orange/20 relative shadow-[0_0_30px_rgba(255,107,0,0.05)]"
          >
            <div className="flex items-center gap-2 mb-3 md:justify-end">
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-orange font-semibold">
                MACRO SHOT ZOOM // 02
              </span>
              <RefreshCw className="w-3 h-3 text-brand-orange animate-spin-slow" />
            </div>

            <p className="font-display font-medium text-xs text-cream-white leading-relaxed mb-4">
              Notice the high fat marbling and structural golden lettering embedded directly inside the meat fiber matrix. Designed to sustain 10 Million keystrokes of high-intensity coding.
            </p>

            <div className="font-mono text-[10px] text-cream-white/40">
              MEAT COMPILER OUTPUT: PERFECTLY BAKED
            </div>
          </motion.div>

          <button
            onClick={() => {
              if ((window as any).triggerTick) (window as any).triggerTick();
              onNext();
            }}
            className="mt-6 md:mt-8 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-cream-white/60 hover:text-brand-orange transition-all duration-300 border border-cream-white/10 hover:border-brand-orange bg-luxury-black/40 pl-4 pr-1 py-1.5 cursor-pointer self-start md:self-end"
          >
            Proceed Scene
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-brand-orange" />
          </button>
        </div>
      </div>
    </div>
  );
}
