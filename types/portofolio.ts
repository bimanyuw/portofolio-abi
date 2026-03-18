export type Lens = "it" | "creative";

export type Project = {
  title: string;
  summary: string;
  year: string;
  role: string;
  tags: string[];
  accent: string;
};

export type ExperienceItem = {
  period: string;
  title: string;
  description: string;
};

export type LensTheme = {
  sectionLabel: string;
  heroTitleTop: string;
  heroTitleBottom: string;
  heroDescription: string;
  frontImage: string;
  backImage: string;

  pageClass: string;
  pageOverlay: string;
  leftGlow: string;

  navClass: string;
  brandTop: string;
  navLink: string;

  sectionEyebrow: string;
  subText: string;
  muted: string;
  softMuted: string;

  primaryButton: string;
  secondaryButton: string;

  chipClass: string;
  cardClass: string;
  cardStatic: string;
  contactPill: string;
  browsePill: string;
  ctaBg: string;
};