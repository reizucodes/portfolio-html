export interface HeroContent {
  eyebrow: string;
  headline: string;
  supportingLine: string;
  ctas: {
    label: string;
    href: string;
  }[];
}

export interface ProjectLink {
  label: 'Source' | 'Visit';
  href: string;
}

export interface ProjectDeepDive {
  architectureDecisions?: string[];
  engineeringDetails?: string[];
  lessonsLearned?: string[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  valueProposition: string;
  positioningContext: string;
  problemContext: string;
  summary?: string;
  technicalApproach?: string;
  stackDetails?: string[];
  whatBuilt: string;
  technicalHighlights: string[];
  outcomeUsefulness: string;
  deepDive?: ProjectDeepDive;
  tags: string[];
  links: ProjectLink[];
  featured: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  outcomes: string[];
}

export interface ContactLink {
  label: string;
  href: string;
}
