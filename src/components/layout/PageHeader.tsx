import { motion } from "motion/react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  overline?: string;
  showCta?: boolean;
}

export function PageHeader({ title, subtitle, overline, showCta = false }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-dark">
      <div className="absolute inset-0 grid-pattern-dark opacity-15" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] blur-[160px] rounded-full bg-accent/[0.06]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] blur-[120px] rounded-full bg-accent/[0.04]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-20 py-14 lg:py-20">
        <div className="flex items-start gap-6 lg:gap-10">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:block w-[3px] rounded-full bg-gradient-to-b from-accent via-accent/60 to-transparent self-stretch origin-top flex-shrink-0"
          />

          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="flex items-center gap-2.5 mb-5"
            >
              <Link
                to="/"
                className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-white/25 hover:text-white/50 transition-colors"
              >
                Home
              </Link>
              <span className="text-white/10 text-[0.625rem]">/</span>
              <span className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-accent/60">
                {overline || title}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight font-display text-white leading-[1.08] mb-3"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg lg:text-xl text-white/40 max-w-2xl font-serif italic leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}

            {showCta && (
              <motion.a
                href="https://admin.contentsyndicate.net/signup"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-bold text-dark text-base shadow-xl shadow-accent/20 transition-all hover:shadow-2xl hover:shadow-accent/30"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started Today
              </motion.a>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
    </section>
  );
}
