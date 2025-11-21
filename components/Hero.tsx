import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
	const ref = useRef<HTMLDivElement>(null);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const springConfig = { damping: 25, stiffness: 150 };
	const smoothX = useSpring(mouseX, springConfig);
	const smoothY = useSpring(mouseY, springConfig);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mouseX.set(e.clientX);
			mouseY.set(e.clientY);
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const background = useMotionTemplate`radial-gradient(
        600px circle at ${smoothX}px ${smoothY}px, 
        rgba(56, 189, 248, 0.10), 
        transparent 80%
    )`;

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { y: 100 },
		show: {
			y: 0,
			transition: {
				duration: 1,
				ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
			},
		},
	};

	return (
		<section
			ref={ref}
			className="relative h-screen flex items-center justify-center overflow-hidden bg-background"
		>
			<motion.div className="absolute inset-0 z-0" style={{ background }} />

			<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] mask-image-gradient" />

			<div className="relative z-10 max-w-7xl mx-auto px-6 w-full" id="hero">
				<motion.div
					variants={container}
					initial="hidden"
					animate="show"
					className="flex flex-col gap-2"
				>
					<div className="text-mask-container mb-4">
						<motion.div
							variants={item}
							className="flex items-center gap-3 text-primary font-mono text-sm tracking-widest uppercase"
						>
							<span className="w-10 h-[1px] bg-primary"></span>
							Full Stack Dev
						</motion.div>
					</div>

					<div className="text-mask-container">
						<motion.h1
							variants={item}
							className="text-6xl md:text-9xl font-display font-bold tracking-tighter text-white leading-[0.9]"
						>
							JUST
						</motion.h1>
					</div>

					<div className="text-mask-container">
						<motion.div
							variants={item}
							className="flex items-center gap-4 md:gap-8"
						>
							<h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter text-slate-500 leading-[0.9]">
								BUILDING
							</h1>
							<div className="h-4 md:h-8 w-4 md:w-8 bg-primary animate-pulse rounded-sm mt-2 md:mt-4" />
						</motion.div>
					</div>

					<div className="text-mask-container mt-8 max-w-xl">
						<motion.p
							variants={item}
							className="text-lg text-slate-400 leading-relaxed"
						>
							I transform operational chaos into scalable software. Specializing
							in{" "}
							<span className="text-white">high-performance architectures</span>
							,<span className="text-white"> database optimization</span>, and
							<span className="text-white"> native mobile solutions</span>.
						</motion.p>
					</div>

					<div className="text-mask-container mt-10">
						<motion.div variants={item} className="flex gap-6">
							<a
								href="#projects"
								className="group flex items-center gap-2 text-white font-medium border-b border-white/30 pb-1 hover:border-white transition-all"
							>
								View Selected Works
								<ArrowRight
									className="group-hover:translate-x-1 transition-transform duration-300"
									size={18}
								/>
							</a>
						</motion.div>
					</div>
				</motion.div>
			</div>

			<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
		</section>
	);
}
