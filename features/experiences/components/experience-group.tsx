import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { TechBadges } from "@/components/shared";

import type {
  ExperienceGroupProps,
  ExperienceRole,
} from "@/features/experiences/types/experience.types";

const companyClassName =
  "inline-flex items-center gap-2 text-left font-semibold";

function CompanyHeading({
  company,
  path,
}: Readonly<{ company?: string; path?: string }>) {
  if (!path) {
    return <h3 className={companyClassName}>{company}</h3>;
  }

  return (
    <a
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(companyClassName, "hover:text-brand")}
    >
      <span>{company}</span>
      <ArrowUpRight className="size-4 opacity-60 transition-opacity motion-safe:group-hover:opacity-100" />
    </a>
  );
}

function RoleItem({
  role,
  isLast,
}: Readonly<{ role: ExperienceRole; isLast: boolean }>) {
  return (
    <li className="relative flex flex-col gap-1.5 pl-6">
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-1.5 left-0 size-2.5 rounded-full ring-4 ring-background group-hover:ring-accent",
          role.date.endsWith("Present") ? "bg-brand" : "bg-muted-foreground/60"
        )}
      />
      {isLast ? null : (
        <span
          aria-hidden="true"
          className="absolute top-5 -bottom-5 left-[4.5px] w-px bg-border"
        />
      )}
      <h4 className="text-sm font-semibold">{role.title}</h4>
      <p className="text-xs font-bold uppercase text-muted-foreground">
        {role.date}
      </p>
      <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
        {role.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </li>
  );
}

export function ExperienceGroup({ entry }: Readonly<ExperienceGroupProps>) {
  return (
    <article className="group flex w-full flex-col gap-3 rounded-xl p-3 transition-colors hover:bg-accent lg:flex-row lg:gap-6 lg:p-4 lg:px-6">
      <div className="w-full lg:w-1/4">
        <p className="pt-1 text-xs font-bold uppercase text-muted-foreground">
          {entry.date}
        </p>
      </div>
      <div className="flex w-full flex-col gap-4 lg:w-3/4">
        <CompanyHeading company={entry.company} path={entry.path} />
        <ol className="flex flex-col gap-5">
          {entry.roles.map((role, index) => (
            <RoleItem
              key={`${role.title}-${role.date}`}
              role={role}
              isLast={index === entry.roles.length - 1}
            />
          ))}
        </ol>
        {entry.technologies?.length ? (
          <TechBadges technologies={entry.technologies} />
        ) : null}
      </div>
    </article>
  );
}
