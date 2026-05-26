import React, { useState } from "react";
import { IMAGES } from "../constants";
import { motion } from "motion/react";
import { ChevronDown, Tag, ZoomIn, Compass } from "lucide-react";

interface Chapter4Props {
  onNext: () => void;
}

export default function Chapter4Bazaar({ onNext }: Chapter4Props) {
  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);

  const hotspots = [
    {
      id: "glasses",
      top: "28%",
      left: "48%",
      label: "Designer Sunglasses",
      desc: "Oakley Limited BBQ Edition. Provides +99 Goat Drip and blocks smoke particles during grilling.",
    },
    {
      id: "fur",
      top: "55%",
      left: "40%",
      label: "Conditioned Merino Fur",
      desc: "Fresh organic coating with chamomile shampoo treatment. Silky to touch, ready for Eid modeling.",
    },
    {
      id: "horns",
      top: "14%",
      left: "35%",
      label: "Polished Spiral Horns",
      desc: "Ergonomically tuned to standard Fibonacci golden spiral angles. Built-in Wi-Fi reception.",
    }
  ];

  const handleHotspotHover = (id: string | null) => {
    setHoveredHotspot(id);
    if (id && (window as any).triggerTick) {
      (window as any).triggerTick();
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col justify-center bg-luxury-black text-cream-white overflow-hidden">
      
      {/* Background with custom mela/bazaar lights visual overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={IMAGES.coolGoatSunglasses}
          alt="Majestic Eid goat wearing designer sunglasses"
          className="w-full h-full object-cover opacity-60 md:opacity-85"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-luxury-black/95" />
        <div className="absolute inset-0 bg-gradient-to-l from-luxury-black/95 via-transparent to-luxury-black/95" />
      </div>

      {/* Meta tracker */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 font-mono text-[10px] uppercase tracking-widest text-cream-white/40 hidden md:block">
        <span className="text-brand-orange mr-2">SEC_04_LIVESTOCK</span> • MODEL_ID: SHEEP_VIP_09 • GLASSES LEVEL OVERLOAD
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between h-full pt-20 md:pt-28 pb-16">
        
        {/* Left Hand: Descriptive Details */}
        <div className="flex flex-col max-w-xl text-left self-center mt-12 md:mt-0">
          <p className="font-display font-medium text-xs md:text-sm text-brand-orange uppercase tracking-[0.3em] mb-2 leading-none">
            Welcome to the VIP Arena
          </p>

          <h2 className="font-serif italic font-semibold text-3xl md:text-5xl text-cream-white leading-tight mb-4 tracking-wide">
            The Luxury Goat<br/>
            <span className="not-italic font-display font-black text-4xl md:text-6xl text-brand-orange tracking-tight uppercase">
              Drip Experience
            </span>
          </h2>

          <div className="h-[2px] w-12 bg-white/20 mb-5" />

          <p className="font-sans font-light text-sm text-cream-white/70 leading-relaxed mb-6">
            Welcome to the elite livestock bazaar, where goats don't just graze—they dominate the fashion hierarchy. This majestic beast is styled with custom polarized lenses under warm cinematic lantern arrays. Hover the markers on the goat to reveal detailed specs.
          </p>

          {/* Hotspots Panel Display - Mobile alternative info */}
          <div className="space-y-2 max-w-md bg-brand-orange/5 border border-brand-orange/15 p-4">
            <div className="flex items-center gap-1.5 text-brand-orange font-mono text-[10px] uppercase font-semibold mb-2">
              <Compass className="w-4 h-4" />
              <span>Interactive Anatomy & Drip Scanner</span>
            </div>
            
            {hoveredHotspot ? (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                key={hoveredHotspot}
              >
                <span className="font-mono text-xs font-bold text-brand-orange uppercase block mb-1">
                  [SCAN] {hotspots.find(h => h.id === hoveredHotspot)?.label}
                </span>
                <p className="font-sans text-xs font-light text-cream-white/80">
                  {hotspots.find(h => h.id === hoveredHotspot)?.desc}
                </p>
              </motion.div>
            ) : (
              <p className="font-sans text-xs italic text-cream-white/40">
                Hover or tap the glowing red nodes over the goat's portrait on the screen to analyze details.
              </p>
            )}
          </div>
        </div>

        {/* Right Hand: Portrait with interactive hotspots overlay */}
        <div className="relative flex flex-col justify-end self-center md:items-end w-full md:w-auto mt-6 md:mt-0">
          
          {/* Visible Interactive Stage wrapper (Hidden on tiny screens to avoid layout clutter) */}
          <div className="relative w-80 h-96 border border-brand-orange/20 rounded-none overflow-hidden hidden lg:block bg-luxury-black/30">
            <img
              src={IMAGES.coolGoatSunglasses}
              alt="Goat hotspots interactive card"
              className="w-full h-full object-cover opacity-90 transition-all duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Hotspots mapper */}
            {hotspots.map((pt) => (
              <div
                key={pt.id}
                className="absolute z-30 cursor-pointer"
                style={{ top: pt.top, left: pt.left }}
                onMouseEnter={() => handleHotspotHover(pt.id)}
                onMouseLeave={() => handleHotspotHover(null)}
              >
                {/* Glowing red ping point */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75 animate-ping pointer-events-none" style={{ width: "24px", height: "24px", left: "-6px", top: "-6px" }} />
                <div className={`w-3.5 h-3.5 rounded-full border border-white transition-all duration-300 ${
                  hoveredHotspot === pt.id ? "bg-brand-orange scale-125" : "bg-neutral-800"
                }`} />
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              if ((window as any).triggerTick) (window as any).triggerTick();
              onNext();
            }}
            className="mt-6 md:mt-8 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-cream-white/60 hover:text-brand-orange transition-all duration-300 border border-cream-white/10 hover:border-brand-orange bg-luxury-black/40 pl-4 pr-1 py-1.5 cursor-pointer self-start md:self-end"
          >
            Entering Diner Kitchen
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-brand-orange" />
          </button>
        </div>
      </div>
    </div>
  );
}
