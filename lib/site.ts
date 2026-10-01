import "@/lib/modern-polyfill";

const name = "Christian Bangay";
const jobTitle = "Full Stack Engineer";
const email = "hello@kinchan.is-a.dev";
const url = "https://kinchan.is-a.dev";

export const siteConfig = {
  name,
  jobTitle,
  title: `${name} | ${jobTitle}`,
  description:
    "Full stack engineer working with Next.js, .NET, and Azure. Recent work spans trademark tools, map visualizers, and health platforms.",
  intro:
    "I build web apps with Next.js, .NET, and Azure. Lately I've been on trademark tools, map visualizers, and health platforms.",
  about:
    "I'm a full stack engineer who likes shipping interfaces people can actually use, then wiring them to the services behind them. Next.js, .NET, and Azure are my day-to-day stack. I've worked on trademark protection products, location-based maps, and health platforms.",
  url,
  locale: "en_US",
  email,
  availableForWork: false,
  ogImage: "/opengraph-image",
  keywords: [
    name,
    jobTitle,
    "Frontend Software Engineer",
    "React",
    "Next.js",
    ".NET",
    "Microsoft Azure",
    "TypeScript",
    "Portfolio",
    "Web Developer",
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/christian-bangay",
    github: "https://github.com/Kinchan-code",
    facebook: "https://www.facebook.com/kinchanqt",
    email: `mailto:${email}`,
  },
} as const;

export const projectFilterOptions = [
  { label: "All", value: "all" },
  { label: "Next.js", value: "Next.js" },
  { label: "React", value: "React.js" },
  { label: "TypeScript", value: "TypeScript" },
  { label: "Azure", value: "Microsoft Azure" },
  { label: "Mapbox", value: "Mapbox" },
] as const;
