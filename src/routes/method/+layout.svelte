<script lang="ts">
  import { methodSections, methodPath } from "$lib/method";
  import { page } from "$app/stores";

  let { children } = $props();

  const pathname = $derived(() => $page.url.pathname);
  const activeIndex = $derived(() =>
    methodSections.findIndex((section) => pathname === methodPath(section.slug))
  );
  const isOverview = $derived(() => pathname === "/method" || pathname === "/method/");
  const progress = $derived(() =>
    activeIndex >= 0 ? (activeIndex + 1) / methodSections.length : 0
  );
</script>

<div class="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--text))]">
  <div class="relative">
    <div aria-hidden class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute left-1/2 top-[-35%] h-[820px] w-[820px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl"></div>
      <div class="absolute right-[12%] top-[20%] h-[360px] w-[360px] rounded-full bg-white/5 blur-3xl"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
      <div
        class="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:26px_26px] opacity-35"
      ></div>
    </div>

    <section class="relative py-12 md:py-16">
      <div class="mx-auto w-full max-w-6xl px-6">
        <div class="grid gap-10 md:grid-cols-[240px_1fr] md:gap-12">
          <aside class="hidden md:block">
            <div class="md:sticky md:top-24">
              <div class="text-xs font-semibold uppercase tracking-[0.14em] text-[rgb(var(--muted))]">Contents</div>
              <ol class="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    class={"block rounded-lg px-2 py-1 " + (isOverview ? "text-white" : "text-[rgb(var(--muted))] hover:text-white")}
                    href="/method"
                  >
                    0. Overview
                  </a>
                </li>
                {#each methodSections as item, i}
                  <li>
                    <a
                      class={"block rounded-lg px-2 py-1 " + (activeIndex === i ? "text-white" : "text-[rgb(var(--muted))] hover:text-white")}
                      href={methodPath(item.slug)}
                    >
                      {i + 1}. {item.title}
                    </a>
                  </li>
                {/each}
              </ol>
            </div>
          </aside>

          <div class="method-page space-y-10 text-base md:text-lg">
            <div class="md:hidden">
              <div class="text-xs font-semibold uppercase tracking-[0.14em] text-[rgb(var(--muted))]">Contents</div>
              <ol class="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    class={"block rounded-lg border border-[rgb(var(--border))] px-3 py-2 " + (isOverview ? "text-white" : "text-[rgb(var(--muted))]")}
                    href="/method"
                  >
                    0. Overview
                  </a>
                </li>
                {#each methodSections as item, i}
                  <li>
                    <a
                      class={"block rounded-lg border border-[rgb(var(--border))] px-3 py-2 " + (activeIndex === i ? "text-white" : "text-[rgb(var(--muted))]")}
                      href={methodPath(item.slug)}
                    >
                      {i + 1}. {item.title}
                    </a>
                  </li>
                {/each}
              </ol>
            </div>

            {#if !isOverview && activeIndex >= 0}
              <div class="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))] px-5 py-4">
                <div class="flex items-center justify-between text-xs text-[rgb(var(--muted))]">
                  <span>Section {activeIndex + 1} of {methodSections.length}</span>
                  <span>{methodSections[activeIndex].title}</span>
                </div>
                <div class="mt-3 h-1.5 w-full rounded-full bg-black/40">
                  <div
                    class="h-1.5 rounded-full bg-[rgb(var(--accent))] transition-[width] duration-300"
                    style={`width:${Math.round(progress * 100)}%`}
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
            {/if}

            {@render children()}
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
