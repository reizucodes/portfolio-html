<script setup lang="ts">
import type { ExperienceItem } from '../../types/content';

defineProps<{
  items: readonly ExperienceItem[];
}>();
</script>

<template>
  <section id="experience" aria-labelledby="experience-heading" class="space-y-5 rounded-3xl border border-slate-800 bg-slate-900/30 p-6 sm:p-8">
    <div class="space-y-2">
      <h2 id="experience-heading" class="text-2xl font-bold tracking-tight text-white sm:text-3xl">Experience</h2>
      <p class="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
        Recent roles centered on production ownership across UI, backend services, integrations, and operational workflows.
      </p>
    </div>
    <ol class="grid gap-4 lg:grid-cols-3">
      <li v-for="item in items" :key="item.id" class="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-sm">
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <h3 class="text-lg font-semibold text-white">{{ item.role }}</h3>
          <p class="text-sm font-medium text-slate-400">{{ item.period }}</p>
        </div>
        <p class="mt-1 text-sm font-semibold text-emerald-300">{{ item.company }}</p>
        <ul class="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
          <li v-for="outcome in item.outcomes" :key="outcome">{{ outcome }}</li>
        </ul>
      </li>
    </ol>
  </section>
</template>
