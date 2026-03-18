"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Lens } from "@/types/portfolio";

type Props = {
  lens: Lens;
  frontImage: string;
  backImage: string;
};

export default function OverlapHeroImages({
  lens,
  frontImage,
  backImage,
}: Props) {
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