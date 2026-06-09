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
    <!-- uses mobileEyebrow on mobileViewPort -->
    <p class="relative text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/90 md:hidden">
      {{ content.mobileEyebrow ?? content.eyebrow }}
    </p>
    <p class="relative hidden text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/90 md:block">
      {{ content.eyebrow }}
    </p>
    <div class="relative mt-4 max-w-5xl">
      <div>
        <h1 class="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:max-w-4xl lg:text-6xl">
          {{ content.headline }}
        </h1>
        <p class="mt-4 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
          {{ content.supportingLine }}
        </p>
        <ul class="mt-6 flex flex-wrap gap-2.5">
          <li
            v-for="(chip, index) in content.chips"
            :key="chip"
            :class="[
              'rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-medium text-slate-100',
              index > 1 ? 'hidden sm:inline-flex' : 'inline-flex',
            ]"
          >
            {{ chip }}
          </li>
        </ul>
      </div>
    </div>
    <div class="relative mt-8 flex flex-wrap gap-3">
      <a
        v-for="cta in content.ctas"
        :key="cta.label"
        :href="cta.href"
        :class="[
          'rounded-full px-5 py-2.5 text-sm font-semibold transition',
          cta.variant === 'primary'
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
