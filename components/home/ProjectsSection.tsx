import { Camera, ChevronRight, FileImage, MonitorCog, Video } from "lucide-react";
import LensSwitch from "@/components/layout/LensSwitch";
import { Lens, LensTheme, Project } from "@/types/portfolio";

type Props = {
  lens: Lens;
  setLens: (value: Lens) => void;
  projects: Project[];
  theme: LensTheme;
};

export default function ProjectsSection({
  lens,
  setLens,
  projects,
  theme,
}: Props) {
  const isIT = lens === "it";
  const isCreative = lens === "creative";

  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className={`mb-3 text-xs uppercase tracking-[0.38em] ${theme.softMuted}`}>
            Projects
          </p>
          <h2 className="text-3xl font-semibold md:text-5xl">
            {isIT ? "System-oriented selected work." : "Visual and creative selected work."}
          </h2>
          <p className={`mt-5 text-lg leading-8 ${theme.muted}`}>
            {isIT
              ? "This side highlights work shaped by logic, interfaces, structure, and digital execution."
              : "This side highlights work shaped by visuals, narrative rhythm, atmosphere, and documentation."}
          </p>
        </div>

        <LensSwitch lens={lens} setLens={setLens} isCreative={isCreative} />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={`${lens}-${project.title}`}
            className={`group rounded-[2rem] border p-6 transition hover:-translate-y-1 ${theme.cardClass}`}
          >
            <div className="flex items-start justify-between gap-4">
              <span className={theme.softMuted}>{project.year}</span>

              <div
                className={`rounded-full border p-3 ${
                  isCreative ? "border-black/10 bg-black/[0.04]" : "border-white/10 bg-white/5"
                }`}
              >
                {isIT ? (
                  <MonitorCog className="h-5 w-5" />
                ) : index === 0 ? (
                  <FileImage className="h-5 w-5" />
                ) : index === 1 ? (
                  <Video className="h-5 w-5" />
                ) : (
                  <Camera className="h-5 w-5" />
                )}
              </div>
            </div>

            <h3 className="mt-8 text-2xl font-semibold">{project.title}</h3>
            <p className={`mt-4 leading-8 ${theme.muted}`}>{project.summary}</p>

            <div className="mt-8">
              <p className={`text-xs uppercase tracking-[0.25em] ${theme.softMuted}`}>Role</p>
              <p className="mt-2 text-sm">{project.role}</p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full border px-3 py-1 text-xs transition ${theme.chipClass}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between text-sm">
              <span className={theme.softMuted}>{project.accent}</span>
              <span className="inline-flex items-center gap-1 transition group-hover:translate-x-1">
                View more
                <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}