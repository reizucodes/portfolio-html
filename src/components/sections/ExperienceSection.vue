<script setup lang="ts">
import type { ExperienceItem } from '../../types/content';

defineProps<{
  items: readonly ExperienceItem[];
}>();
</script>

<template>
  <section id="experience" aria-labelledby="experience-heading" class="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/30 p-6 sm:p-8">
    <div class="space-y-2">
      <h2 id="experience-heading" class="text-2xl font-bold tracking-tight text-white sm:text-3xl">Experience</h2>
      <p class="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
        Roles where I implemented features, integrations, and internal tooling across e-commerce, internal, and admission platforms.
      </p>
    </div>
    <ol class="grid gap-4 lg:grid-cols-3">
      <li v-for="item in items" :key="item.id" class="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-sm">
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <h3 class="text-lg font-semibold text-white">{{ item.role }}</h3>
          <p class="text-sm font-medium text-slate-400">{{ item.period }}</p>
        </div>
        <p class="mt-1 text-sm font-semibold text-emerald-300">{{ item.company }}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tag in item.tags"
            :key="tag"
            class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-slate-200"
          >
            {{ tag }}
          </span>
        </div>
        <ul class="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
          <li v-for="outcome in item.outcomes" :key="outcome">{{ outcome }}</li>
        </ul>
      </li>
    </ol>
  </section>
</template>
