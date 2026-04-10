import { motion } from "motion/react";
import CTABlock from "./CTASection";

const FinalCTASection = () => (
  <section id="join" className="py-32 bg-white relative overflow-hidden">
    <motion.div
      className="absolute inset-0 grid-pattern opacity-40 -z-10"
      animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    />

    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <motion.h2
          className="text-5xl lg:text-7xl font-bold tracking-tighter font-display mb-10 text-dark"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Join 2,500+ agencies and owners who are{" "}
          <span className="editorial-heading">finally getting noticed.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <CTABlock />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
