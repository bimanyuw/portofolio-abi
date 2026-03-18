import { ExperienceItem, LensTheme, Project } from "@/types/portfolio";

export const itProjects: Project[] = [
  {
    title: "Portfolio Website",
    summary:
      "A personal portfolio built to present identity, projects, and storytelling in a cleaner and more strategic way.",
    year: "2026",
    role: "Frontend Developer",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    accent: "System-driven personal branding",
  },
  {
    title: "UI/UX Case Study",
    summary:
      "A product design exploration focused on user flow clarity, interaction hierarchy, and stronger visual structure.",
    year: "2025",
    role: "UI/UX Designer",
    tags: ["Figma", "Research", "Prototype"],
    accent: "Human-centered problem solving",
  },
  {
    title: "Academic System Project",
    summary:
      "A structured project that combines logic, database thinking, and implementation discipline for coursework delivery.",
    year: "2025",
    role: "Systems Builder",
    tags: ["Java", "SQL", "Documentation"],
    accent: "Logic, structure, execution",
  },
];

export const creativeProjects: Project[] = [
  {
    title: "Event Documentation",
    summary:
      "Visual coverage built to preserve atmosphere, energy, and narrative moments from student and community events.",
    year: "2026",
    role: "Documenter",
    tags: ["Documentation", "Storytelling", "Event"],
    accent: "Moments turned into memory",
  },
  {
    title: "Videography Showcase",
    summary:
      "Short-form visual work focused on pacing, transition, and mood to present stories with a more cinematic feel.",
    year: "2025",
    role: "Video Editor",
    tags: ["Videography", "Editing", "Motion"],
    accent: "Rhythm, emotion, movement",
  },
  {
    title: "Photography Collection",
    summary:
      "A growing collection of shots exploring composition, detail, and atmosphere across people, places, and events.",
    year: "2025",
    role: "Photographer",
    tags: ["Photography", "Composition", "Visual Identity"],
    accent: "Framing with intention",
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "2025 — Present",
    title: "Technology, design, and project work",
    description:
      "Building experience across systems thinking, interface design, and digital execution through academic and organizational projects.",
  },
  {
    period: "2024 — Present",
    title: "Creative documentation and visual storytelling",
    description:
      "Exploring how events, people, and ideas can be translated into stronger visual narratives through photo and video work.",
  },
  {
    period: "Ongoing",
    title: "Cross-disciplinary growth",
    description:
      "Developing a portfolio that connects problem solving in technology with communication through visual creativity.",
  },
];

export const lensTheme: Record<"it" | "creative", LensTheme> = {
  it: {
    sectionLabel: "IT SIDE",
    heroTitleTop: "Building systems",
    heroTitleBottom: "with logic & code",
    heroDescription:
      "Focused on web, systems, UI/UX, and structured digital problem solving.",
    frontImage: "/images/abi-orange.jpeg",
    backImage: "/images/abi-creative.jpeg",

    pageClass: "bg-black text-white",
    pageOverlay:
      "bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_22%),linear-gradient(180deg,#050505_0%,#0a0704_38%,#050505_100%)]",
    leftGlow:
      "bg-[radial-gradient(circle_at_left,rgba(245,158,11,0.12),transparent_62%)]",

    navClass:
      "border-[#f59e0b]/20 bg-[rgba(20,10,4,0.75)] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_10px_40px_rgba(0,0,0,0.35)]",
    brandTop: "text-white/55",
    navLink: "text-white/72 hover:text-white",

    sectionEyebrow: "text-[#f59e0b]",
    subText: "text-[#b8c2d1]",
    muted: "text-white/66",
    softMuted: "text-white/40",

    primaryButton:
      "border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black",
    secondaryButton:
      "border-white/14 bg-white/4 text-white/82 hover:bg-white/8",

    chipClass:
      "border-[#f59e0b]/40 bg-[#f59e0b]/12 text-[#f59e0b] hover:bg-[#f59e0b]/20",
    cardClass: "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]",
    cardStatic: "border-white/10 bg-white/[0.03]",
    contactPill: "border-white/10 bg-white/5 hover:bg-white/10",
    browsePill:
      "border-[#f59e0b]/35 bg-[#f59e0b]/10 text-[#f59e0b] hover:bg-[#f59e0b]/18",
    ctaBg: "bg-[#f59e0b] text-black",
  },

  creative: {
    sectionLabel: "CREATIVE SIDE",
    heroTitleTop: "Crafting visuals",
    heroTitleBottom: "with mood & story",
    heroDescription:
      "Focused on documentation, videography, photography, and visual storytelling.",
    frontImage: "/images/abi-creative.jpeg",
    backImage: "/images/abi-orange.jpeg",

    pageClass: "bg-[#f5f2eb] text-[#111111]",
    pageOverlay:
      "bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.85),transparent_28%),radial-gradient(circle_at_top_right,rgba(0,0,0,0.04),transparent_22%),linear-gradient(180deg,#f5f2eb_0%,#efebe3_45%,#f8f6f1_100%)]",
    leftGlow:
      "bg-[radial-gradient(circle_at_left,rgba(0,0,0,0.03),transparent_62%)]",

    navClass:
      "border-black/10 bg-[rgba(255,255,255,0.72)] shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_10px_40px_rgba(0,0,0,0.06)]",
    brandTop: "text-black/45",
    navLink: "text-black/65 hover:text-black",

    sectionEyebrow: "text-black/55",
    subText: "text-black/65",
    muted: "text-black/68",
    softMuted: "text-black/40",

    primaryButton: "border-black text-black hover:bg-black hover:text-white",
    secondaryButton:
      "border-black/10 bg-black/[0.03] text-black/80 hover:bg-black/[0.06]",

    chipClass:
      "border-black/10 bg-black/[0.04] text-black/75 hover:bg-black/[0.07]",
    cardClass: "border-black/10 bg-white/60 hover:bg-white/80",
    cardStatic: "border-black/10 bg-white/60",
    contactPill: "border-black/10 bg-black/[0.03] hover:bg-black/[0.06]",
    browsePill: "border-black/12 bg-black text-white hover:bg-black/85",
    ctaBg: "bg-black text-white",
  },
};