import type { ExperienceEntry } from "@/features/experiences/types/experience.types";

export const workExperience: ExperienceEntry[] = [
	{
		date: "Mar 2026 - Present",
		path: "https://agt-hub.com/",
		company: "AGT Hub Smart Solutions, Inc.",
		roles: [
			{
				title: "Full Stack Engineer",
				date: "Oct 2026 - Present",
				highlights: [
					"Build scalable apps with Next.js, TypeScript, and Tailwind CSS",
					"Integrate and extend .NET and Node.js REST APIs",
					"Own Azure deployments, CI/CD, and Playwright end-to-end coverage",
				],
			},
			{
				title: "Frontend Software Engineer",
				date: "Mar 2026 - Sep 2026",
				highlights: [
					"Built scalable UIs with Next.js, TypeScript, and Tailwind CSS",
					"Integrated frontend apps with .NET and Node.js REST APIs",
					"Managed Azure deployments, CI/CD, and Playwright test suites",
				],
			},
		],
		technologies: [
			{ name: "Next.js" },
			{ name: "TypeScript" },
			{ name: "Tailwind CSS" },
			{ name: ".NET" },
			{ name: "Node.js" },
			{ name: "Microsoft Azure" },
			{ name: "Playwright" },
			{ name: "MSSQL" },
		],
	},
	{
		date: "Aug 2025 - Mar 2026",
		title: "Full Stack Developer",
		path: "https://optimasolutions.io",
		company: "Optimas Solutions LLC",
		description:
			"Built end-to-end product features for a client CMS, from Next.js UI through Laravel APIs.",
		highlights: [
			"Developed a CMS supporting complex, content-driven workflows",
			"Built accessible Next.js and TypeScript interfaces with SASS",
			"Delivered Laravel REST APIs and OpenAI-powered product features",
		],
		links: [],
		technologies: [
			{ name: "Next.js" },
			{ name: "TypeScript" },
			{ name: "SASS" },
			{ name: "Laravel" },
			{ name: "PHP" },
			{ name: "MySQL" },
			{ name: "OpenAI API" },
		],
	},
	{
		date: "Jun 2024 - Aug 2025",
		title: "Frontend Software Engineer",
		path: "https://www.simplevia.com/",
		company: "Dreamforge Innovations Inc.",
		description:
			"Built responsive React and Next.js interfaces with a focus on API integration, performance, and reusable architecture.",
		highlights: [
			"Built responsive React and Next.js UIs with Tailwind CSS",
			"Integrated frontend apps with .NET, Laravel, and Node.js APIs",
			"Focused on performance, reusable components, and maintainable architecture",
		],
		links: [],
		technologies: [
			{ name: "React.js" },
			{ name: "Next.js" },
			{ name: "TypeScript" },
			{ name: "Tailwind CSS" },
			{ name: ".NET" },
			{ name: "Laravel" },
			{ name: "Node.js" },
		],
	},
	{
		date: "Jul 2023 - May 2024",
		title: "Frontend Developer",
		company: "Freelance",
		description:
			"Built an accounting and inventory web app with Next.js and Node.js APIs, focused on reusable UI and data-heavy screens.",
		highlights: [
			"Built an accounting and inventory app: stock, purchases, sales, invoicing, and reports",
			"Integrated the UI with Node.js APIs on search, filter, and pagination-heavy screens",
			"Focused on reusable components and performance on data-heavy views",
		],
		links: [],
		technologies: [
			{ name: "Next.js" },
			{ name: "React.js" },
			{ name: "TypeScript" },
			{ name: "Tailwind CSS" },
			{ name: "Node.js" },
		],
	},
];
