import React, { useEffect, useRef, useState } from "react";
import { IMAGES } from "../constants";
import { motion } from "motion/react";
import { ChevronDown, Sparkles, Star } from "lucide-react";

interface Chapter6Props {
  onNext: () => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
  size: number;
  decay: number;
}

export default function Chapter6Festival({ onNext }: Chapter6Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  // Trigger sound effect on click/hover
  const triggerClickSound = () => {
    if ((window as any).triggerTick) {
      (window as any).triggerTick();
    }
  };

  // Launch explosive particles
  const spawnExplosion = (x: number, y: number) => {
    triggerClickSound();
    
    // Choose stunning gold, orange, and white colors matching our theme
    const colors = ["#FF6B00", "#FF8C33", "#FFAE66", "#FFC799", "#F7F3EE", "#FFDBB8"];
    const count = 40 + Math.floor(Math.random() * 20);

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 4.5;
      
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        size: 2 + Math.random() * 3,
        decay: 0.012 + Math.random() * 0.018
      });
    }
  };

  // Canvas physics draw loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high density resizing
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Render loop
    const runFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        
        // Apply constant air resistance & gravity
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.vy += 0.04; // gravity drift down
        
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Draw glowing particle star
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        
        // Simple glow drop shadow backings
        ctx.shadowBlur = p.size * 3;
        ctx.shadowColor = p.color;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameRef.current = requestAnimationFrame(runFrame);
    };

    animationFrameRef.current = requestAnimationFrame(runFrame);

    // Initial ambient firework drops
    const autoFire = setInterval(() => {
      if (canvas) {
        spawnExplosion(
          100 + Math.random() * (canvas.width - 200),
          100 + Math.random() * (canvas.height / 2 - 50)
        );
      }
    }, 4000);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearInterval(autoFire);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spawnExplosion(x, y);
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col justify-center bg-luxury-black text-cream-white overflow-hidden select-none">
      
      {/* Background Graphic with elegant mela bokeh layering */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={IMAGES.eidFestivalCelebration}
          alt="Immersive Eid mela with glowing lantern tunnels and fireworks in sky"
          className="w-full h-full object-cover opacity-60 md:opacity-85 scale-102"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-luxury-black/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/95 via-transparent to-luxury-black/95" />
      </div>

      {/* Interactive Canvas Overlay on Starry Sky */}
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        className="absolute inset-0 z-20 cursor-crosshair"
        title="Tap anywhere on the sky to launch creative fireworks!"
      />

      {/* Meta indicator */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 font-mono text-[10px] uppercase tracking-widest text-cream-white/40 hidden md:block">
        <span className="text-brand-orange mr-2">SEC_06_FESTIVITY</span> • NIGHT RAINBOW SPARKLES • ACTIVE OVERLAY
      </div>

      {/* Narrative grid layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between h-full pt-20 md:pt-28 pb-16 pointer-events-none">
        
        {/* Left hand: Festival Description */}
        <div className="flex flex-col max-w-xl text-left self-center mt-12 md:mt-0">
          <p className="font-display font-medium text-xs md:text-sm text-brand-orange uppercase tracking-[0.3em] mb-2 leading-none">
            The Midnight Celebration
          </p>

          <h2 className="font-serif italic font-semibold text-3xl md:text-5xl text-cream-white leading-tight mb-4 tracking-wide">
            Lanterns & Cinematic<br/>
            <span className="not-italic font-display font-black text-4xl md:text-6xl text-brand-orange tracking-tight uppercase">
              Midnight Sparks
            </span>
          </h2>

          <div className="h-[2px] w-12 bg-white/20 mb-5 animate-warm-flicker" />

          <p className="font-sans font-light text-sm text-cream-white/70 leading-relaxed mb-6">
            Under a canopy of bursting sparks, the entire mela comes alive. Crowds gather under hanging glow meshes, celebrating the sacred feast of sacrifice. This is the storytelling landscape that bridges work, craft, and raw festive joy.
          </p>

          <div className="flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/20 px-4 py-2 max-w-md pointer-events-auto">
            <Star className="w-4 h-4 text-brand-orange animate-spin-slow" />
            <span className="font-mono text-[10px] tracking-wider text-cream-white/80">
              TAP OR HOVER ON THE SKY AREA ABOVE TO CAST SPARKLES
            </span>
          </div>
        </div>

        {/* Right hand: Interactive stats card and navigation */}
        <div className="flex flex-col max-w-xs md:items-end text-left md:text-right self-center mt-6 md:mt-0 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass-panel p-5 border border-brand-orange/20 relative shadow-[0_0_35px_rgba(255,107,0,0.05)] text-left"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-orange font-bold">
                FESTIVAL STATUS: INSPIRED
              </span>
            </div>

            <p className="font-display font-medium text-xs text-cream-white leading-relaxed mb-3">
              Now that Ihtesham has celebrated, eaten mutton biryani, and watched fireworks, his creative engine has reached maximum overclocking frequency. Let's inspect his portfolio.
            </p>

            <span className="font-mono text-[9px] text-cream-white/45">
              VOLTS: 220V OF CRITICAL ADRENALINE
            </span>
          </motion.div>

          <button
            onClick={() => {
              triggerClickSound();
              onNext();
            }}
            className="mt-6 md:mt-8 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-cream-white/60 hover:text-brand-orange transition-all duration-300 border border-cream-white/10 hover:border-brand-orange bg-luxury-black/40 pl-4 pr-1 py-1.5 cursor-pointer self-start md:self-end"
          >
            Entering Portfolio Vault
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-brand-orange" />
          </button>
        </div>
      </div>
    </div>
  );
}
