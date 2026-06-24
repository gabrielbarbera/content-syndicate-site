export type IconType = "Zap" | "Shield" | "Globe" | "Sparkles";

export interface Package {
  name: string;
  icon: IconType;
  includes: string[];
  listPrice: number;
  promoPrice: number;
}

export interface ComparisonRow {
  feature: string;
  with: string;
  without: string;
}

export interface HeroService {
  label: string;
  description: string;
}

export interface HeroSubContent {
  intro: string;
  punchline: string;
  subheading: string;
  services: HeroService[];
}

export interface Content {
  name: string;
  shortName: string;
  heroTitle: string;
  heroAccent: string;
  heroSub: HeroSubContent;
  about: string;
  packages: Package[];
  priceRange: string;
  comparison: ComparisonRow[];
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
