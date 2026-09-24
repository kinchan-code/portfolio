import dynamic from "next/dynamic";

import { SECTION_NAV_ATTR } from "@/lib/section-nav";

import { AppFooter } from "@/components/layout";
import { HomeChrome, Reveal } from "@/components/shared";
import { About } from "@/features/about";
import { Contact } from "@/features/contact";
import { Education } from "@/features/education";
import { Experiences } from "@/features/experiences";
import { Introduction } from "@/features/introduction";
import { Socials } from "@/features/socials";

const Projects = dynamic(
  () => import("@/features/projects").then((mod) => mod.Projects),
  {
    loading: () => <div className="min-h-64" aria-hidden />,
  }
);

const sectionAnchorClassName = "scroll-mt-(--section-nav-offset) pb-16";

export default function Home() {
  return (
    <main
      id="main-content"
      className="min-h-screen max-w-screen px-6 lg:mx-32 lg:px-12"
    >
      <HomeChrome />
      <header className="w-full">
        <Introduction>
          <Socials />
        </Introduction>
      </header>
      <div className="flex justify-between scroll-smooth">
        <div className="flex h-full flex-col">
          {/* About is often on-screen on mobile — keep it painted for LCP. */}
          <div
            id="about"
            className={sectionAnchorClassName}
            {...{ [SECTION_NAV_ATTR]: "" }}
          >
            <About />
          </div>
          <Reveal
            id="experiences"
            sectionNav
            navLabel="Work"
            className="pb-16"
          >
            <Experiences />
          </Reveal>
          <Reveal id="projects" sectionNav className="pb-16">
            <Projects />
          </Reveal>
          <Reveal id="education" sectionNav className="pb-16">
            <Education />
          </Reveal>
          <Reveal id="contact" sectionNav className="pb-16">
            <Contact />
          </Reveal>
        </div>
      </div>
      <AppFooter />
    </main>
  );
}
