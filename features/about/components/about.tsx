import { siteConfig } from "@/lib/site";

import { SectionHeading } from "@/components/shared";

export function About() {
  return (
    <section
      aria-labelledby="about-heading"
      className="container flex flex-col gap-4"
    >
      <SectionHeading id="about-heading">About</SectionHeading>
      <p className="p-2 text-base lg:p-4 lg:px-6">{siteConfig.about}</p>
    </section>
  );
}
