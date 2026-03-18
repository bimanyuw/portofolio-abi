import { Github, Instagram, Linkedin, Mail, Sparkles } from "lucide-react";
import { LensTheme } from "@/types/portfolio";

type Props = {
  theme: LensTheme;
};

export default function ContactSection({ theme }: Props) {
  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-4 pb-24 pt-20 md:px-8">
      <div className={`rounded-[2rem] border p-8 md:p-10 ${theme.cardStatic}`}>
        <p className={`mb-3 text-xs uppercase tracking-[0.38em] ${theme.softMuted}`}>
          Contact
        </p>
        <h2 className="text-3xl font-semibold md:text-5xl">
          Let&apos;s build something intentional.
        </h2>
        <p className={`mt-5 max-w-3xl text-lg leading-8 ${theme.muted}`}>
          Open for collaboration, project work, documentation needs, and
          conversations around design, systems, and creative execution.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:your@email.com"
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm transition ${theme.contactPill}`}
          >
            <Mail className="h-4 w-4" />
            Email
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm transition ${theme.contactPill}`}
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm transition ${theme.contactPill}`}
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm transition ${theme.contactPill}`}
          >
            <Instagram className="h-4 w-4" />
            Instagram
          </a>

          <a
            href="#projects"
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm transition ${theme.browsePill}`}
          >
            <Sparkles className="h-4 w-4" />
            Browse work
          </a>
        </div>
      </div>
    </section>
  );
}