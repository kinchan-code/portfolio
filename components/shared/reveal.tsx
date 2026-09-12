"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { SECTION_NAV_ATTR } from "@/lib/section-nav";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  /** Include this section in the calculated on-page nav. */
  sectionNav?: boolean;
  /** Optional short nav label; defaults to the section h2 text. */
  navLabel?: string;
}

function getRevealInitial(shouldReduceMotion: boolean | null) {
  if (shouldReduceMotion) {
    return false;
  }

  return { opacity: 1, y: 16 };
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
  delay = 0,
  id,
  sectionNav = false,
  navLabel,
}: Readonly<RevealProps>) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      className={cn(
        sectionNav && "scroll-mt-(--section-nav-offset)",
        className
      )}
      initial={getRevealInitial(shouldReduceMotion)}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      {...getRevealNavProps(sectionNav, navLabel)}
    >
      {children}
    </motion.div>
  );
}
