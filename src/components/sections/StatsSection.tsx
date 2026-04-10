import { motion } from 'motion/react';
import { Zap, Sparkles, BarChart3, Users } from 'lucide-react';
import { STATS } from '../../lib/constants';

const iconMap = {
  TrendingUp: Zap,
  Sparkles,
  BarChart3,
  Users,
};

const StatsSection = () => (
  <section className="py-20 bg-white border-b border-zinc-200">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {STATS.map((stat, i) => {
          const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              <motion.div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors bg-accent text-dark shadow-lg relative overflow-hidden"
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{ scale: 2, rotate: 180 }}
                  transition={{ duration: 0.6 }}
                  style={{ borderRadius: '50%' }}
                />
                {IconComponent && <IconComponent className="w-6 h-6 relative z-10" />}
              </motion.div>
              
              <motion.div 
                className="text-4xl lg:text-5xl font-bold text-dark mb-2 tracking-tighter"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {stat.value}
              </motion.div>
              
              <motion.div 
                className="text-[10px] font-black text-dark/40 uppercase tracking-[0.2em]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.5 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default StatsSection;
