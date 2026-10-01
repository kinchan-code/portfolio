import { Link as LinkIcon } from "lucide-react";

import type { ArchiveProjectRow } from "@/lib/data/projects";

interface ArchiveLinksProps {
  links: ArchiveProjectRow["links"];
}

export function ArchiveLinks({ links }: Readonly<ArchiveLinksProps>) {
  if (!links?.length) return null;

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {links.map((link) => (
        <a
          href={link.path}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold hover:underline"
          key={link.path}
        >
          <LinkIcon className="size-4" />
          {link.name}
        </a>
      ))}
    </div>
  );
}
