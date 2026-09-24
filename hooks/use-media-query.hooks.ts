"use client";

import { useSyncExternalStore } from "react";

function subscribeToMedia(query: string, onStoreChange: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

export function useMediaQuery(query: string, serverFallback = false) {
  return useSyncExternalStore(
    (onStoreChange) => subscribeToMedia(query, onStoreChange),
    () => window.matchMedia(query).matches,
    () => serverFallback
  );
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function usePrefersReducedMotion() {
  return useMediaQuery(REDUCED_MOTION_QUERY);
}
