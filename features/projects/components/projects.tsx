"use client";

import Link from "next/link";
import { ViewTransition } from "react";
import { ArrowRight } from "lucide-react";

import { projectFilterOptions } from "@/lib/site";
import { cn } from "@/lib/utils";
import {
  NAV_FORWARD,
  filterItemTransition,
  projectsTitleTransition,
  toTransitionName,
} from "@/lib/view-transitions";

import {
  Card,
  ProjectFilters,
  SectionHeading,
  useProjectFilter,
} from "@/components/shared";
import { buttonVariants } from "@/components/ui/button";

import { projects } from "@/features/projects/data/projects";

export function Projects() {
  const { filter, setFilter, filteredItems, filterOptions } = useProjectFilter(
    projects,
    [...projectFilterOptions]
  );

  return (
    <section
      aria-labelledby="projects-heading"
      className="container flex flex-col gap-4"
    >
      <SectionHeading id="projects-heading">Projects</SectionHeading>
      <div className="lg:pl-6">
        <ProjectFilters
          options={filterOptions}
          value={filter}
          onChange={setFilter}
        />
      </div>
      {filteredItems.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {filteredItems.map((info) => (
            <ViewTransition
              key={info.title}
              name={toTransitionName("project", info.title ?? "")}
              {...filterItemTransition}
            >
              <div>
                <Card info={info} />
              </div>
            </ViewTransition>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground lg:pl-6">
          No projects match this filter yet.
        </p>
      )}
      <div className="flex justify-start lg:pl-6">
        <Link
          href="/archive"
          transitionTypes={[NAV_FORWARD]}
          className={cn(
            buttonVariants({ variant: "link" }),
            "flex items-center gap-2 p-0 text-sm"
          )}
        >
          <ViewTransition {...projectsTitleTransition}>
            <span className="text-lg font-bold">View All Projects</span>
          </ViewTransition>
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
