import { motion } from "framer-motion";
import { useState } from "react";
import { PROJECTS } from "../constants";

export default function Projects() {
	// TODO: Make something with the hoveredProject
	const [hoveredProject, setHoveredProject] = useState<string | null>(null);

	return (
		<section id="projects" className="py-32 bg-surface">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex items-end justify-between mb-20">
					<div>
						<h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
							Selected <br />
							<span className="text-slate-600">Works</span>
						</h2>
					</div>
					<div className="hidden md:block text-right">
						<p className="text-slate-400 max-w-xs text-sm mb-4">
							A showcase of technical depth, from full-stack enterprise systems
							to native mobile applications.
						</p>
						<a
							href="https://github.com/justgrdev/portfolio"
							className="text-white border-b border-white pb-1 hover:text-primary hover:border-primary transition-colors"
						>
							Visit GitHub
						</a>
					</div>
				</div>

				<div className="flex flex-col">
					{PROJECTS.map((project) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							onMouseEnter={() => setHoveredProject(project.id)}
							onMouseLeave={() => setHoveredProject(null)}
							className="group relative border-t border-white/10 py-12 md:py-16 transition-colors hover:bg-white/2"
						>
							<div className="grid md:grid-cols-12 gap-8 items-start">
								<div className="md:col-span-2 text-slate-500 font-mono text-sm">
									<span className="block">{project.year}</span>
									<span className="block mt-1 text-xs opacity-50">
										{project.tags[0]}
									</span>
								</div>

								<div className="md:col-span-5">
									<h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
										{project.title}
									</h3>
									<p className="text-lg text-slate-400 group-hover:text-white transition-colors">
										{project.subtitle}
									</p>
								</div>

								<div className="md:col-span-4 md:col-start-9">
									<p className="text-slate-400 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
										{project.tags.slice(1, 4).map((tag) => (
											<span
												key={tag}
												className="text-xs border border-white/10 px-2 py-1 rounded-md text-slate-300"
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
				<div className="border-t border-white/10" />
			</div>
		</section>
	);
}
