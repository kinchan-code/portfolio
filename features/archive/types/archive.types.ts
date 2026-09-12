interface ArchiveLink {
  name: string;
  path: string;
}

interface ArchiveTechnology {
  name: string;
}

interface ArchiveTableRow {
  year: string;
  project: string;
  madeAt: string;
  technologies?: ArchiveTechnology[];
  links?: ArchiveLink[];
}

export interface ArchiveTableProps {
  caption?: string;
  headers: string[];
  data: ArchiveTableRow[];
}
