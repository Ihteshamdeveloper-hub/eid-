import React from "react";
import { IMAGES } from "../constants";
import { motion } from "motion/react";
import { ChevronDown, Sparkles, AlertCircle } from "lucide-react";

interface Chapter1Props {
  onNext: () => void;
}

export default function Chapter1Hero({ onNext }: Chapter1Props) {
  
  const triggerClickSound = () => {
    if ((window as any).triggerTick) {
      (window as any).triggerTick();
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col justify-center bg-luxury-black text-cream-white overflow-hidden">
      {/* Cinematic Full Background with a luxury gradient vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={IMAGES.heroMeatMouse}
          alt="Ihtesham staring at meat mouse at desk"
          className="w-full h-full object-cover opacity-75 md:opacity-90 transform scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Subtle horizontal blur / anamorphic overlay shadows */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-luxury-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-transparent to-luxury-black/60" />
        
        {/* Warm golden light source simulator (Sunset side-glow) */}
        <div className="absolute -left-20 top-0 bottom-0 w-[40%] bg-gradient-to-r from-brand-orange/20 via-orange-500/5 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* Chapter Metadata Indicator - Bottom Left */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 font-mono text-[10px] uppercase tracking-widest text-cream-white/40 hidden md:block">
        <span className="text-brand-orange mr-2">SEC_01_INTRO</span> • ASPECT_RATIO 16:9 • ANAMORPHIC_LENS
      </div>

      {/* Main Narrative Elements */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start justify-between h-full pt-28 md:pt-40 pb-20">
        
        {/* Left Col: High-End Cinematic Dual-Language Typography */}
        <div className="flex flex-col max-w-xl md:max-w-2xl text-left mt-auto md:mt-0 pt-10">
          
          {/* Elegant Urdu Kinetic Display Headline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <h2 className="font-urdu text-5xl md:text-7xl font-semibold leading-relaxed text-brand-orange mb-2 text-glow drop-shadow-[0_0_20px_rgba(255,107,0,0.5)]">
              عید سے ایک دن پہلے
            </h2>
            <p className="font-urdu text-2xl md:text-3xl font-light text-cream-white/90">
              ہماری حال…
            </p>
          </motion.div>

          {/* Golden Highlight bar */}
          <div className="w-16 h-[2px] bg-brand-orange mb-8 rounded-full animate-warm-flicker" />

          {/* Description narrative timeline */}
          <div className="space-y-4 font-mono uppercase tracking-[0.16em]">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex items-center gap-4 text-xs"
            >
              <span className="text-brand-orange font-bold">YESTERDAY</span>
              <span className="text-cream-white/50">•</span>
              <span className="text-cream-white/80">Client deadlines, Figma grids, non-stop Slack ping loops.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center gap-4 text-xs"
            >
              <span className="text-brand-orange font-bold">TODAY_NOW</span>
              <span className="text-cream-white/50">•</span>
              <span className="text-cream-white/80">Intense meat shopping, livestock negotiation & setup.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex items-center gap-4 text-xs"
            >
              <span className="text-brand-orange font-bold">TOMORROW</span>
              <span className="text-cream-white/50">•</span>
              <span className="text-cream-white">Absolute pure Eid-ul-Adha vibe & BBQ excellence.</span>
            </motion.div>
          </div>
        </div>

        {/* Right Col: The Interactive Story Focus */}
        <div className="flex flex-col items-start md:items-end w-full md:w-auto mt-8 md:mt-0 text-left md:text-right md:max-w-xs justify-end md:h-full pb-8 md:pb-16 select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="glass-panel p-5 md:p-6 border border-brand-orange/20 relative shadow-[0_0_30px_rgba(255,107,0,0.05)] text-left"
          >
            {/* Holographic glowing lines on corner */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-orange" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-orange" />

            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-4 h-4 text-brand-orange animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-orange font-semibold">
                Anomalous Object Detected
              </span>
            </div>

            <p className="font-display font-medium text-xs text-cream-white leading-relaxed mb-4">
              Ihtesham is sitting calmly in his design laboratory when he notices his premium black mouse transitioning into raw cut marbled ribeye steak…
            </p>

            <div className="font-mono text-[10px] text-cream-white/40 uppercase">
              REACTION STATUS: CONFUSED & ENTERTAINED
            </div>
          </motion.div>

          {/* Interactive Trigger to Scroll */}
          <motion.button
            onClick={() => {
              triggerClickSound();
              onNext();
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 md:mt-8 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-cream-white/60 hover:text-brand-orange transition-all duration-300 pl-4 pr-1 py-1.5 cursor-pointer outline-none border border-cream-white/10 hover:border-brand-orange bg-luxury-black/40 self-start md:self-end"
          >
            Scroll or Proceed Scene
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-brand-orange" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
