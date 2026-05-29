<script setup lang="ts">
import type { SkillGroup } from '../../types/content';

defineProps<{
  groups: readonly SkillGroup[];
}>();
</script>

<template>
  <section id="skills" aria-labelledby="skills-heading" class="space-y-5 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
    <h2 id="skills-heading" class="text-2xl font-bold tracking-tight text-white sm:text-3xl">Skills</h2>
    <div class="grid gap-4 sm:grid-cols-2">
      <article v-for="group in groups" :key="group.id" class="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-sm">
        <h3 class="text-base font-semibold text-white">{{ group.title }}</h3>
        <ul class="mt-3 flex flex-wrap gap-2">
          <li
            v-for="skill in group.skills"
            :key="skill"
            class="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-100"
          >
            {{ skill }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
