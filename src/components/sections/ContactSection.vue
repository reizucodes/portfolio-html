<script setup lang="ts">
import { ref } from 'vue';
import type { ContactLink } from '../../types/content';

defineProps<{
  links: readonly ContactLink[];
}>();

const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle');
const message = ref('');

const formAction = 'https://formspree.io/f/xdajnpde';

const iconPaths: Record<string, string> = {
  Email:
    'M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z',
  GitHub:
    'M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.55-3.88-1.55-.52-1.3-1.27-1.65-1.27-1.65-1.04-.72.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.17a10.8 10.8 0 0 1 5.8 0c2.21-1.48 3.18-1.17 3.18-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.39-5.25 5.67.41.35.77 1.08.77 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z',
  LinkedIn:
    'M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5ZM.5 8H4.5V24H.5V8ZM7.5 8H11.3V10.2H11.4C11.93 9.2 13.24 8 15.2 8 19.26 8 20 10.67 20 14.14V24H16V16.9C16 15.2 15.97 13.02 13.63 13.02 11.26 13.02 10.9 14.87 10.9 16.78V24H7V8Z',
};

const onSubmit = async (event: Event): Promise<void> => {
  event.preventDefault();
  const form = event.currentTarget as HTMLFormElement | null;

  if (!form) {
    return;
  }

  status.value = 'sending';
  message.value = 'Sending message...';

  try {
    const response = await fetch(formAction, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      status.value = 'success';
      message.value = 'Message sent successfully.';
      form.reset();
      return;
    }

    status.value = 'error';
    message.value = 'Something went wrong. Please try again.';
  } catch {
    status.value = 'error';
    message.value = 'Network error. Please try again later.';
  }
};
</script>

<template>
  <section id="contact" aria-labelledby="contact-heading" class="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 p-8 shadow-xl">
    <h2 id="contact-heading" class="text-2xl font-bold tracking-tight text-white sm:text-3xl">Let's Connect</h2>
    <div class="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <form
        id="contactForm"
        :action="formAction"
        method="POST"
        class="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-5"
        @submit="onSubmit"
      >
        <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
        <label class="block">
          <span class="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200">Name</span>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your Name"
            class="w-full rounded-xl border border-white/15 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400"
          />
        </label>
        <label class="block">
          <span class="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200">Email</span>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Your Email"
            class="w-full rounded-xl border border-white/15 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400"
          />
        </label>
        <label class="block">
          <span class="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200">Message</span>
          <textarea
            id="message"
            name="message"
            rows="6"
            required
            placeholder="Your Message"
            class="w-full rounded-xl border border-white/15 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400"
          ></textarea>
        </label>
        <button
          type="submit"
          class="inline-flex rounded-full bg-emerald-300 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-70"
          :disabled="status === 'sending'"
        >
          {{ status === 'sending' ? 'Sending...' : 'Send Message' }}
        </button>
        <p
          v-if="status !== 'idle'"
          aria-live="polite"
          :class="[
            'text-sm',
            status === 'success' ? 'text-emerald-200' : '',
            status === 'error' ? 'text-rose-200' : '',
            status === 'sending' ? 'text-slate-300' : '',
          ]"
        >
          {{ message }}
        </p>
      </form>

      <div class="rounded-2xl border border-white/10 bg-black/20 p-5">
        <h3 class="text-sm font-semibold uppercase tracking-[0.12em] text-emerald-200">Direct Connect</h3>
        <p class="mt-3 text-sm leading-relaxed text-slate-300">
          Best fit for full-stack product and platform roles where APIs, internal tools, and workflow systems matter.
        </p>
        <ul class="mt-3 space-y-2 text-sm text-slate-300">
          <li><span class="font-semibold text-slate-100">Availability:</span> Open to full-stack product and platform roles</li>
          <li><span class="font-semibold text-slate-100">Best Fit:</span> Web apps, API-driven systems, developer tooling, and product engineering</li>
          <li><span class="font-semibold text-slate-100">Recent scope:</span> Payments, logistics, dashboards, and internal tooling</li>
          <li><span class="font-semibold text-slate-100">Preferred path:</span> Email or LinkedIn for role discussions and collaboration</li>
        </ul>
      </div>
    </div>

    <footer class="mt-6 border-t border-white/10 pt-5">
      <ul class="flex items-center justify-center gap-3">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            :target="link.href.startsWith('mailto:') ? undefined : '_blank'"
            :rel="link.href.startsWith('mailto:') ? undefined : 'noreferrer noopener'"
            :aria-label="link.label === 'Email' ? 'Send email to John Blaise Bueno' : `Open ${link.label}`"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-emerald-100 transition hover:bg-emerald-300/20 hover:text-white"
          >
            <svg v-if="iconPaths[link.label]" viewBox="0 0 24 24" class="h-5 w-5 fill-current">
              <path :d="iconPaths[link.label]" />
            </svg>
            <span v-else class="text-xs font-semibold">{{ link.label.slice(0, 2) }}</span>
          </a>
        </li>
      </ul>
    </footer>
  </section>
</template>
