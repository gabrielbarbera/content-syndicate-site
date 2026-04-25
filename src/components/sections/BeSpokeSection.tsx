import { motion } from "motion/react";
import { ArrowUpRight, Star, TrendingUp, Radio, Gem } from "lucide-react";

const PLACEMENTS = [
  {
    icon: TrendingUp,
    title: "Deep-Dive Editorial Features",
    description:
      "Position your story in top-tier financial outlets like Investing.com or The Street, reaching active investors and market movers.",
  },
  {
    icon: Star,
    title: "The Nasdaq MarketSite Billboard",
    description:
      "Elevate your brand to the biggest stage in the world. We coordinate the creative and placement for your milestone to be broadcast seven stories high in Times Square.",
  },
  {
    icon: Radio,
    title: "High-Impact Broadcast & Digital",
    description:
      "We facilitate appearances on Newsmax, specialized tours on X, and other broadcast-grade media opportunities that put your voice directly in front of millions.",
  },
  {
    icon: Gem,
    title: "Specialized Luxury Syndication",
    description:
      "For artists, designers, and luxury sellers, we target elite lifestyle outlets that cater specifically to high-net-worth audiences.",
  },
];

const STRATEGY_MENU = [
  "Global Visibility: Nasdaq Times Square Billboard + National TV.",
  "Investor Trust: Targeted features in The Street or Investing.com.",
  "Thought Leadership: A specialized podcast on financial networks.",
  "Luxury Positioning: High-gloss editorial placements in niche lifestyle journals.",
];

export default function BeSpokeSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32 border-t border-zinc-100">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div
        className="absolute inset-0 -z-10 glow-mesh"
        style={{ "--glow-color": "#9BC621" } as React.CSSProperties}
      />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-block mb-4 text-sm font-bold text-accent uppercase tracking-[0.3em]">
            BeSpoke™ Amplification
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter font-display text-dark mb-6 leading-tight">
            Beyond the Wire.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Sometimes, a standard distribution circuit isn't enough to capture the gravity of a major
            milestone. For those moments, we offer{" "}
            <strong className="text-dark">BeSpoke™ Campaigns</strong>—highly curated, high-impact
            strategies designed to place your brand exactly where the most influential eyes are looking.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Content Syndicate, we don't just send a release; we{" "}
            <em>architect an omnipresence.</em>
          </p>
        </motion.div>

        {/* High-Impact Placements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <h3 className="text-2xl font-bold text-dark mb-10 font-display">
            High-Impact Placements & Elite Media Access
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {PLACEMENTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative rounded-2xl border border-zinc-200 bg-white p-8 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-dark transition-all duration-300">
                <item.icon size={26} />
              </div>
              <h4 className="mb-3 text-xl font-bold text-dark group-hover:text-accent transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Let's Brainstorm + Strategy Menu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          <div className="rounded-3xl bg-dark p-10 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern-dark opacity-20" />
            <div className="relative z-10">
              <span className="inline-block mb-4 text-xs font-bold text-accent uppercase tracking-[0.3em]">
                Let's Brainstorm Together
              </span>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                <strong className="text-white">BeSpoke™ means built for you.</strong> We don't believe
                in "off the shelf" when the stakes are this high. Whether you are launching a global
                fund, a career-defining book, or a revolutionary e-commerce platform, we can stack
                these assets to create a "Media Blitz" the market cannot ignore.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                <strong className="text-accent">The "Just Ask" Protocol:</strong> Our core circuits are
                the foundation, but our BeSpoke™ capabilities are limitless. If there is a specific
                outlet, billboard, or broadcast platform you've been eyeing—just ask.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-dark font-bold rounded-full hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-all"
              >
                Start a Conversation
                <ArrowUpRight size={18} />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-dark mb-8 font-display">
              BeSpoke™ Strategy Menu
              <span className="block text-base font-normal text-gray-700 mt-1">What is your Goal?</span>
            </h3>
            <div className="space-y-4">
              {STRATEGY_MENU.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-xl border border-zinc-200 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 group"
                >
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border-2 border-accent/40 group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                    <div className="w-2 h-2 rounded-sm bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-gray-700 group-hover:text-dark transition-colors font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
