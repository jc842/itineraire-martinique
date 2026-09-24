export interface SiteConfig {
  name: string;
  domain: string;
  url: string;
  description: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; containerId?: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
}

export const siteConfig: SiteConfig = {
  name: "Itinéraire Martinique",
  domain: "itineraire-martinique.com",
  url: "https://itineraire-martinique.com",
  description: "Carnet de route, circuits d'expédition, randonnées volcaniques et plages sauvages pour explorer l'île aux fleurs.",
  repo: "jc842/itineraire-martinique",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "roadbook-editorial",
    fontFamily: "serif",
    colorScheme: "terracotta",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "61",
    containerId: "CusBI7uj",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      mobileSticky: { zoneId: 668, format: "mobileBanner" },
      inContent: { zoneId: 667, format: "mediumRectangle" },
      header: { zoneId: 666, format: "leaderboard" },
      halfPage: { zoneId: 664, format: "halfPage" },
      largeRectangle: { zoneId: 665, format: "largeRectangle" },
      skyscraper: { zoneId: 669, format: "skyscraper" },
    },
  },

  legal: {
    editor: "Éditeur indépendant",
    address: "Guadeloupe / France",
    contactEmail: "contact@itineraire-martinique.com",
    hostName: "Cloudflare Pages & Hetzner",
    hostAddress: "Union Européenne",
  },
};
