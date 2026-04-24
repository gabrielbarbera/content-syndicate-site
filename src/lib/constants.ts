import type { Content, ProcessStep, StatItem } from "../types/content";

export const CONTENT: Content = {
  name: "Content Syndicate",
  shortName: "CS",
  heroTitle: "Stop Being Invisible.",
  heroAccent: "Start Getting Noticed.",
  heroSub:
    'The digital noise is louder than ever. If your brand isn\'t appearing in the headlines or showing up in AI-generated search results, you don\'t have a marketing problem—you have an existence problem.\n\nAt Content Syndicate, we bridge the gap between "best-kept secret" and "industry authority." Whether you\'re a marketing agency looking to scale your clients or a business owner ready for the big leagues, we provide the high-authority fuel your brand needs to ignite.',
  about:
    'We bridge the gap between "best-kept secret" and "industry authority." High-authority fuel for brands ready to ignite.',
  packages: [
    {
      name: "Pro",
      icon: "Zap",
      includes: ["Yahoo Finance", "Street Insider", "Benzinga", "Google indexing"],
      listPrice: 295,
      promoPrice: 195,
    },
    {
      name: "Elite",
      icon: "Shield",
      includes: ["Business Insider", "Barchart", "Street Insider", "300+ placements"],
      listPrice: 395,
      promoPrice: 295,
    },
    {
      name: "Disclosure",
      icon: "Globe",
      includes: ["Pro circuit", "APNews", "Business Insider", "MarketWatch", "500+ placements"],
      listPrice: 495,
      promoPrice: 395,
    },
  ],
  priceRange: "$295 – $495",
  comparison: [
    {
      feature: "Trust & Credibility",
      with: "84% boost in brand trust",
      without: 'Seen as "just another ad"',
    },
    {
      feature: "Search Visibility",
      with: "85.5% of AI citations come from earned media",
      without: "Struggling against 2026 algorithm shifts",
    },
    {
      feature: "Conversion Rates",
      with: "Up to 47% higher deal-close rates",
      without: 'High bounce rates due to lack of "social proof"',
    },
    {
      feature: "SEO Impact",
      with: "Backlinks from sites (Yahoo. Finance, Business Insider, Market Watch, Street Insider, Benzinga)",
      without: "Relying on low-tier, ignored guest posts",
    },
  ],
};

export const STATS: StatItem[] = [
  { icon: "TrendingUp", value: "84%", label: "Trust Boost" },
  { icon: "Sparkles", value: "85.5%", label: "AI Citation Rate" },
  { icon: "BarChart3", value: "47%", label: "Higher Conversion" },
  { icon: "Users", value: "2.5k", label: "Active Agencies" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Create a Free Account",
    description:
      "It takes 5 minutes. Upload your logo and provide your contact and company information.",
  },
  {
    step: "02",
    title: "Get Verified",
    description:
      "We verify your account and email address to maintain our high-authority network standards.",
  },
  {
    step: "03",
    title: "Upload & Distribute",
    description:
      "Once verified, log back in, select the Package you want and upload your press release. We'll distribute it across our network of high-authority media outlets.",
  },
];

export const SIGNUP_URL = "https://admin.contentsyndicate.net/signup";
