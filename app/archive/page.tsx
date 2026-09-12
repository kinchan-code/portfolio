import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

import { Archive } from "@/features/archive";

export const metadata: Metadata = {
  title: "All Projects",
  description: `Browse the full archive of projects by ${siteConfig.name}, including freelance and professional work across React, Next.js, and full stack development.`,
  alternates: {
    canonical: "/archive",
  },
  openGraph: {
    title: `All Projects | ${siteConfig.name}`,
    description: `Browse the full archive of projects by ${siteConfig.name} across React, Next.js, and full stack development.`,
    url: "/archive",
  },
};

export default function ArchivePage() {
  return <Archive />;
}
