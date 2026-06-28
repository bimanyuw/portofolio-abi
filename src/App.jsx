import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Briefcase,
  BadgeCheck,
  Camera,
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

const cardHover = {
  y: -8,
  scale: 1.015,
  transition: { type: "spring", stiffness: 260, damping: 22 },
};

const heroPortraitFrame = {
  top: "-12vh",
  right: "-1vw",
  width: "43vw",
  height: "112vh",
  maxWidth: "610px",
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
  { label: "Mission", href: "#mission" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certificates", href: "#certificates" },
  { label: "Gallery", href: "#gallery" },
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

const educationItems = [
  {
    title: "Universitas Indonesia",
    meta: "Faculty of Computer Science",
    year: "Current",
    copy: "Information Systems student learning software engineering, databases, UX, business processes, and product-centered problem solving.",
  },
  {
    title: "Core Learning Focus",
    meta: "Systems, product, and interface",
    year: "Track",
    copy: "Building a foundation across web development, data, interaction design, product strategy, and collaborative project execution.",
  },
];

const skillGroups = [
  { title: "Development", items: ["React", "Django", "SQL", "Tailwind CSS", "Framer Motion"] },
  { title: "Design & Product", items: ["UX Research", "Figma", "Product Strategy", "Story Mapping"] },
  { title: "Execution", items: ["Project Management", "Presentation", "Case Study Writing", "Team Coordination"] },
];

const skillShowcases = [
  {
    title: "Development",
    label: "What I Build",
    tone: "skill-tone-dev",
    copy: <>I ship <strong>fullstack web apps</strong>, portfolio systems, and clean interfaces that actually work.</>,
    rows: [
      ["React", "Django", "SQL", "Tailwind", "Motion", "Vite"],
      ["Frontend", "Backend", "API", "Database", "Responsive", "Deploy"],
    ],
  },
  {
    title: "Design & Product",
    label: "What I Think",
    tone: "skill-tone-design",
    copy: <>I turn problems into <strong>clear flows</strong>, product stories, and interfaces people can understand fast.</>,
    rows: [
      ["Figma", "UX", "Research", "Strategy", "Journey", "Wireframe"],
      ["Testing", "Persona", "Story Map", "Prototype", "Design QA", "Pitch"],
    ],
  },
  {
    title: "Execution",
    label: "How I Move",
    tone: "skill-tone-execution",
    copy: <>I keep projects moving with <strong>structured planning</strong>, team communication, and presentation-ready delivery.</>,
    rows: [
      ["PM", "Timeline", "Sprint", "Docs", "Brief", "Review"],
      ["Team", "Deck", "Case Study", "Handoff", "Coordination", "Delivery"],
    ],
  },
];

const experienceItems = [
  {
    role: "Project Manager",
    place: "TSA UI",
    year: "Current",
    copy: "Coordinating timelines, team communication, stakeholder needs, and program delivery across campus initiatives.",
    seed: "orange-black-project-manager-campus-team",
  },
  {
    role: "Web and Product Builder",
    place: "Independent Projects",
    year: "2026",
    copy: "Designing and building portfolio-ready digital products, hackathon prototypes, dashboards, and UX case studies.",
    seed: "orange-black-web-product-builder-workspace",
  },
  {
    role: "Hackathon Product Contributor",
    place: "Product Competition",
    year: "2026",
    copy: "Exploring AI concepts, product strategy, interface flows, and pitch-ready storytelling for rapid prototype work.",
    seed: "orange-black-hackathon-product-team",
  },
  {
    role: "UX Case Study Writer",
    place: "Portfolio Projects",
    year: "2026",
    copy: "Turning research, process, and design decisions into clear case studies that explain both value and execution.",
    seed: "orange-black-ux-case-study-writing",
  },
  {
    role: "Frontend Developer",
    place: "React and Tailwind Builds",
    year: "2026",
    copy: "Building responsive interfaces with component-based structure, motion, and polished interaction details.",
    seed: "orange-black-frontend-development-interface",
  },
  {
    role: "Campus Organizer",
    place: "Team and Event Work",
    year: "2026",
    copy: "Supporting coordination, planning, communication, and documentation for collaborative campus activities.",
    seed: "orange-black-campus-organizer-event",
  },
];

const achievements = [
  "Built NUSALOKA as an AI product concept for regional food allocation planning.",
  "Developed tourism, ticketing, and portfolio projects with React, Django, and Tailwind CSS.",
  "Created product narratives that combine problem framing, interface design, and presentation delivery.",
];

const certificates = [
  { title: "Frontend Development", issuer: "Portfolio Learning Track", year: "2026" },
  { title: "UX Research and Product Thinking", issuer: "Self-directed Study", year: "2026" },
  { title: "Project Management Practice", issuer: "Campus Organization", year: "2026" },
];

const galleryItems = [
  { title: "Product Workspace", seed: "orange-black-product-workspace" },
  { title: "Hackathon Build", seed: "orange-black-hackathon-build" },
  { title: "UX Case Study", seed: "orange-black-ux-case-study" },
  { title: "Campus Project", seed: "orange-black-campus-project" },
  { title: "Portfolio Visual", seed: "orange-black-portfolio-visual" },
  { title: "Presentation Deck", seed: "orange-black-presentation-deck" },
];

const missionItems = [
  {
    step: "01",
    title: "Create Useful Products",
    copy: "Build digital work that solves real problems, feels clear to use, and gives people a better way to move through information.",
    points: ["Human-centered", "Practical value", "Clear outcomes"],
  },
  {
    step: "02",
    title: "Connect Design and Code",
    copy: "Bring interface design, frontend development, and product thinking together so ideas can become working experiences.",
    points: ["Interface clarity", "Frontend craft", "Product logic"],
  },
  {
    step: "03",
    title: "Tell Better Stories",
    copy: "Shape every project into a story people can understand: the problem, the process, the decision, and the value.",
    points: ["Case studies", "Visual narrative", "Presentation"],
  },
  {
    step: "04",
    title: "Keep Growing",
    copy: "Use every project, organization role, and competition as a way to sharpen technical skill, taste, and collaboration.",
    points: ["Learning mindset", "Teamwork", "Execution"],
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

function CursorGlow() {
  const reducedMotion = useReducedMotion();
  const mouseX = useMotionValue(-240);
  const mouseY = useMotionValue(-240);
  const x = useSpring(mouseX, { stiffness: 120, damping: 28, mass: 0.25 });
  const y = useSpring(mouseY, { stiffness: 120, damping: 28, mass: 0.25 });

  useEffect(() => {
    if (reducedMotion) return undefined;

    const onMove = (event) => {
      mouseX.set(event.clientX - 240);
      mouseY.set(event.clientY - 240);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[45] hidden h-[480px] w-[480px] rounded-full bg-[#ff6a00]/12 blur-[90px] mix-blend-screen lg:block"
      style={{ x, y }}
    />
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
          className={`liquid-nav mx-auto flex max-w-[1320px] items-center justify-between rounded-full border px-3 py-2 shadow-[0_24px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition duration-500 sm:px-4 ${
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

          <nav className="hidden items-center gap-0.5 rounded-full border border-white/10 bg-black/18 px-2 py-1 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-2.5 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/62 transition hover:bg-white/10 hover:text-white 2xl:px-3"
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
  const titleY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, -56]);
  const curtainOpacity = useTransform(scrollYProgress, [0.55, 1], [0, 1]);

  return (
    <section ref={ref} id="home" className="portfolio-landing relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-5 pb-12 pt-28 text-white sm:px-10 sm:pt-32">
      <div className="portfolio-texture absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,106,0,0.15),transparent_24%),radial-gradient(circle_at_82%_28%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(115deg,#030303_0%,#070707_48%,#0d0d0d_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

      <div className="absolute left-[27%] top-[27%] hidden h-20 w-20 rotate-12 border border-white/15 md:block" />
      <div className="relative z-10 mx-auto w-full max-w-[1296px] text-center">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.65 }}
          className="font-mono text-[10px] font-bold uppercase tracking-[0.34em] text-white/55"
        >
          {profile.name} / Website Portofolio
        </motion.p>
        <motion.div style={{ y: titleY }} className="mx-auto mt-5 max-w-[980px]">
          <h1 className="font-display text-[clamp(5.2rem,15vw,13rem)] leading-[0.74] tracking-[0.025em] text-white">
            PORTFOLIO
          </h1>
          <p className="-mt-4 font-script text-[clamp(3.4rem,8vw,7.8rem)] leading-none text-[#ff6a00] [text-shadow:0_0_38px_rgba(255,106,0,0.38)] sm:-mt-8">
            Abimanyu Wijanarko
          </p>
        </motion.div>
        <p className="mx-auto mt-6 max-w-xl text-sm font-medium leading-relaxed text-white/52 sm:text-base">
          "Building clear, bold digital work with a story behind every detail."
        </p>
      </div>

      <a
        href="#about"
        className="cur-grow group absolute bottom-6 right-5 z-20 inline-flex items-center gap-3 rounded-full bg-[#ff6a00] px-5 py-3.5 text-xs font-black uppercase tracking-[0.16em] text-black shadow-[0_0_40px_rgba(255,106,0,0.35)] transition hover:scale-105 sm:bottom-8 sm:right-8 sm:px-5 sm:py-3.5"
      >
        About Me
        <ArrowDown size={17} className="transition group-hover:translate-y-1" />
      </a>

      <motion.div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030303] to-transparent" style={{ opacity: curtainOpacity }} />
    </section>
  );
}

function About() {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [24, -24]);

  return (
    <section ref={ref} id="about" className="relative min-h-screen overflow-hidden bg-[#030303] px-5 py-24 text-white sm:px-10 lg:py-28">
      <div className="absolute inset-0 bg-[#030100]" />
      <div className="absolute inset-y-0 right-0 z-0 w-[66%] bg-[linear-gradient(90deg,rgba(3,1,0,0)_0%,rgba(99,38,0,0.58)_42%,rgba(255,106,0,0.68)_100%)]" />
      <motion.div
        style={{ y: portraitY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[64%] overflow-hidden lg:block"
      >
        <img
          src={heroPortrait}
          alt="Febrian Abimanyu portrait"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.18) 12%, rgba(0,0,0,0.78) 28%, #000 54%, #000 100%)",
            maskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.18) 12%, rgba(0,0,0,0.78) 28%, #000 54%, #000 100%)",
          }}
          className="absolute bottom-0 right-[4%] h-[104%] w-auto max-w-none object-contain opacity-76 saturate-110 contrast-105"
        />
      </motion.div>
      <div className="absolute inset-y-0 right-0 z-[1] w-[66%] bg-[#ff6a00]/10 mix-blend-color" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,#020202_0%,#020202_40%,rgba(2,2,2,0.9)_52%,rgba(2,2,2,0.34)_72%,rgba(2,2,2,0.62)_100%)]" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_74%_20%,rgba(255,106,0,0.16),transparent_30%),linear-gradient(0deg,#030303_0%,rgba(3,3,3,0.44)_14%,rgba(3,3,3,0.08)_48%,rgba(3,3,3,0.2)_100%)]" />
      <div className="absolute left-[64%] top-0 z-[2] hidden h-full w-px rotate-[-27deg] bg-white/[0.045] lg:block" />
      <div className="absolute right-[7%] top-[11%] z-[1] hidden h-20 w-1 rotate-[18deg] rounded-full bg-[#ffb21e]/42 shadow-[0_0_22px_rgba(255,106,0,0.38)] lg:block" />
      <div className="absolute right-[20%] top-[8%] z-[1] hidden h-20 w-1 rotate-[8deg] rounded-full bg-[#ffb21e]/42 shadow-[0_0_22px_rgba(255,106,0,0.38)] lg:block" />
      <div className="relative z-10 mx-auto grid min-h-[78vh] w-full max-w-[1440px] items-center gap-10 pt-20 lg:grid-cols-[0.6fr_0.4fr] lg:pt-24">
        <motion.div
          initial={{ y: 42, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[760px] pb-3"
        >
          <h2 className="font-display text-[clamp(4rem,8.5vw,9.1rem)] leading-[0.88] tracking-[0.01em] text-white">
            HELLO I AM
            <span className="-mt-2 block text-[#ff6500] sm:-mt-4">
              Abimanyu
            </span>
          </h2>
          <p className="mt-8 max-w-[620px] text-xl font-black uppercase leading-snug text-white sm:text-2xl">
            {profile.headline}
          </p>
          <p className="mt-5 max-w-[650px] text-base font-medium leading-relaxed text-white/72 sm:text-lg">
            {profile.shortBio}
          </p>
          <p className="mt-5 max-w-[650px] text-base font-medium leading-relaxed text-white/62 sm:text-lg">
            I enjoy working at the intersection of technology, design, and communication. For me, a good digital product is not only functional, but also easy to understand, visually confident, and meaningful for the people who use it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.72fr_0.58fr] lg:items-end">
      <motion.div
        initial={{ y: 34, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#ff6a00]">{eyebrow}</p>
        <h2 className="mt-4 font-display text-[clamp(4.3rem,9vw,8rem)] leading-[0.84] text-white">
          {title}
        </h2>
      </motion.div>
      {copy && (
        <motion.p
          initial={{ y: 28, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl text-lg leading-relaxed text-white/55"
        >
          {copy}
        </motion.p>
      )}
    </div>
  );
}

function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-[#070707] px-5 py-24 text-white sm:px-10 lg:py-32">
      <div className="cinema-grid absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Education"
          title={<>EDU<br />CATION</>}
          copy="Academic foundation and learning focus behind the way I design, build, and present digital products."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {educationItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ y: 36, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={cardHover}
              whileTap={{ scale: 0.99 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="border border-white/10 bg-white/[0.04] p-7 transition hover:border-[#ff6a00]/60 hover:bg-[#ff6a00]/[0.055]"
            >
              <div className="grid h-14 w-14 place-items-center bg-[#ff6a00] text-black">
                <GraduationCap size={26} />
              </div>
              <p className="mt-8 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff6a00]">
                {item.year} / {item.meta}
              </p>
              <h3 className="mt-4 font-display text-5xl leading-none text-white">{item.title}</h3>
              <p className="mt-5 text-sm leading-relaxed text-white/58">{item.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#020202] px-5 py-24 text-white sm:px-10 lg:min-h-screen lg:py-32">
      <div className="cinema-grid absolute inset-0 opacity-22" />
      <div className="pointer-events-none absolute right-0 top-10 h-[520px] w-[520px] bg-[#ff6a00]/10 blur-[130px]" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_0.7fr] lg:items-end lg:gap-16">
          <motion.div
            initial={{ y: 34, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.58em] text-[#ff6a00]">Skills</p>
            <h2 className="mt-5 font-display text-[clamp(5.6rem,11vw,10rem)] leading-[0.78] text-white">
              SKILL<br />SET
            </h2>
          </motion.div>
          <motion.p
            initial={{ y: 28, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl pb-3 text-xl font-semibold leading-relaxed text-white/52 lg:justify-self-end"
          >
            A practical mix of engineering, product thinking, interface design, and execution skills.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {skillShowcases.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ y: 36, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={cardHover}
              whileTap={{ scale: 0.99 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`skill-showcase-card ${group.tone} group overflow-hidden border border-white/12 bg-[#0d0d0d]/82`}
            >
              <div className="skill-marquee-panel border-b border-white/[0.07] px-5 py-6">
                {group.rows.map((row, rowIndex) => (
                  <div
                    key={`${group.title}-${rowIndex}`}
                    className={`skill-logo-row ${rowIndex % 2 === 1 ? "skill-logo-row-reverse" : ""}`}
                  >
                    <div className="skill-logo-track">
                      {[...row, ...row, ...row].map((item, itemIndex) => (
                        <span key={`${item}-${itemIndex}`} className="skill-logo-tile">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 sm:p-7">
                <div className="mb-7 flex items-start justify-between gap-5">
                  <h3 className="font-display text-[2.65rem] leading-none text-white sm:text-5xl">{group.title}</h3>
                  <Code2 className="mt-1 shrink-0 text-[#ff6a00]" size={25} />
                </div>
                <span className="inline-flex items-center gap-2 rounded-md border border-white/24 bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] font-bold text-white/78 shadow-[0_10px_22px_rgba(0,0,0,0.28)]">
                  <Code2 size={13} /> {group.label}
                </span>
                <p className="mt-5 text-lg leading-snug text-white/72">{group.copy}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {skillGroups[index].items.map((item) => (
                    <span key={item} className="rounded-full border border-white/70 px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-white/82">
                      {item}
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
    <section id="experience" className="relative overflow-hidden bg-[#070707] px-5 py-24 text-white sm:px-10 lg:py-32">
      <div className="relative mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Experience"
          title={<>EXPER<br />IENCE</>}
          copy="Roles and project contexts where I practice product delivery, communication, and hands-on implementation."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {experienceItems.map((item, index) => (
            <motion.article
              key={item.role}
              initial={{ y: 36, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={cardHover}
              whileTap={{ scale: 0.99 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden border border-white/10 bg-[#0d0d0d]/90 transition hover:border-[#ff6a00]/60 hover:bg-[#ff6a00]/[0.045]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.04]">
                <img
                  src={img(item.seed, 900, 560)}
                  alt={`${item.role} experience visual`}
                  className="h-full w-full object-cover opacity-74 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/8 to-transparent" />
                <div className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center bg-[#ff6a00] text-black">
                  <Briefcase size={20} />
                </div>
              </div>
              <div className="p-6">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff6a00]">
                  {item.year} / {item.place}
                </p>
                <h3 className="mt-4 font-display text-4xl leading-none text-white">{item.role}</h3>
                <p className="mt-5 text-sm leading-relaxed text-white/58">{item.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
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
                  whileHover={cardHover}
                  whileTap={{ scale: 0.99 }}
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
              whileHover={cardHover}
              whileTap={{ scale: 0.99 }}
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

function Mission() {
  return (
    <section id="mission" className="relative overflow-hidden bg-[#070707] px-5 py-24 text-white sm:px-10 lg:py-32">
      <div className="pointer-events-none absolute left-0 top-16 h-[520px] w-[520px] bg-[#ff6a00]/10 blur-[130px]" />
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#ff6a00]">Personal Mission</p>
            <h2 className="mt-4 font-display text-[5.6rem] leading-[0.82] text-white sm:text-[9rem]">
              MY<br /><span className="text-[#ff6a00]">MISSION</span>
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-white/55">
            A simple direction for the work I want to keep building: useful products, thoughtful interfaces,
            clear storytelling, and steady growth through real projects.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {missionItems.map((method, index) => (
            <motion.article
              key={method.title}
              initial={{ y: 36, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={cardHover}
              whileTap={{ scale: 0.99 }}
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

function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-[#030303] px-5 py-24 text-white sm:px-10 lg:py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-[520px] w-[520px] bg-[#ff6a00]/10 blur-[130px]" />
      <div className="relative mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Achievements"
          title={<>ACHIEVE<br />MENTS</>}
          copy="A short record of things I have built, shipped, practiced, and shaped into presentable work."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <motion.article
              key={item}
              initial={{ y: 36, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={cardHover}
              whileTap={{ scale: 0.99 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#ff6a00]/60 hover:bg-[#ff6a00]/[0.055]"
            >
              <div className="grid h-12 w-12 place-items-center bg-[#ff6a00] text-black">
                <Award size={23} />
              </div>
              <p className="mt-8 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff6a00]">
                Achievement {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-4 text-base font-bold leading-relaxed text-white/76">{item}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="relative overflow-hidden bg-[#070707] px-5 py-24 text-white sm:px-10 lg:py-32">
      <div className="cinema-grid absolute inset-0 opacity-18" />
      <div className="relative mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Certificates"
          title={<>CERTIFI<br />CATES</>}
          copy="A clean space for certificate records. These can be replaced with exact certificate names whenever you are ready."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {certificates.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ y: 36, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={cardHover}
              whileTap={{ scale: 0.99 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="border border-white/10 bg-[#0d0d0d]/90 p-6"
            >
              <BadgeCheck className="text-[#ff6a00]" size={28} />
              <h3 className="mt-8 font-display text-4xl leading-none text-white">{item.title}</h3>
              <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-white/45">
                {item.issuer} / {item.year}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-[#030303] px-5 py-24 text-white sm:px-10 lg:py-32">
      <div className="relative mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Gallery"
          title={<>VISUAL<br />GALLERY</>}
          copy="A visual archive for product work, campus activities, design exploration, and portfolio moments."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ y: 36, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={cardHover}
              whileTap={{ scale: 0.99 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden border border-white/10 bg-white/[0.04] ${
                index === 0 || index === 5 ? "md:col-span-2" : ""
              }`}
            >
              <img
                src={img(item.seed, 1000, 680)}
                alt={`${item.title} gallery visual`}
                className="h-72 w-full object-cover opacity-75 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/12 to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3">
                <Camera className="text-[#ff6a00]" size={20} />
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-white/80">
                  {item.title}
                </p>
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
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ block: "start", behavior: "auto" });
      }
    };

    window.history.scrollRestoration = "manual";
    const frame = window.requestAnimationFrame(scrollToHash);
    const timeout = window.setTimeout(scrollToHash, 250);

    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <div className="bg-[#050505] font-sans text-white">
      <CursorGlow />
      <ScrollIndicator />
      <Header />
      <Hero />
      <About />
      <Mission />
      <Education />
      <SkillsSection />
      <Experience />
      <FloatingProjects />
      <Achievements />
      <Certificates />
      <Gallery />
      <Contact />
    </div>
  );
}
