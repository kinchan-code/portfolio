"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Badge, badgeVariants } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface TechBadgeItem {
  name: string;
}

interface TechBadgesProps {
  technologies: TechBadgeItem[];
  maxVisible?: number;
}

const DEFAULT_MAX_VISIBLE = 5;
const HOVER_CLOSE_DELAY_MS = 120;

const techBadgeShellClassName =
  "h-auto w-fit rounded-full border-border px-2.5 py-1";

function useCanHover() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return canHover;
}

function useHoverPopover() {
  const [open, setOpen] = useState(false);
  const canHover = useCanHover();
  const closeTimerRef = useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTimerRef.current === null) {
      return;
    }

    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = window.setTimeout(() => {
      setOpen(false);
    }, HOVER_CLOSE_DELAY_MS);
  };

  useEffect(() => cancelClose, []);

  const onMouseEnter = () => {
    if (!canHover) {
      return;
    }

    cancelClose();
    setOpen(true);
  };

  const onMouseLeave = () => {
    if (!canHover) {
      return;
    }

    scheduleClose();
  };

  return { open, setOpen, onMouseEnter, onMouseLeave };
}

function TechNameBadge({ name }: Readonly<{ name: string }>) {
  return (
    <Badge
      variant="outline"
      className={cn(
        techBadgeShellClassName,
        "border-transparent bg-brand-soft"
      )}
    >
      <span className="text-sm font-semibold text-brand">{name}</span>
    </Badge>
  );
}

function RemainingTechsList({ remaining }: Readonly<{ remaining: TechBadgeItem[] }>) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {remaining.map((tech) => (
        <TechNameBadge key={tech.name} name={tech.name} />
      ))}
    </div>
  );
}

function RemainingTechs({ remaining }: Readonly<{ remaining: TechBadgeItem[] }>) {
  const { open, setOpen, onMouseEnter, onMouseLeave } = useHoverPopover();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        type="button"
        aria-label={`Show ${remaining.length} more technologies`}
        className={cn(
          badgeVariants({ variant: "outline" }),
          techBadgeShellClassName,
          "cursor-pointer hover:bg-muted"
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span className="text-sm font-semibold text-muted-foreground">
          +{remaining.length}
        </span>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-auto max-w-xs gap-2 p-3 shadow-none"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <p className="text-xs font-medium text-muted-foreground">Also used</p>
        <RemainingTechsList remaining={remaining} />
      </PopoverContent>
    </Popover>
  );
}

export function TechBadges({
  technologies,
  maxVisible = DEFAULT_MAX_VISIBLE,
}: Readonly<TechBadgesProps>) {
  const visible = technologies.slice(0, maxVisible);
  const remaining = technologies.slice(maxVisible);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {visible.map((tech) => (
        <TechNameBadge key={tech.name} name={tech.name} />
      ))}
      {remaining.length > 0 ? (
        <RemainingTechs remaining={remaining} />
      ) : null}
    </div>
  );
}
