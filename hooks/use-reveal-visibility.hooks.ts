"use client";

import { useEffect, useState, type RefObject } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-media-query.hooks";

function isCurrentlyOnScreen(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function revealWhenVisible(
  node: HTMLElement,
  setInView: (visible: boolean) => void
) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) {
        return;
      }

      setInView(true);
      observer.disconnect();
    },
    { threshold: 0.15 }
  );

  observer.observe(node);
  return () => observer.disconnect();
}

function watchOffscreenReveal(
  node: HTMLElement,
  setInView: (visible: boolean) => void
) {
  let stopWatching: (() => void) | undefined;

  const frame = requestAnimationFrame(() => {
    setInView(false);
    stopWatching = revealWhenVisible(node, setInView);
  });

  return () => {
    cancelAnimationFrame(frame);
    stopWatching?.();
  };
}

/**
 * Keeps content visible for SSR / first paint. Animates only sections that
 * start below the fold.
 */
export function useRevealVisibility(ref: RefObject<HTMLElement | null>) {
  const shouldReduceMotion = usePrefersReducedMotion();
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (shouldReduceMotion || !node || isCurrentlyOnScreen(node)) {
      return;
    }

    return watchOffscreenReveal(node, setInView);
  }, [ref, shouldReduceMotion]);

  return shouldReduceMotion || inView;
}
