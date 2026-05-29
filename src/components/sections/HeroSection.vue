<script setup lang="ts">
import type { HeroContent } from '../../types/content';

defineProps<{
  content: HeroContent;
}>();
</script>

<template>
  <section
    id="hero"
    class="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 p-8 text-slate-100 shadow-2xl lg:p-12"
  >
    <div class="pointer-events-none absolute -right-14 -top-10 h-48 w-48 rounded-full bg-emerald-400/20 blur-3xl"></div>
    <div class="pointer-events-none absolute -left-14 bottom-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl"></div>
    <p class="relative text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">{{ content.eyebrow }}</p>
    <div class="relative mt-5 grid gap-7 lg:grid-cols-[1.65fr_1fr] lg:items-start">
      <div>
        <h1 class="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {{ content.headline }}
        </h1>
        <p class="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
          {{ content.supportingLine }}
        </p>
        <ul class="mt-5 flex flex-wrap gap-2">
          <li class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">Full-Stack Web Apps</li>
          <li class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">API-Driven Systems</li>
          <li class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">Developer Tooling</li>
          <li class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">Automation Workflows</li>
          <li class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">AI-Assisted Workflow Engineering</li>
        </ul>
      </div>
      <aside class="rounded-2xl border border-white/15 bg-black/20 p-5">
        <h2 class="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-200">How I Build</h2>
        <ul class="mt-3 space-y-2 text-sm text-slate-200">
          <li>Product-first frontend and backend ownership</li>
          <li>Contract-driven APIs with scalable data models</li>
          <li>Tooling and deployment workflows that reduce handoff friction</li>
        </ul>
      </aside>
    </div>
    <div class="relative mt-8 flex flex-wrap gap-3">
      <a
        v-for="cta in content.ctas"
        :key="cta.label"
        :href="cta.href"
        :class="[
          'rounded-full px-5 py-2.5 text-sm font-semibold transition',
          cta.label === 'View Featured Work'
            ? 'bg-emerald-300 text-slate-900 hover:bg-emerald-200'
            : 'border border-white/20 bg-white/5 text-slate-100 hover:bg-white/15',
        ]"
        :target="cta.href.startsWith('http') ? '_blank' : undefined"
        :rel="cta.href.startsWith('http') ? 'noreferrer noopener' : undefined"
      >
        {{ cta.label }}
      </a>
    </div>
  </section>
</template>
