import type {
  ContactLink,
  CurrentRoleSnapshot,
  ExperienceItem,
  HeroContent,
  ProjectCaseStudy,
  SkillGroup,
} from '../types/content';

export const heroContent: HeroContent = {
  eyebrow: 'Mid-Level Software Engineer',
  headline: 'Building Software That Solves Real Business Problems',
  supportingLine:
    'Developing full-stack applications, integrations, and internal platforms that streamline business processes and support day-to-day operations.',
  chips: [
    'Web Platforms',
    'API & Integrations',
    'Workflow Automation', // Automating business processes through system integrations, queues, scheduled jobs, notifications, and event-driven workflows.
    'CI/CD & Deployments',
  ],
  ctas: [
    { label: 'View Featured Projects', href: '#featured-work', variant: 'primary' },
    { label: 'See Experience', href: '#experience', variant: 'secondary' },
  ],
};

export const currentRoleSnapshot: CurrentRoleSnapshot = {
  eyebrow: 'Current Role Snapshot',
  title: 'Mid Software Developer at FlowerStore Group',
  summary:
    'Delivering full-stack solutions that support e-commerce operations, payment integrations, logistics workflows, and internal business platforms.',
  highlights: [
    'Experience: 3 years in production software development',
    'Domain: E-commerce, Payments & Logistics, Operations',
    'Specialties: Integrations & Internal Platforms',
    'Scope: Full-Stack Development & Deployments',
  ],
};

export const projects: readonly ProjectCaseStudy[] = [
  {
    id: 'job-scraper-dashboard',
    title: 'Job Scraper Dashboard',
    tier: 'flagship',
    valueProposition: 'Full-stack dashboard product that aggregates multi-source job listings into one searchable workflow.',
    proofLine: 'Built a resilient ingestion-to-dashboard workflow that turns scattered listings into faster role discovery.',
    positioningContext: 'Full-stack dashboard product for automation-driven job aggregation and filtering.',
    problemContext: 'Manual job hunting across multiple listings was repetitive and hard to compare quickly.',
    summary: 'End-to-end job discovery pipeline with unified filters and export-ready results.',
    technicalApproach: 'Separated scraping, normalization, and API delivery to keep ingestion resilient and frontend queries fast.',
    stackDetails: ['FastAPI', 'Vue 3', 'TypeScript', 'Scraping workers'],
    whatBuilt: 'Built a full-stack scraping pipeline and dashboard that consolidates listings into a searchable workflow with export-ready results.',
    technicalHighlights: ['FastAPI API layer', 'Vue 3 + TypeScript dashboard', 'Scraping workflow orchestration', 'Export and filter UX'],
    outcomeUsefulness: 'Reduces repetitive search effort and speeds up role discovery.',
    deepDive: {
      architectureDecisions: [
        'Isolated scraping routines from API handlers to prevent crawl delays from blocking user requests.',
        'Normalized source-specific fields into a shared job schema before persistence.',
      ],
      engineeringDetails: [
        'Added defensive parsing for missing salary/location fields across providers.',
        'Used indexed query filters to support quick keyword and location lookups.',
      ],
      lessonsLearned: [
        'Schema normalization upfront reduced downstream UI conditionals.',
        'Batching source pulls improved reliability versus single long-running crawls.',
      ],
    },
    tags: ['FastAPI', 'Vue 3', 'TypeScript', 'Scraping', 'Dashboard'],
    links: [
      { label: 'Source', href: 'https://github.com/reizucodes/job-scraper-dashboard' },
      { label: 'Visit', href: 'https://scrape-jobs-rz.vercel.app/jobs' },
    ],
  },
  {
    id: 'laravel-domain-toolkit',
    title: 'Laravel Domain Toolkit',
    tier: 'flagship',
    valueProposition: 'Developer tooling package that generates domain modules with consistent architecture conventions.',
    proofLine: 'Standardized module scaffolding into reusable generators that speed up feature starts and reduce architecture drift.',
    positioningContext: 'Proven developer tooling for domain-oriented Laravel module consistency.',
    problemContext: 'New service modules were slow to bootstrap and often drifted from shared conventions.',
    summary: 'Laravel developer tooling package for repeatable domain module scaffolding.',
    technicalApproach: 'Encapsulated generators around DTO, repository, and service patterns to standardize outputs.',
    stackDetails: ['Laravel', 'PHP 8+', 'Code generators'],
    whatBuilt: 'Built a Laravel toolkit that scaffolds domain-focused modules and reduces setup repetition.',
    technicalHighlights: ['Laravel package', 'Repositories and services', 'DTO and generator patterns', 'Laravel 9-13 support'],
    outcomeUsefulness: 'Speeds up feature starts while improving platform consistency and onboarding velocity.',
    deepDive: {
      architectureDecisions: [
        'Template-driven generation with explicit contracts for repositories and services.',
        'Version-compatible command surface to support Laravel 9 through 13.',
      ],
      engineeringDetails: [
        'Added idempotent file generation checks to prevent accidental overwrites.',
        'Provided extensible stubs for team-specific conventions.',
      ],
      lessonsLearned: [
        'Strong defaults reduce inconsistent patterns across teams.',
        'Generator ergonomics matter as much as output quality for adoption.',
      ],
    },
    tags: ['Laravel', 'PHP 8+', 'Developer Tooling', 'Code Generation'],
    links: [
      { label: 'Source', href: 'https://github.com/reizucodes/laravel-domain-toolkit' },
      { label: 'Visit', href: 'https://packagist.org/packages/reizucodes/laravel-domain-toolkit' },
    ],
  },
  {
    id: 'swagger-apispec-forge',
    title: 'APISpec',
    tier: 'flagship',
    valueProposition: 'Developer tooling product that speeds up OpenAPI authoring with guided contract workflows.',
    proofLine: 'Turned manual API spec work into guided authoring, validation, and preview workflows for faster contract delivery.',
    positioningContext: 'Proven developer tooling with rich UI workflows for OpenAPI contract authoring.',
    problemContext: 'Writing and maintaining API specs manually created inconsistency and slowed documentation work.',
    summary: 'Developer tooling product with rich UI workflows for generating, validating, and refining OpenAPI content.',
    technicalApproach: 'Combined schema templates, validation checks, and live preview to shorten feedback loops.',
    stackDetails: ['React | TypeScript', 'OpenAPI', 'Swagger tooling'],
    whatBuilt: 'Built a browser-based developer tool with interactive UI workflows for generating and refining API contract content.',
    technicalHighlights: ['OpenAPI schema generation', 'Swagger workflow support', 'JSON import/export', 'Live preview and iterative edit workflows'],
    outcomeUsefulness: 'Makes API contracts faster to produce and easier to keep aligned across implementation teams.',
    deepDive: {
      architectureDecisions: [
        'Separated schema model transformations from UI rendering concerns.',
        'Designed import/export as explicit pipeline steps for easier debugging.',
      ],
      engineeringDetails: [
        'Added schema-level guards before rendering preview output.',
        'Supported iterative edits without resetting generated sections.',
      ],
      lessonsLearned: [
        'Small validation hints prevent large downstream spec corrections.',
      ],
    },
    tags: ['React', 'OpenAPI', 'Swagger'],
    links: [
      { label: 'Source', href: 'https://github.com/reizucodes/swagger-forge' },
      { label: 'Visit', href: 'https://apispec-forge.vercel.app/' },
    ],
  },
  {
    id: 'digital-library',
    title: 'Digital Library',
    tier: 'secondary',
    valueProposition:'Personal digital library for organizing and managing book collections.',
    proofLine:'Created a centralized place to catalog, search, and browse books through a simple web interface.',
    positioningContext:'Full-stack web application for personal book collection management.',
    problemContext:'Managing a growing book collection required a simple way to organize, search, and retrieve titles.',
    summary:'Full-stack web application for cataloging, searching, and managing personal book collections.',
    technicalApproach:'Used modular services and API-driven views to keep the application maintainable as features expanded.',
    stackDetails: ['FastAPI', 'Vue 3', 'Pinia', 'SQLAlchemy'],
    whatBuilt:'Built a full-stack digital library application for storing, browsing, searching, and managing books.',
    technicalHighlights: [
      'FastAPI',
      'Vue 3 + Pinia frontend',
      'SQLAlchemy data modeling',
      'Layered architecture and tests',
    ],
    outcomeUsefulness:'Makes personal book collections easier to organize and manage.',
    deepDive: {
      architectureDecisions: [
        'Split catalog, borrowing, and user concerns into separate service modules.',
        'Used repository abstractions to keep domain logic isolated from ORM details.',
      ],
      engineeringDetails: [
        'Implemented validation rules at API boundaries to keep persisted records consistent.',
        'Added focused service tests for catalog/search edge cases.',
      ],
      lessonsLearned: [
        'Clear module ownership reduced regression risk during feature additions.',
        'Contract-first validation reduced invalid-state debugging time.',
      ],
    },
    tags: ['FastAPI', 'Vue 3', 'Pinia', 'SQLAlchemy', 'Testing'],
    links: [
      { label: 'Source', href: 'https://github.com/reizucodes/digital-library' },
      { label: 'Visit', href: 'https://digital-library-rz.vercel.app/' },
    ],
  },
  {
    id: 'profile-dashboard',
    title: 'Profile Dashboard',
    tier: 'optional',
    valueProposition: 'Input a public GitHub repository URL and get quick KPI insights in one dashboard.',
    proofLine: 'Condensed repository activity into quick-read KPI views for maintainers and technical reviewers.',
    positioningContext: 'Frontend-heavy analytics dashboard for public GitHub repository KPIs and activity metrics.',
    problemContext: 'Checking repository health across commits, pushes, and issues was slow when scattered across multiple GitHub views.',
    summary: 'KPI-style repository dashboard that converts public GitHub repo data into quick operational metrics.',
    technicalApproach: 'Accepts a public repository URL, fetches repository/activity data, then renders KPI cards and trend views with cached state updates.',
    stackDetails: ['Vue 3', 'TypeScript', 'Pinia'],
    whatBuilt: 'Built a dashboard where users enter a public GitHub repo URL and immediately see KPIs like pushes, open issues, and activity snapshots.',
    technicalHighlights: ['Vue + TypeScript dashboard UI', 'Repo URL input workflow', 'KPI cards (pushes, open issues, activity)', 'Pinia state and cache strategy'],
    outcomeUsefulness: 'Makes repository status easier to evaluate quickly for maintainers, collaborators, and technical reviewers.',
    deepDive: {
      architectureDecisions: [
        'Scoped data stores by domain to avoid cross-feature state coupling.',
      ],
      engineeringDetails: [
        'Introduced cache windows to limit repeated API calls during filter changes.',
      ],
      lessonsLearned: [
        'Signal-first layout improves comprehension more than adding extra metrics.',
      ],
    },
    tags: ['Vue 3', 'TypeScript', 'Pinia', 'Analytics Dashboard'],
    links: [
      { label: 'Source', href: 'https://github.com/reizucodes/profile-dashboard' },
      { label: 'Visit', href: 'https://profile-dashboard-rz.vercel.app/' },
    ],
  },
];

const featuredProjectOrder = ['laravel-domain-toolkit', 'job-scraper-dashboard', 'swagger-apispec-forge'];
const supportingProjectOrder = ['digital-library', 'profile-dashboard'];

export const featuredWork: readonly ProjectCaseStudy[] = featuredProjectOrder
  .map((projectId) => projects.find((project) => project.id === projectId))
  .filter((project): project is ProjectCaseStudy => Boolean(project));

export const secondaryProjects: readonly ProjectCaseStudy[] = supportingProjectOrder
  .map((projectId) => projects.find((project) => project.id === projectId))
  .filter((project): project is ProjectCaseStudy => Boolean(project));

export const skillGroups: readonly SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: ['Vue 3', 'React', 'TypeScript', 'Responsive UI'],
  },
  {
    id: 'backend-apis',
    title: 'Backend & APIs',
    skills: ['Laravel', 'FastAPI', 'REST APIs', 'GraphQL', 'Service boundaries'],
  },
  {
    id: 'integrations',
    title: 'Integrations',
    skills: ['Payments', 'Logistics', 'Webhooks', 'Workflow automation', 'Third-party services'],
  },
  {
    id: 'delivery-ops',
    title: 'Delivery & Ops',
    skills: ['OpenAPI workflows', 'Code generation', 'GitHub Actions', 'CI/CD pipelines', 'Deployment support'],
  },
];

export const experience: readonly ExperienceItem[] = [
  {
    id: 'flowerstore-mid',
    role: 'Mid Software Developer',
    company: 'FlowerStore Group',
    period: 'March 2025 - Present',
    outcomes: [
      'Implemented payment and logistics workflows across frontend applications, APIs, third-party integrations, and deployment processes.',
      'Built internal dashboards and tooling that improved operational visibility and reduced manual handling overhead.',
    ],
  },
  {
    id: 'flowerstore-junior',
    role: 'Junior Software Developer',
    company: 'FlowerStore Group',
    period: 'July 2023 - March 2025',
    outcomes: [
      'Developed full-stack e-commerce and delivery features with maintainable frontend and backend boundaries.',
      'Improved reliability through clearer validation, UI feedback states, and structured implementation patterns.',
    ],
  },
  {
    id: 'bu-intern',
    role: 'Full Stack Web Developer Intern',
    company: 'Bicol University Open University',
    period: 'July 2022 - November 2022',
    outcomes: [
      'Developed admissions platform development with full-stack workflow features.',
      'Delivered scoped enhancements for data-backed user flows and internal operations.',
    ],
  },
];

export const contactLinks: readonly ContactLink[] = [
  { label: 'GitHub', href: 'https://github.com/reizucodes' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/blaisebueno/' },
  { label: 'Email', href: 'mailto:blaisebueno@gmail.com' },
];
