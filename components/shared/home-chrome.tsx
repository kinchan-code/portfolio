"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ScrollProgress = dynamic(
  () =>
    import("@/components/shared/scroll-progress").then(
      (mod) => mod.ScrollProgress
    ),
  { ssr: false }
);

const SectionNav = dynamic(
  () =>
    import("@/components/shared/section-nav").then((mod) => mod.SectionNav),
  { ssr: false }
);

const ScrollToTop = dynamic(
  () =>
    import("@/components/shared/scroll-to-top").then((mod) => mod.ScrollToTop),
  { ssr: false }
);

function scheduleIdle(callback: () => void) {
  if (typeof window.requestIdleCallback === "function") {
    const id = window.requestIdleCallback(callback, { timeout: 1200 });
    return () => window.cancelIdleCallback(id);
  }

  const id = globalThis.setTimeout(callback, 200);
  return () => globalThis.clearTimeout(id);
}

/**
 * Non-critical homepage chrome — deferred so it does not compete with LCP.
 */
export function HomeChrome() {
  const [ready, setReady] = useState(false);

  useEffect(() => scheduleIdle(() => setReady(true)), []);

  if (!ready) {
    return null;
  }

  return (
    <>
      <ScrollProgress />
      <SectionNav />
      <ScrollToTop />
    </>
  );
}
