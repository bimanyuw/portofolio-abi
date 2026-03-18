"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Lens, LensTheme } from "@/types/portfolio";
import OverlapHeroImages from "./OverlapHeroImages";

type Props = {
  lens: Lens;
  theme: LensTheme;
};

export default function HeroSection({ lens, theme }: Props) {
  const isIT = lens === "it";

  return (
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
  );
}