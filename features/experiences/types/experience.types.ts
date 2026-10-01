import type { CardInfo } from "@/components/shared";

export interface ExperienceRole {
  title: string;
  date: string;
  highlights: string[];
}

export interface ExperienceEntry extends CardInfo {
  roles?: ExperienceRole[];
}

export interface ExperienceGroupProps {
  entry: ExperienceEntry & { roles: ExperienceRole[] };
}
