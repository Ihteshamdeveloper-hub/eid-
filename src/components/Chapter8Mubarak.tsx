import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, RefreshCw, Sparkles, Send, Github } from "lucide-react";

interface Chapter8Props {
  onRestart: () => void;
}

export default function Chapter8Mubarak({ onRestart }: Chapter8Props) {
  const [visitorName, setVisitorName] = useState("");
  const [generatedCard, setGeneratedCard] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName.trim()) return;
    
    if ((window as any).triggerTick) {
      (window as any).triggerTick();
    }
    setGeneratedCard(true);
  };

  const handleResetCard = () => {
    if ((window as any).triggerTick) {
      (window as any).triggerTick();
    }
    setVisitorName("");
    setGeneratedCard(false);
  };

  return (
    <div className="absolute inset-0 flex flex-col justify-center bg-luxury-black text-cream-white overflow-hidden select-none px-6">
      
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft centered crimson/orange radial lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      </div>

      {/* Meta tracker */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 font-mono text-[10px] uppercase tracking-widest text-cream-white/40 hidden md:block">
        <span className="text-brand-orange mr-2">SEC_08_MUBARAK</span> • CREDIT LOOP VERSION 1.0 • DIRECTING PIPE ENDS
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 pt-16 h-full pb-12">
        
        {/* Left Side: Dramatic Typography Reveal */}
        <div className="flex flex-col text-left self-center max-w-xl">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 0.6, letterSpacing: "0.35em" }}
            viewport={{ once: true }}
            className="font-display font-medium text-[10.5px] uppercase text-brand-orange tracking-[0.3em] mb-3 leading-none"
          >
            FESTIVE SEASON DEClARATION
          </motion.p>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4"
          >
            <h1 className="font-urdu text-4xl mb-1 text-cream-white leading-none">
              عید الاضحیٰ مبارک
            </h1>
            <h2 className="font-display font-black text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-orange-500 to-amber-500 tracking-tight leading-none uppercase">
              EID UL ADHA MUBARAK
            </h2>
          </motion.div>

          <div className="h-[2px] w-12 bg-white/20 mb-6" />

          {/* Designer signature block */}
          <div className="flex flex-col mb-6">
            <span className="font-serif italic text-2xl font-light text-cream-white leading-tight">
              Ihtesham
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.25em] text-brand-orange font-semibold">
              UI/UX DESIGNER & WEB DEVELOPER
            </span>
            <span className="font-sans text-xs font-light text-cream-white/50 leading-relaxed max-w-md mt-2.5">
              Designing immersive digital ecosystems. Building functional code solutions. Translating creative client visions into award-winning luxury campaigns.
            </span>
          </div>

          {/* Contact details */}
          <div className="flex flex-wrap gap-4 items-center font-mono text-[9px] uppercase tracking-wider text-cream-white/40">
            <a 
              href="mailto:ihteshamdeveloper@gmail.com"
              className="flex items-center gap-2 hover:text-brand-orange transition-colors pointer-events-auto"
            >
              <Mail className="w-3.5 h-3.5 text-brand-orange" />
              ihteshamdeveloper@gmail.com
            </a>
            <span className="hidden md:block text-cream-white/10">|</span>
            <span className="flex items-center gap-2">
              <Github className="w-3.5 h-3.5 text-brand-orange" />
              GITHUB.COM/IHTESHAM
            </span>
          </div>
        </div>

        {/* Right Side: Interactive Personalized Greeting Card Generator */}
        <div className="flex flex-col w-full md:w-80 justify-center self-center pointer-events-auto">
          <AnimatePresence mode="wait">
            {!generatedCard ? (
              <motion.form
                key="name-form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                onSubmit={handleGenerate}
                className="glass-panel p-6 border border-brand-orange/20 relative shadow-[0_0_35px_rgba(255,107,0,0.05)] w-full text-left"
              >
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-orange" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-orange" />

                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-brand-orange font-bold">
                    Greeting Compressor
                  </span>
                </div>

                <p className="font-sans text-xs font-light text-cream-white/70 leading-relaxed mb-4">
                  Input your name to compile a personalized elegant Eid Mubarak greeting card from Ihtesham's lab.
                </p>

                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    required
                    maxLength={30}
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    placeholder="Enter Your Name..."
                    className="w-full bg-luxury-black/90 border border-cream-white/15 px-3 py-2 text-xs font-mono tracking-widest text-cream-white placeholder-cream-white/30 rounded-none focus:outline-none focus:border-brand-orange transition-all uppercase"
                  />

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-transparent border border-brand-orange text-brand-orange py-2 px-4 font-mono text-[9px] uppercase font-bold tracking-widest hover:bg-brand-orange hover:text-luxury-black transition-all text-center rounded-none cursor-pointer"
                  >
                    <Send className="w-3 h-3" />
                    Compile Card
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="greeting-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass-panel p-6 border-2 border-brand-orange relative shadow-[0_0_40px_rgba(255,107,0,0.2)] w-full text-center"
              >
                <div className="absolute top-2 right-2 bg-brand-orange text-luxury-black text-[8px] font-mono uppercase px-2 py-0.5 tracking-wider font-extrabold shadow-sm">
                  100% Chef Certified
                </div>

                <p className="font-mono text-[8.5px] text-brand-orange uppercase tracking-[0.25em] mb-4">
                  COMPILATION SUCCESSFUL
                </p>

                <div className="border border-cream-white/5 bg-luxury-black/45 p-4 rounded-none mb-4 flex flex-col items-center">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-cream-white/35">
                    Specially Drafted For
                  </span>
                  
                  <span className="font-display font-black text-xl text-cream-white uppercase tracking-widest mt-1.5 mb-3 border-b border-brand-orange/30 pb-1 max-w-full overflow-hidden text-ellipsis whitespace-nowrap px-4 text-glow">
                    {visitorName}
                  </span>

                  <p className="font-sans text-[11px] font-light text-cream-white/80 leading-relaxed">
                    “May your meat compile with zero structural errors, other design setups grill nicely, and code compile into premium BBQ ribeyes this Eid!”
                  </p>

                  <p className="font-serif italic text-sm text-brand-orange mt-3">
                    — From Ihtesham
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleResetCard}
                    className="flex-1 border border-cream-white/15 hover:border-cream-white/40 text-cream-white/60 hover:text-cream-white py-1.5 px-3 font-mono text-[9px] uppercase tracking-widest transition-all rounded-none cursor-pointer"
                  >
                    Melt New
                  </button>

                  <button
                    onClick={onRestart}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-brand-orange hover:bg-orange-500 text-luxury-black py-1.5 px-3 font-mono text-[9px] uppercase font-bold tracking-widest transition-all rounded-none cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3 animate-spin-slow" />
                    Film Intro
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
