import { LensTheme } from "@/types/portfolio";

type Props = {
  theme: LensTheme;
};

export default function DirectionSection({ theme }: Props) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
      <div className={`rounded-[2rem] border p-8 md:p-10 ${theme.cardStatic}`}>
        <p className={`mb-3 text-xs uppercase tracking-[0.38em] ${theme.softMuted}`}>
          Direction
        </p>
        <h2 className="text-3xl font-semibold md:text-5xl">
          One identity, two working languages.
        </h2>
        <p className={`mt-5 max-w-4xl text-lg leading-8 ${theme.muted}`}>
          Technology shapes how I structure and solve. Creativity shapes how I
          communicate and present. This portfolio is designed to hold both without
          forcing either one to disappear.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className={`rounded-[1.5rem] border p-6 ${theme.cardStatic}`}>
            <p className={`text-xs uppercase tracking-[0.25em] ${theme.softMuted}`}>
              IT language
            </p>
            <p className="mt-3 text-lg">Interfaces, systems, logic, clarity</p>
          </div>

          <div className={`rounded-[1.5rem] border p-6 ${theme.cardStatic}`}>
            <p className={`text-xs uppercase tracking-[0.25em] ${theme.softMuted}`}>
              Creative language
            </p>
            <p className="mt-3 text-lg">Mood, visuals, movement, storytelling</p>
          </div>
        </div>
      </div>
    </section>
  );
}