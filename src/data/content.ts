import type {
  ContactLink,
  ExperienceItem,
  HeroContent,
  ProjectCaseStudy,
  SkillGroup,
} from '../types/content';

export const heroContent: HeroContent = {
  eyebrow: 'Building Software Across the Stack  ',
  headline: 'Full Stack Software Developer',
  supportingLine:
    'Building web applications, API integrations, dashboards, developer tools, and workflow systems that solve real business and engineering problems.',
  ctas: [
    { label: 'View Featured Work', href: '#featured-work' },
    { label: 'GitHub', href: 'https://github.com/reizucodes' },
    { label: "Let's Connect", href: '#contact' },
  ],
};

export const projects: readonly ProjectCaseStudy[] = [
  {
    id: 'job-scraper-dashboard',
    title: 'Job Scraper Dashboard',
    valueProposition: 'Full-stack dashboard product that aggregates multi-source job listings into one searchable workflow.',
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
    featured: true,
  },
  {
    id: 'digital-library',
    title: 'Digital Library',
    valueProposition: 'Makes resource cataloging and retrieval fast for daily operations.',
    positioningContext: 'Full-stack application for content management and retrieval.',
    problemContext: 'Managing and finding digital resources quickly required clearer data organization.',
    summary: 'Full-stack application for structured cataloging, search, and retrieval through API-driven views.',
    technicalApproach: 'Used domain-focused modules and explicit service boundaries for predictable feature growth.',
    stackDetails: ['FastAPI', 'Vue 3', 'Pinia', 'SQLAlchemy'],
    whatBuilt: 'Built a full-stack library system for cataloging, browsing, and retrieving resources through API-driven views and domain-focused modules.',
    technicalHighlights: ['FastAPI services', 'Vue 3 + Pinia frontend', 'SQLAlchemy data modeling', 'Layered architecture and tests'],
    outcomeUsefulness: 'Improves discoverability and day-to-day resource management.',
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
    featured: true,
  },
  {
    id: 'laravel-domain-toolkit',
    title: 'Laravel Domain Toolkit',
    valueProposition: 'Developer tooling package that generates domain modules with consistent architecture conventions.',
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
    links: [{ label: 'Source', href: 'https://github.com/reizucodes/laravel-domain-toolkit' }],
    featured: true,
  },
  {
    id: 'swagger-apispec-forge',
    title: 'Swagger / APISpec Forge',
    valueProposition: 'Developer tooling product that speeds up OpenAPI authoring with guided contract workflows.',
    positioningContext: 'Proven developer tooling with rich UI workflows for OpenAPI contract authoring.',
    problemContext: 'Writing and maintaining API specs manually created inconsistency and slowed documentation work.',
    summary: 'Developer tooling product with rich UI workflows for generating, validating, and refining OpenAPI content.',
    technicalApproach: 'Combined schema templates, validation checks, and live preview to shorten feedback loops.',
    stackDetails: ['TypeScript', 'OpenAPI', 'Swagger tooling'],
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
    tags: ['OpenAPI', 'Swagger', 'Schema Tooling', 'TypeScript'],
    links: [
      { label: 'Source', href: 'https://github.com/reizucodes/swagger-forge' },
      { label: 'Visit', href: 'https://apispec-forge.vercel.app/' },
    ],
    featured: false,
  },
  {
    id: 'profile-dashboard',
    title: 'Profile Dashboard',
    valueProposition: 'Input a public GitHub repository URL and get quick KPI insights in one dashboard.',
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
    featured: false,
  },
];

export const featuredWork: readonly ProjectCaseStudy[] = projects.filter((project) => project.featured);

export const skillGroups: readonly SkillGroup[] = [
  {
    id: 'frontend-experience',
    title: 'Frontend Experience',
    skills: ['Vue 3', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    id: 'backend-experience',
    title: 'Backend Experience',
    skills: ['Laravel', 'PHP', 'FastAPI', 'Python', 'GraphQL', 'REST API Design', 'Service Boundaries'],
  },
  {
    id: 'developer-tooling',
    title: 'Developer Tooling',
    skills: ['APISpec Forge', 'Laravel Domain Toolkit', 'OpenAPI Workflows', 'Code Generation Patterns'],
  },
  {
    id: 'integrations-automation',
    title: 'Integrations & Automation',
    skills: ['Third-party APIs', 'Webhooks', 'Payments', 'Logistics', 'Push Notifs', 'SMS Providers', 'Tooling Automation', 'Workflow Orchestration'],
  },
  {
    id: 'ai-assisted-workflows',
    title: 'AI-Assisted Workflow Engineering',
    skills: ['Prompt-guided implementation workflows', 'Planning to QA execution loops', 'Safe coding guardrails', 'Personal project automation'],
  },
  {
    id: 'data-delivery-ops',
    title: 'Data, Delivery & Ops',
    skills: ['OpenAPI', 'Schema Design', 'Data Modeling', 'CI/CD Pipelines', 'GitHub Actions', 'Automated Code Checks and Tests', 'Linux SSH', 'Production Deployment Support'],
  },
];

export const experience: readonly ExperienceItem[] = [
  {
    id: 'flowerstore-mid',
    role: 'Mid Software Developer',
    company: 'FlowerStore Group',
    period: 'March 2025 - Present',
    outcomes: [
      'Owned end-to-end delivery for payment and logistics workflows across UI, APIs, integrations, and deployment.',
      'Built internal dashboards and tooling that improved operational visibility and reduced manual handling overhead.',
    ],
  },
  {
    id: 'flowerstore-junior',
    role: 'Junior Software Developer',
    company: 'FlowerStore Group',
    period: 'July 2023 - March 2025',
    outcomes: [
      'Shipped full-stack e-commerce and delivery features with maintainable frontend and backend boundaries.',
      'Improved reliability through clearer validation, UI feedback states, and structured implementation patterns.',
    ],
  },
  {
    id: 'bu-intern',
    role: 'Full Stack Web Developer Intern',
    company: 'Bicol University Open University',
    period: 'July 2022 - November 2022',
    outcomes: [
      'Supported admissions platform development with full-stack workflow features.',
      'Delivered scoped enhancements for data-backed user flows and internal operations.',
    ],
  },
];

export const contactLinks: readonly ContactLink[] = [
  { label: 'GitHub', href: 'https://github.com/reizucodes' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/blaisebueno/' },
  { label: 'Email', href: 'mailto:blaisebueno@gmail.com' },
];
