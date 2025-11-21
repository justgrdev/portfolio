import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type React from "react";
import { SOCIAL_LINKS } from "../constants";

const Contact: React.FC = () => {
	return (
		<section id="contact" className="py-24 relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

			<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
				<h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
					Ready to build something <br />
					<span className="text-primary">extraordinary?</span>
				</h2>
				<p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
					I'm currently looking for a Full-Stack Developer role in a
					tech-focused company where I can apply my skills in architecture and
					optimization.
				</p>

				<div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
					<a
						href={`mailto:${SOCIAL_LINKS.email}`}
						className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-background rounded-full font-bold hover:bg-slate-200 transition-colors"
					>
						<Mail size={20} />
						Send Email
					</a>
					<a
						href={SOCIAL_LINKS.linkedin}
						target="_blank"
						rel="noreferrer"
						className="flex items-center justify-center gap-3 px-8 py-4 bg-surface border border-white/10 text-white rounded-full font-medium hover:bg-white/5 transition-colors"
					>
						<Linkedin size={20} />
						LinkedIn
					</a>
				</div>

				<div className="grid md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
					<div className="flex flex-col items-center gap-2">
						<MapPin className="text-secondary mb-2" size={24} />
						<span className="text-slate-400 text-sm">Based in</span>
						<span className="text-white font-medium">GMT-4 Timezone</span>
					</div>
					<div className="flex flex-col items-center gap-2">
						<Mail className="text-secondary mb-2" size={24} />
						<span className="text-slate-400 text-sm">Email</span>
						<span className="text-white font-medium">{SOCIAL_LINKS.email}</span>
					</div>
					<div className="flex flex-col items-center gap-2">
						<Phone className="text-secondary mb-2" size={24} />
						<span className="text-slate-400 text-sm">Phone</span>
						<span className="text-white font-medium">{SOCIAL_LINKS.phone}</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
