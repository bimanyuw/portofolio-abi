"use client";

import Image from "next/image";

export default function ITHero() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        {/* TEXT */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#f98400] mb-4">
            IT Side
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Building systems <br />
            with <span className="text-[#f98400]">logic & code</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-md">
            Focused on web, systems, UI/UX, and structured digital problem solving.
          </p>

          <button className="mt-8 px-6 py-3 border border-[#f98400] text-[#f98400] hover:bg-[#f98400] hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,132,0,0.5)]">
            View Projects
          </button>
        </div>

        {/* IMAGE */}
        <div className="relative w-full h-[500px]">
          <Image
            src="/images/abi-orange.jpeg"
            alt="Abi"
            fill
            className="object-cover object-[center_56%] rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0D0D0D]/80 rounded-xl" />
        </div>

      </div>
    </section>
  );
}