export interface HeroContent {
  eyebrow: string;
  mobileEyebrow: string;
  headline: string;
  supportingLine: string;
  chips: string[];
  ctas: HeroCta[];
}

export interface HeroCta {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface CurrentRoleSnapshot {
  eyebrow: string;
  title: string;
  summary: string;
  highlights: string[];
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
  proofLine: string;
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
  tags: string[];
}

export interface ContactLink {
  label: string;
  href: string;
}
