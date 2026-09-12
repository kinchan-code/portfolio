import { cn } from "@/lib/utils";

interface SkipLinkProps {
  href?: string;
  className?: string;
}

export function SkipLink({
  href = "#main-content",
  className,
}: Readonly<SkipLinkProps>) {
  return (
    <a
      href={href}
      className={cn(
        "bg-primary text-primary-foreground focus-visible:ring-ring sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 focus-visible:z-100 focus-visible:rounded-md focus-visible:px-4 focus-visible:py-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        className
      )}
    >
      Skip to content
    </a>
  );
}
