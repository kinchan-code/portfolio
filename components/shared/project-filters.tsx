"use client";

import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface ProjectFilterOption {
  label: string;
  value: string;
}

interface ProjectFiltersProps {
  options: ProjectFilterOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function ProjectFilters({
  options,
  value,
  onChange,
  className,
}: Readonly<ProjectFiltersProps>) {
  return (
    <fieldset
      aria-label="Filter projects by technology"
      className={cn("flex flex-wrap gap-2 border-0 p-0", className)}
    >
      <legend className="sr-only">Filter projects by technology</legend>
      {options.map((option) => {
        const isActive = value === option.value;

        return (
          <Button
            key={option.value}
            type="button"
            size="sm"
            variant={isActive ? "default" : "outline"}
            aria-pressed={isActive}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </Button>
        );
      })}
    </fieldset>
  );
}

export function useProjectFilter<T extends { technologies?: { name: string }[] }>(
  items: T[],
  options: ProjectFilterOption[],
  initialValue = "all"
) {
  const [filter, setFilter] = useState(initialValue);

  const filteredItems = useMemo(() => {
    if (filter === "all") {
      return items;
    }

    return items.filter((item) =>
      item.technologies?.some((tech) => tech.name === filter)
    );
  }, [filter, items]);

  const filterOptions = useMemo(() => {
    const available = new Set(
      items.flatMap(
        (item) => item.technologies?.map((tech) => tech.name) ?? []
      )
    );

    return options.filter(
      (option) => option.value === "all" || available.has(option.value)
    );
  }, [items, options]);

  return {
    filter,
    setFilter,
    filteredItems,
    filterOptions,
  };
}
