<script setup lang="ts">
import type { SkillGroup } from '../../types/content';

defineProps<{
  groups: readonly SkillGroup[];
}>();
</script>

<template>
  <section id="skills" aria-labelledby="skills-heading" class="space-y-5 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
    <div class="space-y-2">
      <h2 id="skills-heading" class="text-2xl font-bold tracking-tight text-white sm:text-3xl">Skills</h2>
      <p class="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
        Focused on the stack and systems work that best supports full-stack engineering roles.
      </p>
    </div>
    <div class="grid gap-4 sm:grid-cols-2">
      <article v-for="group in groups" :key="group.id" class="rounded-2xl border border-white/10 bg-slate-950/60 p-5 shadow-sm">
        <h3 class="text-base font-semibold text-white">{{ group.title }}</h3>
        <ul class="mt-4 flex flex-wrap gap-2.5" :aria-label="`${group.title} skills`">
          <li
            v-for="skill in group.skills"
            :key="skill"
            class="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-sm font-medium text-emerald-50"
          >
            {{ skill }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
