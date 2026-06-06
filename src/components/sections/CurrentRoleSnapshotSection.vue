<script setup lang="ts">
import type { CurrentRoleSnapshot } from '../../types/content';

defineProps<{
  snapshot: CurrentRoleSnapshot;
}>();
</script>

<template>
  <section
    id="current-role"
    aria-labelledby="current-role-heading"
    class="rounded-3xl border border-white/10 bg-slate-900/50 p-6 shadow-xl sm:p-8"
  >
    <div class="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
      <div class="max-w-3xl">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">{{ snapshot.eyebrow }}</p>
        <h2 id="current-role-heading" class="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {{ snapshot.title }}
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
          {{ snapshot.summary }}
        </p>
      </div>

      <ul class="grid gap-2 sm:grid-cols-2 lg:max-w-2xl">
        <li
          v-for="highlight in snapshot.highlights"
          :key="highlight"
          class="rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-slate-200"
        >
          {{ highlight }}
        </li>
      </ul>
    </div>
  </section>
</template>
