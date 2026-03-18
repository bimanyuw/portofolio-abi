"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MonitorCog,
  Video,
  Camera,
  FileImage,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

type Lens = "it" | "creative";

type Project = {
  title: string;
  summary: string;
  year: string;
  role: string;
  tags: string[];
  accent: string;
};

const itProjects: Project[] = [
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

const creativeProjects: Project[] = [
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

const experience = [
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

const lensTheme = {
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

    primaryButton:
      "border-black text-black hover:bg-black hover:text-white",
    secondaryButton:
      "border-black/10 bg-black/[0.03] text-black/80 hover:bg-black/[0.06]",

    chipClass:
      "border-black/10 bg-black/[0.04] text-black/75 hover:bg-black/[0.07]",
    cardClass: "border-black/10 bg-white/60 hover:bg-white/80",
    cardStatic: "border-black/10 bg-white/60",
    contactPill: "border-black/10 bg-black/[0.03] hover:bg-black/[0.06]",
    browsePill:
      "border-black/12 bg-black text-white hover:bg-black/85",
    ctaBg: "bg-black text-white",
  },
} as const;

function LensSwitch({
  lens,
  setLens,
  isCreative,
}: {
  lens: Lens;
  setLens: (value: Lens) => void;
  isCreative: boolean;
}) {
  return (
    <div
      className={`relative inline-flex rounded-full border p-1 backdrop-blur ${
        isCreative
          ? "border-black/15 bg-white/70"
          : "border-white/30 bg-black/50"
      }`}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full ${
          lens === "it"
            ? "left-1 bg-[#f59e0b]"
            : "left-[calc(50%+2px)] bg-black"
        }`}
      />

      <button
        type="button"
        onClick={() => setLens("it")}
        className={`relative z-10 rounded-full px-5 py-3 text-sm font-medium transition md:px-6 ${
          lens === "it"
            ? "text-black"
            : isCreative
            ? "text-black/70"
            : "text-white/80"
        }`}
      >
        IT Side
      </button>

      <button
        type="button"
        onClick={() => setLens("creative")}
        className={`relative z-10 rounded-full px-5 py-3 text-sm font-medium transition md:px-6 ${
          lens === "creative" ? "text-white" : isCreative ? "text-black/70" : "text-white/80"
        }`}
      >
        Creative Side
      </button>
    </div>
  );
}

function OverlapHeroImages({
  lens,
  frontImage,
  backImage,
}: {
  lens: Lens;
  frontImage: string;
  backImage: string;
}) {
  const isIT = lens === "it";

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[620px] md:h-[520px]">
      <motion.div
        animate={
          isIT
            ? { rotate: -8, x: -52, y: 42, scale: 0.88, opacity: 0.55 }
            : { rotate: 8, x: 52, y: 42, scale: 0.88, opacity: 0.55 }
        }
        transition={{ duration: 0.55, ease: "easeInOut" }}
        className={`absolute left-1/2 top-1/2 z-0 h-[76%] w-[58%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2.25rem] border shadow-[0_18px_60px_rgba(0,0,0,0.18)] ${
          isIT ? "border-white/12" : "border-black/10"
        }`}
      >
        <Image src={backImage} alt="Secondary profile" fill className="object-cover" />
        <div className={`absolute inset-0 ${isIT ? "bg-black/28" : "bg-white/10"}`} />
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={frontImage}
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -16 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className={`absolute left-1/2 top-1/2 z-10 h-[92%] w-[68%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2.5rem] border shadow-[0_24px_80px_rgba(0,0,0,0.22)] ${
            isIT ? "border-white/12" : "border-black/10"
          }`}
        >
          <Image
            src={frontImage}
            alt="Primary profile"
            fill
            className={`object-cover transition-all duration-500 ${
              isIT ? "object-[center_56%]" : "object-center"
            }`}
          />
          <div
            className={`absolute inset-0 ${
              isIT
                ? "bg-[linear-gradient(135deg,rgba(245,158,11,0.18),rgba(0,0,0,0.05)_35%,rgba(0,0,0,0.28))]"
                : "bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02)_35%,rgba(0,0,0,0.08))]"
            }`}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const [lens, setLens] = useState<Lens>("it");

  const currentProjects = useMemo(
    () => (lens === "it" ? itProjects : creativeProjects),
    [lens]
  );

  const isIT = lens === "it";
  const isCreative = lens === "creative";
  const theme = lensTheme[lens];

  return (
    <main className={`min-h-screen transition-colors duration-500 ${theme.pageClass}`}>
      <div className="relative overflow-hidden transition-colors duration-500">
        <div className={`pointer-events-none absolute inset-0 transition-all duration-500 ${theme.pageOverlay}`} />
        <div className={`pointer-events-none absolute inset-y-0 left-0 w-[22rem] blur-2xl transition-all duration-500 ${theme.leftGlow}`} />

        <header className="relative z-20 mx-auto w-full max-w-7xl px-4 pt-5 md:px-8">
          <nav
            className={`flex flex-col gap-4 rounded-full border px-4 py-4 backdrop-blur transition-all duration-500 md:flex-row md:items-center md:justify-between md:px-6 ${theme.navClass}`}
          >
            <div className="flex items-center justify-between gap-4">
              <a href="#" className="shrink-0">
                <p className={`text-[11px] uppercase tracking-[0.35em] ${theme.brandTop}`}>
                  Portfolio
                </p>
                <p className="text-2xl font-semibold leading-none">Abi</p>
              </a>

              <div className="md:hidden">
                <LensSwitch lens={lens} setLens={setLens} isCreative={isCreative} />
              </div>
            </div>

            <div className="hidden md:block">
              <LensSwitch lens={lens} setLens={setLens} isCreative={isCreative} />
            </div>

            <div className="flex items-center justify-between gap-4 md:justify-end">
              <div className="hidden items-center gap-7 text-sm md:flex">
                <a href="#about" className={`transition ${theme.navLink}`}>About</a>
                <a href="#projects" className={`transition ${theme.navLink}`}>Projects</a>
                <a href="#experience" className={`transition ${theme.navLink}`}>Experience</a>
                <a href="#contact" className={`transition ${theme.navLink}`}>Contact</a>
              </div>

              <a
                href="#contact"
                className={`rounded-full px-6 py-3 text-sm font-medium transition hover:scale-[1.02] ${theme.ctaBg}`}
              >
                Let&apos;s talk
              </a>
            </div>
          </nav>
        </header>

        <section className="relative z-10 mx-auto grid min-h-[calc(100vh-100px)] w-full max-w-7xl grid-cols-1 items-center gap-14 px-4 pb-16 pt-10 md:grid-cols-[1.02fr_0.98fr] md:px-8 md:pb-24 md:pt-16">
          <div className="max-w-2xl">
            <motion.p
              key={theme.sectionLabel}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className={`mb-6 text-xs uppercase tracking-[0.45em] ${theme.sectionEyebrow}`}
            >
              {theme.sectionLabel}
            </motion.p>

            <AnimatePresence mode="wait">
              <motion.div
                key={lens}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <h1 className="max-w-xl text-5xl font-semibold leading-[1.04] md:text-7xl">
                  {theme.heroTitleTop}
                  <br />
                  <span className={isIT ? "text-[#f59e0b]" : "text-black"}>
                    {theme.heroTitleBottom}
                  </span>
                </h1>

                <p className={`mt-7 max-w-lg text-lg leading-8 ${theme.subText}`}>
                  {theme.heroDescription}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className={`inline-flex items-center gap-2 border px-6 py-3 text-sm font-medium transition ${theme.primaryButton}`}
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#about"
                className={`inline-flex items-center gap-2 border px-6 py-3 text-sm font-medium transition ${theme.secondaryButton}`}
              >
                Explore profile
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <OverlapHeroImages
            lens={lens}
            frontImage={theme.frontImage}
            backImage={theme.backImage}
          />
        </section>
      </div>

      <section id="about" className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-10 max-w-3xl">
          <p className={`mb-3 text-xs uppercase tracking-[0.38em] ${theme.softMuted}`}>About</p>
          <h2 className="text-3xl font-semibold md:text-5xl">
            Get to know me through two lenses.
          </h2>
          <p className={`mt-5 text-lg leading-8 ${theme.muted}`}>
            I am building a portfolio that does not flatten everything into a single category.
            My work sits between technology and creativity, so this website is structured to show both sides with equal clarity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <button
            type="button"
            onClick={() => setLens("it")}
            className={`rounded-[2rem] border p-8 text-left transition ${
              isIT
                ? "border-[#f59e0b]/45 bg-[#f59e0b]/10"
                : isCreative
                ? "border-black/10 bg-white/55 hover:bg-white/80"
                : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
            }`}
          >
            <p className={`text-xs uppercase tracking-[0.3em] ${theme.softMuted}`}>Lens 01</p>
            <h3 className="mt-4 text-2xl font-semibold">IT Side</h3>
            <p className={`mt-4 leading-8 ${theme.muted}`}>
              For projects related to web, systems, UI/UX, and structured digital problem solving.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setLens("creative")}
            className={`rounded-[2rem] border p-8 text-left transition ${
              isCreative
                ? "border-black/15 bg-white/85"
                : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
            }`}
          >
            <p className={`text-xs uppercase tracking-[0.3em] ${theme.softMuted}`}>Lens 02</p>
            <h3 className="mt-4 text-2xl font-semibold">Creative Side</h3>
            <p className={`mt-4 leading-8 ${theme.muted}`}>
              For works related to documentation, videography, photography, and visual storytelling.
            </p>
          </button>
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className={`mb-3 text-xs uppercase tracking-[0.38em] ${theme.softMuted}`}>Projects</p>
            <h2 className="text-3xl font-semibold md:text-5xl">
              {isIT ? "System-oriented selected work." : "Visual and creative selected work."}
            </h2>
            <p className={`mt-5 text-lg leading-8 ${theme.muted}`}>
              {isIT
                ? "This side highlights work shaped by logic, interfaces, structure, and digital execution."
                : "This side highlights work shaped by visuals, narrative rhythm, atmosphere, and documentation."}
            </p>
          </div>

          <LensSwitch lens={lens} setLens={setLens} isCreative={isCreative} />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {currentProjects.map((project, index) => (
            <article
              key={`${lens}-${project.title}`}
              className={`group rounded-[2rem] border p-6 transition hover:-translate-y-1 ${theme.cardClass}`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className={theme.softMuted}>{project.year}</span>

                <div className={`rounded-full border p-3 ${isCreative ? "border-black/10 bg-black/[0.04]" : "border-white/10 bg-white/5"}`}>
                  {isIT ? (
                    <MonitorCog className="h-5 w-5" />
                  ) : index === 0 ? (
                    <FileImage className="h-5 w-5" />
                  ) : index === 1 ? (
                    <Video className="h-5 w-5" />
                  ) : (
                    <Camera className="h-5 w-5" />
                  )}
                </div>
              </div>

              <h3 className="mt-8 text-2xl font-semibold">{project.title}</h3>
              <p className={`mt-4 leading-8 ${theme.muted}`}>{project.summary}</p>

              <div className="mt-8">
                <p className={`text-xs uppercase tracking-[0.25em] ${theme.softMuted}`}>Role</p>
                <p className="mt-2 text-sm">{project.role}</p>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-3 py-1 text-xs transition ${theme.chipClass}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between text-sm">
                <span className={theme.softMuted}>{project.accent}</span>
                <span className="inline-flex items-center gap-1 transition group-hover:translate-x-1">
                  View more
                  <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-10 max-w-3xl">
          <p className={`mb-3 text-xs uppercase tracking-[0.38em] ${theme.softMuted}`}>Experience</p>
          <h2 className="text-3xl font-semibold md:text-5xl">
            Building range without losing direction.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {experience.map((item) => (
            <article
              key={item.title}
              className={`rounded-[2rem] border p-7 ${theme.cardStatic}`}
            >
              <p className={`text-sm ${theme.softMuted}`}>{item.period}</p>
              <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
              <p className={`mt-5 leading-8 ${theme.muted}`}>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
        <div className={`rounded-[2rem] border p-8 md:p-10 ${theme.cardStatic}`}>
          <p className={`mb-3 text-xs uppercase tracking-[0.38em] ${theme.softMuted}`}>Direction</p>
          <h2 className="text-3xl font-semibold md:text-5xl">
            One identity, two working languages.
          </h2>
          <p className={`mt-5 max-w-4xl text-lg leading-8 ${theme.muted}`}>
            Technology shapes how I structure and solve. Creativity shapes how I communicate and present.
            This portfolio is designed to hold both without forcing either one to disappear.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className={`rounded-[1.5rem] border p-6 ${theme.cardStatic}`}>
              <p className={`text-xs uppercase tracking-[0.25em] ${theme.softMuted}`}>IT language</p>
              <p className="mt-3 text-lg">Interfaces, systems, logic, clarity</p>
            </div>
            <div className={`rounded-[1.5rem] border p-6 ${theme.cardStatic}`}>
              <p className={`text-xs uppercase tracking-[0.25em] ${theme.softMuted}`}>Creative language</p>
              <p className="mt-3 text-lg">Mood, visuals, movement, storytelling</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-7xl px-4 pb-24 pt-20 md:px-8">
        <div className={`rounded-[2rem] border p-8 md:p-10 ${theme.cardStatic}`}>
          <p className={`mb-3 text-xs uppercase tracking-[0.38em] ${theme.softMuted}`}>Contact</p>
          <h2 className="text-3xl font-semibold md:text-5xl">
            Let&apos;s build something intentional.
          </h2>
          <p className={`mt-5 max-w-3xl text-lg leading-8 ${theme.muted}`}>
            Open for collaboration, project work, documentation needs, and conversations around design, systems, and creative execution.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:your@email.com" className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm transition ${theme.contactPill}`}>
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm transition ${theme.contactPill}`}>
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm transition ${theme.contactPill}`}>
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm transition ${theme.contactPill}`}>
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a href="#projects" className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm transition ${theme.browsePill}`}>
              <Sparkles className="h-4 w-4" />
              Browse work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}