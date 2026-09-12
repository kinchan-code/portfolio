"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { projectFilterOptions } from "@/lib/site";
import { cn } from "@/lib/utils";

import { ProjectFilters, useProjectFilter } from "@/components/shared";
import { buttonVariants } from "@/components/ui";

import { ArchiveTable } from "@/features/archive/components/archive-table";
import { data, headers } from "@/features/archive/data/archive-data";

export function Archive() {
  const { filter, setFilter, filteredItems, filterOptions } = useProjectFilter(
    data,
    [...projectFilterOptions]
  );

  return (
    <main
      id="main-content"
      className="min-h-screen max-w-screen px-6 lg:mx-32 lg:px-12"
    >
      <section className="flex w-full flex-col gap-6 py-12">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "flex items-center gap-2 p-0 hover:bg-transparent"
            )}
          >
            <ArrowLeft className="size-4" />
            <span className="text-lg">Christian Bangay</span>
          </Link>
        </div>
        <h1 className="text-4xl font-bold">All Projects</h1>
        <ProjectFilters
          options={filterOptions}
          value={filter}
          onChange={setFilter}
        />
        <ArchiveTable data={filteredItems} headers={headers} />
      </section>
    </main>
  );
}
