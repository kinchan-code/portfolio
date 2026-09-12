"use client";

import { useEffect, useRef, useState } from "react";

import {
  readActiveSectionId,
  readSectionNavItems,
  readSectionNavOffsetPx,
  type SectionNavItem,
} from "@/lib/section-nav";
import { cn } from "@/lib/utils";

const CLICK_LOCK_FALLBACK_MS = 1000;

function lockUntilScrollSettles(ignoreScrollUntilRef: { current: number }) {
  ignoreScrollUntilRef.current = Date.now() + CLICK_LOCK_FALLBACK_MS;

  const release = () => {
    ignoreScrollUntilRef.current = 0;
    window.removeEventListener("scrollend", release);
  };

  window.addEventListener("scrollend", release, { once: true });
  window.setTimeout(release, CLICK_LOCK_FALLBACK_MS);
}

export function SectionNav() {
  const [sections, setSections] = useState<SectionNavItem[]>([]);
  const [activeId, setActiveId] = useState("");
  const ignoreScrollUntilRef = useRef(0);
  const sectionsRef = useRef<SectionNavItem[]>([]);

  useEffect(() => {
    sectionsRef.current = sections;
  }, [sections]);

  useEffect(() => {
    let frame = 0;
    let observer: IntersectionObserver | null = null;

    const publishActiveId = () => {
      if (Date.now() < ignoreScrollUntilRef.current) {
        return;
      }

      const currentSections = sectionsRef.current;
      if (currentSections.length === 0) {
        return;
      }

      const nextId = readActiveSectionId(currentSections);
      setActiveId((currentId) => (currentId === nextId ? currentId : nextId));
    };

    const schedulePublish = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(publishActiveId);
    };

    const observeSections = (nextSections: SectionNavItem[]) => {
      observer?.disconnect();

      if (nextSections.length === 0) {
        return;
      }

      const offsetPx = readSectionNavOffsetPx();
      observer = new IntersectionObserver(schedulePublish, {
        root: null,
        // Top band aligned with scroll-margin; bottom inset keeps one "active" lane.
        rootMargin: `-${offsetPx}px 0px -55% 0px`,
        threshold: [0, 0.25, 0.5, 1],
      });

      for (const section of nextSections) {
        const element = document.getElementById(section.id);
        if (element) {
          observer.observe(element);
        }
      }
    };

    const syncSections = () => {
      const nextSections = readSectionNavItems();
      sectionsRef.current = nextSections;
      setSections(nextSections);
      observeSections(nextSections);
      schedulePublish();
    };

    const onHashChange = () => {
      const hashId = window.location.hash.replace(/^#/, "");
      if (sectionsRef.current.some((section) => section.id === hashId)) {
        lockUntilScrollSettles(ignoreScrollUntilRef);
        setActiveId(hashId);
      }
      schedulePublish();
    };

    syncSections();

    window.addEventListener("scroll", schedulePublish, { passive: true });
    window.addEventListener("resize", syncSections, { passive: true });
    window.addEventListener("hashchange", onHashChange);

    const resizeObserver = new ResizeObserver(schedulePublish);
    resizeObserver.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedulePublish);
      window.removeEventListener("resize", syncSections);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  if (sections.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="On this page"
      className="fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="flex min-w-28 flex-col gap-1 rounded-xl border border-border/80 bg-background/85 p-2 shadow-sm backdrop-blur-sm">
        {sections.map((section) => {
          const isActive = activeId === section.id;

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "location" : undefined}
                onClick={(event) => {
                  event.preventDefault();

                  const element = document.getElementById(section.id);
                  if (!element) {
                    return;
                  }

                  lockUntilScrollSettles(ignoreScrollUntilRef);
                  setActiveId(section.id);
                  window.history.replaceState(null, "", `#${section.id}`);
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={cn(
                  "block rounded-md px-2.5 py-1.5 text-right text-xs font-semibold tracking-wide uppercase transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isActive
                    ? "bg-brand-soft text-brand"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
