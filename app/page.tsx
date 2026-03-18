"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MonitorCog,
  Play,
  Sparkles,
  Video,
  Camera,
  FileImage,
} from "lucide-react";
import { useMemo, useState } from "react";

type Lens = "it" | "creative";

type Project = {
  title: string;
  summary: string;
  year: string;
  role: string;
  tags: string[];
  href?: string;
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

export default function Home() {
  const [lens, setLens] = useState<Lens>("it");

  const currentProjects = useMemo(
    () => (lens === "it" ? itProjects : creativeProjects),
    [lens]
  );

  const isIT = lens === "it";

  return (
    <main className={isIT ? "theme-it" : "theme-creative"}>
      <section className="mx-auto min-h-screen max-w-7xl px-6 pb-16 pt-6 md:px-10 lg:px-12">
        <nav className="glass sticky top-4 z-40 mx-auto mb-8 flex max-w-6xl items-center justify-between rounded-full px-4 py-3 md:px-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] opacity-70">
              Portfolio
            </p>
            <p className="text-sm font-semibold md:text-base">Abi</p>
          </div>

          <div className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>

          <a href="#contact" className="primary-pill">
            Let&apos;s talk
          </a>
        </nav>

        <section className="grid gap-10 pb-20 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pt-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-flex rounded-full border px-4 py-2 text-xs uppercase tracking-[0.28em]"
            >
              Information Systems Student · Creative Explorer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl"
            >
              Designing one portfolio with two distinct ways to know me.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 max-w-2xl text-base leading-8 opacity-80 md:text-lg"
            >
              I work across technology and creativity. One side is built on
              systems, logic, and digital products. The other is built on
              visuals, storytelling, and atmosphere.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#projects" className="primary-cta">
                Explore projects
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="secondary-cta">
                Contact me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-card"
          >
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] opacity-60">
                  Current lens
                </p>
                <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                  {isIT ? "IT Side" : "Creative Side"}
                </h2>
              </div>
              <div className="hero-icon-wrap">
                {isIT ? <MonitorCog size={24} /> : <Sparkles size={24} />}
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 opacity-80 md:text-base">
              {isIT
                ? "Focused on websites, systems thinking, UI/UX exploration, and digital problem solving with a sharper, darker visual identity."
                : "Focused on documentation, videography, and photography with a lighter, cleaner, and more visual presentation style."}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="stat-card">
                <p className="stat-label">Primary energy</p>
                <p className="stat-value">
                  {isIT ? "Build and solve" : "Capture and express"}
                </p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Preferred output</p>
                <p className="stat-value">
                  {isIT ? "Systems and interfaces" : "Visual stories and mood"}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="section-space grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="section-title">Get to know me through two lenses.</h2>
          </div>

          <div className="grid gap-6">
            <div className="content-card">
              <p className="text-lg leading-8 opacity-85">
                I am building a portfolio that does not flatten everything into a
                single category. My work sits between technology and creativity,
                so this website is structured to show both sides with equal
                clarity.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <button
                type="button"
                onClick={() => setLens("it")}
                className={`lens-card ${isIT ? "lens-card-active" : ""}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] opacity-60">
                      Lens 01
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">IT Side</h3>
                  </div>
                  <MonitorCog size={22} />
                </div>
                <p className="mt-4 text-sm leading-7 opacity-80">
                  For projects related to web, systems, UI/UX, and structured
                  digital problem solving.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setLens("creative")}
                className={`lens-card ${!isIT ? "lens-card-active" : ""}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] opacity-60">
                      Lens 02
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">
                      Creative Side
                    </h3>
                  </div>
                  <Sparkles size={22} />
                </div>
                <p className="mt-4 text-sm leading-7 opacity-80">
                  For works related to documentation, videography,
                  photography, and visual storytelling.
                </p>
              </button>
            </div>
          </div>
        </section>

        <section id="projects" className="section-space">
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Projects</p>
              <h2 className="section-title">
                {isIT ? "System-oriented selected work." : "Visual and creative selected work."}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 opacity-75 md:text-base">
                {isIT
                  ? "This side highlights work shaped by logic, interfaces, structure, and digital execution."
                  : "This side highlights work shaped by visuals, narrative rhythm, atmosphere, and documentation."}
              </p>
            </div>

            <div className="inline-flex rounded-full border p-1">
              <button
                type="button"
                onClick={() => setLens("it")}
                className={`toggle-chip ${isIT ? "toggle-chip-active" : ""}`}
              >
                IT Side
              </button>
              <button
                type="button"
                onClick={() => setLens("creative")}
                className={`toggle-chip ${!isIT ? "toggle-chip-active" : ""}`}
              >
                Creative Side
              </button>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {currentProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="project-card"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] opacity-55">
                      {project.year}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                      {project.title}
                    </h3>
                  </div>
                  <div className="project-icon">
                    {isIT ? (
                      <ChevronRight size={18} />
                    ) : index === 0 ? (
                      <FileImage size={18} />
                    ) : index === 1 ? (
                      <Video size={18} />
                    ) : (
                      <Camera size={18} />
                    )}
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 opacity-80 md:text-[15px]">
                  {project.summary}
                </p>

                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.28em] opacity-55">
                    Role
                  </p>
                  <p className="mt-2 text-sm font-medium opacity-90">
                    {project.role}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between gap-4 border-t pt-5 text-sm">
                  <span className="opacity-65">{project.accent}</span>
                  <button type="button" className="inline-flex items-center gap-2 font-medium">
                    View more
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-space grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="section-title">
              Building range without losing direction.
            </h2>
          </div>

          <div className="space-y-4">
            {experience.map((item) => (
              <article key={item.title} className="timeline-card">
                <p className="text-xs uppercase tracking-[0.28em] opacity-55">
                  {item.period}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 opacity-80 md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-space grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="spotlight-card">
            <p className="eyebrow">Direction</p>
            <h2 className="section-title max-w-2xl">
              One identity, two working languages.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 opacity-80 md:text-base">
              Technology shapes how I structure and solve. Creativity shapes how
              I communicate and present. This portfolio is designed to hold both
              without forcing either one to disappear.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="mini-card">
              <p className="mini-label">IT language</p>
              <p className="mini-value">Interfaces, systems, logic, clarity</p>
            </div>
            <div className="mini-card">
              <p className="mini-label">Creative language</p>
              <p className="mini-value">Mood, visuals, movement, storytelling</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section-space pt-6">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="section-title max-w-2xl">
                Let&apos;s build something intentional.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 opacity-80 md:text-base">
                Open for collaboration, project work, documentation needs, and
                conversations around design, systems, and creative execution.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:your@email.com" className="contact-pill">
                <Mail size={18} />
                Email
              </a>
              <a href="https://www.linkedin.com" className="contact-pill">
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a href="https://github.com" className="contact-pill">
                <Github size={18} />
                GitHub
              </a>
              <a href="https://www.instagram.com" className="contact-pill">
                <Instagram size={18} />
                Instagram
              </a>
              <a href="#projects" className="contact-pill">
                <Play size={18} />
                Browse work
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
