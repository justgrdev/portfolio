import { SKILLS } from "../constants";

export default function Skills() {
	const allSkills = SKILLS.flatMap((cat) => cat.skills);
	const marqueeItems = [...allSkills, ...allSkills, ...allSkills];

	return (
		<section
			id="skills"
			className="py-20 border-y border-white/5 bg-surface/30 overflow-hidden"
		>
			<div className="max-w-7xl mx-auto px-6 mb-10 flex items-center justify-between">
				<span className="text-xs font-mono text-muted uppercase tracking-widest">
					Technical Arsenal
				</span>
				<span className="h-px flex-1 bg-white/10 mx-4"></span>
				<span className="text-xs font-mono text-muted uppercase tracking-widest">
					4+ Years
				</span>
			</div>

			<div className="relative flex w-full overflow-hidden">
				<div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10" />

				<div className="flex animate-marquee whitespace-nowrap gap-8 md:gap-16 py-4">
					{marqueeItems.map((skill, index) => (
						<div
							key={`${skill}-${index}`}
							className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-linear-to-b from-white/20 to-white/5 hover:from-white hover:to-white/80 transition-colors cursor-default duration-300"
						>
							{skill}
						</div>
					))}
				</div>

				<div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10" />
			</div>

			<div className="max-w-7xl mx-auto px-6 mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-500 font-mono">
				{SKILLS.map((cat) => (
					<div key={cat.name} className="border-t border-white/10 pt-4">
						<h4 className="text-white mb-2">{cat.name}</h4>
						<p className="leading-relaxed opacity-60">
							{cat.skills.slice(0, 4).join(", ")}...
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
