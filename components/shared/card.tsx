import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowUpRight, Link as LinkIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { TechBadges } from "@/components/shared/tech-badges";
import { Tilt } from "@/components/shared/tilt";

import type { CardInfo, CardProps } from "@/components/shared/card.types";

function cardTitle(info: CardInfo) {
  return [info.title, info.company].filter(Boolean).join(" • ");
}

function CardDate({
  date,
  className,
}: Readonly<{ date?: string; className?: string }>) {
  if (!date) {
    return null;
  }

  return (
    <p className={cn("text-xs font-bold uppercase text-muted-foreground", className)}>
      {date}
    </p>
  );
}

function CardTitle({ info }: Readonly<{ info: CardInfo }>) {
  const label = cardTitle(info);
  const titleClassName =
    "inline-flex items-center gap-2 text-left font-semibold";

  if (!info.path) {
    return <h3 className={titleClassName}>{label}</h3>;
  }

  return (
    <a
      href={info.path}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(titleClassName, "hover:text-brand")}
    >
      <span>{label}</span>
      <ArrowUpRight className="size-4 opacity-60 transition-opacity motion-safe:group-hover:opacity-100" />
    </a>
  );
}

function CardHighlights({ info }: Readonly<{ info: CardInfo }>) {
  if (info.highlights?.length) {
    return (
      <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
        {info.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <p className="text-sm font-medium text-muted-foreground">{info.description}</p>
  );
}

function CardLinks({ info }: Readonly<{ info: CardInfo }>) {
  if (!info.links?.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {info.links.map((link) => (
        <a
          key={link.path}
          href={link.path}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold hover:underline"
        >
          <LinkIcon className="size-4" />
          {link.name}
        </a>
      ))}
    </div>
  );
}

function CardBody({ info }: Readonly<{ info: CardInfo }>) {
  return (
    <>
      <CardTitle info={info} />
      <CardHighlights info={info} />
      <CardLinks info={info} />
      {info.technologies?.length ? (
        <TechBadges technologies={info.technologies} />
      ) : null}
    </>
  );
}

const projectMediaFrameClassName = cn(
  "relative block aspect-video overflow-hidden rounded-xl",
  "bg-muted/40 shadow-sm ring-1 ring-border/80",
  "motion-safe:transition-[box-shadow] motion-safe:duration-500",
  "motion-safe:group-hover:shadow-md"
);

function ProjectScreenshot({
  src,
  title,
}: Readonly<{ src: NonNullable<CardInfo["images"]>[number]; title?: string }>) {
  return (
    <Image
      src={src}
      alt={`${title ?? "Project"} screenshot`}
      fill
      sizes="(min-width: 768px) 45vw, 100vw"
      className="object-cover object-top motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-[1.05]"
    />
  );
}

function ProjectMediaFrame({
  path,
  children,
}: Readonly<{ path?: string; children: ReactNode }>) {
  if (path) {
    return (
      <a
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        className={projectMediaFrameClassName}
      >
        {children}
      </a>
    );
  }

  return <div className={projectMediaFrameClassName}>{children}</div>;
}

function ProjectMedia({ info }: Readonly<{ info: CardInfo }>) {
  const image = info.images?.[0];
  if (!image) {
    return null;
  }

  return (
    <Tilt>
      <ProjectMediaFrame path={info.path}>
        <ProjectScreenshot src={image} title={info.title} />
      </ProjectMediaFrame>
    </Tilt>
  );
}

function ProjectCard({ info }: Readonly<CardProps>) {
  return (
    <article className="group flex flex-col gap-4 rounded-xl p-3 transition-colors hover:bg-accent lg:p-4">
      <ProjectMedia info={info} />
      <div className="flex flex-col gap-2">
        <CardDate date={info.date} />
        <CardBody info={info} />
      </div>
    </article>
  );
}

function ExperienceCard({ info }: Readonly<CardProps>) {
  return (
    <article className="group flex w-full flex-col gap-3 rounded-xl p-3 transition-colors hover:bg-accent lg:flex-row lg:gap-6 lg:p-4 lg:px-6">
      <div className="w-full lg:w-1/4">
        <CardDate date={info.date} className="pt-1" />
      </div>
      <div className="flex w-full flex-col gap-2 lg:w-3/4">
        <CardBody info={info} />
      </div>
    </article>
  );
}

export function Card({ info }: Readonly<CardProps>) {
  if (info.images?.length) {
    return <ProjectCard info={info} />;
  }

  return <ExperienceCard info={info} />;
}
