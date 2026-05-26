import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Tv, HelpCircle, Activity } from "lucide-react";

interface SplashIntroProps {
  onEnter: () => void;
}

export default function SplashIntro({ onEnter }: SplashIntroProps) {
  const [dots, setDots] = useState<{ x: number; y: number; delay: number; scale: number }[]>([]);

  // Generate luxury floating dust particles
  useEffect(() => {
    const list = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      scale: Math.random() * 0.8 + 0.2
    }));
    setDots(list);
  }, []);

  const handleStart = () => {
    // Play sci-fi tick if registered
    if ((window as any).triggerTick) {
      (window as any).triggerTick();
    }
    // Start Web Audio Drone
    if ((window as any).startIntroAudio) {
      (window as any).startIntroAudio();
    }
    onEnter();
  };

  return (
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-luxury-black overflow-hidden select-none px-6">
      {/* Background Cinematic Dust */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-brand-orange particle"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${2 + dot.scale * 4}px`,
              height: `${2 + dot.scale * 4}px`,
              animationDelay: `${dot.delay}s`,
              animationDuration: `${12 + Math.random() * 6}s`,
              boxShadow: "0 0 10px rgba(255,107,0,0.4)"
            }}
          />
        ))}
        {/* Dynamic Vignette and Soft Red/Gold Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.06)_0%,transparent_70%)]" />
      </div>

      {/* Top Meta Tech Badges - High craftsmanship */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-8 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.25em] text-cream-white/40"
      >
        <span className="flex items-center gap-1.5 leading-none">
          <Activity className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
          SYSTEM STATE: OPERATIONAL
        </span>
        <span className="h-3 w-px bg-cream-white/10" />
        <span>VITE + REACT 19 + AUDIO SYNTH</span>
      </motion.div>

      {/* Center Cinematic Cards & Cinematic Intro Text */}
      <div className="max-w-xl text-center z-10">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 0.6, letterSpacing: "0.4em" }}
          transition={{ duration: 2.0, ease: "easeInOut" }}
          className="font-display font-medium text-[10px] md:text-xs uppercase text-brand-orange tracking-[0.4em] mb-4"
        >
          An Interactive Metamorphosis
        </motion.p>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6"
        >
          {/* Main Title branding */}
          <h1 className="font-serif italic font-semibold text-5xl md:text-7xl leading-tight text-cream-white tracking-wide">
            The Meat Tech<br/>
            <span className="not-italic font-display font-black text-6xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-orange-500 to-amber-500 tracking-tight">
              SURREALITY
            </span>
          </h1>

          <div className="absolute -top-6 -right-12 pointer-events-none select-none hidden md:block opacity-35">
            <Sparkles className="w-10 h-10 text-brand-orange animate-spin-slow" style={{ animationDuration: "10s" }} />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="font-sans font-light text-sm md:text-base leading-relaxed text-cream-white/70 max-w-md mx-auto mb-12"
        >
          Watch in absolute awe as a premium computer workspace transforms into fresh, marbled cubes of succulent steak before Eid-ul-Adha.
        </motion.p>

        {/* Enter Trigger Button */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="relative inline-block"
        >
          <button
            id="splash-enter-btn"
            onClick={handleStart}
            className="group relative px-8 py-4 bg-transparent border border-brand-orange/40 text-cream-white font-display uppercase tracking-[0.2em] text-xs font-semibold rounded-none cursor-pointer overflow-hidden transition-all duration-500 hover:border-brand-orange hover:shadow-[0_0_35px_rgba(255,107,0,0.3)]"
          >
            {/* Slide-to-right bg hover effect */}
            <span className="absolute inset-0 bg-brand-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none" />
            
            <span className="relative z-10 flex items-center gap-2 group-hover:text-luxury-black transition-colors duration-300">
              <Tv className="w-4 h-4" />
              Initialize Film Pipeline
            </span>
          </button>
          
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-[9px] font-mono tracking-widest text-cream-white/30 whitespace-nowrap uppercase">
            [Click to unlock interactive synthetic audio]
          </div>
        </motion.div>
      </div>

      {/* Bottom Legal Credits - Apple-style minimalism */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute bottom-8 font-mono text-[9px] uppercase tracking-[0.15em] text-cream-white/80"
      >
        © 2026 Ihtesham Studios. All Rights Reserved. Not for vegan developers.
      </motion.p>
    </div>
  );
}
