import { Card, SectionHeading } from "@/components/shared";

import { education } from "@/features/education/data/education";

export function Education() {
  return (
    <section
      aria-labelledby="education-heading"
      className="container flex flex-col gap-4"
    >
      <SectionHeading id="education-heading">Education</SectionHeading>
      <div className="flex flex-col">
        {education.map((info) => (
          <Card info={info} key={info.title || ""} />
        ))}
      </div>
    </section>
  );
}
