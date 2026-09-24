import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

interface IntroductionProps {
  children?: ReactNode;
}

export function Introduction({ children }: Readonly<IntroductionProps>) {
  return (
    <article className="flex flex-col gap-2">
      <section className="py-20 lg:py-28">
        <div className="flex max-w-2xl flex-col gap-6">
          <div className="space-y-3">
            {siteConfig.availableForWork ? (
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/25 bg-brand-soft px-3 py-1 text-xs font-semibold tracking-wide text-brand uppercase">
                <span
                  className="size-1.5 shrink-0 rounded-full bg-brand"
                  aria-hidden
                />
                <span>Available for work</span>
              </p>
            ) : null}
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
              {siteConfig.name}
            </h1>
            <h2 className="text-base font-medium tracking-wide text-muted-foreground sm:text-lg">
              {siteConfig.jobTitle}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {siteConfig.intro}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/bangay-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "w-fit")}
            >
              Resume
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href={siteConfig.links.email}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-fit"
              )}
            >
              Email
            </a>
          </div>
          {children}
        </div>
      </section>
    </article>
  );
}
