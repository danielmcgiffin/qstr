<script lang="ts">
  import "../app.css";
  import "./layout.css";
  import { env } from "$env/dynamic/public";
  import { page } from "$app/stores";
  import { trackEvent } from "$lib/analytics";
  import { site } from "$lib/site";

  let { children } = $props();

  const plausibleDomain = env.PUBLIC_PLAUSIBLE_DOMAIN || "cursus.tools";

  const proxyPrefix = $derived.by(() => {
    const match = $page.url.pathname.match(/^\/proxy\/\d+/);
    return match ? match[0] : "";
  });
  const logoSrc = $derived(`${proxyPrefix}/quaestor-logo.png`);
  const faviconHref = $derived(`${proxyPrefix}/favicon.png`);

  const trackNavClick = (label: string, href: string) => {
    const location = `header_nav_${label.toLowerCase().replace(/\s+/g, "_")}`;

    if (href.includes("demo/process")) {
      trackEvent("demo_click", { location });
    }

    if (href.includes("cal.com")) {
      trackEvent("booking_click", { location });
    }

    if (href.includes("qstr.cursus.tools/login")) {
      trackEvent("signup_start", { location });
    }
  };
</script>

<svelte:head>
  <link rel="icon" type="image/png" href={faviconHref} />
  <script
    defer
    data-domain={plausibleDomain}
    src="https://plausible.io/js/script.tagged-events.outbound-links.js"
  ></script>
</svelte:head>

<header
  class="sticky top-0 z-50 border-b border-transparent bg-black/70 backdrop-blur-xl supports-[backdrop-filter]:bg-black/50"
  style="border-image: linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent) 1;"
>
  <div class="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
    <a href="/" class="flex items-center gap-3">
      <img src={logoSrc} alt={`${site.brand} logo`} class="h-8 w-auto" loading="eager" />
    </a>

    <nav class="hidden items-center gap-6 md:flex">
      {#each site.nav as item}
        <a
          class="text-sm text-[rgb(var(--muted))] transition-colors duration-200 hover:text-white"
          href={item.href}
          onclick={() => trackNavClick(item.label, item.href)}
        >
          {item.label}
        </a>
      {/each}
    </nav>

    <div class="flex items-center gap-2">
      <a
        class="hidden rounded-xl border border-[rgb(var(--border))] bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition-colors duration-200 hover:bg-white/10 sm:inline-flex"
        href={site.navCta.href}
        target="_blank"
        rel="noreferrer"
        onclick={() => trackEvent("booking_click", { location: "header_book_call" })}
      >
        {site.navCta.label}
      </a>
      <a
        class="inline-flex items-center gap-2 rounded-xl bg-[rgb(var(--accent))] px-4 py-2 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)] transition hover:brightness-110"
        href={site.hero.primaryCta.href}
        onclick={() => trackEvent("signup_start", { location: "header_get_started" })}
      >
        Get started →
      </a>
    </div>
  </div>
</header>

{@render children()}
