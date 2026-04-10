import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { CONTENT } from "../../lib/constants";

const ComparisonSection = () => (
  <section id="comparison" className="py-16 lg:py-32 bg-white">
    <div className="max-w-[1400px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20"
      >
        <div className="max-w-2xl">
          <motion.span
            className="text-xs font-black uppercase tracking-[0.3em] text-accent"
            whileHover={{ scale: 1.1, letterSpacing: "0.35em" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            The Hard Numbers
          </motion.span>
          <h2 className="text-5xl font-bold tracking-tighter font-display mt-4">
            Why Authority <span className="editorial-heading">Matters.</span>
          </h2>
          <p className="text-xl text-zinc-500 font-medium mt-6">
            The difference between businesses that invest in PR and those that rely solely on ads is
            staggering. In a world of "zero-click" searches and AI summaries, earned media is the
            only currency that still buys trust.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="border border-dark rounded-[32px] overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] bg-dark text-white border-b border-white/5">
          <motion.div
            className="p-8 text-xs font-black uppercase tracking-[0.2em] text-white/40"
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Feature
          </motion.div>
          <motion.div
            className="p-8 text-xs font-black uppercase tracking-[0.2em] text-white/40 border-l border-white/5"
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Businesses WITH PR
          </motion.div>
          <motion.div
            className="p-8 text-xs font-black uppercase tracking-[0.2em] text-white/40 border-l border-white/5"
            initial={{ x: 20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Businesses WITHOUT PR
          </motion.div>
        </div>
        {CONTENT.comparison.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 + 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] border-b border-zinc-100 last:border-0 group hover:bg-zinc-50 transition-colors"
            whileHover={{ x: 5 }}
          >
            <div className="p-8 font-bold text-lg tracking-tight text-dark">{row.feature}</div>
            <div className="p-8 border-l border-zinc-100 flex items-start gap-4">
              <motion.div
                className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-accent text-dark"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <CheckCircle2 className="w-3 h-3" />
              </motion.div>
              <span className="text-dark font-semibold text-lg">{row.with}</span>
            </div>
            <div className="p-8 border-l border-zinc-100 text-dark/40 italic font-medium">
              {row.without}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ComparisonSection;
