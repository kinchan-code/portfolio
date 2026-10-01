import { Card, SectionHeading } from "@/components/shared";

import { ExperienceGroup } from "@/features/experiences/components/experience-group";
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
        {workExperience.map(({ roles, ...info }) => {
          const key = `${info.company}-${info.date}`;

          return roles?.length ? (
            <ExperienceGroup key={key} entry={{ ...info, roles }} />
          ) : (
            <Card key={key} info={info} />
          );
        })}
      </div>
    </section>
  );
}
