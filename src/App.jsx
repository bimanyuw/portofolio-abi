import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Briefcase,
  Code2,
  FileText,
  GraduationCap,
  Mail,
  Map,
  Menu,
  PanelsTopLeft,
  Sparkles,
  X,
} from "lucide-react";
import heroPortrait from "./assets/hero-portrait.jpeg";

const img = (seed, w = 1200, h = 900) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const heroPortraitFrame = {
  top: "-15vh",
  right: "0vw",
  width: "48vw",
  height: "120vh",
  maxWidth: "680px",
};

const heroPortraitImage = {
  objectPosition: "54% 38%",
};

const profile = {
  initials: "FAW",
  name: "Febrian Abimanyu",
  nickname: "Abi",
  headline: "Information Systems Student & Digital Product Builder",
  location: "Fasilkom UI - Indonesia",
  email: "f.abimanyuwijanarko@gmail.com",
  shortBio:
    "I design and build human-centered digital products, combining frontend development, product thinking, and project management to turn complex ideas into clear user experiences.",
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/bimanyuw", icon: Code2 },
  { label: "LinkedIn", href: "https://linkedin.com/in/febrian-abimanyu-wijanarko-197514321/?skipRedirect=true", icon: Briefcase },
  { label: "Instagram", href: "https://instagram.com/abimanyuwijanarko", icon: Sparkles },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

const projects = [
  {
    title: "NUSALOKA",
    type: "AI Product / Hackathon",
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
  {
    title: "Personal Portfolio",
    type: "Cinematic Web Portfolio",
    year: "2026",
    copy: "A scroll-led portfolio system for presenting identity, journey, product work, and case studies.",
    tags: ["React", "Framer Motion", "Tailwind"],
    seed: "orange-black-cinematic-portfolio",
  },
  {
    title: "Digital Village Information System",
    type: "Product Concept",
    year: "2026",
    copy: "A village information platform concept for services, local content, destination discovery, and community access.",
    tags: ["Information System", "UX", "Web"],
    seed: "orange-black-village-information-system",
  },
];

const journeyMilestones = [
  {
    icon: GraduationCap,
    title: "Information Systems Student",
    kicker: "Faculty of Computer Science, Universitas Indonesia",
    copy: "Studying systems, software, databases, interaction design, and product-centered problem solving.",
    seed: "orange-black-university-information-systems-student",
  },
  {
    icon: PanelsTopLeft,
    title: "Web, Databases, and UX",
    kicker: "Core learning track",
    copy: "Learning how information systems connect technical structure with usable, understandable workflows.",
    seed: "orange-black-web-database-ux-workspace",
  },
  {
    icon: Briefcase,
    title: "Project Manager at TSA UI",
    kicker: "Team execution",
    copy: "Managing timelines, coordination, stakeholder communication, and program delivery.",
    seed: "orange-black-project-management-team-board",
  },
  {
    icon: Code2,
    title: "React, Django, Tailwind Builds",
    kicker: "Product implementation",
    copy: "Turning ideas into working interfaces, dashboards, and structured web applications.",
    seed: "orange-black-react-django-code-interface",
  },
  {
    icon: Sparkles,
    title: "Hackathon and Product Work",
    kicker: "Competition mode",
    copy: "Exploring AI concepts, product strategy, UX proposals, and presentation-ready case studies.",
    seed: "orange-black-hackathon-product-pitch",
  },
  {
    icon: FileText,
    title: "Portfolio Case Studies",
    kicker: "Current chapter",
    copy: "Developing clearer narratives that connect problem, process, implementation, and value.",
    seed: "orange-black-portfolio-case-study-layout",
  },
];

const aboutCapabilities = [
  { label: "Frontend Builder", icon: Code2 },
  { label: "UX Thinker", icon: PanelsTopLeft },
  { label: "Product Strategy", icon: Sparkles },
  { label: "Project Manager", icon: Briefcase },
  { label: "Case Studies", icon: FileText },
  { label: "Story Maps", icon: Map },
  { label: "Campus Work", icon: GraduationCap },
  { label: "Web Products", icon: Code2 },
];

const skills = [
  "React",
  "Django",
  "SQL",
  "Tailwind CSS",
  "Framer Motion",
  "UX Research",
  "Figma",
  "Product Strategy",
  "Project Management",
];

const projectMethods = [
  {
    step: "01",
    title: "Frame the Problem",
    copy: "Turn broad ideas into a clear user need, product angle, success metric, and delivery scope.",
    points: ["Problem framing", "User context", "Feature prioritization"],
  },
  {
    step: "02",
    title: "Design the Flow",
    copy: "Map the experience before polishing screens, so every page has a reason and every action has a next step.",
    points: ["Information architecture", "Interaction flow", "Interface logic"],
  },
  {
    step: "03",
    title: "Build the Product",
    copy: "Move from concept into working interfaces with clean components, responsive layouts, and practical implementation choices.",
    points: ["React frontend", "Django/web apps", "Responsive UI"],
  },
  {
    step: "04",
    title: "Package the Story",
    copy: "Shape the final work into a case study or demo that explains the value, process, and decisions clearly.",
    points: ["Case study writing", "Demo narrative", "Presentation polish"],
  },
];

function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const height = useSpring(useTransform(scrollYProgress, [0, 1], ["8%", "100%"]), {
    stiffness: 120,
    damping: 24,
  });

  return (
    <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="flex flex-col items-center gap-3">
        <span className="[writing-mode:vertical-rl] font-mono text-[10px] uppercase tracking-[0.26em] text-white/35">
          Chapter Scroll
        </span>
        <div className="h-32 w-px overflow-hidden rounded-full bg-white/15">
          <motion.div className="w-full rounded-full bg-[#ff6a00]" style={{ height }} />
        </div>
      </div>
    </div>
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
        className="fixed inset-x-0 top-4 z-50 px-4 transition-all duration-500 sm:top-5 sm:px-6"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`liquid-nav mx-auto flex max-w-[1180px] items-center justify-between rounded-full border px-3 py-2 shadow-[0_24px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition duration-500 sm:px-4 ${
            scrolled
              ? "border-white/18 bg-[#080808]/62"
              : "border-white/14 bg-white/[0.055]"
          }`}
        >
          <a href="#home" className="cur-grow group flex items-center gap-2.5 rounded-full pr-2">
            <div className="relative grid h-10 w-10 place-items-center rounded-full border border-[#ff6a00]/70 bg-[#ff6a00]/10 text-[10px] font-black tracking-[0.18em] text-[#ff6a00] transition group-hover:bg-[#ff6a00] group-hover:text-black">
              {profile.initials}
            </div>
            <span className="hidden font-display text-xl tracking-[0.18em] text-white sm:block">
              {profile.nickname}
            </span>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/18 px-2 py-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/62 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="cur-grow rounded-full border border-white/18 bg-white/[0.035] p-3 text-white transition hover:border-[#ff6a00]/70 hover:bg-[#ff6a00] hover:text-black"
            aria-label="Open menu"
          >
            <Menu size={19} />
          </button>
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
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-center justify-between border-b border-white/10 py-5 font-display text-5xl tracking-wider text-white"
                >
                  {item.label.toUpperCase()}
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
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, -70]);
  const portraitY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, 80]);
  const curtainOpacity = useTransform(scrollYProgress, [0.55, 1], [0, 1]);

  return (
    <section ref={ref} id="home" className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] pb-12 pt-32 sm:pb-16 sm:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_38%,rgba(255,106,0,0.3),transparent_31%),linear-gradient(115deg,#030303_0%,#050505_50%,#170900_100%)]" />
      <div className="cinema-grid absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/88 to-[#030303]/24" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />

      <motion.div
        style={{ y: portraitY, ...heroPortraitFrame }}
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="hero-portrait pointer-events-none absolute z-[3] hidden md:block"
      >
        <img
          src={heroPortrait}
          alt="Febrian Abimanyu portrait"
          style={heroPortraitImage}
          className="h-full w-full object-cover opacity-80 saturate-110 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#050505]/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/75 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[#ff6a00]/5 mix-blend-color" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-10">
        <motion.div style={{ y: titleY }} className="max-w-[940px]">
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#ff6a00]/40 bg-[#ff6a00]/10 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[#ff6a00]">
            <span className="pulse-dot h-2 w-2 rounded-full bg-[#ff6a00] shadow-[0_0_12px_#ff6a00]" />
            {profile.location}
          </p>
          <h1 className="font-display text-[clamp(5.4rem,15vw,12.5rem)] leading-[0.82] tracking-[0.035em] text-white">
            ABIMANYU<br />
            <span className="text-[#ff6a00] [text-shadow:0_0_60px_rgba(255,106,0,0.6)]">
              WIJANARKO
            </span>
          </h1>
        </motion.div>

        <div className="mt-7 max-w-[900px]">
          <div className="max-w-xl">
            <p className="text-base font-semibold uppercase leading-snug text-white/84 sm:text-xl">
              {profile.headline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/52 sm:text-base">
              {profile.shortBio}
            </p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="cur-grow group absolute bottom-6 right-5 z-20 inline-flex items-center gap-3 rounded-full bg-[#ff6a00] px-5 py-3.5 text-xs font-black uppercase tracking-[0.16em] text-black shadow-[0_0_40px_rgba(255,106,0,0.35)] transition hover:scale-105 sm:bottom-10 sm:right-10 sm:px-6 sm:py-4 sm:text-sm"
      >
        Scroll to Explore
        <ArrowDown size={17} className="transition group-hover:translate-y-1" />
      </a>

      <motion.div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030303] to-transparent" style={{ opacity: curtainOpacity }} />
    </section>
  );
}

function About() {
  const ref = useRef(null);

  return (
    <section ref={ref} id="about" className="relative overflow-hidden bg-[#030303] py-24 text-white sm:py-28 lg:py-32">
      <div className="cinema-grid absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute left-0 top-1/4 h-[540px] w-[540px] bg-[#ff6a00]/15 blur-[130px]" />
      <div className="relative mx-auto grid w-full max-w-[1440px] gap-8 px-5 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <motion.div
          initial={{ y: 42, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="border border-white/10 bg-[#090909]/85 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-9 lg:p-10"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#ff6a00]">About Abi</p>
          <h2 className="mt-5 font-display text-[4.6rem] leading-[0.82] text-white sm:text-[7.5rem]">
            FIRST<br />MOVING<br /><span className="text-[#ff6a00]">CHAPTER.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65">
            Abi is an Information Systems student, digital product builder, frontend/web builder,
            product thinker, and project manager. His work sits between software engineering, UX,
            and project execution: designing the flow, building the interface, and making the final
            output easy to understand.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {skills.slice(0, 7).map((skill) => (
              <span key={skill} className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 34, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="about-motion-panel group relative overflow-hidden border border-white/10 bg-white/[0.045] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-7"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#080808] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#080808] to-transparent" />

          <div className="space-y-4">
            {[0, 1].map((row) => (
              <div key={row} className="about-marquee overflow-hidden py-1">
                <div className={`about-marquee-track ${row === 1 ? "about-marquee-reverse" : ""}`}>
                  {[...aboutCapabilities, ...aboutCapabilities].map(({ label, icon: Icon }, index) => (
                    <div
                      key={`${row}-${label}-${index}`}
                      className="about-skill-card flex h-28 w-44 shrink-0 flex-col items-center justify-center border border-white/12 bg-black/28 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition duration-300 group-hover:border-[#ff6a00]/45 group-hover:bg-[#ff6a00]/[0.055] sm:h-32 sm:w-52"
                    >
                      <Icon className="text-[#ff6a00]" size={27} />
                      <p className="mt-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white/62">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <span className="inline-flex border border-white/15 bg-black/35 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#ff6a00] shadow-[0_12px_35px_rgba(0,0,0,0.25)]">
              What I Do
            </span>
            <p className="mt-5 text-lg leading-relaxed text-white/66">
              I connect product direction, interface design, and implementation into portfolio-ready digital work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LifeJourney() {
  return (
    <section id="journey" className="relative overflow-hidden bg-[#070707] px-5 py-24 text-white sm:px-10 lg:py-32">
      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#ff6a00]">The Journey</p>
            <h2 className="mt-4 font-display text-[5.5rem] leading-[0.84] text-white sm:text-[8rem]">
              LIFE<br />JOURNEY
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-white/55">
            A curated path through study, product experiments, team leadership, and portfolio case studies.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[#ff6a00] via-white/15 to-transparent md:left-1/2 md:block" />
          <div className="grid gap-7">
            {journeyMilestones.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ y: 42, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative md:w-[48%] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                >
                  <div className="cur-grow group overflow-hidden border border-white/10 bg-[#0d0d0d]/90 shadow-[0_20px_80px_rgba(0,0,0,0.25)] transition hover:border-[#ff6a00]/60 hover:bg-[#ff6a00]/[0.055]">
                    <div className="aspect-[16/9] overflow-hidden bg-white/5">
                      <img
                        src={img(item.seed, 900, 506)}
                        alt={`${item.title} visual`}
                        className="h-full w-full object-cover opacity-78 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="grid h-12 w-12 shrink-0 place-items-center bg-[#ff6a00] text-black">
                          <Icon size={22} />
                        </div>
                        <div>
                          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff6a00]">
                            {String(index + 1).padStart(2, "0")} / {item.kicker}
                          </p>
                          <h3 className="mt-3 font-display text-4xl leading-none text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-5 text-sm leading-relaxed text-white/58">{item.copy}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingProjects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#030303] px-5 py-24 text-white sm:px-10 lg:py-32">
      <div className="cinema-grid absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute right-0 top-20 h-[480px] w-[480px] bg-[#ff6a00]/12 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center border border-[#ff6a00]/50 text-[#ff6a00]">
              <Map size={25} />
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#ff6a00]">
              Hackathon / Product Projects
            </p>
            <h2 className="mt-4 font-display text-[5.1rem] leading-[0.82] text-white sm:text-[8rem]">
              SELECTED<br />PROJECTS
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-white/55">
            A cleaner project showcase for hackathon ideas, web apps, UX proposals, and product case studies. No floating canvas, just readable cards with light motion.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ y: 36, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="cur-grow group border border-white/10 bg-white/[0.045] p-4 transition duration-500 hover:border-[#ff6a00]/60 hover:bg-[#ff6a00]/[0.055]"
            >
              <div className="aspect-[16/10] overflow-hidden bg-white/5">
                <img
                  src={img(project.seed, 900, 560)}
                  alt={`${project.title} visual`}
                  className="h-full w-full object-cover opacity-78 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
              <div className="pt-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff6a00]">
                  {project.type} / {project.year}
                </p>
                <h3 className="mt-3 font-display text-4xl leading-none text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/58">{project.copy}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border border-white/12 bg-black/35 px-2.5 py-1 text-[11px] text-white/55">
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

function ProjectProcess() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#070707] px-5 py-24 text-white sm:px-10 lg:py-32">
      <div className="pointer-events-none absolute left-0 top-16 h-[520px] w-[520px] bg-[#ff6a00]/10 blur-[130px]" />
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#ff6a00]">Behind The Work</p>
            <h2 className="mt-4 font-display text-[5.6rem] leading-[0.82] text-white sm:text-[9rem]">
              PROJECT<br /><span className="text-[#ff6a00]">PROCESS</span>
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-white/55">
            Instead of repeating the same project cards, this chapter shows the way each project is shaped:
            from messy idea to usable interface, then into a case study people can understand.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {projectMethods.map((method, index) => (
            <motion.article
              key={method.title}
              initial={{ y: 36, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="cur-grow group relative overflow-hidden border border-white/10 bg-white/[0.04] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#ff6a00]/60 hover:bg-[#ff6a00]/[0.055]"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 bg-[#ff6a00]/15 blur-2xl transition group-hover:bg-[#ff6a00]/25" />
              <p className="font-display text-6xl leading-none text-[#ff6a00]">{method.step}</p>
              <h3 className="mt-7 font-display text-4xl leading-none text-white">{method.title}</h3>
              <p className="mt-5 text-sm leading-relaxed text-white/58">{method.copy}</p>
              <div className="mt-7 flex flex-col gap-3">
                {method.points.map((point) => (
                  <span key={point} className="border-l border-[#ff6a00]/60 pl-3 text-xs uppercase tracking-[0.14em] text-white/50">
                    {point}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#020202] px-5 py-24 text-white sm:px-10">
      <div className="cinema-grid absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[520px] w-[520px] bg-[#ff6a00]/15 blur-[110px]" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#ff6a00]">Contact</p>
            <h2 className="mt-4 font-display text-[5.5rem] leading-[0.82] text-white sm:text-[9rem]">
              FINAL<br />FRAME.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/55">
              Open for portfolio collaborations, campus projects, hackathon builds, web development, UX case studies, and product presentation work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="cur-grow inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-white/60 transition hover:border-[#ff6a00] hover:bg-[#ff6a00] hover:text-black"
                >
                  <Icon size={16} /> {label}
                </a>
              ))}
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.04] p-7">
            <div className="grid h-16 w-16 place-items-center bg-[#ff6a00] text-black">
              <Mail size={28} />
            </div>
            <h3 className="mt-8 font-display text-5xl text-white">Quick Contact</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Reach out for product builds, UX case studies, project management work, or portfolio collaborations.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="cur-grow mt-7 inline-flex max-w-full items-center gap-3 rounded-full bg-[#ff6a00] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:scale-[1.03]"
            >
              <Mail size={17} /> <span className="break-all">{profile.email}</span>
            </a>
            <a
              href="#projects"
              className="cur-grow mt-4 inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-[#ff6a00] hover:text-[#ff6a00]"
            >
              <FileText size={17} /> See Projects
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-4xl tracking-[0.08em] text-white">{profile.name}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/40">
              A cinematic personal portfolio built around scroll choreography, product storytelling, and an orange-black visual identity.
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#ff6a00]">Chapters</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/50">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="transition hover:text-[#ff6a00]">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#ff6a00]">Status</p>
            <p className="mt-5 text-sm leading-relaxed text-white/45">
              Copyright 2026 {profile.name}. Built with React, Vite, Tailwind CSS, and Framer Motion.
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
      <ScrollIndicator />
      <Header />
      <Hero />
      <About />
      <LifeJourney />
      <FloatingProjects />
      <ProjectProcess />
      <Contact />
    </div>
  );
}
