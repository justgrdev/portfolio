import type { ExperienceItem, ProjectItem, SkillCategory } from "./types";

export const EXPERIENCES: ExperienceItem[] = [
	{
		id: "macan-dev",
		role: "Software Developer (Sole Architect)",
		company: "Macan Sports",
		period: "2020 – Present",
		location: "Montecristi, Dominican Republic",
		description: [
			"Designed and developed a complete lottery and betting management system from scratch, serving multiple branches as the sole developer.",
			"Migrated some queries from Prisma ORM to Kysely, reducing complex query response times from 1m36s to 10s (≈90% reduction).",
			"Architected a secure authentication system with role-based access control and session management.",
			"Managed the complete DevOps pipeline, migrating infrastructure from Fly.io to DigitalOcean, and currently maintaining production on Hetzner.",
			"Implemented real-time communication using WebSockets for live updates across all branches.",
			"Developed a native Android mobile application using React Native for agents and field operations.",
		],
		tech: [
			"Node.js",
			"TypeScript",
			"PostgreSQL",
			"React",
			"Remix",
			"Docker",
			"Linux",
		],
	},
	{
		id: "macan-sales",
		role: "Sales Agent",
		company: "Macan Sports",
		period: "2018 – 2020",
		location: "Montecristi, Dominican Republic",
		description: [
			"Managed daily sales operations for lottery and betting services.",
			"Identified critical operational inefficiencies that directly led to the proposal and development of the current custom management system.",
		],
		tech: ["Operations", "Customer Service", "Problem Solving"],
	},
];

export const PROJECTS: ProjectItem[] = [
	{
		id: "lottery-sys",
		title: "Enterprise Lottery Platform",
		subtitle: "Full Stack Production System",
		year: "2020 - Present",
		description:
			"A comprehensive business management ecosystem handling real-time ticket processing, automated scheduling with dynamic closures, and administrative analytics. Built with a mobile-first responsive design and self-managed VPS infrastructure.",
		tags: [
			"React",
			"Remix",
			"Node.js",
			"PostgreSQL",
			"WebSockets",
			"S3",
			"Hetzner",
		],
	},
	{
		id: "android-tv",
		title: "Android TV Multimedia App",
		subtitle: "Kotlin + Jetpack Compose",
		year: "2022",
		description:
			"Native Android TV application for streaming movies, series, and live TV. Migrated legacy Views to Jetpack Compose, focusing on performance for TV-specific hardware constraints and seamless remote control navigation.",
		tags: ["Kotlin", "Jetpack Compose", "Android TV", "Media Playback"],
	},
	{
		id: "driver-license",
		title: "Driver License Validator",
		subtitle: "Unity + C# Tool",
		year: "2018",
		description:
			"Interactive validation tool for US Clients to verify driver licenses against AAMVA standards. Implemented complex validation logic for multiple state-level ID formats.",
		tags: ["Unity", "C#", "AAMVA", "UI Systems"],
	},
];

export const SKILLS: SkillCategory[] = [
	{
		name: "Frontend",
		skills: [
			"React",
			"TypeScript",
			"TailwindCSS",
			"Remix",
			"Zustand",
			"WebSockets",
		],
	},
	{
		name: "Backend",
		skills: [
			"Node.js",
			"Express.js",
			"PostgreSQL",
			"RESTful APIs",
			"Real-time Systems",
		],
	},
	{
		name: "Mobile & Other",
		skills: [
			"React Native",
			"Kotlin",
			"Jetpack Compose",
			"Unity",
			"C#",
			"Python",
		],
	},
	{
		name: "DevOps",
		skills: [
			"Linux/Debian",
			"Nginx",
			"AWS S3",
			"Hetzner",
			"Docker",
			"DigitalOcean",
		],
	},
];

export const SOCIAL_LINKS = {
	email: "justgrdev@proton.me",
	linkedin: "https://linkedin.com/in/justgrdev",
	website: "https://justgr.dev",
	phone: "+1 (809) 397-0342",
};
