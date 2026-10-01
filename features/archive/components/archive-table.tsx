import { cn } from "@/lib/utils";

import { TechBadges } from "@/components/shared";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ArchiveLinks } from "@/features/archive/components/archive-links";

import type { ArchiveTableProps } from "@/features/archive/types/archive.types";

export function ArchiveTable({
  data,
  caption,
  headers,
}: Readonly<ArchiveTableProps>) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableCaption>{caption}</TableCaption>
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead
                key={header}
                className={cn(index === 2 && "hidden md:table-cell")}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={`${row.year}-${row.project}`}>
              <TableCell className="font-semibold text-muted-foreground">
                {row.year}
              </TableCell>
              <TableCell className="font-bold">{row.project}</TableCell>
              <TableCell className="hidden font-medium md:table-cell">
                {row.madeAt}
              </TableCell>
              <TableCell>
                {row.technologies?.length ? (
                  <TechBadges technologies={row.technologies} maxVisible={3} />
                ) : null}
              </TableCell>
              <TableCell>
                <ArchiveLinks links={row.links} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
