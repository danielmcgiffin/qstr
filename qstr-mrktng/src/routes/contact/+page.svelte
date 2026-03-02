<script lang="ts">
  import { trackEvent } from "$lib/analytics";
</script>

<svelte:head>
  <title>Contact — Quaestor</title>
  <meta
    name="description"
    content="Talk with Quaestor about self-serve rollout, implementation support, or partnership opportunities."
  />
</svelte:head>

<div class="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--text))]">
  <section class="relative py-20 md:py-24">
    <div class="mx-auto w-full max-w-5xl px-6">
      <div class="mx-auto max-w-3xl text-center">
        <span
          class="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-white/5 px-3 py-1 text-xs text-white/80"
        >
          Contact
        </span>
        <h1 class="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          Let's map your first bottleneck
        </h1>
        <p class="mt-4 text-pretty text-[rgb(var(--muted))] md:text-lg">
          Whether you're launching self-serve, need implementation support, or want to discuss the partner program,
          start with a short call.
        </p>
      </div>

      <div class="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
        <div class="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))] p-6">
          <h2 class="text-base font-semibold">Founders and operators</h2>
          <p class="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">
            Walk through your highest-friction workflow and see how quickly it can be mapped into a usable
            operational atlas.
          </p>
          <a
            class="mt-6 inline-flex rounded-xl bg-[rgb(var(--accent))] px-4 py-2 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)] hover:brightness-110"
            href="https://cal.com/danny-cursus/15min"
            target="_blank"
            rel="noreferrer"
            onclick={() => trackEvent("booking_click", { location: "contact_founder_card" })}
          >
            Book a 15-min call →
          </a>
        </div>

        <div class="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))] p-6">
          <h2 class="text-base font-semibold">Partners and fractionals</h2>
          <p class="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">
            If you deploy ops systems across client engagements, let's review fit and partner motion.
          </p>
          <a
            class="mt-6 inline-flex rounded-xl border border-[rgb(var(--border))] bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10"
            href="/partners"
          >
            View partner details
          </a>
          <div class="mt-3">
            <a
              class="inline-flex text-sm text-[rgb(var(--muted))] hover:text-white"
              href="https://cal.com/danny-cursus/15min"
              target="_blank"
              rel="noreferrer"
              onclick={() => trackEvent("booking_click", { location: "contact_partner_card" })}
            >
              Or book directly →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
