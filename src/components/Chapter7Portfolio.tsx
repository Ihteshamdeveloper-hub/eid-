import React, { useState } from "react";
import { PORTFOLIO_ITEMS, PortfolioItem } from "../constants";
import { motion } from "motion/react";
import { Globe, Lightbulb, PenTool, Sparkles, ChevronDown } from "lucide-react";

interface Chapter7Props {
  onNext: () => void;
}

export default function Chapter7Portfolio({ onNext }: Chapter7Props) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getIcon = (cat: string) => {
    switch (cat) {
      case "UI/UX Design": return <PenTool className="w-5 h-5 text-brand-orange" />;
      case "Web Development": return <Globe className="w-5 h-5 text-brand-orange animate-spin-slow" />;
      case "Motion Design": return <Sparkles className="w-5 h-5 text-brand-orange animate-pulse" />;
      default: return <Lightbulb className="w-5 h-5 text-brand-orange" />;
    }
  };

  const triggerClickSound = () => {
    if ((window as any).triggerTick) {
      (window as any).triggerTick();
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col justify-center bg-luxury-black text-cream-white overflow-hidden py-16 md:py-24">
      {/* Background Soft Cinematic Ambient Rings */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-brand-orange/10 blur-[90px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border border-orange-500/10 blur-[90px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Meta tracker */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 font-mono text-[10px] uppercase tracking-widest text-cream-white/40 hidden md:block">
        <span className="text-brand-orange mr-2">SEC_07_PORTFOLIO</span> • CORE CAPACITY MATRIX • ALL GREEN
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-between h-full pt-12">
        
        {/* Top title area */}
        <div className="text-center w-full max-w-xl mb-6">
          <p className="font-display font-medium text-xs text-brand-orange uppercase tracking-[0.3em] mb-1">
            CREATIVE DESIGN LABORATORY
          </p>
          <h2 className="font-serif italic font-semibold text-3xl md:text-5xl text-cream-white tracking-wide">
            Portfolio <span className="not-italic font-display font-black text-brand-orange">SHOWCASE</span>
          </h2>
          <div className="h-[2px] w-12 bg-white/20 mx-auto mt-3" />
        </div>

        {/* 2x2 Grid of Futuristic Luxury Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-4xl mx-auto my-auto py-2">
          {PORTFOLIO_ITEMS.map((item) => {
            const isHovered = hoveredCard === item.id;
            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => {
                  setHoveredCard(item.id);
                  triggerClickSound();
                }}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`relative p-5 md:p-6 transition-all duration-300 pointer-events-auto cursor-pointer ${
                  isHovered 
                    ? "bg-luxury-black/90 border-brand-orange shadow-[0_0_30px_rgba(255,107,0,0.15)]" 
                    : "glass-panel border-brand-orange/10"
                }`}
                style={{
                  borderWidth: "1px",
                }}
              >
                {/* Neon golden border accent lines */}
                {isHovered && (
                  <>
                    <div className="absolute top-0 left-0 w-4 h-px bg-brand-orange shadow-[0_0_10px_#FF6B00]" />
                    <div className="absolute top-0 left-0 h-4 w-px bg-brand-orange shadow-[0_0_10px_#FF6B00]" />
                    <div className="absolute bottom-0 right-0 w-4 h-px bg-brand-orange shadow-[0_0_10px_#FF6B00]" />
                    <div className="absolute bottom-0 right-0 h-4 w-px bg-brand-orange shadow-[0_0_10px_#FF6B00]" />
                  </>
                )}

                {/* Card Title & Icon Header */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-brand-orange font-semibold flex items-center gap-1.5">
                    {getIcon(item.category)}
                    {item.category}
                  </span>
                  
                  {/* Hilarious custom meat rating indicator */}
                  <span className="font-mono text-[8px] uppercase tracking-wider bg-brand-orange/10 border border-brand-orange/20 text-brand-orange px-2.5 py-0.5 rounded-full">
                    🥩 {item.meatFactor}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-cream-white tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="font-sans text-xs font-light text-cream-white/70 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Sub Tech Nodes */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tech.map((t, idx) => (
                    <span 
                      key={idx}
                      className="font-mono text-[8px] uppercase tracking-wider bg-cream-white/5 border border-cream-white/10 px-2 py-0.5 text-cream-white/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Proceed Anchor */}
        <button
          onClick={() => {
            triggerClickSound();
            onNext();
          }}
          className="mt-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-cream-white/60 hover:text-brand-orange transition-all duration-300 border border-cream-white/10 hover:border-brand-orange bg-luxury-black/40 pl-4 pr-1 py-1.5 cursor-pointer pointer-events-auto"
        >
          View Eid Greeting
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-brand-orange" />
        </button>

      </div>
    </div>
  );
}
