<script>
  import "../app.css";
  import security from "$lib/assets/security.svg";
  import source from "$lib/assets/source.svg";
  import email from "$lib/assets/email.svg";
  import heart from "$lib/assets/heart.svg";
  import { dev } from "$app/environment";

  let baseUrl = import.meta.env.VITE_BASE_URL || "https://vanish.so";
  let subdomain = import.meta.env.VITE_SITE_SUBDOMAIN;
  let domain = import.meta.env.VITE_SITE_DOMAIN || "vanish";
  let tld = import.meta.env.VITE_SITE_TLD || "so"
  let mailto = import.meta.env.VITE_ADMIN_EMAIL;
</script>

<svelte:head>
  <title>vanish.so - secure vanishing notes</title>
  <meta
    name="description"
    content="open source end-to-end encrypted vanishing notes"
  />

  <meta property="og:url" content="{baseUrl}" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="vanish.so - secure vanishing notes" />
  <meta
    property="og:description"
    content="open source end-to-end encrypted vanishing notes"
  />
  <meta property="og:image" content="{baseUrl}/og.png" />

  <meta name="twitter:card" content="summary_large_image" />
  {#if subdomain} <meta property="twitter:domain" content="{subdomain}.{domain}.{tld}" /> {:else} <meta property="twitter:domain" content="{domain}.{tld}" /> {/if}
  <meta property="twitter:url" content="{baseUrl}" />
  <meta name="twitter:title" content="vanish.so - secure vanishing notes" />
  <meta
    name="twitter:description"
    content="open source end-to-end encrypted vanishing notes"
  />
  <meta name="twitter:image" content="{baseUrl}/og.png" />
</svelte:head>
<main
  class="w-screen h-screen overflow-hidden flex flex-col items-center relative"
>
  <div
    class="absolute mx-auto bg-[#6F32F0]/25 w-[40rem] rounded-[50%] h-[10rem] blur-[100px] -top-48 -z-10"
  />
  <div
    class="absolute mx-auto bg-[#6F32F0] w-[40rem] rounded-[50%] h-[10rem] blur-[200px] -bottom-96 -z-10"
  />
  <div class="flex items-center justify-between w-full max-w-5xl my-6 px-10">
    <a href="/" data-sveltekit-reload>
      <h1 class="font-semibold text-white font-clash text-2xl">
      {#if subdomain} {subdomain}
        <span class="text-[#BCA4F5]/30">.</span>
        <span class="text-[#8F69FA]">{domain}</span>
        <span class="text-[#BCA4F5]/30">.</span>
        <span class="text-[#8F69FA]">{tld}</span>
      {:else} {domain}
        <span class="text-[#BCA4F5]/30">.</span>
        <span class="text-[#8F69FA]">{tld}</span>
      {/if}
      </h1>
    </a>
    <div class="flex items-center gap-6 text-primary font-medium text-sm">
      <a
        href="https://github.com/bvvst/vanishso"
        class="flex gap-2 items-center"
      >
        <img class="h-4 w-4" alt="source icon" src={source} />
        <p class="hover:text-white transition-colors hidden sm:block">
          source code
        </p>
      </a>
      {#if mailto} <a href="mailto:{mailto}" class="flex gap-2 items-center">
        <img class="h-4 w-4" alt="email icon" src={email} />
        <p class="hover:text-white transition-colors hidden sm:block">
          contact
        </p>
      </a> {:else} {/if}
    </div>
  </div>
  <slot />
</main>
