<script setup lang="ts">
import { computed, onBeforeUnmount, ref, useTemplateRef, watch } from 'vue';

import type { ProjectCaseStudy } from '../../types/content';

const props = defineProps<{
  id: string;
  title: string;
  intro?: string;
  projects: readonly ProjectCaseStudy[];
  variant: 'case-study' | 'overview';
}>();

const sectionLabelId = `${props.id}-heading`;
const modalDescriptionId = `${props.id}-project-modal-description`;
const selectedProjectId = ref<string | null>(null);
const closeButtonRef = useTemplateRef<HTMLButtonElement>('closeButtonRef');
const previousFocusedElement = ref<HTMLElement | null>(null);

const selectedProject = computed(() =>
  selectedProjectId.value
    ? props.projects.find((project) => project.id === selectedProjectId.value) ?? null
    : null,
);
const showOverviewSplitLayout = computed(
  () => props.variant === 'overview' && props.projects.length === 5,
);
const overviewPrimaryProjects = computed(() =>
  showOverviewSplitLayout.value ? props.projects.slice(0, 3) : props.projects,
);
const overviewSecondaryProjects = computed(() =>
  showOverviewSplitLayout.value ? props.projects.slice(3) : [],
);

const openProjectModal = (projectId: string): void => {
  previousFocusedElement.value = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  selectedProjectId.value = projectId;
};

const closeProjectModal = (): void => {
  selectedProjectId.value = null;

  if (previousFocusedElement.value) {
    previousFocusedElement.value.focus();
    previousFocusedElement.value = null;
  }
};

const onBackdropClick = (event: MouseEvent): void => {
  if (event.target === event.currentTarget) {
    closeProjectModal();
  }
};

const onKeydown = (event: KeyboardEvent): void => {
  if (event.key === 'Escape' && selectedProject.value) {
    closeProjectModal();
  }
};

watch(selectedProject, (project) => {
  if (project) {
    setTimeout(() => closeButtonRef.value?.focus(), 0);
  }
});

window.addEventListener('keydown', onKeydown);
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown);
});
</script>

<template>
  <section
    :id="id"
    :aria-labelledby="sectionLabelId"
    :class="[
      'space-y-6 rounded-3xl border p-6 sm:p-8',
      variant === 'case-study'
        ? 'border-white/10 bg-slate-900/60 shadow-2xl backdrop-blur'
        : 'border-slate-800 bg-slate-900/40',
    ]"
  >
    <div class="space-y-2">
      <h2 :id="sectionLabelId" class="text-2xl font-bold tracking-tight text-white sm:text-3xl">{{ title }}</h2>
      <p v-if="intro" class="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">{{ intro }}</p>
    </div>

    <div :class="variant === 'case-study' ? 'grid gap-5 xl:grid-cols-3' : 'grid gap-5 md:grid-cols-2 xl:grid-cols-3'">
      <article
        v-for="project in overviewPrimaryProjects"
        :key="project.id"
        :class="[
          'flex h-full flex-col rounded-2xl border p-5',
          variant === 'case-study'
            ? 'border-white/10 bg-slate-950/70 shadow-lg'
            : 'border-slate-700 bg-slate-900',
        ]"
      >
        <div class="flex items-start justify-between gap-3">
          <h3 class="text-lg font-semibold text-white">{{ project.title }}</h3>
          <span
            class="rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]"
            :class="variant === 'case-study'
              ? 'border-emerald-300/30 bg-emerald-400/10 text-emerald-200'
              : 'border-cyan-300/30 bg-cyan-400/10 text-cyan-200'"
          >
            {{ variant === 'case-study' ? 'Featured' : 'Portfolio' }}
          </span>
        </div>

        <p class="mt-2 text-sm text-slate-300">{{ project.valueProposition }}</p>

        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-100"
          >
            {{ tag }}
          </span>
        </div>

        <div class="mt-5 flex flex-wrap gap-3">
          <a
            v-for="link in project.links"
            :key="link.href"
            :href="link.href"
            target="_blank"
            rel="noreferrer noopener"
            :aria-label="`${link.label} for ${project.title}`"
            class="text-sm font-semibold text-emerald-200 underline decoration-emerald-400/70 underline-offset-3 hover:text-emerald-100"
          >
            {{ link.label }}
          </a>
        </div>

        <button
          type="button"
          class="mt-5 w-fit rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-100 transition hover:bg-white/15"
          @click="openProjectModal(project.id)"
        >
          View Details
        </button>
      </article>
    </div>

    <div
      v-if="showOverviewSplitLayout"
      class="grid gap-5 md:grid-cols-2 xl:mx-auto xl:max-w-4xl"
    >
      <article
        v-for="project in overviewSecondaryProjects"
        :key="`secondary-${project.id}`"
        class="flex h-full flex-col rounded-2xl border border-slate-700 bg-slate-900 p-5"
      >
        <div class="flex items-start justify-between gap-3">
          <h3 class="text-lg font-semibold text-white">{{ project.title }}</h3>
          <span class="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-200">
            Portfolio
          </span>
        </div>

        <p class="mt-2 text-sm text-slate-300">{{ project.valueProposition }}</p>

        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tag in project.tags"
            :key="`secondary-${project.id}-${tag}`"
            class="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-100"
          >
            {{ tag }}
          </span>
        </div>

        <div class="mt-5 flex flex-wrap gap-3">
          <a
            v-for="link in project.links"
            :key="`secondary-${project.id}-${link.href}`"
            :href="link.href"
            target="_blank"
            rel="noreferrer noopener"
            :aria-label="`${link.label} for ${project.title}`"
            class="text-sm font-semibold text-emerald-200 underline decoration-emerald-400/70 underline-offset-3 hover:text-emerald-100"
          >
            {{ link.label }}
          </a>
        </div>

        <button
          type="button"
          class="mt-5 w-fit rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-100 transition hover:bg-white/15"
          @click="openProjectModal(project.id)"
        >
          View Details
        </button>
      </article>
    </div>

    <Teleport to="body">
      <div
        v-if="selectedProject"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
        @click="onBackdropClick"
      >
        <section
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`${selectedProject.id}-modal-title`"
          :aria-describedby="modalDescriptionId"
          class="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/15 bg-slate-900 p-5 shadow-2xl sm:p-6"
        >
          <div class="mb-4 flex items-start justify-between gap-4">
            <h3 :id="`${selectedProject.id}-modal-title`" class="text-xl font-bold tracking-tight text-white sm:text-2xl">
              {{ selectedProject.title }}
            </h3>
            <button
              ref="closeButtonRef"
              type="button"
              class="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-100 transition hover:bg-white/15"
              @click="closeProjectModal"
            >
              Close
            </button>
          </div>

          <div :id="modalDescriptionId" class="space-y-4 text-sm">
            <p class="leading-relaxed text-slate-200">{{ selectedProject.valueProposition }}</p>
            <p class="leading-relaxed text-slate-300"><span class="font-semibold text-white">Problem / context:</span> {{ selectedProject.problemContext }}</p>
            <p class="leading-relaxed text-slate-300"><span class="font-semibold text-white">What built:</span> {{ selectedProject.whatBuilt }}</p>

            <div v-if="selectedProject.technicalHighlights.length" class="space-y-1">
              <p class="font-semibold text-white">Technical highlights</p>
              <ul class="list-disc space-y-1 pl-5 text-slate-300">
                <li v-for="highlight in selectedProject.technicalHighlights" :key="highlight">{{ highlight }}</li>
              </ul>
            </div>

            <div v-if="selectedProject.deepDive?.architectureDecisions?.length || selectedProject.deepDive?.engineeringDetails?.length" class="space-y-3">
              <p class="font-semibold text-white">Architecture / engineering notes</p>
              <ul v-if="selectedProject.deepDive?.architectureDecisions?.length" class="list-disc space-y-1 pl-5 text-slate-300">
                <li v-for="decision in selectedProject.deepDive.architectureDecisions" :key="decision">{{ decision }}</li>
              </ul>
              <ul v-if="selectedProject.deepDive?.engineeringDetails?.length" class="list-disc space-y-1 pl-5 text-slate-300">
                <li v-for="detail in selectedProject.deepDive.engineeringDetails" :key="detail">{{ detail }}</li>
              </ul>
            </div>

            <div v-if="selectedProject.deepDive?.lessonsLearned?.length" class="space-y-1">
              <p class="font-semibold text-white">Lessons learned</p>
              <ul class="list-disc space-y-1 pl-5 text-slate-300">
                <li v-for="lesson in selectedProject.deepDive.lessonsLearned" :key="lesson">{{ lesson }}</li>
              </ul>
            </div>

            <div class="space-y-2">
              <p class="font-semibold text-white">Stack</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in selectedProject.tags"
                  :key="`modal-${tag}`"
                  class="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-100"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <div class="flex flex-wrap gap-3 border-t border-white/10 pt-4">
              <a
                v-for="link in selectedProject.links"
                :key="`modal-${link.href}`"
                :href="link.href"
                target="_blank"
                rel="noreferrer noopener"
                :aria-label="`${link.label} for ${selectedProject.title}`"
                class="text-sm font-semibold text-emerald-200 underline decoration-emerald-400/70 underline-offset-3 hover:text-emerald-100"
              >
                {{ link.label }}
              </a>
            </div>
          </div>
        </section>
      </div>
    </Teleport>
  </section>
</template>
