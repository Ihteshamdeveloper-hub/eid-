/**
 * Accurate paths to all custom-generated cinematic assets and website config.
 */

export const IMAGES = {
  heroMeatMouse: "/src/assets/images/hero_meat_mouse_1779797423264.png",
  meatKeyboard: "/src/assets/images/meat_keyboard_1779797449211.png",
  designerHoldingMouse: "/src/assets/images/designer_holding_mouse_1779797471994.png",
  coolGoatSunglasses: "/src/assets/images/cool_goat_sunglasses_1779797495647.png",
  luxuryBiryaniGoat: "/src/assets/images/luxury_biryani_goat_1779797520918.png",
  eidFestivalCelebration: "/src/assets/images/eid_festival_celebration_1779797548958.png"
};

export interface Chapter {
  id: string;
  num: string;
  title: string;
  urduTitle: string;
  subtitle: string;
}

export const CHAPTERS: Chapter[] = [
  {
    id: "intro",
    num: "01",
    title: "Before Eid",
    urduTitle: "عید سے پہلے",
    subtitle: "Deadlines & Denial"
  },
  {
    id: "transformation",
    num: "02",
    title: "The Morphing",
    urduTitle: "تبدیلی",
    subtitle: "Tech Becomes Tender"
  },
  {
    id: "realization",
    num: "03",
    title: "The Discovery",
    urduTitle: "احساس",
    subtitle: "Tasting the Concept"
  },
  {
    id: "market",
    num: "04",
    title: "The Livestock",
    urduTitle: "قربانی منڈی",
    subtitle: "VIPs in Sunglasses"
  },
  {
    id: "feast",
    num: "05",
    title: "The Cuisine",
    urduTitle: "دعوتِ خاص",
    subtitle: "Saffron & Steaming Rice"
  },
  {
    id: "festival",
    num: "06",
    title: "The Midnight Mela",
    urduTitle: "میلہ اور جشن",
    subtitle: "Under Cinematic Sparks"
  },
  {
    id: "portfolio",
    num: "07",
    title: "Futuristic Studio",
    urduTitle: "فنی کام کا شو",
    subtitle: "Luxury UI/UX Showcase"
  },
  {
    id: "mubarak",
    num: "08",
    title: "The Message",
    urduTitle: "عید مبارک",
    subtitle: "Designed For Joy"
  }
];

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  meatFactor: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "ui-ux",
    title: "Marbled Glass Card Design System",
    category: "UI/UX Design",
    description: "Designing a responsive dark-mode system where borders and shadows adapt to golden ratio configurations, now retrofitted with warm-sunset light emissions.",
    tech: ["Framer", "Figma", "Symmetric Spatial Layouts"],
    meatFactor: "10% Marbled Fat Border Radius"
  },
  {
    id: "web-dev",
    title: "Interactive WebGL Canvas Renderer",
    category: "Web Development",
    description: "High-performance full viewport pipeline with 60FPS fluid simulation, custom particle attraction fields, and adaptive physics simulation for web assets.",
    tech: ["TypeScript", "Vite", "Web Audio API", "Tailwind 4"],
    meatFactor: "Medium Rare Compiler"
  },
  {
    id: "motion-design",
    title: "Cinematic Kinetic Text & Camera Tracker",
    category: "Motion Design",
    description: "Staggered 3D typographic entrances with custom blur tracking filters, capturing natural scroll parallax depth ratios for editorial storytelling.",
    tech: ["Motion Space", "Bezier Curves", "Parallax Engines"],
    meatFactor: "Sizzling Sizzler Animations"
  },
  {
    id: "creative-dir",
    title: "The Eid-ul-Adha Metamorphosis Campaign",
    category: "Creative Direction",
    description: "An Apple-level commercial concept detailing the physical transition of premium workspace gadgets into luxurious cuts of marbled livestock steak.",
    tech: ["Cinematography", "Surrealist Storytelling", "Brand Metaphors"],
    meatFactor: "100% Chef-Approved Ribeye Theme"
  }
];
