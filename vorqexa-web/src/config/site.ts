export const siteConfig = {
  name: "Vorqexa",
  tagline: "Perpetual trading, built with transparency.",
  // Single source of truth for every "Launch app" / Buy / Sell link.
  dexUrl: "https://dex.vorqexa.xyz/",
  socials: {
    x: null as string | null, // not configured yet
    telegram: "https://t.me/VORQEXACOMMUNITY",
    github: "https://github.com/vorqexa",
    youtube: "https://www.youtube.com/@vorqexa-DEX",
  },
  nav: [
    { label: "Features", href: "/#features" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Infrastructure", href: "/#infrastructure" },
    { label: "Docs", href: "/docs" },
  ],
} as const;