<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, useTemplateRef, watch } from 'vue';

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
const modalPanelRef = useTemplateRef<HTMLElement>('modalPanelRef');
const previousFocusedElement = ref<HTMLElement | null>(null);
const focusableSelectors = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

const selectedProject = computed(() =>
  selectedProjectId.value
    ? props.projects.find((project) => project.id === selectedProjectId.value) ?? null
    : null,
);
const projectTagLimit = computed(() => (props.variant === 'case-study' ? 3 : 2));

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
    return;
  }

  if (event.key !== 'Tab' || !selectedProject.value) {
    return;
  }

  const focusableElements = Array.from(
    modalPanelRef.value?.querySelectorAll<HTMLElement>(focusableSelectors) ?? [],
  ).filter((element) => !element.hasAttribute('disabled') && element.tabIndex !== -1);

  if (!focusableElements.length) {
    event.preventDefault();
    modalPanelRef.value?.focus();
    return;
  }

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (!firstElement || !lastElement) {
    return;
  }

  const activeElement = document.activeElement as HTMLElement | null;

  if (event.shiftKey && activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (!event.shiftKey && activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
};

watch(selectedProject, async (project) => {
  if (project) {
    document.body.classList.add('overflow-hidden');
    await nextTick();
    closeButtonRef.value?.focus();
    return;
  }

  document.body.classList.remove('overflow-hidden');
});

window.addEventListener('keydown', onKeydown);
onBeforeUnmount(() => {
  document.body.classList.remove('overflow-hidden');
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

    <div :class="variant === 'case-study' ? 'grid gap-5 xl:grid-cols-3' : 'grid gap-4 md:grid-cols-2'">
      <article
        v-for="project in projects"
        :key="project.id"
        :class="[
          'flex h-full flex-col rounded-2xl border',
          variant === 'case-study'
            ? 'border-white/10 bg-slate-950/75 p-6 shadow-xl'
            : 'border-slate-800/90 bg-slate-950/55 p-4 shadow-sm',
        ]"
      >
        <div class="flex items-start justify-between gap-3">
          <h3 :class="variant === 'case-study' ? 'text-xl font-semibold text-white' : 'text-lg font-semibold text-white'">{{ project.title }}</h3>
          <span
            class="rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]"
            :class="variant === 'case-study'
              ? 'border-emerald-300/30 bg-emerald-400/10 text-emerald-200'
              : project.tier === 'secondary'
                ? 'border-cyan-300/30 bg-cyan-400/10 text-cyan-200'
                : 'border-white/15 bg-white/5 text-slate-300'"
          >
            {{ variant === 'case-study' ? 'Flagship' : project.tier === 'secondary' ? 'Secondary' : 'Supporting' }}
          </span>
        </div>

        <p :class="variant === 'case-study' ? 'mt-3 text-sm leading-relaxed text-slate-300' : 'mt-2 text-sm leading-relaxed text-slate-300'">
          {{ project.valueProposition }}
        </p>
        <div
          :class="[
            'mt-4 rounded-2xl border px-4 py-3',
            variant === 'case-study'
              ? 'border-emerald-300/20 bg-emerald-400/10'
              : 'border-white/5 bg-transparent px-0 py-0',
          ]"
        >
          <p
            :class="[
              'text-[11px] font-semibold uppercase tracking-[0.14em]',
              variant === 'case-study' ? 'text-emerald-200' : 'text-slate-500',
            ]"
          >
            {{ variant === 'case-study' ? 'Visible outcome' : 'Outcome' }}
          </p>
          <p :class="variant === 'case-study' ? 'mt-1 text-sm leading-relaxed text-slate-100' : 'mt-1 text-sm leading-relaxed text-slate-300'">
            {{ project.proofLine }}
          </p>
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tag in project.tags.slice(0, projectTagLimit)"
            :key="tag"
            :class="[
              'rounded-full border px-2.5 py-1 text-xs font-semibold',
              variant === 'case-study'
                ? 'border-emerald-300/30 bg-emerald-400/10 text-emerald-100'
                : 'border-white/10 bg-white/5 text-slate-200',
            ]"
          >
            {{ tag }}
          </span>
        </div>

        <div :class="variant === 'case-study' ? 'mt-5 flex flex-wrap items-end justify-between gap-4' : 'mt-4 flex flex-wrap items-end justify-between gap-4'">
          <div class="flex flex-wrap gap-x-4 gap-y-2">
            <a
              v-for="link in project.links"
              :key="link.href"
              :href="link.href"
              target="_blank"
              rel="noreferrer noopener"
              :aria-label="`${link.label} for ${project.title}`"
              :class="variant === 'case-study'
                ? 'text-sm font-semibold text-emerald-200 underline decoration-emerald-400/70 underline-offset-3 hover:text-emerald-100'
                : 'text-sm font-medium text-slate-300 underline decoration-slate-500/60 underline-offset-3 hover:text-slate-100'"
            >
              {{ link.label }}
            </a>
          </div>

          <button
            type="button"
            :class="[
              'ml-auto rounded-full border border-white/20 bg-white/5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-100 transition hover:bg-white/15',
              variant === 'case-study' ? 'px-4 py-2' : 'border-white/10 bg-transparent px-3.5 py-2 text-slate-300 hover:bg-white/10 hover:text-slate-100',
            ]"
            @click="openProjectModal(project.id)"
          >
            {{ variant === 'case-study' ? 'View Details' : 'More Details' }}
          </button>
        </div>
      </article>
    </div>

    <Teleport to="body">
      <div
        v-if="selectedProject"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
        @click="onBackdropClick"
      >
        <section
          ref="modalPanelRef"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`${selectedProject.id}-modal-title`"
          :aria-describedby="modalDescriptionId"
          tabindex="-1"
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
