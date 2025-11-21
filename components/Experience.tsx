import { Server } from "lucide-react";
import OptimizationChart from "@/components/OptimizationChart";
import { EXPERIENCES } from "../constants";

export default function Experience() {
	return (
		<section id="experience" className="py-32 relative">
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="text-sm font-mono text-primary mb-20 uppercase tracking-widest">
					Career History
				</h2>

				<div className="flex flex-col gap-24">
					{EXPERIENCES.map((exp, index) => (
						<div
							key={exp.id}
							className="grid lg:grid-cols-12 gap-8 lg:gap-12 group"
						>
							<div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
								<div className="flex flex-col gap-2">
									<span className="text-6xl font-display font-bold text-white/10 group-hover:text-white/20 transition-colors">
										0{index + 1}
									</span>
									<h3 className="text-2xl text-white font-bold">
										{exp.company}
									</h3>
									<p className="text-primary font-mono text-sm">{exp.period}</p>
									<p className="text-slate-500 text-sm">{exp.location}</p>
								</div>
							</div>

							<div className="lg:col-span-8">
								<div className="relative pl-8 border-l border-white/10 group-hover:border-primary/30 transition-colors duration-500 space-y-8">
									<div>
										<h4 className="text-xl text-white font-medium mb-2 flex items-center gap-2">
											{exp.role}
										</h4>
										<p className="text-slate-400 leading-relaxed">
											{exp.description[0]}
										</p>
									</div>

									<div className="grid md:grid-cols-2 gap-6">
										{exp.description.slice(1).map((desc, i) => (
											<div
												key={i}
												className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-white/10 transition-colors"
											>
												<p className="text-sm text-slate-300 leading-relaxed">
													{desc}
												</p>
											</div>
										))}
									</div>

									{exp.id === "macan-dev" && (
										<div className="mt-8 border border-white/10 rounded-xl p-6 bg-linear-to-br from-surface to-white/5">
											<div className="flex items-center gap-4 mb-6">
												<div className="p-2 bg-green-500/10 rounded-lg text-green-400">
													<Server size={20} />
												</div>
												<div>
													<h5 className="text-white font-bold text-sm">
														Key Achievement: Latency Reduction
													</h5>
													<p className="text-xs text-slate-400">
														Migration from Prisma to Kysely Query Builder
													</p>
												</div>
											</div>
											<OptimizationChart />
										</div>
									)}

									<div className="flex flex-wrap gap-2 pt-4">
										{exp.tech.map((t) => (
											<span
												key={t}
												className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-slate-400 border border-white/5 group-hover:border-primary/20 transition-colors"
											>
												{t}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
