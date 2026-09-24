"use client";

import { useRef, type ReactNode } from "react";

import { useRevealVisibility } from "@/hooks/use-reveal-visibility.hooks";
import { SECTION_NAV_ATTR } from "@/lib/section-nav";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Include this section in the calculated on-page nav. */
  sectionNav?: boolean;
  /** Optional short nav label; defaults to the section h2 text. */
  navLabel?: string;
}

function getRevealNavProps(sectionNav: boolean, navLabel?: string) {
  const props: Record<string, string> = {};

  if (sectionNav) {
    props[SECTION_NAV_ATTR] = "";
  }

  if (navLabel) {
    props["data-nav-label"] = navLabel;
  }

  return props;
}

export function Reveal({
  children,
  className,
  id,
  sectionNav = false,
  navLabel,
}: Readonly<RevealProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useRevealVisibility(ref);

  return (
    <div
      ref={ref}
      id={id}
      className={cn(
        "motion-safe:transition-[opacity,transform] motion-safe:duration-450 motion-safe:ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        sectionNav && "scroll-mt-(--section-nav-offset)",
        className
      )}
      {...getRevealNavProps(sectionNav, navLabel)}
    >
      {children}
    </div>
  );
}
