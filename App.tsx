import { useEffect } from "react";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

function App() {
	useEffect(() => {
		document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			anchor.addEventListener("click", function (e) {
				e.preventDefault();
				const href = this.getAttribute("href");
				if (href) {
					document.querySelector(href)?.scrollIntoView({
						behavior: "smooth",
					});
				}
			});
		});
	}, []);

	return (
		<div className="relative bg-background min-h-screen text-slate-200">
			<div className="bg-noise" />
			<Navbar />
			<main className="relative z-10">
				<Hero />
				<Skills />
				<Experience />
				<Projects />
				<Contact />
			</main>

			<footer className="relative z-10 py-8 border-t border-white/5 text-center bg-background">
				<p className="text-muted text-sm font-mono">
					© {new Date().getFullYear()} Gregori Rivas.{" "}
					<span className="text-slate-600">Just? Dev.</span>
				</p>
			</footer>
		</div>
	);
}

export default App;
