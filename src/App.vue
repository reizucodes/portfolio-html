<script setup lang="ts">
import ContactSection from './components/sections/ContactSection.vue';
import ExperienceSection from './components/sections/ExperienceSection.vue';
import HeroSection from './components/sections/HeroSection.vue';
import ProjectsGridSection from './components/sections/ProjectsGridSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
import { contactLinks, experience, featuredWork, heroContent, projects, skillGroups } from './data/content';
</script>

<template>
  <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-slate-900">
    Skip to main content
  </a>

  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="sticky top-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <nav class="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">reizucodes</p>
          <!-- <p class="text-xs text-slate-400">Full-stack software engineering showcase</p> -->
        </div>
        <ul class="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-300">
          <li><a href="#featured-work" class="rounded-full px-2 py-1 transition hover:bg-white/10 hover:text-white">Featured Work</a></li>
          <li><a href="#projects" class="rounded-full px-2 py-1 transition hover:bg-white/10 hover:text-white">Projects</a></li>
          <li><a href="#skills" class="rounded-full px-2 py-1 transition hover:bg-white/10 hover:text-white">Skills</a></li>
          <li><a href="#experience" class="rounded-full px-2 py-1 transition hover:bg-white/10 hover:text-white">Experience</a></li>
          <li><a href="#contact" class="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1.5 text-emerald-200 transition hover:bg-emerald-300/20">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main id="main-content" class="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-10 sm:px-6 lg:px-8">
      <HeroSection :content="heroContent" />
      <ProjectsGridSection
        id="featured-work"
        title="Featured Work"
        variant="case-study"
        :projects="featuredWork"
      />
      <ProjectsGridSection
        id="projects"
        title="Full Projects"
        variant="overview"
        :projects="projects"
      />
      <SkillsSection :groups="skillGroups" />
      <ExperienceSection :items="experience" />
      <ContactSection :links="contactLinks" />
    </main>
  </div>
</template>
