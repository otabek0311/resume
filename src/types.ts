export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  objectFit?: 'cover' | 'contain';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  logoUrl?: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  telegram: string;
  linkedin?: string;
}
