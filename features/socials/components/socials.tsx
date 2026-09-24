import { Dot } from "lucide-react";

import { cn } from "@/lib/utils";

import { DeferredThemeToggle } from "@/components/shared/deferred-theme-toggle";
import { buttonVariants } from "@/components/ui/button";

import { socialMedia } from "@/features/socials/data/social-media";

export function Socials() {
  return (
    <section className="flex flex-row items-center gap-4">
      {socialMedia.map((social) => {
        const isMailLink = social.link.startsWith("mailto:");

        return (
          <a
            key={social.name}
            href={social.link}
            title={social.name}
            target={isMailLink ? undefined : "_blank"}
            rel={isMailLink ? undefined : "noopener noreferrer"}
            aria-label={social.name}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
          >
            {social.icon}
          </a>
        );
      })}
      <Dot className="text-muted-foreground" aria-hidden />
      <DeferredThemeToggle />
    </section>
  );
}
