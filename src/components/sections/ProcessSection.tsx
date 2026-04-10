import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../../lib/constants';

const ProcessSection = () => (
  <section id="process" className="py-32 bg-white relative overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <span className="text-xs font-black uppercase tracking-[0.3em] text-accent">
          The Process
        </span>
        <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter font-display mt-4 text-dark">
          Ready to Claim Your <br />
          <span className="editorial-heading">Spot on Page One?</span>
        </h2>
        <p className="text-xl text-zinc-500 max-w-2xl mx-auto mt-6 font-medium">
          Stop wasting thousands on "hope-and-pray" marketing. Get the authority your business
          deserves today.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {PROCESS_STEPS.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              delay: i * 0.2,
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              transition: { type: "spring", stiffness: 400, damping: 15 }
            }}
            className="relative group text-center cursor-default"
          >
            <motion.div 
              className="text-8xl font-bold text-zinc-50 absolute -top-10 left-1/2 -translate-x-1/2 -z-10 group-hover:text-zinc-100 transition-colors select-none"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            >
              {item.step}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 0.15, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 + 0.5 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-accent rounded-full filter blur-3xl"
            />
            
            <motion.h3 
              className="text-2xl font-bold mb-4 text-dark relative z-10"
              whileHover={{ scale: 1.1, color: '#9BC621' }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {item.title}
            </motion.h3>
            
            <motion.p 
              className="text-zinc-500 leading-relaxed font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 + 0.7 }}
              whileHover={{ x: 3 }}
            >
              {item.description}
            </motion.p>

            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-1 bg-accent group-hover:w-20 transition-all duration-500"
              whileHover={{ width: 80 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
