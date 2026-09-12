import { Card, SectionHeading } from "@/components/shared";

import { workExperience } from "@/features/experiences/data/work-experience";

export function Experiences() {
  return (
    <section
      aria-labelledby="work-experience-heading"
      className="container flex flex-col gap-4"
    >
      <SectionHeading id="work-experience-heading">
        Work Experience
      </SectionHeading>
      <div className="flex flex-col">
        {workExperience.map((info) => (
          <Card
            info={info}
            key={`${info.company}-${info.title}-${info.date}`}
          />
        ))}
      </div>
    </section>
  );
}
