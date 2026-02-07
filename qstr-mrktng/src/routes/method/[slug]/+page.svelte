<script lang="ts">
  import { methodPath } from "$lib/method";
  import type { MethodSection } from "$lib/method";
  import type { MethodContentSection } from "$lib/method-content";

  export let data: {
    section: MethodContentSection;
    idx: number;
    prev: MethodSection | null;
    next: MethodSection | null;
  };
</script>

<section class="space-y-6">
  <div>
    <span class="text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--muted))]">
      Section {data.idx + 1}
    </span>
    <h1 class="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{data.section.title}</h1>
    <p class="mt-4 text-pretty text-[rgb(var(--muted))]">{data.section.intro}</p>
  </div>

  {#if data.section.groups.length > 1}
    <div class="space-y-10">
      {#each data.section.groups as group}
        <div>
          {#if group.title}
            <h2>{group.title}</h2>
          {/if}
          <div class="mt-5 space-y-6">
            {#each group.items as item}
              <section id={item.id} class="scroll-mt-24">
                <a class="section-title" href={`#${item.id}`}><h3>{item.title}</h3></a>
                <p class="mt-2">{item.desc}</p>
              </section>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <div class="mt-5 space-y-6">
      {#each data.section.groups[0].items as item}
        <section id={item.id} class="scroll-mt-24">
          <a class="section-title" href={`#${item.id}`}><h3>{item.title}</h3></a>
          <p class="mt-2">{item.desc}</p>
        </section>
      {/each}
    </div>
  {/if}

  <div class="flex items-center justify-between pt-6">
    {#if data.prev}
      <a class="text-sm text-[rgb(var(--muted))]" href={methodPath(data.prev.slug)}>
        ← {data.prev.title}
      </a>
    {:else}
      <span class="text-sm text-[rgb(var(--muted))]">Start here</span>
    {/if}

    {#if data.next}
      <a class="text-sm font-medium text-white" href={methodPath(data.next.slug)}>
        Next: {data.next.title} →
      </a>
    {:else}
      <a class="text-sm font-medium text-white" href="/contact">Talk to us →</a>
    {/if}
  </div>
</section>
