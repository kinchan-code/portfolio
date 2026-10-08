"use client";

import Link from "next/link";
import { ViewTransition } from "react";
import { ArrowLeft } from "lucide-react";

import { projectFilterOptions, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import {
  NAV_BACK,
  filterItemTransition,
  projectsTitleTransition,
  siteNameTransition,
} from "@/lib/view-transitions";

import { ProjectFilters, useProjectFilter } from "@/components/shared";
import { buttonVariants } from "@/components/ui/button";

import { ArchiveList } from "@/features/archive/components/archive-list";
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
            transitionTypes={[NAV_BACK]}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "flex items-center gap-2 p-0 hover:bg-transparent"
            )}
          >
            <ArrowLeft className="size-4" />
            <ViewTransition {...siteNameTransition}>
              <span className="text-lg">{siteConfig.name}</span>
            </ViewTransition>
          </Link>
        </div>
        <ViewTransition {...projectsTitleTransition}>
          <h1 className="w-fit text-4xl font-bold">All Projects</h1>
        </ViewTransition>
        <ProjectFilters
          options={filterOptions}
          value={filter}
          onChange={setFilter}
        />
        <div className="sm:hidden">
          <ArchiveList data={filteredItems} />
        </div>
        <ViewTransition {...filterItemTransition}>
          <div className="hidden sm:block">
            <ArchiveTable data={filteredItems} headers={headers} />
          </div>
        </ViewTransition>
      </section>
    </main>
  );
}
