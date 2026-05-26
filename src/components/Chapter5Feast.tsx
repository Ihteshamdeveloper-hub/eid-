import React, { useState } from "react";
import { IMAGES } from "../constants";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Flame, Soup, HelpCircle } from "lucide-react";

interface Chapter5Props {
  onNext: () => void;
}

interface Spice {
  id: number;
  label: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

export default function Chapter5Feast({ onNext }: Chapter5Props) {
  const [spices, setSpices] = useState<Spice[]>([]);
  const [spiceId, setSpiceId] = useState(0);

  const formulas = [
    { name: "Basmati Length", val: "8.5 mm (Standard Premium)", percentage: 95 },
    { name: "Saffron Concentration", val: "Dual-Steep Organic Saffron", percentage: 88 },
    { name: "Meat Tenderness", val: "Fall-Off-The-Bone Softness", percentage: 100 },
    { name: "Drip Quotient", val: "Maximum Butter Melt Margin", percentage: 92 }
  ];

  // Spawn visual floating elements on click
  const handleStir = () => {
    // Play sounds if available
    if ((window as any).triggerTick) {
      (window as any).triggerTick();
    }

    const labels = ["⭐ Star Anise", "🍃 Mint Leaf", "🟤 Cardamom", "🌿 Bay Leaf", "🔥 Saffron Strand"];
    const newSpices = Array.from({ length: 5 }).map((_, i) => ({
      id: spiceId + i,
      label: labels[Math.floor(Math.random() * labels.length)],
      x: 30 + Math.random() * 40, // Centered range 30% - 70%
      y: 80,
      rotation: Math.random() * 360,
      scale: Math.random() * 0.5 + 0.8
    }));

    setSpices((prev) => [...prev, ...newSpices]);
    setSpiceId((prev) => prev + 5);

    // Auto cleanup after 2.5s
    setTimeout(() => {
      setSpices((prev) => prev.filter((s) => !newSpices.some((ns) => ns.id === s.id)));
    }, 2500);
  };

  return (
    <div className="absolute inset-0 flex flex-col justify-center bg-luxury-black text-cream-white overflow-hidden">
      
      {/* Background Graphic and dramatic food gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={IMAGES.luxuryBiryaniGoat}
          alt="Premium mutton biryani platter cooked by professional goat chef"
          className="w-full h-full object-cover opacity-65 md:opacity-85 scale-101"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-luxury-black/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/95 via-transparent to-luxury-black/95" />
      </div>

      {/* Floating Spices layer */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <AnimatePresence>
          {spices.map((s) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: s.y, x: `${s.x}vw`, rotate: 0 }}
              animate={{ opacity: 1, y: -400, rotate: s.rotation }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.2, ease: "easeOut" }}
              className="absolute font-mono text-sm inline-block whitespace-nowrap bg-luxury-black/80 border border-brand-orange/30 px-3 py-1 rounded-full text-brand-orange text-xs text-glow shadow-[0_0_15px_rgba(255,107,0,0.3)]"
              style={{ scale: s.scale }}
            >
              {s.label}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Meta indicators */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 font-mono text-[10px] uppercase tracking-widest text-cream-white/40 hidden md:block">
        <span className="text-brand-orange mr-2">SEC_05_CUISINE</span> • SPICE FACTOR: MUTTON_CORE • OUTLET READY
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between h-full pt-20 md:pt-28 pb-16">
        
        {/* Left hand: Food description */}
        <div className="flex flex-col max-w-xl text-left self-center mt-12 md:mt-0">
          <p className="font-display font-medium text-xs md:text-sm text-brand-orange uppercase tracking-[0.3em] mb-2 leading-none">
            Culinary Art Directory
          </p>

          <h2 className="font-serif italic font-semibold text-3xl md:text-5xl text-cream-white leading-tight mb-4 tracking-wide">
            Cinematic Feast<br/>
            <span className="not-italic font-display font-black text-4xl md:text-6xl text-brand-orange tracking-tight uppercase">
              Biryani Luxury
            </span>
          </h2>

          <div className="h-[2px] w-12 bg-white/20 mb-5" />

          <p className="font-sans font-light text-sm text-cream-white/70 leading-relaxed mb-6">
            Behold the absolute peak of Eid cuisine: a steaming platter of luxury mutton biryani, prepared under the strict guidance of our VIP Chef Goat. Real saffron grains, aromatic cardamom mist, and fall-off-the-bone tenderness crafted like vector shapes.
          </p>

          {/* Interactive sliders list */}
          <div className="space-y-3.5 max-w-md bg-brand-orange/5 border border-brand-orange/15 p-5">
            <span className="font-mono text-[9px] uppercase tracking-widest text-brand-orange block mb-1">
              Barbecuing & Culinary Formulas
            </span>
            
            {formulas.map((f, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex justify-between text-xs font-mono font-medium mb-1">
                  <span className="text-cream-white/85">{f.name}</span>
                  <span className="text-brand-orange">{f.percentage}%</span>
                </div>
                <div className="h-1 bg-cream-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-orange rounded-full animate-pulse" style={{ width: `${f.percentage}%` }} />
                </div>
                <span className="font-mono text-[9px] text-cream-white/35 mt-0.5">{f.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right hand: Platter triggers */}
        <div className="flex flex-col max-w-xs md:items-end text-left md:text-right self-center mt-6 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass-panel p-5 border border-brand-orange/20 relative shadow-[0_0_35px_rgba(255,107,0,0.05)] text-left"
          >
            <div className="flex items-center gap-2 mb-3">
              <Soup className="w-4 h-4 text-brand-orange animate-bounce" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-orange font-bold">
                PLATTER TRIGGERS
              </span>
            </div>

            <p className="font-display font-medium text-xs text-cream-white leading-relaxed mb-4">
              Tap below to stir the culinary simulation. Watch the floating whole spices release deep digital fragrance channels directly into the UI.
            </p>

            {/* Click to release visual particles! */}
            <button
              onClick={handleStir}
              className="w-full flex items-center justify-center gap-2 bg-brand-orange py-2.5 px-4 font-mono text-[10px] uppercase font-bold text-luxury-black tracking-widest hover:bg-orange-500 active:scale-95 transition-all text-center rounded-none shadow-[0_0_15px_rgba(255,107,0,0.25)] hover:shadow-[0_0_20px_rgba(255,107,0,0.5)] cursor-pointer"
            >
              <Flame className="w-3.5 h-3.5" />
              Stir Chef's Platter
            </button>
          </motion.div>

          <button
            onClick={() => {
              if ((window as any).triggerTick) (window as any).triggerTick();
              onNext();
            }}
            className="mt-6 md:mt-8 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-cream-white/60 hover:text-brand-orange transition-all duration-300 border border-cream-white/10 hover:border-brand-orange bg-luxury-black/40 pl-4 pr-1 py-1.5 cursor-pointer self-start md:self-end"
          >
            Entering Festival Mela
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-brand-orange" />
          </button>
        </div>
      </div>
    </div>
  );
}
