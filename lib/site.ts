export const siteConfig = {
	name: "Christian Bangay",
	title: "Christian Bangay | Frontend Software Engineer",
	description:
		"Frontend software engineer working with React and Next.js. Recent work spans trademark tools, map visualizers, and health platforms, with API, database, and Azure experience when needed.",
	url: "https://christian-bangay.vercel.app",
	locale: "en_US",
	email: "chanbangay@gmail.com",
	availableForWork: false,
	ogImage: "/opengraph-image",
	keywords: [
		"Christian Bangay",
		"Frontend Software Engineer",
		"Full Stack Developer",
		"React",
		"Next.js",
		"TypeScript",
		"Portfolio",
		"Web Developer",
	],
	links: {
		linkedin: "https://www.linkedin.com/in/christian-bangay",
		email: "mailto:chanbangay@gmail.com",
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
