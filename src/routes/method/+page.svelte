<script lang="ts">
  import { methodSections, methodPath } from "$lib/method";
</script>

<svelte:head>
  <title>Method — Quaestor</title>
  <meta
    name="description"
    content="The Quaestor method: a practical system for mapping, owning, and maintaining how your company runs."
  />
</svelte:head>

<section class="space-y-10">
  <div class="text-center">
    <span
      class="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-white/5 px-3 py-1 text-xs text-white/80"
    >
      ✦ Quaestor Method
    </span>
    <h1 class="mt-6 text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl leading-[1.05]">
      The operational atlas,
      <span class="text-[rgb(var(--accent))]">step by step</span>
    </h1>
    <p class="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[rgb(var(--muted))] md:text-lg">
      Read the method like a playbook. Move through each section while keeping the map in view.
    </p>
    <div class="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:justify-center">
      <a
        class="w-full min-w-[170px] rounded-xl bg-[rgb(var(--accent))] px-4 py-2 text-center text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)] hover:brightness-110 sm:w-auto"
        href={methodPath(methodSections[0].slug)}
      >
        Start at the top →
      </a>
      <a
        class="w-full min-w-[170px] rounded-xl border border-[rgb(var(--border))] bg-white/5 px-4 py-2 text-center text-sm font-medium text-white/90 hover:bg-white/10 sm:w-auto"
        href="https://qstr.cursus.tools/demo/process"
      >
        See the product →
      </a>
    </div>
  </div>

  <ol class="space-y-3">
    {#each methodSections as section, i}
      <li>
        <a
          class="group flex items-start gap-4 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))] px-5 py-4 transition hover:border-[rgb(var(--border-strong))]"
          href={methodPath(section.slug)}
        >
          <span class="text-sm font-semibold text-white">{i + 1}.</span>
          <span class="flex-1">
            <span class="text-sm font-semibold">{section.title}</span>
            <span class="mt-2 block text-sm leading-relaxed text-[rgb(var(--muted))]">{section.summary}</span>
          </span>
          <span class="text-[rgb(var(--muted))] transition group-hover:text-white">→</span>
        </a>
      </li>
    {/each}
  </ol>
</section>
