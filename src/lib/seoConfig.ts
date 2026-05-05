interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  robots?: string;
}

export const SEO_CONFIG: Record<string, SEOConfig> = {
  "/": {
    title: "Content Syndicate | High-Authority Press Release Distribution",
    description:
      "Transparent, pay-as-you-go press release distribution from $295. Target your press releases to the media and influencers that matter. AP News, Business Insider, MarketWatch, Yahoo Finance, and 500+ placements.",
    keywords:
      "press release distribution, PR distribution service, newswire, AP News press release, Yahoo Finance press release, Business Insider press release, MarketWatch press release, financial disclosure distribution, Google News indexed press release, BeSpoke PR",
    canonical: "https://contentsyndicate.net/",
    ogImage: "https://contentsyndicate.net/opengraph.png",
  },
  "/solutions": {
    title: "PR Solutions by Use Case | Content Syndicate",
    description:
      "Press release distribution solutions for public companies, private companies, startups, agencies, and brands. Target your news to the media and influencers that matter.",
    canonical: "https://contentsyndicate.net/solutions",
    ogImage: "https://contentsyndicate.net/opengraph.png",
  },
  "/bespoke": {
    title: "BeSpoke Custom PR Campaigns | Content Syndicate",
    description:
      "BeSpoke by Content Syndicate: custom, multi-platform press and media campaigns built around a specific project, launch, or ongoing communications program.",
    canonical: "https://contentsyndicate.net/bespoke",
    ogImage: "https://contentsyndicate.net/opengraph.png",
  },
  "/newsroom": {
    title: "Newsroom | Content Syndicate",
    description:
      "Browse the latest press releases distributed through the Content Syndicate network across finance, technology, consumer, and industry categories.",
    canonical: "https://contentsyndicate.net/newsroom",
    ogImage: "https://contentsyndicate.net/opengraph.png",
  },
  "/pricing": {
    title: "Pricing | Content Syndicate",
    description:
      "Choose your launchpad. Transparent, pay-as-you-go pricing for high-authority distribution. Pro at $295, Elite at $395, Disclosure at $495 per release.",
    canonical: "https://contentsyndicate.net/pricing",
    ogImage: "https://contentsyndicate.net/opengraph.png",
  },
  "/contact": {
    title: "Contact Us | Content Syndicate",
    description:
      "Contact Content Syndicate for package guidance, BeSpoke campaign planning, and press release partnership inquiries. Email support@contentsyndicate.net.",
    canonical: "https://contentsyndicate.net/contact",
    ogImage: "https://contentsyndicate.net/opengraph.png",
  },
  "/about": {
    title: "About Us | Content Syndicate",
    description:
      "Learn about Content Syndicate's mission to provide transparent, high-authority press release distribution with pay-as-you-go pricing.",
    canonical: "https://contentsyndicate.net/about",
    ogImage: "https://contentsyndicate.net/opengraph.png",
  },
  "/privacy": {
    title: "Privacy Policy | Content Syndicate",
    description: "Privacy policy for the Content Syndicate press release distribution platform.",
    canonical: "https://contentsyndicate.net/privacy",
    ogImage: "https://contentsyndicate.net/opengraph.png",
  },
  "/terms": {
    title: "Terms and Conditions | Content Syndicate",
    description:
      "Terms and conditions for the Content Syndicate press release distribution platform.",
    canonical: "https://contentsyndicate.net/terms",
    ogImage: "https://contentsyndicate.net/opengraph.png",
  },
  "/editorial-guidelines": {
    title: "Editorial Guidelines | Content Syndicate",
    description:
      "Content Syndicate editorial guidelines for press release submissions. Quality standards and best practices for effective distribution.",
    canonical: "https://contentsyndicate.net/editorial-guidelines",
    ogImage: "https://contentsyndicate.net/opengraph.png",
  },
  "/writing-tips": {
    title: "Press Release Writing Tips | Content Syndicate",
    description:
      "Expert tips and best practices for writing effective press releases that get media coverage and results.",
    canonical: "https://contentsyndicate.net/writing-tips",
    ogImage: "https://contentsyndicate.net/opengraph.png",
  },
  "/login": {
    title: "Log In | Content Syndicate",
    description:
      "Log in to Content Syndicate to manage press release submissions, placements, and reporting.",
    canonical: "https://admin.contentsyndicate.net/signin",
    robots: "noindex, nofollow",
  },
  "/register": {
    title: "Get Started | Content Syndicate",
    description:
      "Create your Content Syndicate account to submit press releases and track placements across the distribution network.",
    canonical: "https://admin.contentsyndicate.net/signup",
    robots: "noindex, nofollow",
  },
};

export function getSEOConfig(pathname: string): SEOConfig {
  return SEO_CONFIG[pathname] || SEO_CONFIG["/"];
}
