import React, { useEffect, useState } from "react";
import { CHAPTERS, Chapter } from "../constants";
import { motion } from "motion/react";
import { ShieldCheck, Calendar, Cpu, Award } from "lucide-react";

interface NavbarProps {
  activeChapterId: string;
  onNavigate: (index: number) => void;
}

export default function Navbar({ activeChapterId, onNavigate }: NavbarProps) {
  const [countdown, setCountdown] = useState("");

  // Clean timer calculation to local 2026 Eid feast (simulated countdown)
  useEffect(() => {
    const interval = setInterval(() => {
      const isDate = new Date("2026-06-15T08:00:00Z"); // Approximated Eid-ul-Adha date in 2026
      const diff = isDate.getTime() - new Date().getTime();
      
      if (diff <= 0) {
        setCountdown("EID MEAT FESTIVAL IS LIVE!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(
        `${days}D : ${hours.toString().padStart(2, "0")}H : ${minutes.toString().padStart(2, "0")}M : ${seconds.toString().padStart(2, "0")}S`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const triggerClickSound = () => {
    if ((window as any).triggerTick) {
      (window as any).triggerTick();
    }
  };

  return (
    <>
      {/* Top Floating Glass HUD */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-luxury-black/95 to-transparent px-6 py-4 md:px-12 md:py-6 flex items-center justify-between pointer-events-none">
        
        {/* Left: Branding & Role */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <motion.div 
            onClick={() => onNavigate(0)}
            className="cursor-pointer group flex flex-col items-start"
            whileHover={{ scale: 1.02 }}
          >
            <span className="font-display font-black text-sm tracking-[0.2em] text-cream-white group-hover:text-brand-orange transition-colors">
              IHTESHAM
            </span>
            <span className="font-mono text-[9px] tracking-[0.1em] text-brand-orange">
              UI/UX DESIGNER & DEV
            </span>
          </motion.div>
          
          <div className="hidden lg:flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 px-2.5 py-1 rounded-full text-[9px] font-mono text-brand-orange">
            <Cpu className="w-3 h-3 animate-spin-slow" />
            <span>PORTFOLIO EDIT_026</span>
          </div>
        </div>

        {/* Center: Dynamic Feasting Countdown */}
        <div className="pointer-events-auto bg-luxury-black/80 border border-brand-orange/15 rounded-full px-4 py-1.5 md:px-6 md:py-2 flex items-center gap-2.5 shadow-[0_0_20px_rgba(255,107,0,0.05)]">
          <Calendar className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
          <div className="flex flex-col">
            <span className="font-mono text-[8px] uppercase tracking-wider text-cream-white/40 leading-none">
              Estimated BBQ countdown
            </span>
            <span className="font-mono text-[10px] md:text-xs font-semibold text-brand-orange tracking-wide">
              {countdown}
            </span>
          </div>
        </div>

        {/* Right: Interactive Badge of Quality */}
        <div className="hidden md:flex items-center gap-2 bg-cream-white/5 border border-cream-white/10 px-3.5 py-1.5 rounded-none font-mono text-[9px] tracking-wider text-cream-white/60 pointer-events-auto">
          <Award className="w-3.5 h-3.5 text-amber-500" />
          <span>APPLE-GRADE CREATIVE SPEC</span>
        </div>
      </header>

      {/* Modern HUD Sidebar - Scroll Progress & Navigation Dots */}
      <nav className="fixed right-6 md:right-10 top-1/2 transform -translate-y-1/2 z-40 flex flex-col items-end gap-5">
        {CHAPTERS.map((ch, idx) => {
          const isActive = ch.id === activeChapterId;
          return (
            <div 
              key={ch.id} 
              className="group flex items-center gap-4 cursor-pointer"
              onClick={() => {
                triggerClickSound();
                onNavigate(idx);
              }}
            >
              {/* Desktop Dynamic Text revealing on hover */}
              <span className="hidden md:block font-mono text-[9px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 text-cream-white/50 group-hover:text-brand-orange">
                CH {ch.num} • {ch.title}
              </span>
              
              {/* Interactive dot slider */}
              <div className="relative flex items-center justify-center w-5 h-5">
                <motion.div
                  className={`rounded-full transition-colors duration-500 ${
                    isActive ? "bg-brand-orange shadow-[0_0_12px_#FF6B00]" : "bg-cream-white/25 group-hover:bg-cream-white/60"
                  }`}
                  animate={{
                    width: isActive ? 10 : 6,
                    height: isActive ? 10 : 6,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                
                {/* Outer ring on active */}
                {isActive && (
                  <motion.div
                    layoutId="hud-ring"
                    className="absolute inset-0 border border-brand-orange rounded-full"
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </nav>
    </>
  );
}
