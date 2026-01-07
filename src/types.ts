// TypeScript types for Portfolio

export interface Artwork {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
  isVideo?: boolean;
}

export interface Experience {
  title: string;
  company?: string;
  period: string;
  description?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Skill {
  name: string;
  level?: number;
}

export interface Language {
  name: string;
  level: string;
}

export interface Program {
  name: string;
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  nickname: string;
  email: string;
  phone?: string;
  whatsappLink?: string;
  bio: string;
  profileImage: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
  programs: Program[];
  achievements: string[];
  socialLinks: SocialLink[];
}
