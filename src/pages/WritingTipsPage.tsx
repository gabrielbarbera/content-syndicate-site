import { motion } from "motion/react";
import { PageHeader } from "../components/layout/PageHeader";
import FinalCTASection from "../components/sections/FinalCTASection";

const SECTIONS = [
  {
    title: "Painting the Picture: Creating Compelling Press Releases",
    content:
      "Every marketer should know how to write effective press releases. They're essential for ensuring the media and public know your news. Plus, they are a cost-effective way to get the word out about your company news and events.\n\nHowever, you need to know how to write press releases well. Journalists and bloggers are extremely busy and only respond to the best pitches they receive. If you send something uninteresting, it will be trashed. First, you need to identify newsworthy angles journalists, bloggers and influencers care about. Effective press releases should have a hook. The best way to write and format press releases is for easy readability by including photos, video, links and bullet points.",
  },
  {
    title: "The Power of a Strong Lead: Making Your Press Release Stand Out",
    content:
      "The first thing you need to do is answer: why is this news? The first line of a good press release should answer concisely the who, what, when, where, why and how. If journalists are ignoring your press releases, there's a good chance it's because you've buried your lead, the most important part of the story. Make sure the lead is in the first line of your press release, and you'll have a much better chance of getting people interested in your story.",
  },
  {
    title: "Engaging Press Releases: Show, Don't Tell",
    content:
      "Show, don't tell why your news matters. Tell your story with character limits in mind, but don't discard important material such as verifiable facts and figures (provide links) that support the narrative. Acronyms can save space, but avoid using them. The same is true for industry jargon. Acronyms and jargon make press releases less relatable.",
  },
  {
    title: "Keywords & SEO: Optimizing for Discovery",
    content:
      "It's important to \"paint the picture\" for journalists. This can include referencing industry trends and how the news is relevant to a larger audience. It's also important to include keywords and phrases in your press releases that resonate with the targeted audience. Weave the keywords into the press release in the most natural way possible. You don't want it to appear forced or canned. Also, don't overstuff the content with keyword phrases. Using the phrase once in the headline and once in the body of your press releases is plenty.",
  },
];

const EXAMPLES = [
  {
    title:
      "Kelp Is Crafting a Global Currency by Fusing Central Banking Theorem and Blockchain Decentralization",
    location: "St. Vincent And Grenadines",
    date: "12 Dec 2023",
  },
  {
    title: "DeSME - A New Way of Bridging DeFi with MSME Businesses and Combat Crypto Volatility",
    location: "Dubai, UAE",
    date: "12 Dec 2023",
  },
  {
    title: "AIDI Finance Officially Launches on the Ethereum Network",
    location: "Sandown, England",
    date: "12 Dec 2023",
  },
  {
    title: "Introducing Favoom – Where Social Networking Meets Blockchain Innovation",
    location: "Eindhoven, The Netherlands",
    date: "11 Dec 2023",
  },
];

export default function WritingTipsPage() {
  return (
    <>
      <PageHeader
        title="Writing Tips"
        subtitle="Master the art of press release creation"
        overline="Resources"
      />

      <section className="relative overflow-hidden bg-dark pt-20 lg:py-28">
        <div className="absolute inset-0 grid-pattern-dark opacity-20" />
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-96 h-96 blur-[120px] rounded-full bg-accent/20"
          />
        </div>

        <div className="container relative z-10 px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <div className="mb-16 text-center">
              <span className="inline-block mb-4 text-sm font-bold text-accent uppercase tracking-[0.3em]">
                Expert Guidance
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-display leading-tight">
                How to Create Press Releases That Get Results
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                Learn the strategies and techniques that make press releases impossible to ignore
              </p>
            </div>

            <div className="space-y-8 mb-16">
              {SECTIONS.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-10 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-white/10"
                >
                  {/* Number badge */}
                  <div className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-dark font-bold text-lg shadow-lg">
                    {idx + 1}
                  </div>

                  <h3 className="mb-6 text-xl lg:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                    {section.title}
                  </h3>
                  <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
                    {section.content.split("\n\n").map((paragraph, pIdx) => (
                      <p key={pIdx} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                  <svg
                    className="text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Examples of Effective Press Releases
                </h3>
              </div>

              <div className="grid gap-4">
                {EXAMPLES.map((example, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-accent/50 hover:bg-white/10"
                  >
                    <h4 className="mb-2 font-semibold text-white group-hover:text-accent transition-colors">
                      {example.title}
                    </h4>
                    <p className="text-sm text-gray-200">
                      <span className="inline-flex items-center gap-1">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {example.location}
                      </span>
                      {" • "}
                      <span className="inline-flex items-center gap-1">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {example.date}
                      </span>
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
