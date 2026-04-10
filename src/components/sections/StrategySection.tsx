import { MessageSquare, Cpu, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { SIGNUP_URL } from "../../lib/constants";

const StrategySection = () => (
  <section id="how" className="py-32 bg-zinc-50 border-y border-zinc-200 relative overflow-hidden">
    <motion.div
      className="absolute top-0 right-0 w-1/2 h-full grid-pattern opacity-20 -z-10"
      animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    />

    <div className="max-w-[1400px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-accent">
            The Methodology
          </span>
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter font-display mt-4">
            We Don't Just Distribute. <br />
            <span className="editorial-heading">We Strategize.</span>
          </h2>
          <p className="text-xl text-zinc-500 font-medium mt-6 leading-relaxed">
            PR agencies charge $5,000–$15,000 per month. Maybe you're not ready for that type of
            commitment. We offer a hands-on, cost-effective approach that puts the power back in
            your hands on a pay as you go basis.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -50, rotateY: -10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          whileHover={{
            scale: 1.02,
            rotateY: 2,
            transition: { type: "spring", stiffness: 300 },
          }}
          style={{ perspective: 1000 }}
          className="lg:col-span-8 bg-white p-12 rounded-[40px] border border-zinc-200 flex flex-col justify-between group hover:border-dark transition-colors"
        >
          <div>
            <motion.div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-accent text-dark"
              whileHover={{
                rotate: [0, -10, 10, -10, 0],
                scale: 1.1,
              }}
              transition={{ duration: 0.6 }}
            >
              <MessageSquare className="w-7 h-7" />
            </motion.div>
            <div className="mb-6">
              <h3 className="text-3xl font-bold">01. The Strategy</h3>
              <p className="text-xs font-black uppercase tracking-[0.2em] mt-2 text-accent">
                We Guide You
              </p>
            </div>
            <p className="text-xl text-zinc-500 leading-relaxed max-w-2xl">
              Don't have a "hook"? We'll help you find one. Our experts work with you to craft a
              narrative that journalists want to cover and AI models want to cite.
            </p>
          </div>
          <div className="mt-12 flex items-center gap-4 text-sm font-bold text-zinc-400 uppercase tracking-widest">
            {["Expert Guidance", "Narrative Crafting", "Hook Identification"].map((text, j) => (
              <motion.span
                key={j}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: j * 0.1 + 0.5 }}
                whileHover={{ x: 3 }}
                className="flex items-center gap-2"
              >
                {text}
                {j < 2 && (
                  <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                )}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          whileHover={{
            y: -10,
            transition: { type: "spring", stiffness: 300 },
          }}
          className="lg:col-span-4 bg-dark p-12 rounded-[40px] text-white flex flex-col justify-between relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(155, 198, 33, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(155, 198, 33, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(155, 198, 33, 0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <Cpu className="w-14 h-14 mb-8 text-accent relative z-10" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">03. Be Searchable in the AI Era</h3>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Search has changed. LLMs (like Claude, Gemini and ChatGPT) learn from authoritative
              news. By securing placements in global publications, you aren't just getting a
              link—you're "programming" the AI to recognize you as the expert in your niche.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          whileHover={{
            scale: 1.01,
            rotateX: 2,
            transition: { type: "spring", stiffness: 300 },
          }}
          style={{ perspective: 1000 }}
          className="lg:col-span-8 bg-white p-12 rounded-[40px] border border-zinc-200 flex flex-col justify-between group hover:border-dark transition-colors"
        >
          <div>
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-dark">02. The Execution</h3>
              <p className="text-xs font-black uppercase tracking-[0.2em] mt-2 text-accent">
                Two Ways to Win
              </p>
            </div>
            <div className="space-y-6">
              <motion.p
                className="text-lg text-zinc-500 leading-relaxed"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="font-bold text-dark">Done-For-You:</span> We'll write, optimize,
                and distribute your story to tier-1 outlets like Yahoo Finance and Business Insider.
              </motion.p>
              <motion.p
                className="text-lg text-zinc-500 leading-relaxed"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="font-bold text-dark">Do-It-Yourself:</span> Already have the
                content? Use our streamlined platform to push your release out to our massive
                network of high-authority sites.
              </motion.p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
          whileHover={{
            scale: 1.05,
            rotate: 2,
            boxShadow: "0 20px 40px rgba(155, 198, 33, 0.3)",
          }}
          className="lg:col-span-4 p-8 rounded-[40px] flex flex-col justify-center items-center text-center bg-accent shadow-xl relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ["0% 0%", "200% 200%"],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10">
            <motion.h4
              className="text-2xl font-bold text-dark mb-6 leading-tight"
              whileHover={{ scale: 1.05 }}
            >
              Ready to Get Started?
            </motion.h4>
            <p className="text-dark/80 mb-8 leading-relaxed">
              Join thousands of businesses using Content Syndicate to amplify their message and
              reach global audiences.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-dark text-white rounded-2xl font-bold flex items-center justify-center gap-2 relative overflow-hidden group/btn2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Create Free Account <ArrowRight className="w-5 h-5" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default StrategySection;
