import { siteConfig } from "@/lib/site";

export function AppFooter() {
  return (
    <footer className="py-8 text-center text-xs text-muted-foreground sm:text-sm">
      <p>
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  );
}
