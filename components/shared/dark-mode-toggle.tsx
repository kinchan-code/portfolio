"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

import { useTheme } from "@/hooks/use-theme";

import { Abbr } from "@/components/shared/abbr";
import { Button } from "@/components/ui/button";

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
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {icon}
        </Button>
      </Abbr>
    </div>
  );
}
