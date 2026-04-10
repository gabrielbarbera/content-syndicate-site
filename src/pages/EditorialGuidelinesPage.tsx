import { motion } from "motion/react";
import { FileText, Image, AlignLeft, Mail, CheckCircle2, Globe } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import FinalCTASection from "../components/sections/FinalCTASection";

const SECTIONS = [
  {
    number: "1",
    icon: FileText,
    title: "The Core Narrative",
    items: [
      {
        label: "Timeliness is Key",
        text: 'News must be current. Distributions should occur within 48–72 hours of a milestone to remain "breaking."',
      },
      {
        label: 'The 700-Word "Sweet Spot"',
        text: "While the minimum for acceptance is 500 words, the highest-read and best-indexed releases typically reach 700 words.",
      },
      {
        label: "Neutral Tone",
        text: 'Use a third-person, objective perspective. Avoid promotional "fluff" and keep adjectives grounded in fact.',
      },
    ],
  },
  {
    number: "2",
    icon: Image,
    title: "Multimedia Standards",
    items: [
      {
        label: "The Visual Anchor",
        text: 'Most premium outlets allow one high-resolution image. We recommend a professional headshot, a "hero" product shot, or a high-impact event photo (Minimum 1200px wide).',
      },
      {
        label: "Corporate Identity",
        text: "Every release must include your official Logo (PNG/JPG with transparent or solid background).",
      },
      {
        label: "Strategic Links",
        text: "Limit your release to 2–3 high-authority links (e.g., your homepage and one specific landing page) to avoid spam filters.",
      },
    ],
  },
  {
    number: "3",
    icon: AlignLeft,
    title: "The Article Structure",
    items: [
      {
        label: "The Lead",
        text: 'Start with City, State (Date). Your first sentence must answer the "Who, What, and Why."',
      },
      {
        label: "The Expert Voice",
        text: "Include a strategic quote from a CEO, Founder, or lead specialist to provide human context.",
      },
      {
        label: "The Boilerplate",
        text: 'Conclude with a brief "About" section (approx. 100 words) summarizing your professional history or company mission.',
      },
    ],
  },
];

export default function EditorialGuidelinesPage() {
  return (
    <>
      <PageHeader
        title="Editorial Guidelines"
        subtitle="Maintaining a gold standard for global syndication"
        overline="Guidelines"
      />

      {/* Intro */}
      <section className="relative overflow-hidden bg-white py-16 border-b border-zinc-200">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="mx-auto max-w-[1400px] px-6 lg:px-20 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 leading-relaxed max-w-3xl"
          >
            To ensure your news is accepted by premium global outlets and achieves maximum SEO
            impact, all submissions must adhere to the following professional standards.
          </motion.p>
        </div>
      </section>

      {/* 3 Sections */}
      <section className="relative overflow-hidden bg-dark py-24 lg:py-32">
        <div className="absolute inset-0 grid-pattern-dark opacity-20" />
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-96 h-96 blur-[120px] rounded-full bg-accent/20"
          />
        </div>

        <div className="mx-auto max-w-[1400px] px-6 lg:px-20 relative z-10 space-y-16">
          {SECTIONS.map((section, sIdx) => (
            <motion.div
              key={sIdx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: sIdx * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                  <section.icon size={26} />
                </div>
                <div>
                  <span className="text-xs font-bold text-accent/70 uppercase tracking-[0.3em]">
                    Section {section.number}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white font-display">
                    {section.title}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-0 lg:ml-[4.5rem]">
                {section.items.map((item, iIdx) => (
                  <motion.div
                    key={iIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.1 + iIdx * 0.08 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-accent/40 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <h3 className="text-lg font-bold text-accent mb-3 group-hover:text-white transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Media Contact */}
      <section className="relative overflow-hidden bg-white py-24 border-b border-zinc-200">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="mx-auto max-w-[1400px] px-6 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block mb-4 text-sm font-bold text-accent uppercase tracking-[0.3em]">
                Media Contact & Inquiries
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight font-display text-dark mb-6">
                Reach Our Press Desk
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                To protect your primary inbox from high-volume spam and automated bots, we utilize a
                dedicated, generic alias for all press inquiries.
              </p>
              <div className="space-y-4">
                <a
                  href="https://www.contentsyndicate.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-xl border border-zinc-200 hover:border-accent/40 hover:bg-accent/5 transition-all group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-dark transition-all">
                    <Globe size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Website
                    </div>
                    <div className="font-semibold text-dark group-hover:text-accent transition-colors">
                      www.contentsyndicate.net
                    </div>
                  </div>
                </a>
                <a
                  href="mailto:press@contentsyndicate.net"
                  className="flex items-center gap-4 p-5 rounded-xl border border-zinc-200 hover:border-accent/40 hover:bg-accent/5 transition-all group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-dark transition-all">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Media Inquiries
                    </div>
                    <div className="font-semibold text-dark group-hover:text-accent transition-colors">
                      press@contentsyndicate.net
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Final Quality Check */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-3xl bg-dark p-10 lg:p-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 grid-pattern-dark opacity-20" />
              <div className="relative z-10">
                <span className="inline-block mb-4 text-xs font-bold text-accent uppercase tracking-[0.3em]">
                  The Final Quality Check
                </span>
                <h3 className="text-2xl font-bold text-white mb-6 font-display">
                  The Newsworthy Test
                </h3>
                <div className="flex items-start gap-4 mb-8">
                  <CheckCircle2 size={24} className="text-accent mt-1 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed text-lg">
                    If a stranger in your industry wouldn't find this valuable or relevant, it isn't
                    ready. We help you refine the "angle" to ensure your story isn't just told—it's{" "}
                    <em className="text-white">heard.</em>
                  </p>
                </div>
                <motion.a
                  href="https://admin.contentsyndicate.net/signup/client"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-dark font-bold rounded-full hover:bg-accent/90 transition-all"
                >
                  Submit Press Release
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
