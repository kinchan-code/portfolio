const name = "Christian Bangay";
const jobTitle = "Frontend Software Engineer";
const email = "chanbangay@gmail.com";
const url = "https://christian-bangay.vercel.app";

export const siteConfig = {
  name,
  jobTitle,
  title: `${name} | ${jobTitle}`,
  description:
    "Frontend software engineer working with React and Next.js. Recent work spans trademark tools, map visualizers, and health platforms, with API, database, and Azure experience when needed.",
  intro:
    "I make web apps with React and Next.js. Lately I've been on trademark tools, map visualizers, and health platforms, and I jump into the API and Azure side when needed.",
  about:
    "I'm a frontend engineer who likes shipping interfaces people can actually use. React and Next.js are home base. I've worked on trademark protection products, location-based maps, and health platforms, and I'm comfortable picking up APIs, databases, and Azure when a project needs it.",
  url,
  locale: "en_US",
  email,
  availableForWork: false,
  ogImage: "/opengraph-image",
  keywords: [
    name,
    jobTitle,
    "Full Stack Developer",
    "React",
    "Next.js",
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
