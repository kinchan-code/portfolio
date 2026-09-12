import type { ArchiveProjectRow } from "@/lib/data/projects";

export interface ArchiveTableProps {
  caption?: string;
  headers: string[];
  data: ArchiveProjectRow[];
}
