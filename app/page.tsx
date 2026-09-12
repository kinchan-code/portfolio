import { AppFooter } from "@/components/layout";
import {
  Reveal,
  ScrollProgress,
  ScrollToTop,
  SectionNav,
} from "@/components/shared";
import { About } from "@/features/about";
import { Contact } from "@/features/contact";
import { Education } from "@/features/education";
import { Experiences } from "@/features/experiences";
import { Introduction } from "@/features/introduction";
import { Projects } from "@/features/projects";
import { Socials } from "@/features/socials";

export default function Home() {
  return (
    <main
      id="main-content"
      className="min-h-screen max-w-screen px-6 lg:mx-32 lg:px-12"
    >
      <ScrollProgress />
      <SectionNav />
      <Reveal>
        <header className="w-full">
          <Introduction>
            <Socials />
          </Introduction>
        </header>
      </Reveal>
      <div className="flex justify-between scroll-smooth">
        <div className="flex h-full flex-col">
          <Reveal id="about" sectionNav className="pb-16">
            <About />
          </Reveal>
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
      <ScrollToTop />
      <AppFooter />
    </main>
  );
}
