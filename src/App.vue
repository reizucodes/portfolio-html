<script setup lang="ts">
import { ref } from 'vue';
import ContactSection from './components/sections/ContactSection.vue';
import CurrentRoleSnapshotSection from './components/sections/CurrentRoleSnapshotSection.vue';
import ExperienceSection from './components/sections/ExperienceSection.vue';
import HeroSection from './components/sections/HeroSection.vue';
import ProjectsGridSection from './components/sections/ProjectsGridSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
import {
  contactLinks,
  currentRoleSnapshot,
  experience,
  featuredWork,
  heroContent,
  secondaryProjects,
  skillGroups,
} from './data/content';

const currentYear = new Date().getFullYear();
const isMobileNavOpen = ref(false);
const mobileNavId = 'primary-navigation-menu';
const navLinks = [
  { href: '#current-role', label: 'Current Role' },
  { href: '#featured-work', label: 'Featured Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'More Projects' },
  { href: '#contact', label: "Let's Connect", cta: true },
];
</script>

<template>
  <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-slate-900">
    Skip to main content
  </a>

  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="sticky top-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <nav
        class="mx-auto flex w-full max-w-7xl flex-col items-start gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"
        aria-label="Primary navigation"
      >
        <div class="flex w-full items-center justify-between gap-4 md:w-auto">
          <div>
            <a href="#hero" class="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300 hover:text-emerald-200">reizucodes</a>
            <!-- <p class="text-xs text-slate-400">Full-stack software engineering showcase</p> -->
          </div>
          <button
            type="button"
            class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-200 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300 md:hidden"
            :aria-expanded="isMobileNavOpen"
            :aria-controls="mobileNavId"
            aria-label="Toggle navigation menu"
            @click="isMobileNavOpen = !isMobileNavOpen"
          >
            <span class="sr-only">Menu</span>
            <span class="flex flex-col gap-1.5">
              <span class="h-0.5 w-5 rounded-full bg-current"></span>
              <span class="h-0.5 w-5 rounded-full bg-current"></span>
              <span class="h-0.5 w-5 rounded-full bg-current"></span>
            </span>
          </button>
        </div>
        <ul
          :id="mobileNavId"
          :class="[
            isMobileNavOpen ? 'flex' : 'hidden',
            'w-full flex-col gap-2 text-sm font-medium text-slate-300 md:flex md:w-auto md:flex-row md:flex-wrap md:items-center md:justify-end md:gap-3',
          ]"
        >
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              :class="link.cta
                ? 'block rounded-xl border border-emerald-300/40 bg-emerald-300/10 px-3 py-2 text-emerald-200 transition hover:bg-emerald-300/20 md:rounded-full md:px-3 md:py-1.5'
                : 'block rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-white md:rounded-full md:px-2 md:py-1'"
              @click="isMobileNavOpen = false"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <main id="main-content" class="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-10 sm:px-6 lg:px-8">
      <HeroSection :content="heroContent" />
      <CurrentRoleSnapshotSection :snapshot="currentRoleSnapshot" />
      <ProjectsGridSection
        id="featured-work"
        title="Featured Projects"
        intro="Selected work across developer tooling, automation, and product delivery that reflects how I build."
        variant="case-study"
        :projects="featuredWork"
      />
      <ExperienceSection :items="experience" />
      <SkillsSection :groups="skillGroups" />
      <ProjectsGridSection
        id="projects"
        title="Additional Projects"
        intro="Projects that show my range across dashboards, internal tools, and full-stack application work."
        variant="overview"
        :projects="secondaryProjects"
      />
      <ContactSection :links="contactLinks" />
    </main>
    <footer class="py-6">
      <p class="text-center text-sm text-slate-400">reizucodes © {{ currentYear }}</p>
      <!-- 
      <a href="https://websitelaunches.com/site/reizucodes.com" target="_blank" rel="noopener">
        <img
          src="https://websitelaunches.com/badge/reizucodes.com.svg?theme=dark"
          alt="Established online - Public launch record"
          width="255"
          height="55"
        >
      </a> 
      -->
    </footer>
  </div>
</template>
