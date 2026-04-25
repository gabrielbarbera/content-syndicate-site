import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "How do I write a press release that gets results?",
    answer:
      "Every marketer should know how to write effective press releases. Journalists and bloggers are extremely busy and only respond to the best pitches they receive. You need to identify newsworthy angles journalists care about, include a strong hook, and format for easy readability—using photos, video, links, and bullet points.",
  },
  {
    question: "What makes a strong lead in a press release?",
    answer:
      "The first line of a good press release should answer concisely the who, what, when, where, why, and how. Make sure the lead is in the first line of your press release—if journalists are ignoring your releases, there's a good chance you've buried the most important part of the story.",
  },
  {
    question: "How do I make my press release engaging?",
    answer:
      "Show, don't tell why your news matters. Tell your story with character limits in mind, but don't discard important material such as verifiable facts and figures (provide links) that support the narrative. Avoid acronyms and industry jargon—they make press releases less relatable.",
  },
  {
    question: "How do I optimize my press release for search and AI discovery?",
    answer:
      "Include keywords and phrases that resonate with your targeted audience, woven naturally into the content. Use the phrase once in the headline and once in the body—don't overstuff. Reference relevant industry trends to show how your news connects to a larger audience and the current landscape.",
  },
  {
    question: "What is the ideal length for a press release?",
    answer:
      'While the minimum for acceptance is 500 words, the highest-read and best-indexed releases typically reach 700 words. This "sweet spot" gives enough substance for journalists to work with while staying concise and readable.',
  },
  {
    question: "How quickly should I distribute a press release after a milestone?",
    answer:
      'Timeliness is key. Distributions should occur within 48–72 hours of a milestone to remain "breaking" news. The sooner you publish after the event, the higher the likelihood of media pickup and audience engagement.',
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32 border-t border-zinc-100">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 text-sm font-bold text-accent uppercase tracking-[0.3em]">
            FAQ
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter font-display text-dark mb-6">
            Press Release <span className="editorial-heading">Best Practices</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Everything you need to know to write press releases that get results.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: idx * 0.06, duration: 0.5 }}
              className="rounded-2xl border border-zinc-200 overflow-hidden hover:border-accent/30 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
                className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left group"
              >
                <span className="text-lg font-bold text-dark group-hover:text-accent transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIdx === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-accent"
                >
                  <ChevronDown size={22} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-zinc-100">
                      <p className="pt-4">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
