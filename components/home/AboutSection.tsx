import { Lens, LensTheme } from "@/types/portofolio";

type Props = {
  lens: Lens;
  setLens: (value: Lens) => void;
  theme: LensTheme;
};

export default function AboutSection({ lens, setLens, theme }: Props) {
  const isIT = lens === "it";
  const isCreative = lens === "creative";

  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
      <div className="mb-10 max-w-3xl">
        <p className={`mb-3 text-xs uppercase tracking-[0.38em] ${theme.softMuted}`}>
          About
        </p>
        <h2 className="text-3xl font-semibold md:text-5xl">
          Get to know me through two lenses.
        </h2>
        <p className={`mt-5 text-lg leading-8 ${theme.muted}`}>
          I am building a portfolio that does not flatten everything into a single
          category. My work sits between technology and creativity, so this website
          is structured to show both sides with equal clarity.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <button
          type="button"
          onClick={() => setLens("it")}
          className={`rounded-[2rem] border p-8 text-left transition ${
            isIT
              ? "border-[#f59e0b]/45 bg-[#f59e0b]/10"
              : isCreative
              ? "border-black/10 bg-white/55 hover:bg-white/80"
              : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
          }`}
        >
          <p className={`text-xs uppercase tracking-[0.3em] ${theme.softMuted}`}>
            Lens 01
          </p>
          <h3 className="mt-4 text-2xl font-semibold">IT Side</h3>
          <p className={`mt-4 leading-8 ${theme.muted}`}>
            For projects related to web, systems, UI/UX, and structured digital
            problem solving.
          </p>
        </button>

        <button
          type="button"
          onClick={() => setLens("creative")}
          className={`rounded-[2rem] border p-8 text-left transition ${
            isCreative
              ? "border-black/15 bg-white/85"
              : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
          }`}
        >
          <p className={`text-xs uppercase tracking-[0.3em] ${theme.softMuted}`}>
            Lens 02
          </p>
          <h3 className="mt-4 text-2xl font-semibold">Creative Side</h3>
          <p className={`mt-4 leading-8 ${theme.muted}`}>
            For works related to documentation, videography, photography, and
            visual storytelling.
          </p>
        </button>
      </div>
    </section>
  );
}