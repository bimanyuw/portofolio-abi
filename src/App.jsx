import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  FileText,
  GraduationCap,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import heroPortrait from "./assets/hero-portrait.jpeg";

const img = (seed, w = 1200, h = 900) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const ORANGE = "#ff6a00";

const profile = {
  initials: "FAW",
  name: "Febrian Abimanyu",
  nickname: "Abi",
  headline: "Information Systems Student & Digital Product Builder",
  location: "Fasilkom UI · Indonesia",
  email: "hello@yourdomain.com",
  shortBio:
    "I design and build human-centered digital products, combining frontend development, product thinking, and project management to turn complex ideas into clear user experiences.",
};

const navItems = ["Home", "About", "Projects", "Experience", "Skills", "Contact"];

const socials = [
  { label: "GitHub", href: "#contact", icon: Code2 },
  { label: "LinkedIn", href: "#contact", icon: Briefcase },
  { label: "Email", href: "#contact", icon: Mail },
];

const projects = [
  {
    title: "NUSALOKA",
    type: "AI Product · Hackathon",
    year: "2026",
    copy: "Smart food allocation simulator with map-based decision support for regional planning.",
    tags: ["React", "Data", "Maps", "AI Concept"],
    seed: "orange-black-ai-map-dashboard",
  },
  {
    title: "Katalis Village Tourism",
    type: "Tourism Platform",
    year: "2026",
    copy: "Interactive journey map for Desa Wisata Kakaskasen II, combining tourism stories, UMKM, and local discovery.",
    tags: ["React", "GeoJSON", "UX", "Story Map"],
    seed: "orange-black-tourism-map-ui",
  },
  {
    title: "TikTakTuk D14",
    type: "Django Web App",
    year: "2026",
    copy: "Ticketing and event platform with role-based dashboards, authentication, and modern interface updates.",
    tags: ["Django", "HTML", "Auth", "Role UX"],
    seed: "orange-black-ticketing-dashboard",
  },
  {
    title: "Skill Gap Portfolio UX",
    type: "UX Competition Proposal",
    year: "2026",
    copy: "UX concept for helping Indonesian students analyze skill gaps and build industry-relevant portfolios.",
    tags: ["UX Research", "Figma", "Product Strategy"],
    seed: "orange-black-portfolio-ux-case",
  },
];

const experiences = [
  {
    icon: GraduationCap,
    title: "Information Systems Student",
    org: "Faculty of Computer Science, Universitas Indonesia",
    copy: "Learning software development, information systems, interaction design, databases, and product-centered problem solving.",
  },
  {
    icon: Briefcase,
    title: "Project Manager",
    org: "Tanoto Scholars Association UI",
    copy: "Managing programs, timelines, team coordination, stakeholder communication, and event execution.",
  },
  {
    icon: Code2,
    title: "Frontend & Web Builder",
    org: "Personal and team-based projects",
    copy: "Building React, Django, and Tailwind-based interfaces with attention to clarity, responsiveness, and user flow.",
  },
];

const skills = [
  "React",
  "Django",
  "Java",
  "SQL",
  "Tailwind CSS",
  "UX Research",
  "Figma",
  "Product Strategy",
  "Project Management",
  "Data Visualization",
  "GitHub",
  "Presentation Design",
];

const stats = [
  { value: "04+", label: "Product case studies" },
  { value: "03", label: "Core stacks" },
  { value: "UI", label: "Current campus focus" },
  { value: "2028", label: "Graduation target" },
];

function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => setHovered(!!e.target.closest("a,button,.cur-grow"));
    const out = () => setHovered(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[200] hidden lg:block"
      style={{ translateX: sx, translateY: sy }}
    >
      <motion.div
        className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff6a00]"
        animate={{
          width: hovered ? 52 : 20,
          height: hovered ? 52 : 20,
          opacity: hovered ? 0.9 : 0.55,
        }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
        style={{ mixBlendMode: "difference" }}
      />
    </motion.div>
  );
}

function Monogram({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 520 170" fill="none" aria-hidden="true">
      <motion.path
        d="M35 128C68 61 113 38 151 71C182 98 157 135 119 126C72 115 104 46 181 45C237 44 244 127 294 123C356 118 338 48 298 60C260 71 280 132 356 115C407 104 409 55 381 56C354 57 344 88 365 110C397 144 456 121 491 65"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#050505]/90 py-3 backdrop-blur-2xl"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-10">
          <a href="#home" className="cur-grow group flex items-center gap-3">
            <div className="relative grid h-11 w-11 place-items-center rounded-full border border-[#ff6a00]/70 bg-[#ff6a00]/10 text-[10px] font-black tracking-[0.18em] text-[#ff6a00] transition group-hover:bg-[#ff6a00] group-hover:text-black">
              {profile.initials}
              <span className="absolute inset-0 rounded-full bg-[#ff6a00] opacity-0 blur-lg transition group-hover:opacity-30" />
            </div>
            <span className="hidden font-display text-2xl tracking-[0.18em] text-white sm:block">
              {profile.nickname}
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link text-[11px] font-bold uppercase tracking-[0.25em] text-white/60 transition hover:text-[#ff6a00]"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="cur-grow hidden rounded-full border border-white/25 px-5 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white transition hover:border-[#ff6a00] hover:bg-[#ff6a00] hover:text-black sm:block"
            >
              Hire Me
            </a>
            <button
              onClick={() => setOpen(true)}
              className="cur-grow rounded-full border border-white/20 p-3 text-white transition hover:border-[#ff6a00] hover:text-[#ff6a00]"
              aria-label="Open menu"
            >
              <Menu size={19} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-[70] flex flex-col bg-[#030303]/97 p-6 backdrop-blur-3xl"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-3xl tracking-[0.25em] text-[#ff6a00]">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/20 p-3 text-white"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-10 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-center justify-between border-b border-white/10 py-5 font-display text-5xl tracking-wider text-white"
                >
                  {item.toUpperCase()}
                  <ArrowUpRight className="text-[#ff6a00] opacity-0 transition group-hover:opacity-100" size={28} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-end overflow-hidden bg-[#050505] pb-16 pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(255,106,0,0.34),transparent_34%),linear-gradient(115deg,#030303_0%,#050505_48%,#170900_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/85 to-[#030303]/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
      <div className="pointer-events-none absolute right-[8%] top-[18%] h-[520px] w-[520px] rounded-full bg-[#ff6a00]/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[4%] left-[8%] h-[330px] w-[330px] rounded-full bg-[#ff6a00]/15 blur-[90px]" />

      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="hero-portrait pointer-events-none absolute bottom-[20vh] right-[3vw] z-[3] hidden h-[92vh] w-[46vw] max-w-[650px] md:block"
      >
        <img
          src={heroPortrait}
          alt="Febrian Abimanyu profile silhouette"
          className="h-full w-full object-cover object-[54%_52%] opacity-82 saturate-110 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#050505]/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[#ff6a00]/5 mix-blend-color" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#ff6a00]/40 bg-[#ff6a00]/10 px-4 py-2"
        >
          <span className="pulse-dot h-2 w-2 rounded-full bg-[#ff6a00] shadow-[0_0_12px_#ff6a00]" />
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[#ff6a00]">
            {profile.location}
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[21vw] leading-[0.78] tracking-[0.035em] text-white sm:text-[17vw] lg:text-[12rem] xl:text-[14rem]"
        >
          FEBRIAN<br />
          <span className="text-[#ff6a00] [text-shadow:0_0_60px_rgba(255,106,0,0.6)]">
            ABIMANYU
          </span>
        </motion.h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="max-w-2xl font-sans text-lg font-semibold uppercase tracking-[-0.02em] text-white/80 sm:text-2xl">
              {profile.headline}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/50">
              {profile.shortBio}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="cur-grow group inline-flex w-fit items-center gap-3 rounded-full bg-[#ff6a00] px-6 py-4 font-sans text-sm font-black uppercase tracking-[0.18em] text-black shadow-[0_0_40px_rgba(255,106,0,0.35)] transition hover:scale-105 hover:shadow-[0_0_65px_rgba(255,106,0,0.55)]"
            >
              View Projects
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="cur-grow inline-flex w-fit items-center gap-3 rounded-full border border-white/20 px-6 py-4 font-sans text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-[#ff6a00] hover:text-[#ff6a00]"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <Monogram className="absolute bottom-8 right-8 hidden w-[320px] -rotate-6 text-[#ff6a00]/25 lg:block" />
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">Scroll to explore</span>
        <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#070707] py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-24">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#ff6a00]">About me</p>
            <h2 className="mt-5 font-display text-[5.8rem] leading-[0.82] tracking-[0.02em] text-white sm:text-[7.5rem]">
              BUILDING<br />
              <span className="text-[#ff6a00]">USEFUL</span><br />
              DIGITAL<br />PRODUCTS.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
              I focus on web-based products that are practical, structured, and easy to understand. My work usually sits between software engineering, UX, and project execution: designing the flow, building the interface, and making the final output presentable.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="font-display text-4xl text-[#ff6a00]">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { seed: "orange-black-student-coding", tall: true },
              { seed: "orange-black-product-planning" },
              { seed: "orange-black-ui-design" },
              { seed: "orange-black-teamwork-project" },
            ].map((item, i) => (
              <div
                key={item.seed}
                className={`overflow-hidden rounded-3xl border border-white/10 bg-white/5 ${item.tall ? "row-span-2" : ""}`}
              >
                <img
                  src={img(item.seed, 900, item.tall ? 1300 : 700)}
                  alt="Portfolio visual"
                  className="h-full w-full object-cover opacity-75 grayscale transition duration-700 hover:scale-105 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HorizontalShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-58%"]);

  return (
    <section ref={ref} className="relative h-[430vh] bg-[#030303]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex min-w-max items-center gap-7 px-5 sm:px-12">
          <div className="mr-6 w-[78vw] max-w-[860px] shrink-0">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#ff6a00]/50 text-2xl text-[#ff6a00]">
              <Sparkles size={25} />
            </div>
            <h2 className="font-display text-[12vw] leading-none tracking-[0.02em] text-white sm:text-[9vw] lg:text-[8rem]">
              SELECTED<br />WORK
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/50">
              A fast-moving portfolio strip for product ideas, web apps, UX proposals, and campus projects.
            </p>
          </div>

          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`cur-grow group relative shrink-0 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 ${
                i % 2 === 0 ? "h-[76vh] w-[56vw] max-w-[620px]" : "h-[60vh] w-[72vw] max-w-[860px]"
              }`}
            >
              <img
                src={img(project.seed, i % 2 === 0 ? 900 : 1300, i % 2 === 0 ? 1400 : 900)}
                alt={project.title}
                className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-[#ff6a00]">
                  {project.type} · {project.year}
                </p>
                <h3 className="mt-3 font-display text-6xl leading-none tracking-[0.03em] text-white sm:text-7xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60">{project.copy}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-[#070707] px-5 py-20 text-white sm:px-10 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <h2 className="font-display text-[6.5rem] leading-[0.82] tracking-[0.02em] text-white sm:text-[9rem]">
            PROJECT<br />
            <span className="text-[#ff6a00]">ARCHIVE</span>
          </h2>
          <p className="text-lg leading-relaxed text-white/55">
            Each project is structured as a portfolio case study: problem, users, features, design decisions, implementation notes, and measurable value.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              tabIndex="0"
              className="cur-grow group relative min-h-[500px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] outline-none transition duration-500 hover:border-[#ff6a00]/60 focus-visible:border-[#ff6a00]/60 md:min-h-[560px]"
            >
              <img
                src={img(project.seed, 1400, 1000)}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover opacity-80 grayscale transition duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 group-focus-visible:scale-110 group-focus-visible:opacity-100 group-focus-visible:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
              <div className="absolute inset-0 bg-[#ff6a00]/0 transition duration-500 group-hover:bg-[#ff6a00]/10 group-focus-visible:bg-[#ff6a00]/10" />

              <div className="absolute bottom-0 left-0 right-0 translate-y-8 p-7 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-[#ff6a00]/40 bg-[#ff6a00]/15 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#ff6a00] backdrop-blur">
                        {project.year}
                      </span>
                      <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 backdrop-blur">
                        {project.type}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-5xl leading-none tracking-[0.03em] text-white sm:text-6xl">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="mt-1 shrink-0 text-[#ff6a00]" />
                </div>

                <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70">{project.copy}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs text-white/65 backdrop-blur">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#030303] px-5 py-20 text-white sm:px-10 lg:py-28">
      <div className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-[#ff6a00]/10 blur-[120px]" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#ff6a00]">Experience</p>
            <h2 className="mt-4 font-display text-[6rem] leading-[0.84] text-white sm:text-[8rem]">
              ROLES &<br />RESPONSIBILITIES
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-white/50">
            A blend of technical execution, team coordination, and product thinking.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {experiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:border-[#ff6a00]/50 hover:bg-[#ff6a00]/[0.06]"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#ff6a00] text-black">
                  <Icon size={25} />
                </div>
                <h3 className="mt-8 font-display text-4xl tracking-[0.03em] text-white">{item.title}</h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#ff6a00]">{item.org}</p>
                <p className="mt-5 text-sm leading-relaxed text-white/55">{item.copy}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="overflow-hidden bg-[#ff6a00] py-20 text-black lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <h2 className="font-display text-[6.8rem] leading-[0.82] tracking-[0.02em] text-black sm:text-[9rem]">
            STACK<br />& SKILLS
          </h2>
          <p className="text-lg font-medium leading-relaxed text-black/65">
            Technical and non-technical skills arranged for a portfolio that communicates both capability and direction.
          </p>
        </div>
      </div>

      <div className="marquee-wrap mt-16 flex overflow-hidden border-y border-black/15 py-7">
        <div className="marquee-track flex min-w-max gap-6 pr-6">
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="cur-grow rounded-full border border-black/20 px-7 py-3.5 text-lg font-black uppercase tracking-[-0.03em] text-black/55 transition hover:border-black hover:bg-black hover:text-[#ff6a00]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#020202] px-5 py-20 text-white sm:px-10">
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-[#ff6a00]/15 blur-[110px]" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#ff6a00]">Contact</p>
            <h2 className="mt-4 font-display text-[6.8rem] leading-[0.82] tracking-[0.02em] text-white sm:text-[9rem]">
              LET'S<br />BUILD<br />SOMETHING.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/55">
              Open for portfolio collaborations, campus projects, hackathon builds, web development, UX case studies, and product presentation work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="cur-grow inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-white/60 transition hover:border-[#ff6a00] hover:bg-[#ff6a00] hover:text-black"
                >
                  <Icon size={16} /> {label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#ff6a00] text-black">
              <Mail size={28} />
            </div>
            <h3 className="mt-8 font-display text-5xl tracking-[0.03em] text-white">Quick Contact</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Replace the placeholder email and social links in <code className="rounded bg-white/10 px-1.5 py-0.5">src/App.jsx</code> with your real portfolio links.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="cur-grow mt-7 inline-flex items-center gap-3 rounded-full bg-[#ff6a00] px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:scale-[1.03]"
            >
              <Mail size={17} /> {profile.email}
            </a>
            <a
              href="#projects"
              className="cur-grow mt-4 inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-[#ff6a00] hover:text-[#ff6a00]"
            >
              <FileText size={17} /> View Case Studies
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-4xl tracking-[0.08em] text-white">{profile.name}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/40">
              Personal portfolio redesigned with an orange and black visual direction.
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#ff6a00]">Pages</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/50">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[#ff6a00]">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#ff6a00]">Status</p>
            <p className="mt-5 text-sm leading-relaxed text-white/45">
              © 2026 {profile.name}. Built with React, Vite, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PortfolioSite() {
  return (
    <div className="bg-[#050505] font-sans text-white">
      <Cursor />
      <Header />
      <Hero />
      <About />
      <HorizontalShowcase />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
