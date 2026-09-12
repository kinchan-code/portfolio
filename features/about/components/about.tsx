import { SectionHeading } from "@/components/shared";

export function About() {
  return (
    <section
      aria-labelledby="about-heading"
      className="container flex flex-col gap-4"
    >
      <SectionHeading id="about-heading">About</SectionHeading>
      <p className="p-2 text-base lg:p-4 lg:px-6">
        I&apos;m a frontend engineer who likes shipping interfaces people can
        actually use. React and Next.js are home base. I&apos;ve worked on
        trademark protection products, location-based maps, and health
        platforms, and I&apos;m comfortable picking up APIs, databases, and
        Azure when a project needs it.
      </p>
    </section>
  );
}
