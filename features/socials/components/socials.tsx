"use client";

import { Dot } from "lucide-react";

import { cn } from "@/lib/utils";

import { Abbr, DarkModeToggle } from "@/components/shared";
import { buttonVariants } from "@/components/ui";

import { socialMedia } from "@/features/socials/data/social-media";

export function Socials() {
  return (
    <section className="flex flex-row items-center gap-4">
      {socialMedia.map((social) => {
        const isMailLink = social.link.startsWith("mailto:");

        return (
          <Abbr title={social.name} key={social.name}>
            <a
              href={social.link}
              target={isMailLink ? undefined : "_blank"}
              rel={isMailLink ? undefined : "noopener noreferrer"}
              aria-label={social.name}
              className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >
              {social.icon}
            </a>
          </Abbr>
        );
      })}
      <Dot className="text-muted-foreground" />
      <DarkModeToggle />
    </section>
  );
}
