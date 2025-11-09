export type Lang = "es" | "en";

export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  education: EducationProps[];
  techStack: {
    frontend: TechStackProps[];
    backend: TechStackProps[];
  };
  projects: ProjectProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image?: string;
  linkPreview?: string;
  linkSource?: string;
  technologies: string[]; // Array de iconos en formato "collection:icon-name"
  inProgress?: boolean;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}

export interface TechStackProps {
  name: string;
  icon: string; // Formato: "collection:icon-name"
}

export interface EducationProps {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}
