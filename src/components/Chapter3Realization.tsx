import React from "react";
import { IMAGES } from "../constants";
import { motion } from "motion/react";
import { ChevronDown, Hand, Sparkles } from "lucide-react";

interface Chapter3Props {
  onNext: () => void;
}

export default function Chapter3Realization({ onNext }: Chapter3Props) {
  
  const specs = [
    { label: "Ergonomics", val: "100% Wagyu Marbled Contour" },
    { label: "Precision", val: "26,000 DPI (Dots Per Ingredient)" },
    { label: "Connectivity", val: "Bone Marrow Bluetooth 5.4" },
    { label: "Charging", val: "Charcoal Grill Safe USB-C" }
  ];

  return (
    <div className="absolute inset-0 flex flex-col justify-center bg-luxury-black text-cream-white overflow-hidden">
      
      {/* Background Cinematic Visual with deep framing mask */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={IMAGES.designerHoldingMouse}
          alt="Designer smiling holding highly detailed beef mouse"
          className="w-full h-full object-cover opacity-60 md:opacity-85 transform scale-102"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-luxury-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/95 via-transparent to-luxury-black/95" />
      </div>

      {/* Meta indicators */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 font-mono text-[10px] uppercase tracking-widest text-cream-white/40 hidden md:block">
        <span className="text-brand-orange mr-2">SEC_03_REALIZATION</span> • SENSOR TYPE PROTEIN • STYLING APPROVED
      </div>

      {/* Main layout grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between h-full pt-20 md:pt-28 pb-16">
        
        {/* Left column: Narrative realization text */}
        <div className="flex flex-col max-w-xl text-left self-center mt-12 md:mt-0">
          <p className="font-display font-medium text-xs md:text-sm text-brand-orange uppercase tracking-[0.3em] mb-2">
            The Golden Discovery
          </p>

          <h2 className="font-serif italic font-semibold text-3xl md:text-5xl text-cream-white leading-tight mb-4 tracking-wide">
            "Wait… is this really<br/>
            <span className="not-italic font-display font-black text-4xl md:text-6xl text-brand-orange tracking-tight uppercase">
              succulent meat?"
            </span>
          </h2>

          <div className="h-[2px] w-12 bg-white/20 mb-5" />

          {/* Descriptive narrative */}
          <p className="font-sans font-light text-sm text-cream-white/70 leading-relaxed mb-6">
            Ihtesham picks up his custom input device, expecting standard plastic. Instead, his hand conforms to premium, glossy marbled beef fibers. The cable, woven from braided collagen thread, pulses with actual server-client data!
          </p>

          {/* Golden specs list */}
          <div className="grid grid-cols-2 gap-3 bg-brand-orange/5 border border-brand-orange/15 p-4 max-w-md">
            {specs.map((s, i) => (
              <div key={i} className="flex flex-col border-b border-cream-white/10 pb-2">
                <span className="font-mono text-[8px] uppercase tracking-wider text-brand-orange">
                  {s.label}
                </span>
                <span className="font-sans text-xs font-medium text-cream-white">
                  {s.val}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Interactive controls and funny summary */}
        <div className="flex flex-col max-w-xs md:items-end text-left md:text-right self-center mt-6 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="glass-panel p-5 border border-brand-orange/25 relative shadow-[0_0_30px_rgba(255,107,0,0.05)]"
          >
            <div className="flex items-center gap-2 mb-3 md:justify-end">
              <Hand className="w-4 h-4 text-brand-orange animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-orange font-bold">
                DIAGNOSTICS: COMPLIANT
              </span>
            </div>

            <p className="font-display font-medium text-xs text-cream-white leading-relaxed mb-3">
              Surprise turns to shear developer excitement. If gadgets are transforming into high-grade barbecue cuts, it's finally time to shut down Figma and head to the Eid markets!
            </p>

            <span className="inline-flex items-center gap-1.5 bg-brand-orange/15 border border-brand-orange/25 px-2.5 py-1 rounded-full text-[9px] font-mono text-brand-orange">
              <Sparkles className="w-3.5 h-3.5" />
              <span>STREAK: FIGMA INACTIVE</span>
            </span>
          </motion.div>

          {/* Proceed scene button */}
          <button
            onClick={() => {
              if ((window as any).triggerTick) (window as any).triggerTick();
              onNext();
            }}
            className="mt-6 md:mt-8 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-cream-white/60 hover:text-brand-orange transition-all duration-300 border border-cream-white/10 hover:border-brand-orange bg-luxury-black/40 pl-4 pr-1 py-1.5 cursor-pointer self-start md:self-end"
          >
            Entering Livestock Arena
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-brand-orange" />
          </button>
        </div>
      </div>
    </div>
  );
}
