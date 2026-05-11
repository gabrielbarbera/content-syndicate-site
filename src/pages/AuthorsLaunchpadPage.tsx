import { motion } from "motion/react";
import {
  BookOpen,
  Users,
  Target,
  TrendingUp,
  Radio,
  Megaphone,
  Mail,
  Award,
  Layers,
} from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import FinalCTASection from "../components/sections/FinalCTASection";
import SEO from "../components/SEO";

const FEATURES = [
  {
    icon: BookOpen,
    title: "Structure Your Book",
    description: "We help authors structure their book for clarity, positioning, and market fit.",
  },
  {
    icon: Target,
    title: "Align Messaging",
    description: "Align messaging across book, podcast, and PR channels for maximum impact.",
  },
  {
    icon: Users,
    title: "Build Audience Systems",
    description: "Build audience systems around your ideas to create lasting engagement.",
  },
  {
    icon: Megaphone,
    title: "Coordinated Launch",
    description: "Launch with coordinated visibility across multiple platforms simultaneously.",
  },
  {
    icon: TrendingUp,
    title: "Content Engine",
    description: "Turn a single book into a repeatable content and authority engine.",
  },
  {
    icon: Radio,
    title: "Visibility Loops",
    description: "Create podcast and media visibility loops that compound over time.",
  },
];

const OUTCOMES = [
  {
    icon: TrendingUp,
    title: "Long-term Discoverability",
    description: "A sustainable discoverability system on Amazon that keeps working for you.",
  },
  {
    icon: Target,
    title: "Targeted Reader Funnel",
    description: "A targeted reader acquisition funnel that brings in ideal readers consistently.",
  },
  {
    icon: Radio,
    title: "Media Visibility",
    description: "Podcast and media visibility loops that expand your reach exponentially.",
  },
  {
    icon: Award,
    title: "Brand Foundation",
    description: "A foundation for speaking, consulting, and brand growth opportunities.",
  },
  {
    icon: Layers,
    title: "Content Ecosystem",
    description: "A compounding content ecosystem built around your core ideas and expertise.",
  },
];

export default function AuthorsLaunchpadPage() {
  return (
    <>
      <SEO />
      <PageHeader
        title="Author's Launchpad"
        subtitle="Turn Your Book Into a Visibility Engine"
        overline="Authors"
      />

      {/* Introduction Section */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-white py-24 lg:py-32">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative z-10 px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block mb-6 text-sm font-bold text-accent uppercase tracking-[0.3em]">
              Built in Partnership With
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight font-display text-dark mb-6 leading-tight">
              Fifth Story Press &{" "}
              <span className="block mt-2 editorial-heading text-accent">Red Apple Media</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Content Syndicate's Author's Launchpad creates a scalable author growth engine—layered
              on top of proven publishing systems already in place.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We combine traditional publishing credibility with modern performance-driven
              marketing, distribution, and audience-building systems. Instead of replacing the
              publishing process, we enhance it.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              We take what already works—editing, publishing, and distribution—and connect it to a
              modern ecosystem built for visibility, demand, and long-term author growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Help Authors With */}
      <section className="relative overflow-hidden bg-dark py-24 lg:py-32">
        <div className="absolute inset-0 grid-pattern-dark opacity-20" />
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-96 h-96 blur-[120px] rounded-full bg-accent/20"
          />
        </div>

        <div className="container relative z-10 px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-20 max-w-3xl text-center"
          >
            <span className="inline-block mb-6 text-sm font-bold text-accent uppercase tracking-[0.3em]">
              What We Help Authors With
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight font-display leading-tight">
              Everything You Need to <span className="editorial-heading text-accent">Succeed</span>
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              We guide authors through every step of the journey to maximize their book's impact and
              build lasting authority.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-accent/50 hover:bg-white/10 overflow-hidden">
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-accent/5 transition-all duration-500" />

                  <div className="relative z-10">
                    <motion.div
                      className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/30"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon size={28} />
                    </motion.div>
                    <h3 className="mb-4 text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-200 leading-relaxed group-hover:text-white transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What This Creates */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32 border-b border-zinc-200">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative z-10 px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-20 max-w-3xl text-center"
          >
            <span className="inline-block mb-6 text-sm font-bold text-accent uppercase tracking-[0.3em]">
              What This Creates
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6 tracking-tight font-display leading-tight">
              Instead of a <span className="editorial-heading text-accent">One-Time Release</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              You get a comprehensive system that continues to work for you long after launch.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {OUTCOMES.map((outcome, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
              >
                <div className="relative h-full rounded-2xl border-2 border-zinc-200 bg-white p-8 transition-all duration-500 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-dark">
                    <outcome.icon size={26} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-dark group-hover:text-accent transition-colors">
                    {outcome.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{outcome.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative overflow-hidden bg-dark py-24 lg:py-32">
        <div className="absolute inset-0 grid-pattern-dark opacity-20" />
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] rounded-full bg-accent/20"
          />
        </div>

        <div className="container relative z-10 px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-display leading-tight">
              Ready to Turn Your Book Into a{" "}
              <span className="editorial-heading text-accent">Visibility Engine?</span>
            </h3>
            <p className="text-lg text-gray-200 mb-10 leading-relaxed">
              Let's discuss how we can help you build a sustainable author platform.
            </p>
            <motion.a
              href="mailto:support@contentsyndicate.net"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-full bg-accent px-10 py-5 font-bold text-dark text-lg shadow-xl shadow-accent/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-accent/40"
            >
              <Mail size={20} />
              Contact Us Today
            </motion.a>
          </motion.div>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
