import type { StaticImageData } from "next/image";

import braendz from "@/public/braendz.jpeg";
import cascadiaLabs from "@/public/cascadia-labs.jpeg";
import geoadsMap from "@/public/geoads.jpeg";
import justHolistics from "@/public/just-holistics.jpeg";

import type { CardInfo } from "@/components/shared/card.types";

interface ProjectLink {
  name: string;
  path: string;
}

interface ProjectTechnology {
  name: string;
}

/** Canonical project record shared by homepage cards and the archive table. */
interface ProjectRecord {
  title: string;
  year: string;
  madeAt: string;
  technologies: ProjectTechnology[];
  date?: string;
  description?: string;
  path?: string;
  images?: StaticImageData[];
  links?: ProjectLink[];
  featured?: boolean;
}

export interface ArchiveProjectRow {
  year: string;
  project: string;
  madeAt: string;
  technologies?: ProjectTechnology[];
  links?: ProjectLink[];
}

export const ARCHIVE_PROJECT_HEADERS = [
  "Year",
  "Project",
  "Made At",
  "Technologies",
  "Links",
] as const;

function toProjectCard(project: ProjectRecord): CardInfo {
  return {
    date: project.date,
    images: project.images,
    title: project.title,
    path: project.path,
    description: project.description,
    technologies: project.technologies,
  };
}

function toArchiveProjectRow(project: ProjectRecord): ArchiveProjectRow {
  return {
    year: project.year,
    project: project.title,
    madeAt: project.madeAt,
    technologies: project.technologies,
    links: project.links,
  };
}

/**
 * Single source of truth for all projects.
 * Homepage featured cards and the archive table both derive from this list.
 */
const projectRecords: ProjectRecord[] = [
  {
    title: "Braendz",
    year: "2026",
    date: "Mar 2026 - Present",
    madeAt: "MNA Ventures FZCO",
    path: "https://www.braendz.com/",
    images: [braendz],
    featured: true,
    description:
      "A modern trademark protection platform and smart brand assistant that guides founders and legal teams through brand research, clearance, and continuous monitoring.",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "Playwright" },
      { name: "Microsoft Azure" },
      { name: ".NET" },
      { name: "MSSQL" },
    ],
    links: [
      {
        name: "braendz.com",
        path: "https://www.braendz.com/",
      },
    ],
  },
  {
    title: "Cascadia Labs",
    year: "2026",
    date: "Feb 2026 - Mar 2026",
    madeAt: "Freelance",
    path: "https://cascadialabs.co/",
    images: [cascadiaLabs],
    featured: true,
    description:
      "A professional peptide marketplace platform for selling rigorously tested peptides exclusively to licensed physicians.",
    technologies: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "Nest.js" },
      { name: "Tailwind CSS" },
      { name: "Zustand" },
      { name: "React Query" },
      { name: "React Hook Form" },
      { name: "React Router" },
      { name: "Axios" },
    ],
    links: [
      {
        name: "cascadialabs.co",
        path: "https://cascadialabs.co/",
      },
    ],
  },
  {
    title: "GeoAds Map Visualizer",
    year: "2026",
    date: "Jan 2026",
    madeAt: "Optimas Solutions LLC",
    path: "https://www.geoadsmap.com/",
    images: [geoadsMap],
    featured: true,
    description:
      "An interactive map visualizer for GeoAds, a real-time location-based advertising platform. It lets teams see where ads run and how they land in the surrounding area.",
    technologies: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "Mapbox" },
      { name: "Nest.js" },
      { name: "Tailwind CSS" },
      { name: "Zustand" },
      { name: "React Query" },
      { name: "React Hook Form" },
      { name: "React Router" },
      { name: "Axios" },
    ],
    links: [
      {
        name: "geoads-map-visualizer",
        path: "https://www.geoadsmap.com/",
      },
    ],
  },
  {
    title: "Just Holistics",
    year: "2025",
    date: "Jul 2025 - Aug 2025",
    madeAt: "Optimas Solutions LLC",
    path: "https://justholistics.com/",
    images: [justHolistics],
    featured: true,
    description:
      "A community-driven health intelligence platform that brings together practitioners, shared protocols, and lived experience across holistic and integrative health disciplines.",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Shadcn UI" },
      { name: "React Query" },
      { name: "Zustand" },
      { name: "Axios" },
      { name: "Laravel" },
      { name: "Typesense" },
      { name: "MySQL" },
    ],
    links: [
      {
        name: "justholistics.com",
        path: "https://justholistics.com/",
      },
    ],
  },
  {
    title: "Discussion Platform",
    year: "2025",
    madeAt: "Personal Project",
    technologies: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Shadcn UI" },
      { name: "React Query" },
      { name: "Axios" },
      { name: "Zustand" },
    ],
    links: [
      {
        name: "discussion-platform",
        path: "https://discussion-platform-seven.vercel.app/",
      },
    ],
  },
  {
    title: "Discussion Platform API",
    year: "2025",
    madeAt: "Personal Project",
    technologies: [
      { name: "Laravel" },
      { name: "Typesense" },
      { name: "MySQL" },
    ],
    links: [
      {
        name: "discussion-platform-api",
        path: "https://github.com/Kinchan-code/discussion-platform-api",
      },
    ],
  },
  {
    title: "Pasig Queuing Management System",
    year: "2025",
    madeAt: "Dreamforge",
    technologies: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Mantine" },
      { name: "React Query" },
      { name: "Axios" },
      { name: "Git" },
      { name: "MySQL" },
      { name: "Context API" },
      { name: "API Integration" },
      { name: "Unit Testing" },
      { name: "PWA" },
    ],
  },
  {
    title: "DSWD: Project Resolve",
    year: "2024",
    madeAt: "Dreamforge",
    technologies: [
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
      { name: "Git" },
      { name: "MySQL" },
      { name: "Zustand" },
      { name: "API Integration" },
      { name: "Unit Testing" },
      { name: "PWA" },
    ],
  },
  {
    title: "OMMS",
    year: "2023",
    madeAt: "Freelance",
    technologies: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
      { name: "Zustand" },
      { name: "MySQL" },
      { name: "API Integration" },
      { name: "Unit Testing" },
      { name: "PWA" },
    ],
  },
  {
    title: "Haribon E-Wall",
    year: "2023",
    madeAt: "Pamantasan ng Lungsod ng Maynila",
    technologies: [
      { name: "React.js" },
      { name: "Mantine" },
      { name: "Firebase" },
    ],
    links: [
      {
        name: "haribon-e-wall.web.app",
        path: "https://haribon-e-wall.web.app/",
      },
    ],
  },
  {
    title: "InternConnect: ORASAN",
    year: "2023",
    madeAt: "Gothong Southern Shipping Lines Inc.",
    technologies: [
      { name: "React.js" },
      { name: "Mantine" },
      { name: "Firebase" },
      { name: "Axios" },
    ],
  },
  {
    title: "MAPA",
    year: "2023",
    madeAt: "Gothong Southern Shipping Lines Inc.",
    technologies: [
      { name: "React.js" },
      { name: "Mantine" },
      { name: "Firebase" },
      { name: "Axios" },
      { name: "Leaflet" },
    ],
  },
];

export const featuredProjects: CardInfo[] = projectRecords
  .filter((project) => project.featured)
  .map(toProjectCard);

export const archiveProjectRows: ArchiveProjectRow[] =
  projectRecords.map(toArchiveProjectRow);
