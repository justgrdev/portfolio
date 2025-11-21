import { AnimatePresence, motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
	{ name: "Work", href: "#projects" },
	{ name: "Journey", href: "#experience" },
	{ name: "Skills", href: "#skills" },
	{ name: "Contact", href: "#contact" },
];

export default function NavBar() {
	const [scrolled, setScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<motion.nav
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
				className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
			>
				<div
					className={`
                    pointer-events-auto
                    flex items-center gap-8 px-6 py-3 rounded-full
                    backdrop-blur-xl border transition-all duration-500
                    ${
											scrolled
												? "bg-surface/80 border-white/10 shadow-2xl shadow-black/50"
												: "bg-transparent border-transparent"
										}
                `}
				>
					<a href="#hero" className="flex items-center gap-2 group">
						<div className="bg-white text-black p-1.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
							<Code2 size={18} />
						</div>
						<span
							className={`font-display font-bold tracking-tight transition-colors ${scrolled ? "text-white" : "text-white"}`}
						>
							GR<span className="text-primary">.</span>
						</span>
					</a>

					<div className="hidden md:flex items-center gap-6">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
							>
								{link.name}
								<span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
							</a>
						))}
					</div>

					<a
						href="mailto:justgrdev@proton.me"
						className="hidden md:block px-4 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-slate-200 transition-colors"
					>
						Let's Talk
					</a>

					<button
						className="md:hidden text-white p-1"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						type="button"
					>
						{isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</motion.nav>

			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						className="fixed inset-x-4 top-24 bg-surface/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 z-40 md:hidden shadow-2xl"
					>
						<div className="flex flex-col gap-4">
							{navLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									onClick={() => setIsMobileMenuOpen(false)}
									className="text-xl font-display font-medium text-slate-300 hover:text-white hover:pl-2 transition-all"
								>
									{link.name}
								</a>
							))}
							<div className="h-px bg-white/10 my-2" />
							<a
								href="mailto:justgrdev@proton.me"
								className="text-primary font-medium"
							>
								justgrdev@proton.me
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
