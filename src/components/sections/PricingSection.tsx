import { Globe, Shield, Sparkles, Zap } from "lucide-react";
import { motion } from "motion/react";
import { CONTENT, SIGNUP_URL } from "../../lib/constants";

const iconMap = {
  Zap,
  Shield,
  Globe,
  Sparkles,
};

const PricingSection = ({ onContactClick }: { onContactClick: () => void }) => (
  <section id="pricing" className="py-32 bg-dark text-white">
    <div className="max-w-[1400px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter font-display mb-6">
          Choose Your <span className="editorial-heading">Launchpad.</span>
        </h2>
        <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
          Transparent, pay-as-you-go pricing for high-authority distribution.
        </p>
      </motion.div>

      <div
        className={`grid gap-6 ${CONTENT.packages.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
      >
        {CONTENT.packages.map((pkg, i) => {
          const IconComponent = iconMap[pkg.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -20,
                rotateX: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group relative"
              style={{ perspective: 1000 }}
            >
              <motion.div
                className="absolute -inset-px rounded-[40px] opacity-0 group-hover:opacity-100 blur-sm bg-accent"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative h-full bg-[#1a2234] border border-white/5 p-10 rounded-[40px] flex flex-col overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />

                <div className="flex justify-between items-start mb-10">
                  <motion.h3
                    className="text-3xl font-bold tracking-tight"
                    whileHover={{ scale: 1.1, color: "#9BC621" }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {pkg.name}
                  </motion.h3>
                  <motion.div
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-accent"
                    whileHover={{
                      rotate: 360,
                      scale: 1.2,
                      borderColor: "#9BC621",
                    }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                  </motion.div>
                </div>

                <div className="mb-10">
                  <div className="flex items-baseline gap-2">
                    <motion.span
                      className="text-6xl font-bold tracking-tighter"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.15 + 0.4,
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                    >
                      ${pkg.listPrice}
                    </motion.span>
                    <span className="text-zinc-500 text-sm font-bold uppercase tracking-widest">
                      / Release
                    </span>
                  </div>
                </div>

                <div className="flex-grow space-y-4 mb-10">
                  {pkg.includes.map((item, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + j * 0.1 + 0.5 }}
                      className="flex items-center gap-3 text-sm font-medium text-zinc-400"
                      whileHover={{ x: 5, color: "#ffffff" }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-accent"
                        whileHover={{ scale: 2 }}
                      />
                      {item}
                    </motion.div>
                  ))}
                </div>

                <motion.a
                  href={SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 rounded-2xl font-bold text-lg transition-all bg-accent text-dark shadow-xl text-center block relative overflow-hidden group/btn"
                  whileHover={{ boxShadow: "0 0 30px rgba(155, 198, 33, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    GET STARTED
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="mt-20 p-12 rounded-[40px] bg-white/5 border border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileHover={{
          scale: 1.02,
          borderColor: "rgba(155, 198, 33, 0.3)",
        }}
      >
        <div className="max-w-xl text-center lg:text-left">
          <motion.h4
            className="text-2xl font-bold mb-2"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Want more? Let's talk.
          </motion.h4>
          <p className="text-zinc-400 text-lg">
            Our BeSpoke™ solutions are tailored to your goals, explore our retainer options or
            choose a flexible pay-as-you-go plan. Contact{" "}
            <a className="font-bold ml-2 text-accent" href="mailto:support@contentsyndicate.net">
              support@contentsyndicate.net
            </a>
          </p>
        </div>
        <motion.button
          onClick={onContactClick}
          className="px-10 py-5 rounded-full border border-white/20 font-bold hover:bg-white hover:text-dark transition-all"
          whileHover={{
            scale: 1.05,
            rotate: [0, -5, 5, -5, 0],
            borderColor: "#9BC621",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          CONTACT SALES
        </motion.button>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
