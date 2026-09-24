import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

import { SectionHeading } from "@/components/shared";
import { buttonVariants } from "@/components/ui/button";

import { CopyEmailButton } from "@/features/contact/components/copy-email-button";

export function Contact() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="container flex flex-col gap-6 pt-8 pb-4"
    >
      <SectionHeading id="contact-heading">Contact</SectionHeading>
      <div className="flex max-w-xl flex-col gap-5 lg:px-6">
        <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Building web products end to end. If you want to work together, say
          hello.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={siteConfig.links.email}
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "w-fit text-base"
            )}
          >
            {siteConfig.email}
          </a>
          <CopyEmailButton email={siteConfig.email} />
        </div>
      </div>
    </section>
  );
}
