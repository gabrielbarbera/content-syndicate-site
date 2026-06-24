import { motion } from "motion/react";
import { CONTENT } from "../../lib/constants";
import CTABlock from "./CTASection";

const HeroSection = () => {
  const brandColor = "text-accent";

  return (
    <div className="split-layout min-h-screen lg:min-h-screen border-b border-zinc-200">
      <div className="flex flex-col justify-center px-6 lg:px-20 py-32 lg:py-40 border-r border-zinc-200 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-60 -z-10" />
        <div
          className="absolute inset-0 -z-10 glow-mesh"
          style={{ "--glow-color": "#9BC621" } as React.CSSProperties}
        />

        <div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/40 bg-accent/10 text-accent text-xs font-bold uppercase tracking-[0.3em]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Newswire Distribution
            </span>
          </motion.div>
          <h1 className="text-6xl lg:text-[110px] leading-[0.9] font-bold tracking-tighter mb-12 font-display text-center">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="block glass-text"
              data-text={CONTENT.heroTitle}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {CONTENT.heroTitle}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className={`block editorial-heading mt-4 ${brandColor}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {CONTENT.heroAccent}
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CTABlock />
          </motion.div>
        </div>
      </div>

      <div className="bg-dark relative flex flex-col justify-center p-6 lg:p-20 pt-32 lg:pt-40 overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-20 -z-10" />
        <div className="absolute inset-0 opacity-40">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 blur-[120px] rounded-full bg-accent"
          />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-xl"
          >
            <p className="text-lg lg:text-xl text-white/50 leading-relaxed font-medium">
              {CONTENT.heroSub.intro}
            </p>

            <p className="mt-6 text-3xl lg:text-4xl font-bold text-white tracking-tight font-display">
              {CONTENT.heroSub.punchline}
            </p>

            <div className="mt-8">
              <p className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-4">
                {CONTENT.heroSub.subheading}
              </p>
              <ul className="space-y-3">
                {CONTENT.heroSub.services.map((service) => (
                  <li key={service.label} className="flex items-baseline gap-3">
                    <span className="text-accent text-xs mt-1">◆</span>
                    <span className="text-base lg:text-lg text-white/80">
                      <span className="font-bold text-white">{service.label}</span>
                      {" — "}
                      {service.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 flex items-center gap-6">
          <div className="h-px flex-grow bg-white/10" />
          <motion.span
            className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Global Distribution
          </motion.span>
          <div className="h-px flex-grow bg-white/10" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
