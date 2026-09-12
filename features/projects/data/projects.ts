import braendz from "@/public/braendz.jpeg";
import cascadiaLabs from "@/public/cascadia-labs.jpeg";
import geoadsMap from "@/public/geoads.jpeg";
import justHolistics from "@/public/just-holistics.jpeg";

import type { CardInfo } from "@/components/shared/card.types";

export const projects: CardInfo[] = [
  {
    date: "Mar 2026 - Present",
    images: [braendz],
    title: "Braendz",
    path: "https://www.braendz.com/",
    description:
      "A modern trademark protection platform and smart brand assistant that guides founders and legal teams through brand research, clearance, and continuous monitoring.",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Playwright" },
      { name: "Microsoft Azure" },
      { name: ".NET" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "MSSQL" },
    ],
  },
  {
    date: "Feb 2026 - Mar 2026",
    images: [cascadiaLabs],
    title: "Cascadia Labs",
    path: "https://cascadialabs.co/",
    description:
      "A professional peptide marketplace platform for selling rigorously tested peptides exclusively to licensed physicians.",
    technologies: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "Nest.js" },
      { name: "Tailwind CSS" },
      { name: "React Query" },
      { name: "Zustand" },
    ],
  },
  {
    date: "Jan 2026",
    images: [geoadsMap],
    title: "GeoAds Map Visualizer",
    path: "https://www.geoadsmap.com/",
    description:
      "An interactive map visualizer for GeoAds, a real-time location-based advertising platform. It lets teams see where ads run and how they land in the surrounding area.",
    technologies: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "Mapbox" },
      { name: "Nest.js" },
      { name: "Tailwind CSS" },
      { name: "React Query" },
      { name: "Zustand" },
    ],
  },
  {
    date: "Jul 2025 - Aug 2025",
    images: [justHolistics],
    title: "Just Holistics",
    path: "https://justholistics.com/",
    description:
      "A community-driven health intelligence platform that brings together practitioners, shared protocols, and lived experience across holistic and integrative health disciplines.",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Typesense" },
      { name: "Laravel" },
      { name: "Shadcn UI" },
      { name: "MySQL" },
    ],
  },
];
