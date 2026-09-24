"use client";

import dynamic from "next/dynamic";

const DarkModeToggle = dynamic(
  () =>
    import("@/components/shared/dark-mode-toggle").then(
      (mod) => mod.DarkModeToggle
    ),
  {
    ssr: false,
    loading: () => <span className="size-9 shrink-0" aria-hidden />,
  }
);

export function DeferredThemeToggle() {
  return <DarkModeToggle />;
}
