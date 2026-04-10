import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const CTABlock = () => (
  <div className="flex flex-col items-center gap-8 my-12 text-center">
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="https://admin.contentsyndicate.net/signup/client"
      target="_blank"
      rel="noopener noreferrer"
      className="px-10 py-5 rounded-full text-lg font-bold text-white transition-all flex items-center gap-3 shadow-2xl bg-accent relative overflow-hidden group/btn"
    >
      <motion.span
        className="relative z-10 flex items-center gap-3"
        whileHover={{ x: 3 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        Submit Press Release <ArrowRight className="w-6 h-6" />
      </motion.span>
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      <motion.div
        className="absolute inset-0 bg-white/10"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{ borderRadius: "50%" }}
      />
    </motion.a>
  </div>
);

export default CTABlock;
