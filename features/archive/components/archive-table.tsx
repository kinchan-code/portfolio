import { Link as LinkIcon } from "lucide-react";

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
                className={cn(
                  index === 2 && "hidden md:table-cell",
                  index === 4 && "hidden sm:table-cell"
                )}
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
              <TableCell className="hidden sm:table-cell">
                <div className="flex flex-wrap gap-2">
                  {row.links?.map((link) => (
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
