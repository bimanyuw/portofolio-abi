"use client";

import { motion } from "framer-motion";
import { Lens } from "@/types/portofolio";

type Props = {
  lens: Lens;
  setLens: (value: Lens) => void;
  isCreative: boolean;
};

export default function LensSwitch({ lens, setLens, isCreative }: Props) {
  return (
    <div
      className={`relative grid w-[290px] grid-cols-2 rounded-full border p-[5px] ${
        isCreative
          ? "border-black/12 bg-white/80"
          : "border-white/15 bg-white/[0.06]"
      }`}
    >
      <motion.div
        animate={{ x: lens === "it" ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 420, damping: 34 }}
        className={`absolute left-[5px] top-[5px] h-[44px] w-[calc(50%-5px)] rounded-full ${
          lens === "it" ? "bg-[#f59e0b]" : "bg-black"
        }`}
      />

      <button
        type="button"
        onClick={() => setLens("it")}
        className={`relative z-10 flex h-[44px] items-center justify-center rounded-full px-4 text-sm font-medium transition ${
          lens === "it"
            ? "text-black"
            : isCreative
            ? "text-black/60"
            : "text-white/78"
        }`}
      >
        IT Side
      </button>

      <button
        type="button"
        onClick={() => setLens("creative")}
        className={`relative z-10 flex h-[44px] items-center justify-center rounded-full px-4 text-sm font-medium transition ${
          lens === "creative"
            ? "text-white"
            : isCreative
            ? "text-black/60"
            : "text-white/78"
        }`}
      >
        Creative Side
      </button>
    </div>
  );
}