import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle2,
  Globe,
  Home,
  Palette,
  Shield,
  ShoppingBag,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { PageHeader } from "../components/layout/PageHeader";
import FinalCTASection from "../components/sections/FinalCTASection";
import SEO from "../components/SEO";

const INDIVIDUALS_SEGMENTS = [
  {
    icon: Palette,
    title: "Artists & Authors",
    description:
      'Turn gallery openings or book launches into national cultural events with "As Seen On" credentials that increase the appraisal value of your work.',
  },
  {
    icon: ShoppingBag,
    title: "Resellers & Curators",
    description:
      "Build institutional trust and establish provenance, allowing you to command premium margins and attract a global buyer base. This approach is perfect for resellers on platforms like WhatNot who want to cement their credibility and transform a high-energy stream into a professional, world-class storefront.",
  },
  {
    icon: TrendingUp,
    title: "Influencers & E-commerce Founders",
    description:
      "Move beyond the algorithm. Professional news distribution signals to investors and retail partners that you are a serious business entity.  Perfect for Shopify, Etsy, eBay, and other e-commerce platforms.",
  },
  {
    icon: BarChart3,
    title: "Wealth Advisors",
    description:
      'Bypass the "cold start" of prospecting by appearing in financial news feeds as a recognized expert with a documented track record.',
  },
  {
    icon: Home,
    title: "Real Estate & Luxury Professionals",
    description:
      "Establish yourself as the definitive local authority with releases for significant listings and record-breaking sales.",
  },
];

const INDIVIDUALS_AUDIT = [
  "The Google Test: Do searches yield a fragmented social trail or a unified ecosystem of news and insights?",
  "The Methodology Gap: Do you have a single document explaining why your process beats 90% of competitors?",
  'Third-Party Validation: Does your expertise live beyond your own platforms in the form of "Earned Media"?',
  "Sales Friction: Does your published authority do the selling before you even pick up the phone?",
  "The Data Lead: Do you cite other people's statistics, or does the industry cite yours?",
];

const INDIVIDUALS_ADVANTAGE = [
  "Search Engine Dominance: Own the first page of Google with high-authority news results.",
  'Permanent Social Proof: Feature prestigious media logos to instantly lower the "trust barrier."',
  "The Metadata Moat: Boost your personal SEO with strategic backlinks from trusted newsrooms.",
  "Due Diligence Ready: Build a documented history of milestones for future partners or investors.",
];

const BUSINESSES_SEGMENTS = [
  {
    icon: TrendingUp,
    title: "Startups & Growing Businesses",
    description:
      'Bridge the "credibility gap" during rapid scaling by documenting funding and product pivots in the news.',
  },
  {
    icon: Building2,
    title: "Family Businesses & Legacies",
    description:
      "Modernize your reputation while preserving your values by archiving multi-generational milestones in the global press.",
  },
  {
    icon: BarChart3,
    title: "Mid-Sized Firms",
    description:
      '"Punch above your weight class" by appearing in the same news feeds as Fortune 500 giants.',
  },
  {
    icon: Briefcase,
    title: "B2B & Service Agencies",
    description:
      'Transform case studies into industry news, moving from "service provider" to "thought leader."',
  },
  {
    icon: Globe,
    title: "Consumer Brands",
    description:
      "Escape the ad-spend trap with a permanent digital paper trail that signals stability to partners and consumers.",
  },
];

const BUSINESSES_AUDIT = [
  'The Due Diligence Test: Does your Google footprint look like a "ghost town" or a consistent timeline of growth?',
  "The Competitive Moat: Do you own the narrative for your niche, or are you reacting to your competitors' news?",
  "Sales Momentum: Does your media history do the heavy lifting before the first discovery call?",
  'The "As Seen On" Factor: Is your growth documented by third-party outlets or only on your own blog?',
  "Search Real Estate: Do you own the search results for your brand, or is it cluttered with irrelevant noise?",
];

const BUSINESSES_ADVANTAGE = [
  "Institutional Memory: Create a historical record that adds tangible value during valuations or acquisitions.",
  "Cost-Effective Scalability: Achieve global visibility for a fraction of the cost of traditional advertising.",
  "The Metadata Shield: Protect your brand with a moat of high-authority backlinks and keyword relevance.",
  "Instant Trust Signals: Lower the risk barrier for new clients with the authority of major news mastheads.",
];

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState<"individuals" | "businesses">("individuals");

  const isIndividuals = activeTab === "individuals";

  return (
    <>
      <SEO />
      <PageHeader
        title="Solutions"
        subtitle="Distribution strategies built for your unique professional goals"
        overline="Solutions"
      />

      {/* Tab Toggle */}
      <section className="bg-white border-b border-zinc-100 sticky top-[97px] z-30">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-20 py-4 flex justify-center">
          <div
            className="inline-flex rounded-full border border-zinc-200 bg-zinc-50 p-1 gap-1"
            role="tablist"
          >
            <button
              onClick={() => setActiveTab("individuals")}
              role="tab"
              aria-selected={isIndividuals}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                isIndividuals ? "bg-dark text-white shadow-lg" : "text-gray-500 hover:text-dark"
              }`}
            >
              For Individuals
            </button>
            <button
              onClick={() => setActiveTab("businesses")}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                !isIndividuals ? "bg-dark text-white shadow-lg" : "text-gray-500 hover:text-dark"
              }`}
            >
              For Businesses
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {isIndividuals ? (
          <motion.div
            key="individuals"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Hero section */}
            <section className="relative overflow-hidden bg-white py-24 lg:py-32 border-b border-zinc-200">
              <div className="absolute inset-0 grid-pattern opacity-40" />
              <div className="mx-auto max-w-[1400px] px-6 lg:px-20 relative z-10">
                <div className="max-w-3xl mb-16">
                  <span className="inline-block mb-4 text-sm font-bold text-accent uppercase tracking-[0.3em]">
                    For Individuals
                  </span>
                  <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter font-display text-dark mb-6 leading-tight">
                    The Specialist's
                    <span className="block editorial-heading text-accent mt-2">
                      Distribution Strategy
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    We don't just "blast" a wire; we architect a narrative that serves your unique
                    professional goals.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {INDIVIDUALS_SEGMENTS.map((seg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: idx * 0.08, duration: 0.5 }}
                      className="group rounded-2xl border border-zinc-200 bg-white p-8 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500"
                    >
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-dark transition-all duration-300">
                        <seg.icon size={26} />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-dark group-hover:text-accent transition-colors">
                        {seg.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed">{seg.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Brand Authority Audit */}
            <section className="relative overflow-hidden bg-dark py-24 lg:py-32">
              <div className="absolute inset-0 grid-pattern-dark opacity-20" />
              <div className="mx-auto max-w-[1400px] px-6 lg:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                  <div>
                    <span className="inline-block mb-4 text-sm font-bold text-accent uppercase tracking-[0.3em]">
                      The Brand Authority Audit
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-bold tracking-tight font-display text-white mb-6 leading-tight">
                      Is your brand a{" "}
                      <span className="editorial-heading text-accent">
                        Participant or a Powerhouse?
                      </span>
                    </h2>
                    <div className="space-y-4 mt-10">
                      {INDIVIDUALS_AUDIT.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/5 hover:border-accent/40 hover:bg-white/10 transition-all duration-300"
                        >
                          <Users size={18} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 leading-relaxed">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:pt-16">
                    <span className="inline-block mb-4 text-sm font-bold text-accent uppercase tracking-[0.3em]">
                      The Press Release Advantage
                    </span>
                    <div className="space-y-4">
                      {INDIVIDUALS_ADVANTAGE.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex items-start gap-4"
                        >
                          <CheckCircle2 size={20} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 leading-relaxed">{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.a
                      href="https://admin.contentsyndicate.net/signup"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="mt-10 inline-flex items-center gap-3 px-10 py-5 bg-accent text-dark font-bold rounded-full hover:bg-accent/90 transition-all text-lg shadow-xl shadow-accent/20"
                    >
                      Submit Press Release
                      <ArrowRight size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="businesses"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Hero section */}
            <section className="relative overflow-hidden bg-white py-24 lg:py-32 border-b border-zinc-200">
              <div className="absolute inset-0 grid-pattern opacity-40" />
              <div className="mx-auto max-w-[1400px] px-6 lg:px-20 relative z-10">
                <div className="max-w-3xl mb-16">
                  <span className="inline-block mb-4 text-sm font-bold text-accent uppercase tracking-[0.3em]">
                    For Businesses
                  </span>
                  <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter font-display text-dark mb-6 leading-tight">
                    The Enterprise
                    <span className="block editorial-heading text-accent mt-2">
                      Distribution Strategy
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Transform operational updates into market-shaping assets for growing firms and
                    family offices.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {BUSINESSES_SEGMENTS.map((seg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: idx * 0.08, duration: 0.5 }}
                      className="group rounded-2xl border border-zinc-200 bg-white p-8 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500"
                    >
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-dark transition-all duration-300">
                        <seg.icon size={26} />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-dark group-hover:text-accent transition-colors">
                        {seg.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed">{seg.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Corporate Authority Audit */}
            <section className="relative overflow-hidden bg-dark py-24 lg:py-32">
              <div className="absolute inset-0 grid-pattern-dark opacity-20" />
              <div className="mx-auto max-w-[1400px] px-6 lg:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                  <div>
                    <span className="inline-block mb-4 text-sm font-bold text-accent uppercase tracking-[0.3em]">
                      The Corporate Authority Audit
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-bold tracking-tight font-display text-white mb-6 leading-tight">
                      Is your company a Market Participant or a{" "}
                      <span className="editorial-heading text-accent">Market Leader?</span>
                    </h2>
                    <div className="space-y-4 mt-10">
                      {BUSINESSES_AUDIT.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/5 hover:border-accent/40 hover:bg-white/10 transition-all duration-300"
                        >
                          <Shield size={18} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 leading-relaxed">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:pt-16">
                    <span className="inline-block mb-4 text-sm font-bold text-accent uppercase tracking-[0.3em]">
                      The Press Release Advantage
                    </span>
                    <div className="space-y-4">
                      {BUSINESSES_ADVANTAGE.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex items-start gap-4"
                        >
                          <CheckCircle2 size={20} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 leading-relaxed">{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.a
                      href="https://admin.contentsyndicate.net/signup"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="mt-10 inline-flex items-center gap-3 px-10 py-5 bg-accent text-dark font-bold rounded-full hover:bg-accent/90 transition-all text-lg shadow-xl shadow-accent/20"
                    >
                      Submit Press Release
                      <ArrowRight size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      <FinalCTASection />
    </>
  );
}
