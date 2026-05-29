import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'swagger-openapi-annotation-builder',
    name: 'Swagger/OpenAPI Annotation Builder',
    summary: 'Browser-based builder that generates OpenAPI annotations and schema blocks for Laravel and PHP services.',
    impact: 'Reduced API documentation authoring time and improved contract consistency across endpoints.',
    stack: ['TypeScript', 'Vue', 'OpenAPI'],
    featured: true,
    links: [
      { label: 'GitHub', href: 'https://github.com/reizucodes/swagger-openapi-annotation-builder' }
    ]
  },
  {
    id: 'laravel-domain-toolkit',
    name: 'Laravel Domain Toolkit',
    summary: 'Package for generating service, repository, DTO, and request scaffolding with domain-aware conventions.',
    impact: 'Standardized domain module structure and reduced setup time for new features.',
    stack: ['PHP', 'Laravel', 'Composer'],
    featured: true,
    links: [
      { label: 'GitHub', href: 'https://github.com/reizucodes/laravel-domain-toolkit' }
    ]
  },
  {
    id: 'express-typescript-api-starter',
    name: 'Express TypeScript API Starter',
    summary: 'API starter template with typed controllers, service boundaries, and test-ready project structure.',
    impact: 'Accelerated Node API bootstrapping with consistent structure and strict typing.',
    stack: ['Node.js', 'Express', 'TypeScript'],
    featured: true,
    links: [
      { label: 'GitHub', href: 'https://github.com/reizucodes/express-typescript-api-starter' }
    ]
  },
  {
    id: 'portfolio-vue-refactor',
    name: 'Portfolio Vue Refactor',
    summary: 'Migration of a static portfolio into a data-driven Vue 3 + TypeScript architecture using reusable UI blocks.',
    impact: 'Enabled scalable content updates and cleaner section-level ownership for future iterations.',
    stack: ['Vue 3', 'Vite', 'Tailwind CSS'],
    links: [
      { label: 'GitHub', href: 'https://github.com/reizucodes/portfolio-html' }
    ]
  },
  {
    id: 'payments-integration-workbench',
    name: 'Payments Integration Workbench',
    summary: 'Internal integration pattern kit for payment gateway adapters, retries, and reconciliation-oriented workflows.',
    impact: 'Improved payment flow reliability and reduced integration regressions during provider updates.',
    stack: ['Laravel', 'MySQL', 'Queue Workers'],
    links: [
      { label: 'Details', href: 'https://github.com/reizucodes' }
    ]
  },
  {
    id: 'logistics-ops-api',
    name: 'Logistics Ops API Flows',
    summary: 'Full-stack orchestration patterns for delivery events, status transitions, and operations dashboards.',
    impact: 'Supported faster operational triage through clear lifecycle states and API-level tracing.',
    stack: ['REST API', 'PHP', 'Docker'],
    links: [
      { label: 'Details', href: 'https://github.com/reizucodes' }
    ]
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
