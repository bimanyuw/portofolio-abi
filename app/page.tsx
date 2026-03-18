"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import DirectionSection from "@/components/home/DirectionSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import {
  creativeProjects,
  experience,
  itProjects,
  lensTheme,
} from "@/data/portfolioData";
import { Lens } from "@/types/portfolio";

export default function Home() {
  const [lens, setLens] = useState<Lens>("it");

  const isCreative = lens === "creative";
  const theme = lensTheme[lens];

  const currentProjects = useMemo(
    () => (lens === "it" ? itProjects : creativeProjects),
    [lens]
  );

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${theme.pageClass} ${
        lens === "it" ? "theme-it" : "theme-creative"
      }`}
    >
      <Navbar
        lens={lens}
        setLens={setLens}
        isCreative={isCreative}
      />

      <section className="relative overflow-hidden">
        <div
          className={`pointer-events-none absolute inset-0 transition-all duration-500 ${theme.pageOverlay}`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-[22rem] blur-2xl transition-all duration-500 ${theme.leftGlow}`}
        />

       <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 pb-16 pt-28 md:px-10 lg:px-12">
          <HeroSection lens={lens} theme={theme} />
        </div>
      </section>

      <AboutSection lens={lens} setLens={setLens} theme={theme} />
      <ProjectsSection
        lens={lens}
        setLens={setLens}
        projects={currentProjects}
        theme={theme}
      />
      <ExperienceSection items={experience} theme={theme} />
      <DirectionSection theme={theme} />
      <ContactSection theme={theme} />
    </main>
  );
}