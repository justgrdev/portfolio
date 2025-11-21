export interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    period: string;
    location: string;
    description: string[];
    tech: string[];
}

export interface ProjectItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    year: string;
    link?: string;
}

export interface SkillCategory {
    name: string;
    skills: string[];
}