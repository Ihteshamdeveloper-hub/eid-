import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Radio } from "lucide-react";

interface SoundSystemProps {
  currentSection: number;
}

export default function SoundSystem({ currentSection }: SoundSystemProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  
  // Oscillators and Gain Nodes
  const rootOscRef = useRef<OscillatorNode | null>(null);
  const fifthOscRef = useRef<OscillatorNode | null>(null);
  const octaveOscRef = useRef<OscillatorNode | null>(null);
  
  const mainGainRef = useRef<GainNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);

  // Initialize and start standard oscillators
  const startAudio = () => {
    try {
      if (audioContextRef.current) return;

      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioContextRef.current = ctx;

      // Filter to make it warm, low-passed and dark
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(150, ctx.currentTime);
      filter.Q.setValueAtTime(1.5, ctx.currentTime);
      filterRef.current = filter;

      // Main Gain Node
      const mainGain = ctx.createGain();
      mainGain.gain.setValueAtTime(0, ctx.currentTime); // Start silent
      mainGainRef.current = mainGain;

      // Create Oscillators for atmospheric drone (Chord properties)
      // Base frequency 55Hz (A1)
      const root = ctx.createOscillator();
      root.type = "sine";
      root.frequency.setValueAtTime(55, ctx.currentTime);
      rootOscRef.current = root;

      // Fifth 82.5Hz (E2)
      const fifth = ctx.createOscillator();
      fifth.type = "triangle";
      fifth.frequency.setValueAtTime(82.4, ctx.currentTime);
      fifthOscRef.current = fifth;

      // Octave 110Hz (A2)
      const octave = ctx.createOscillator();
      octave.type = "sine";
      octave.frequency.setValueAtTime(110, ctx.currentTime);
      octaveOscRef.current = octave;

      // Local Gains to balance tones
      const g1 = ctx.createGain();
      g1.gain.setValueAtTime(0.4, ctx.currentTime);
      const g2 = ctx.createGain();
      g2.gain.setValueAtTime(0.15, ctx.currentTime);
      const g3 = ctx.createGain();
      g3.gain.setValueAtTime(0.2, ctx.currentTime);

      // Connections
      root.connect(g1);
      fifth.connect(g2);
      octave.connect(g3);

      g1.connect(filter);
      g2.connect(filter);
      g3.connect(filter);

      filter.connect(mainGain);
      mainGain.connect(ctx.destination);

      // Start oscillators
      root.start();
      fifth.start();
      octave.start();

      // Fade-in ambient music
      mainGain.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 3.0);
      
      setIsPlaying(true);
      
      // Initial trigger sound
      triggerImpact();
    } catch (e) {
      console.error("Failed to start simulated synthesizer:", e);
    }
  };

  // Trigger high-end impact bass swoop for film cut transition effect
  const triggerImpact = () => {
    const ctx = audioContextRef.current;
    if (!ctx || ctx.state === "suspended") return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = "sine";
      osc.frequency.setValueAtTime(160, ctx.currentTime);
      // Sweeping frequency down quickly
      osc.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + 1.2);

      gain.gain.setValueAtTime(0.4, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(200, ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.6);
    } catch (e) {
      // Ignored
    }
  };

  // Small sci-fi UI notification/interaction sound
  const triggerTick = () => {
    const ctx = audioContextRef.current;
    if (!ctx || ctx.state === "suspended" || !isPlaying) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.setValueAtTime(1200, ctx.currentTime + 0.02);

      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      // Ignored
    }
  };

  // Adjust drone based on section transitions so it feels interactive!
  useEffect(() => {
    const ctx = audioContextRef.current;
    if (!ctx || !isPlaying) return;

    triggerImpact();

    // Modify synthesizer frequency filters based on section
    // Higher/brighter frequencies in food / festival sections
    const targetFreq = 120 + (currentSection * 35);
    if (filterRef.current) {
      filterRef.current.frequency.exponentialRampToValueAtTime(
        Math.min(targetFreq, 600),
        ctx.currentTime + 1.0
      );
    }
  }, [currentSection]);

  const toggleMute = () => {
    if (!audioContextRef.current) {
      startAudio();
      return;
    }

    const ctx = audioContextRef.current;
    if (isPlaying) {
      // Fast fade out
      mainGainRef.current?.gain.setValueAtTime(mainGainRef.current.gain.value, ctx.currentTime);
      mainGainRef.current?.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
      setTimeout(() => {
        if (ctx.state !== "closed") {
          ctx.suspend();
        }
      }, 550);
      setIsPlaying(false);
    } else {
      ctx.resume().then(() => {
        mainGainRef.current?.gain.setValueAtTime(0.001, ctx.currentTime);
        mainGainRef.current?.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 1.0);
        setIsPlaying(true);
      });
    }
  };

  // Register public window hooks so our cards can trigger sound clicks!
  useEffect(() => {
    (window as any).triggerTick = triggerTick;
    (window as any).startIntroAudio = startAudio;
    return () => {
      delete (window as any).triggerTick;
      delete (window as any).startIntroAudio;
    };
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Visual equalizer pulsing indicator */}
      {isPlaying && (
        <div className="flex items-center gap-1 bg-luxury-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-brand-orange/25 text-[10px] font-mono tracking-widest text-brand-orange animate-pulse">
          <Radio className="w-3.5 h-3.5 animate-spin" />
          <span>CINEMATIC drone</span>
          <span className="flex items-end gap-[2px] h-2.5 w-3 ml-1">
            <span className="w-[1.5px] bg-brand-orange animate-[pulse_0.4s_infinite_alternate]" style={{ height: "40%" }} />
            <span className="w-[1.5px] bg-brand-orange animate-[pulse_0.6s_infinite_alternate_0.2s]" style={{ height: "100%" }} />
            <span className="w-[1.5px] bg-brand-orange animate-[pulse_0.5s_infinite_alternate_0.1s]" style={{ height: "70%" }} />
          </span>
        </div>
      )}

      <button
        id="cinema-audio-toggle"
        onClick={toggleMute}
        className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-brand-orange/30 bg-luxury-black/80 text-cream-white transition-all duration-300 hover:border-brand-orange hover:scale-105 active:scale-95 focus:outline-none shadow-[0_0_15px_rgba(255,107,0,0.1)] hover:shadow-[0_0_20px_rgba(255,107,0,0.35)]"
        title={isPlaying ? "Mute Atmospheric Sound" : "Activate Cinematic Atmosphere"}
      >
        <div className="absolute inset-0 rounded-full border border-brand-orange/10 scale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 animate-ping pointer-events-none" />
        {isPlaying ? (
          <Volume2 className="h-5 w-5 text-brand-orange transition-colors" />
        ) : (
          <VolumeX className="h-5 w-5 text-cream-white/60 group-hover:text-cream-white transition-colors" />
        )}
      </button>
    </div>
  );
}
