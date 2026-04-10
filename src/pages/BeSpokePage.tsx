import { motion } from "motion/react";
import {
  Tv,
  Radio,
  Megaphone,
  MessageCircle,
  Calendar,
  Video,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import FinalCTASection from "../components/sections/FinalCTASection";

const FEATURES = [
  {
    icon: Tv,
    title: "Broadcast TV Coverage",
    description:
      "National television exposure that puts your brand in living rooms across the country.",
  },
  {
    icon: Radio,
    title: "Radio & Streaming",
    description:
      "Strategic placements on terrestrial radio and digital streaming platforms reaching diverse audiences.",
  },
  {
    icon: Megaphone,
    title: "Digital Billboard Advertising",
    description: "High-impact outdoor advertising in prime locations that captures attention 24/7.",
  },
  {
    icon: MessageCircle,
    title: "Social Media Integration",
    description:
      "Strategic interviews on X, AMAs, and one-on-one media engagements tailored to your brand.",
  },
  {
    icon: Calendar,
    title: "Custom Scheduling",
    description:
      "Campaign timing aligned with your product launches, events, and business milestones.",
  },
  {
    icon: Video,
    title: "Media Interviews",
    description:
      "Personalized interview opportunities that showcase your expertise and brand story.",
  },
];

const ADVANTAGES = [
  {
    title: "Tailored Approach",
    description:
      "Every campaign is custom-built around your specific goals, audience, and brand identity.",
  },
  {
    title: "Multi-Platform Presence",
    description:
      "Maintain a cohesive brand narrative across television, radio, digital, and social channels.",
  },
  {
    title: "Flexible Channel Selection",
    description:
      "Prioritize the media channels that matter most to your brand while maintaining comprehensive coverage.",
  },
  {
    title: "High-Impact Strategy",
    description:
      "Three-tier strategy designed to move your brand beyond digital noise into the national spotlight.",
  },
];

const TIERS = [
  {
    name: "Foundation Package",
    subtitle: "Tier 1",
    price: "$2,500 / month",
    description:
      "Establishes a consistent media drumbeat with press release distribution and social amplification on news media X channel. Ideal for projects building baseline visibility and brand recognition.",
    deliverables: [
      {
        label: "Press Releases",
        detail: "2 per month — professionally written, formatted, and distributed via newswire",
      },
      {
        label: "X (Twitter) Post",
        detail: "1 sponsored post on a X channel with 1.3M followers",
      },
      {
        label: "Distribution Network",
        detail: "Syndicated to 1200+ financial and industry news outlets",
      },
      {
        label: "Turnaround Time",
        detail: "24-48 hours from brief approval to publication",
      },
    ],
    features: [
      "2 Press Releases per month",
      "1 X Post on 1.3M follower channel",
      "Distribution to 1200+ outlets",
    ],
    highlighted: false,
  },
  {
    name: "Growth Package",
    subtitle: "Tier 2",
    price: "$5,000 / month",
    description:
      "Layers editorial authority onto your distribution strategy. Includes organic article placements on top-tier mainstream media publication alongside amplified social reach — driving both credibility and community awareness.",
    deliverables: [
      {
        label: "Press Releases",
        detail: "2 per month — distributed via newswire",
      },
      {
        label: "Organic Article",
        detail: "1 per month — editorial-style, 600–900 words",
      },
      {
        label: "Article Placement",
        detail: "Investing.com, TheStreet.com, USA Today",
      },
      {
        label: "X (Twitter) Post",
        detail: "1 sponsored post on a X channel with 1.3M followers",
      },
      {
        label: "Article Turnaround",
        detail: "5–7 business days from approved brief to live publication",
      },
    ],
    features: [
      "2 Press Releases per month",
      "1 Organic Article (600-900 words)",
      "Article placement on top-tier media",
      "1 X Post on 1.3M follower channel",
    ],
    highlighted: false,
  },
  {
    name: "Authority Package",
    subtitle: "Tier 3",
    price: "$12,000 / month",
    description:
      "BeSpoke™'s flagship media offering — combining premium editorial placements, mainstreet financial media exposure, high-reach social amplification, and live community engagement through an AMA. Engineered for projects ready to dominate the narrative.",
    deliverables: [
      {
        label: "Press Releases",
        detail: "2 per month — premium distribution including financial wire",
      },
      {
        label: "Organic Article",
        detail: "1 per month — editorial-style, 800–1,200 words",
      },
      {
        label: "Article Placement",
        detail: "Investing.com, TheStreet.com, or USA Today",
      },
      {
        label: "Nasdaq Billboard",
        detail: "Five minute takeover at Marketsite",
      },
      {
        label: "X (Twitter) Posts",
        detail: "1 sponsored post on a X channel with 1.3M followers",
      },
      {
        label: "News Release Distribution",
        detail: "Extended distribution: 1200+ outlets including financial and industry verticals",
      },
    ],
    features: [
      "2 Premium Press Releases per month",
      "1 Organic Article (800-1,200 words)",
      "Premium article placements",
      "Nasdaq Billboard (5 min takeover)",
      "2 X Posts on 1.3M follower channel",
      "Extended distribution network",
    ],
    highlighted: true,
  },
];

export default function BeSpokePage() {
  return (
    <>
      <PageHeader
        title="BeSpoke™"
        subtitle="For brands looking for something beyond a standard media package"
        overline="BeSpoke™"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32 border-b border-zinc-200">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="mx-auto max-w-[1400px] px-6 lg:px-20 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="inline-block mb-4 text-sm font-bold text-accent uppercase tracking-[0.3em]">
              Custom Media Solutions
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter font-display text-dark mb-6 leading-tight">
              Beyond Standard
              <span className="block editorial-heading text-accent mt-2">Media Packages</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              BeSpoke™ is a fully customizable alternative to mainstream media plans, built for
              companies that want a tailored approach to visibility.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Combining organic article placements with a broad mix of media channels that reach
              audiences wherever they are. Unlike fixed-tier packages, BeSpoke™ is structured around
              your campaign — giving you the flexibility to prioritize the channels that matter most
              to your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group rounded-2xl border border-zinc-200 bg-white p-8 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-dark transition-all duration-300">
                  <feature.icon size={26} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-dark group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BeSpoke Section */}
      <section className="relative overflow-hidden bg-dark py-24 lg:py-32">
        <div className="absolute inset-0 grid-pattern-dark opacity-20" />
        <div className="mx-auto max-w-[1400px] px-6 lg:px-20 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="inline-block mb-4 text-sm font-bold text-accent uppercase tracking-[0.3em]">
              Why BeSpoke™
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight font-display text-white mb-6 leading-tight">
              A <span className="editorial-heading text-accent">Fully Customizable</span> Media
              Strategy
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              We offer a high-impact, three-tier strategy designed to move your brand beyond the
              digital noise and into the national spotlight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ADVANTAGES.map((advantage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl border border-white/10 bg-white/5 hover:border-accent/40 hover:bg-white/10 transition-all duration-300"
              >
                <Sparkles size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{advantage.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three-Tier Strategy */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32 border-b border-zinc-200">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="mx-auto max-w-[1400px] px-6 lg:px-20 relative z-10">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <span className="inline-block mb-4 text-sm font-bold text-accent uppercase tracking-[0.3em]">
              Pricing Tiers
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight font-display text-dark mb-6 leading-tight">
              Choose Your <span className="editorial-heading text-accent">Impact Level</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Select the tier that matches your brand's ambitions and growth goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TIERS.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`rounded-2xl border p-8 transition-all duration-500 ${
                  tier.highlighted
                    ? "border-accent bg-accent/5 shadow-xl shadow-accent/20"
                    : "border-zinc-200 bg-white hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10"
                }`}
              >
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/10 text-accent mb-3">
                    {tier.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-dark mb-2">{tier.name}</h3>
                  <p className="text-3xl font-bold text-accent mb-4">{tier.price}</p>
                  <p className="text-gray-600 leading-relaxed">{tier.description}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="text-sm font-bold text-dark uppercase tracking-wider">
                    Deliverables
                  </h4>
                  {tier.deliverables.map((deliverable, deliverableIdx) => (
                    <div
                      key={deliverableIdx}
                      className="border-b border-gray-100 pb-3 last:border-0"
                    >
                      <p className="text-sm font-semibold text-dark mb-1">{deliverable.label}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{deliverable.detail}</p>
                    </div>
                  ))}
                </div>

                <motion.a
                  href="mailto:sales@blockchainwire.io"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-bold rounded-full transition-all text-center ${
                    tier.highlighted
                      ? "bg-accent text-dark shadow-lg shadow-accent/20"
                      : "bg-dark text-white"
                  }`}
                >
                  Get Started
                  <ArrowRight size={16} />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative overflow-hidden bg-zinc-50 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-20">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <span className="inline-block mb-4 text-sm font-bold text-accent uppercase tracking-[0.3em]">
              Comparison
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight font-display text-dark mb-6 leading-tight">
              BeSpoke™ Plan <span className="editorial-heading text-accent">Comparison</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="border-b border-zinc-200">
                  <th className="text-left p-6 font-bold text-dark bg-zinc-50">Deliverable</th>
                  <th className="text-center p-6 font-bold text-dark bg-zinc-50">Tier 1</th>
                  <th className="text-center p-6 font-bold text-dark bg-zinc-50">Tier 2</th>
                  <th className="text-center p-6 font-bold text-accent bg-accent/5">Tier 3</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100">
                  <td className="p-6 text-dark font-medium">Press Releases / mo</td>
                  <td className="p-6 text-center text-gray-600">2</td>
                  <td className="p-6 text-center text-gray-600">2</td>
                  <td className="p-6 text-center text-accent font-bold">2</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="p-6 text-dark font-medium">Organic Articles</td>
                  <td className="p-6 text-center text-gray-400">—</td>
                  <td className="p-6 text-center text-gray-600">1</td>
                  <td className="p-6 text-center text-accent font-bold">1</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="p-6 text-dark font-medium">
                    Investing.com, TheStreet.com or USA Today
                  </td>
                  <td className="p-6 text-center text-gray-400">—</td>
                  <td className="p-6 text-center text-accent font-bold">✓</td>
                  <td className="p-6 text-center text-accent font-bold">✓</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="p-6 text-dark font-medium">X (Twitter) Post 1.3M Followers</td>
                  <td className="p-6 text-center text-gray-600">1</td>
                  <td className="p-6 text-center text-gray-600">1</td>
                  <td className="p-6 text-center text-accent font-bold">2</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="p-6 text-dark font-medium">Nasdaq Billboard</td>
                  <td className="p-6 text-center text-gray-400">—</td>
                  <td className="p-6 text-center text-gray-400">—</td>
                  <td className="p-6 text-center text-accent font-bold">✓</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="p-6 text-dark font-medium">News Release Distribution</td>
                  <td className="p-6 text-center text-accent font-bold">✓</td>
                  <td className="p-6 text-center text-accent font-bold">✓</td>
                  <td className="p-6 text-center text-accent font-bold">✓</td>
                </tr>
                <tr className="bg-zinc-50">
                  <td className="p-6 text-dark font-bold">Monthly Retainer</td>
                  <td className="p-6 text-center text-dark font-bold">$2,500</td>
                  <td className="p-6 text-center text-dark font-bold">$5,000</td>
                  <td className="p-6 text-center text-accent font-bold text-lg">$12,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-dark py-24 lg:py-32">
        <div className="absolute inset-0 grid-pattern-dark opacity-20" />
        <div className="mx-auto max-w-[1400px] px-6 lg:px-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold tracking-tight font-display text-white mb-6 leading-tight"
            >
              Ready to <span className="editorial-heading text-accent">Stand Out?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 leading-relaxed mb-10"
            >
              For custom integrations including National Broadcast TV, Radio, and Digital Billboard
              placements, reach out to our team.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center justify-center gap-6"
            >
              <motion.a
                href="mailto:sales@blockchainwire.io"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-dark font-bold rounded-full hover:bg-accent/90 transition-all text-lg shadow-xl shadow-accent/20"
              >
                Contact Sales
                <ArrowRight size={20} />
              </motion.a>
              <span className="text-gray-500 text-sm">
                Custom Media Residency Plans start at $35,000 per month
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
