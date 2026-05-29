import type { SkillGroup } from '../types/skill';

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Experience',
    items: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Dashboard UI']
  },
  {
    id: 'backend',
    title: 'Backend Platforms',
    items: ['Laravel', 'FastAPI', 'REST APIs', 'GraphQL']
  },
  {
    id: 'integration',
    title: 'Integrations & Automation',
    items: ['Payments', 'Logistics APIs', 'Third-party Services', 'Webhooks']
  },
  {
    id: 'ai-assisted',
    title: 'AI-Assisted Workflow Engineering',
    items: ['Prompt-guided implementation', 'Planning to QA loops', 'Safe coding guardrails', 'Personal project automation']
  },
  {
    id: 'data',
    title: 'Data, Contracts & Delivery',
    items: ['MySQL', 'OpenAPI', 'Schema Design', 'CI/CD']
  }
];
