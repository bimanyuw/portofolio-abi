import { ExperienceItem, LensTheme } from "@/types/portfolio";

type Props = {
  items: ExperienceItem[];
  theme: LensTheme;
};

export default function ExperienceSection({ items, theme }: Props) {
  return (
    <section id="experience" className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
      <div className="mb-10 max-w-3xl">
        <p className={`mb-3 text-xs uppercase tracking-[0.38em] ${theme.softMuted}`}>
          Experience
        </p>
        <h2 className="text-3xl font-semibold md:text-5xl">
          Building range without losing direction.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className={`rounded-[2rem] border p-7 ${theme.cardStatic}`}
          >
            <p className={`text-sm ${theme.softMuted}`}>{item.period}</p>
            <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
            <p className={`mt-5 leading-8 ${theme.muted}`}>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}