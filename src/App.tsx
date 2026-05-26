import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SplashIntro from "./components/SplashIntro";
import Navbar from "./components/Navbar";
import SoundSystem from "./components/SoundSystem";
import { CHAPTERS } from "./constants";

// Import modular film chapters
import Chapter1Hero from "./components/Chapter1Hero";
import Chapter2Metamorphosis from "./components/Chapter2Metamorphosis";
import Chapter3Realization from "./components/Chapter3Realization";
import Chapter4Bazaar from "./components/Chapter4Bazaar";
import Chapter5Feast from "./components/Chapter5Feast";
import Chapter6Festival from "./components/Chapter6Festival";
import Chapter7Portfolio from "./components/Chapter7Portfolio";
import Chapter8Mubarak from "./components/Chapter8Mubarak";

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrollingManually, setIsScrollingManually] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track responsive screen sizing
  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // Track cursor position for custom micro parallax lighting glow
  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  // Navigate smooth snap scrolling to section
  const handleNavigate = (index: number) => {
    if (index < 0 || index >= CHAPTERS.length) return;
    setIsScrollingManually(true);
    setCurrentSection(index);

    const targetEl = sectionRefs.current[index];
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Release scroll block after smooth scroll completes
    setTimeout(() => {
      setIsScrollingManually(false);
    }, 850);
  };

  // Detect normal trackpad/touch scrolling to update nav dots
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (isScrollingManually) return;
    const container = e.currentTarget;
    const scrollTop = container.scrollTop;
    const height = container.clientHeight;
    
    // Avoid dividing by zero logic
    if (height <= 0) return;
    const index = Math.round(scrollTop / height);

    if (index !== currentSection && index >= 0 && index < CHAPTERS.length) {
      setCurrentSection(index);
    }
  };

  const activeChapter = CHAPTERS[currentSection];

  return (
    <div id="ai-creative-app" className="relative w-screen h-screen bg-luxury-black text-cream-white font-sans overflow-hidden select-none">
      
      {/* Cinematic Film Grain Overlay */}
      <div className="cinematic-noise" />

      {/* Futuristic Cursor follow ambient glowing mesh (Desktop only) */}
      {!isMobile && (
        <div
          className="fixed w-[380px] h-[380px] rounded-full pointer-events-none z-30 opacity-25 blur-[120px] bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.35)_0%,transparent_70%)] transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${cursorPos.x - 190}px, ${cursorPos.y - 190}px, 0)`,
          }}
        />
      )}

      {/* Splash Cinematic Screen overlay */}
      <AnimatePresence>
        {!hasStarted && (
          <motion.div
            key="splash-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-50 pointer-events-auto"
          >
            <SplashIntro onEnter={() => setHasStarted(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main HUD overlay elements visible only when film starts */}
      {hasStarted && (
        <>
          <Navbar activeChapterId={activeChapter.id} onNavigate={handleNavigate} />
          <SoundSystem currentSection={currentSection} />
          
          {/* Subtle Bottom Center Chapter Label HUD */}
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 bg-luxury-black/60 border border-brand-orange/15 px-4 py-1.5 backdrop-blur-md rounded-full text-[9px] font-mono tracking-widest text-cream-white/50 uppercase leading-none hidden md:flex items-center gap-2">
            <span>SCENE {activeChapter.num} // {activeChapter.urduTitle}</span>
            <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-ping" />
          </div>
        </>
      )}

      {/* Snap-scrolling container housing all scenes */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="w-full h-full overflow-y-scroll overflow-x-hidden scroll-snap-container outline-none"
        style={{
          scrollBehavior: "smooth",
          pointerEvents: hasStarted ? "auto" : "none"
        }}
        tabIndex={0}
      >
        {/* CH. 01 Hero Intro */}
        <div 
          ref={(el) => { sectionRefs.current[0] = el; }}
          className="scroll-snap-section w-full h-full relative"
        >
          <Chapter1Hero onNext={() => handleNavigate(1)} />
        </div>

        {/* CH. 02 Meat Tech Transformation */}
        <div 
          ref={(el) => { sectionRefs.current[1] = el; }}
          className="scroll-snap-section w-full h-full relative"
        >
          <Chapter2Metamorphosis onNext={() => handleNavigate(2)} />
        </div>

        {/* CH. 03 The Realization */}
        <div 
          ref={(el) => { sectionRefs.current[2] = el; }}
          className="scroll-snap-section w-full h-full relative"
        >
          <Chapter3Realization onNext={() => handleNavigate(3)} />
        </div>

        {/* CH. 04 Eid Market Experience */}
        <div 
          ref={(el) => { sectionRefs.current[3] = el; }}
          className="scroll-snap-section w-full h-full relative"
        >
          <Chapter4Bazaar onNext={() => handleNavigate(4)} />
        </div>

        {/* CH. 05 Food Cinematic Experience */}
        <div 
          ref={(el) => { sectionRefs.current[4] = el; }}
          className="scroll-snap-section w-full h-full relative"
        >
          <Chapter5Feast onNext={() => handleNavigate(5)} />
        </div>

        {/* CH. 06 Eid Festival World */}
        <div 
          ref={(el) => { sectionRefs.current[5] = el; }}
          className="scroll-snap-section w-full h-full relative"
        >
          <Chapter6Festival onNext={() => handleNavigate(6)} />
        </div>

        {/* CH. 07 Futuristic UI/UX Showcase */}
        <div 
          ref={(el) => { sectionRefs.current[6] = el; }}
          className="scroll-snap-section w-full h-full relative"
        >
          <Chapter7Portfolio onNext={() => handleNavigate(7)} />
        </div>

        {/* CH. 08 Eid Message / Mubarak Credits */}
        <div 
          ref={(el) => { sectionRefs.current[7] = el; }}
          className="scroll-snap-section w-full h-full relative"
        >
          <Chapter8Mubarak onRestart={() => handleNavigate(0)} />
        </div>
      </div>
    </div>
  );
}
