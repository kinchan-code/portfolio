import { ViewTransition } from "react";

import {
  filterItemTransition,
  toTransitionName,
} from "@/lib/view-transitions";

import { TechBadges } from "@/components/shared";

import { ArchiveLinks } from "@/features/archive/components/archive-links";

import type { ArchiveListProps } from "@/features/archive/types/archive.types";

export function ArchiveList({ data }: Readonly<ArchiveListProps>) {
  return (
    <ul className="divide-y border-y">
      {data.map((row) => (
        <ViewTransition
          key={`${row.year}-${row.project}`}
          name={toTransitionName("archive", `${row.year}-${row.project}`)}
          {...filterItemTransition}
        >
          <li className="flex flex-col gap-3 py-5">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-semibold text-muted-foreground">
                {row.year}
                {row.madeAt ? ` · ${row.madeAt}` : null}
              </p>
              <h2 className="text-base font-bold">{row.project}</h2>
            </div>
            {row.technologies?.length ? (
              <TechBadges technologies={row.technologies} maxVisible={3} />
            ) : null}
            <ArchiveLinks links={row.links} />
          </li>
        </ViewTransition>
      ))}
    </ul>
  );
}
