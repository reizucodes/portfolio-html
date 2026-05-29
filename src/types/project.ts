export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  name: string;
  summary: string;
  impact: string;
  stack: string[];
  featured?: boolean;
  links: ProjectLink[];
}
