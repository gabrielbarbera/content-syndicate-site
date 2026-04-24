import { motion } from "motion/react";
import { Zap, Shield, Globe, Users, BarChart3, Headphones, ArrowRight } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import FinalCTASection from "../components/sections/FinalCTASection";

const FEATURES = [
  {
    icon: Globe,
    title: "Extensive Distribution Network",
    description:
      "Reach a worldwide audience through our extensive distribution network, ensuring maximum visibility and impact for your important company news.",
  },
  {
    icon: Users,
    title: "Targeted Audience Segmentation",
    description:
      "Tailor your press release distribution to specific segments, allowing you to engage with the right audience and amplify the relevance of your news.",
  },
  {
    icon: Shield,
    title: "Cost-Effective Pricing Options",
    description:
      "Get the most value out of your investment with our cost-effective pricing options that are specifically designed to meet your needs.",
  },
  {
    icon: Zap,
    title: "User-Friendly Interface",
    description:
      "Navigate and manage your press release submissions effortlessly with our intuitive and user-friendly interface, saving you time and effort in the process.",
  },
  {
    icon: BarChart3,
    title: "Comprehensive Analytics",
    description:
      "Gain valuable insights into the performance of your press releases with our comprehensive analytics reporting, helping you measure engagement and refine your communication strategies.",
  },
  {
    icon: Headphones,
    title: "Dedicated Customer Support",
    description:
      "Count on our dedicated client services team to provide you with exceptional assistance and guidance, ensuring a smooth and hassle-free experience.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Content Syndicate"
        subtitle="Discover the power behind premier press distribution"
        overline="About"
      />

      {/* Introduction Section */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-white py-24 lg:py-32">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative z-10 px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block mb-6 text-sm font-bold text-accent uppercase tracking-[0.3em]">
                Who We Are
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight font-display text-dark mb-6 leading-tight">
                Leading the Future of
                <span className="block mt-2 editorial-heading text-accent">Press Distribution</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Content Syndicate is the premier press release distribution platform, connecting
                businesses with global audiences through innovative technology and unmatched reach.
              </p>
              <motion.a
                href="https://admin.contentsyndicate.net/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-dark font-semibold hover:text-accent transition-colors group"
                whileHover={{ x: 5 }}
              >
                Learn more about our mission
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 p-12 relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-32 h-32 rounded-full bg-accent/30 mx-auto mb-8 flex items-center justify-center"
                  >
                    <Globe size={48} className="text-accent" />
                  </motion.div>
                  <div className="text-center">
                    <div className="text-6xl font-bold text-dark mb-2 font-display">10K+</div>
                    <div className="text-gray-600 font-medium">Press Releases Distributed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight font-display leading-tight">
              Exceptional Features
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Everything you need to amplify your message and reach your target audience with
              precision and impact.
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
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
