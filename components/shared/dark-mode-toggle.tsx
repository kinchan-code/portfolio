"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { flushSync } from "react-dom";

import { useTheme } from "@/hooks/use-theme";

import { Abbr } from "@/components/shared/abbr";
import { Button } from "@/components/ui/button";

import type { MouseEvent } from "react";

type Theme = "dark" | "light";

const THEME_TRANSITION_CLASS = "theme-transition";
const THEME_REVEAL_DURATION_MS = 600;
const THEME_REVEAL_EASING = "cubic-bezier(0.65, 0, 0.35, 1)";

function subscribe() {
  return () => undefined;
}

function useIsClient() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

function getThemeToggleCopy(isDark: boolean) {
  if (isDark) {
    return {
      label: "Switch to light mode",
      title: "Switch to Light Mode",
    };
  }

  return {
    label: "Switch to dark mode",
    title: "Switch to Dark Mode",
  };
}

function applyThemeClass(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
}

function revealTheme(
  event: MouseEvent<HTMLButtonElement>,
  nextTheme: Theme,
  setTheme: (theme: Theme) => void
) {
  const prefersReducedMotion = globalThis.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!document.startViewTransition || prefersReducedMotion) {
    setTheme(nextTheme);
    return;
  }

  const rect = event.currentTarget.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const radius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  );

  const root = document.documentElement;
  root.classList.add(THEME_TRANSITION_CLASS);

  const transition = document.startViewTransition(() => {
    flushSync(() => setTheme(nextTheme));
    applyThemeClass(nextTheme);
  });

  const cleanup = () => root.classList.remove(THEME_TRANSITION_CLASS);

  const animateReveal = () => {
    root.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${radius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: THEME_REVEAL_DURATION_MS,
        easing: THEME_REVEAL_EASING,
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  transition.ready.then(animateReveal, cleanup);
  transition.finished.then(cleanup, cleanup);
}

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const isClient = useIsClient();
  const isDark = theme === "dark";
  const { label, title } = isClient
    ? getThemeToggleCopy(isDark)
    : { label: "Toggle color mode", title: "Toggle color mode" };

  let icon = <span className="size-6" aria-hidden />;
  if (isClient) {
    icon = isDark ? <Sun /> : <Moon />;
  }

  return (
    <div className="flex items-center space-x-2">
      <Abbr title={title}>
        <Button
          variant="outline"
          size="icon"
          aria-label={label}
          onClick={(event) =>
            revealTheme(event, isDark ? "light" : "dark", setTheme)
          }
        >
          {icon}
        </Button>
      </Abbr>
    </div>
  );
}
