"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const chapters = [
    { number: "01", label: "THE STORY", href: "#story" },
    { number: "02", label: "SELECTED PROJECTS", href: "#projects" },
    { number: "03", label: "ACHIEVEMENTS", href: "#achievements" },
    { number: "04", label: "EXPERIENCE", href: "#experience" },
    { number: "05", label: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const projects = [
    {
      number: "01",
      title: "Portfolio Website",
      category: "Personal Branding",
      description:
        "A cinematic personal portfolio inspired by premium athlete websites, focused on storytelling, motion, and visual identity.",
    },
    {
      number: "02",
      title: "UI/UX Case Study",
      category: "Product Design",
      description:
        "A structured case study exploring user flows, interface improvements, and visual systems for digital experiences.",
    },
    {
      number: "03",
      title: "Creative Web Experiment",
      category: "Frontend Development",
      description:
        "An experimental web concept combining motion, layout, and strong branding to create a memorable first impression.",
    },
  ];

  const achievements = [
    "Selected academic and creative works",
    "Cross-disciplinary experience in design and technology",
    "Leadership in student and collaborative initiatives",
    "Portfolio focused on impact, branding, and execution",
  ];

  const experiences = [
    {
      year: "2025",
      title: "Project & Organization Work",
      text: "Led and contributed to collaborative initiatives involving planning, execution, and communication.",
    },
    {
      year: "2024",
      title: "Creative and Design Exploration",
      text: "Built an interest in UI/UX, visual systems, and identity-driven digital experiences.",
    },
    {
      year: "2023",
      title: "Academic Development",
      text: "Strengthened analytical, technical, and problem-solving foundations through study and projects.",
    },
  ];

  // HERO ANIMATION
  const bgOverlayOpacity = useTransform(scrollYProgress, [0.18, 0.42], [0, 1]);

  const frameWidth = useTransform(
    scrollYProgress,
    [0, 0.16, 0.42],
    ["100vw", "100vw", "34vw"]
  );

  const frameHeight = useTransform(
    scrollYProgress,
    [0, 0.16, 0.42],
    ["100vh", "100vh", "42vh"]
  );

  const frameBorderRadius = useTransform(
    scrollYProgress,
    [0, 0.22, 0.42],
    ["0px", "0px", "22px"]
  );

  const imageScale = useTransform(scrollYProgress, [0, 0.42], [1, 1.08]);

  const grayscale = useTransform(scrollYProgress, [0.2, 0.42], [0, 1]);
  const brightness = useTransform(scrollYProgress, [0.2, 0.42], [1, 0.76]);
  const contrast = useTransform(scrollYProgress, [0.2, 0.42], [1, 1.04]);

  const imageFilter = useTransform(
    [grayscale, brightness, contrast],
    ([g, b, c]) => `grayscale(${g}) brightness(${b}) contrast(${c})`
  );

  const marqueeOpacity = useTransform(scrollYProgress, [0.3, 0.46], [0, 1]);

  const focusOpacity = useTransform(scrollYProgress, [0.12, 0.28], [1, 0]);
  const focusY = useTransform(scrollYProgress, [0.12, 0.28], [0, 20]);
  const focusClip = useTransform(
    scrollYProgress,
    [0.12, 0.28],
    ["inset(0% 0% 0% 0% round 24px)", "inset(0% 0% 100% 0% round 24px)"]
  );

  return (
    <main className="bg-[#d2d6dc] text-black">
      {/* HERO */}
      <section ref={heroRef} className="relative h-[280vh] bg-[#d2d6dc]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0 bg-[#d2d6dc]" />

          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(17,19,21,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,19,21,0.05)_1px,transparent_1px)] [background-size:140px_140px]" />

          <motion.div
            style={{ opacity: bgOverlayOpacity }}
            className="absolute inset-0 bg-[#0d1117]"
          />

          <motion.div
            style={{ opacity: bgOverlayOpacity }}
            className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(210,214,220,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(210,214,220,0.06)_1px,transparent_1px)] [background-size:140px_140px]"
          />

          {/* Navbar */}
          <header className="absolute inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 lg:px-10">
            <div className="leading-none">
              <h1 className="text-3xl font-semibold tracking-tight text-white mix-blend-difference lg:text-5xl">
                ABIMANYU
                <br />
                WIJANARKO
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="rounded-2xl bg-white/90 px-6 py-4 text-sm font-semibold text-black backdrop-blur"
              >
                CONTACT
              </a>

              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="rounded-2xl border border-black/10 bg-white/75 px-5 py-4 text-black backdrop-blur transition hover:bg-white"
                aria-label="Open menu"
              >
                ☰
              </button>
            </div>
          </header>

          {/* Top logo */}
          <div className="absolute left-1/2 top-8 z-50 -translate-x-1/2">
            <p className="text-2xl font-bold text-white mix-blend-difference">
              AB
            </p>
          </div>

          {/* Background marquee text */}
          <motion.div
            style={{ opacity: marqueeOpacity }}
            className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 overflow-hidden"
          >
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="flex whitespace-nowrap"
            >
              <span className="px-8 text-[8vw] font-semibold uppercase tracking-tight text-white/10">
                ABIMANYU WIJANARKO ABIMANYU WIJANARKO ABIMANYU WIJANARKO
              </span>
            </motion.div>

            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="flex whitespace-nowrap"
            >
              <span className="px-8 text-[8vw] font-semibold uppercase tracking-tight text-[#d2d6dc]/15">
                ABIMANYU WIJANARKO ABIMANYU WIJANARKO ABIMANYU WIJANARKO
              </span>
            </motion.div>
          </motion.div>

          {/* Image frame */}
          <motion.div
            style={{
              width: frameWidth,
              height: frameHeight,
              borderRadius: frameBorderRadius,
            }}
            className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-[#d2d6dc]"
          >
            <motion.div
              style={{
                scale: imageScale,
                filter: imageFilter,
              }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/hero-main.jpg"
                alt="Hero image"
                fill
                priority
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>

          {/* Current Focus */}
          <motion.div
            style={{
              opacity: focusOpacity,
              y: focusY,
              clipPath: focusClip,
            }}
            className="absolute bottom-6 right-6 z-50 hidden w-40 rounded-3xl border border-black/10 bg-white/20 p-4 backdrop-blur md:block"
          >
            <p className="text-[10px] uppercase tracking-[0.18em] text-black/55">
              CURRENT FOCUS
            </p>
            <div className="mt-6 space-y-4 text-xs text-black/75">
              <p>UI/UX & Web Design</p>
              <p>Personal Branding</p>
              <p>Creative Development</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="bg-[#0d1117] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d2d6dc]/70">
            Story
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold sm:text-6xl">
            A portfolio built around identity, motion, and memorable presence.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
            This portfolio is designed to feel cinematic at first glance, but
            still structured enough to present projects, experience, and
            achievements with clarity.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="bg-[#0d1117] px-6 py-24 text-white lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d2d6dc]/70">
              Projects
            </p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-6xl">
              Selected work.
            </h2>
          </div>

          <div className="space-y-6">
            {projects.map((project) => (
              <article
                key={project.number}
                className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 lg:grid-cols-[0.25fr_0.75fr]"
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/35">
                    {project.number}
                  </p>
                  <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#d2d6dc]/65">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                    {project.title}
                  </h3>
                </div>

                <div>
                  <p className="max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                    {project.description}
                  </p>
                  <button
                    type="button"
                    className="mt-6 rounded-full border border-white/15 px-5 py-2 text-sm text-white transition hover:border-white/40 hover:bg-white/5"
                  >
                    View Project
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section
        id="achievements"
        className="bg-[#0d1117] px-6 py-24 text-white lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.45fr_0.55fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d2d6dc]/70">
              Achievements
            </p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-6xl">
              Highlights and strengths.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {achievements.map((item) => (
              <div
                key={item}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 text-sm leading-7 text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="bg-[#0d1117] px-6 py-24 text-white lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d2d6dc]/70">
              Experience
            </p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-6xl">
              Journey and progression.
            </h2>
          </div>

          <div className="space-y-6">
            {experiences.map((item) => (
              <article
                key={item.year + item.title}
                className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 lg:grid-cols-[0.2fr_0.8fr]"
              >
                <div>
                  <p className="text-lg font-semibold text-[#d2d6dc]/85">
                    {item.year}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer
        id="contact"
        className="border-t border-white/10 bg-[#0d1117] px-6 py-20 text-white lg:px-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d2d6dc]/70">
              Contact
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold sm:text-6xl">
              Let’s build something meaningful.
            </h2>
          </div>

          <div className="max-w-xl">
            <p className="text-base leading-8 text-white/70">
              Open to internships, collaborations, creative work, and meaningful
              conversations around branding, design, and digital products.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="mailto:your@email.com"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
              >
                Email Me
              </a>
              <a
                href="#"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* FULLSCREEN MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-[#04061a] text-white"
          >
            <motion.div
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 18, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="h-full overflow-y-auto px-6 py-8 lg:px-10"
            >
              <div className="mx-auto max-w-7xl">
                <div className="flex items-start justify-between gap-6">
                  <p className="text-2xl font-medium tracking-tight text-white/95 md:text-4xl">
                    Select your chapter
                  </p>

                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-2xl bg-white px-8 py-5 text-lg font-semibold text-black transition hover:scale-[1.02]"
                  >
                    CLOSE
                  </button>
                </div>

                <div className="mt-8 border-t border-white/15 pt-10">
                  <nav className="space-y-8 md:space-y-10">
                    {chapters.map((item, index) => (
                      <motion.a
                        key={item.number}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.05 }}
                        className="group flex items-start gap-4 md:gap-6"
                      >
                        <span className="mt-3 w-10 text-sm font-medium text-white/70 md:text-xl">
                          {item.number}
                        </span>

                        <span className="text-[clamp(2.3rem,7vw,6rem)] font-black uppercase leading-[0.92] tracking-tight text-white transition group-hover:text-[#d2d6dc]">
                          {item.label}
                        </span>
                      </motion.a>
                    ))}
                  </nav>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}