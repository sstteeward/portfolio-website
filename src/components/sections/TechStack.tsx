import { motion } from 'motion/react';
import { TECH_STACK } from '../../data/techStack';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function TechStack() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="w-full flex flex-col">
      <div className="flex items-center gap-3 mb-8">
        <h3 className="text-2xl font-bold tracking-tight text-[#111111]">TECH STACK</h3>
      </div>

      <div className="flex flex-col gap-12">
        {TECH_STACK.map((category, catIdx) => (
          <motion.div 
            key={catIdx}
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: prefersReduced ? 0 : catIdx * 0.1 }}
          >
            <h3 className="text-xl font-bold text-[#111111] mb-6 pl-2 border-l-2 border-[#111111] uppercase tracking-wide">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
              {category.items.map((item, i) => (
                <GlassCard key={i} className="group !p-5 flex flex-col items-center justify-center gap-4 text-center">
                  <div className="flex h-14 w-14 items-center justify-center bg-[#F5F5F5] rounded-2xl border border-[#E5E5E5] group-hover:border-[#111111]/30 transition-all duration-300">
                    <img 
                      src={`https://cdn.simpleicons.org/${item.iconName}/111111`}
                      alt={item.name}
                      loading="lazy"
                      className="h-8 w-8 object-contain opacity-80 transition-transform duration-300 group-hover:scale-110 group-hover:opacity-100"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${item.name}&background=111111&color=fff&bold=true&rounded=true`
                      }}
                    />
                  </div>
                  
                  <div className="w-full">
                    <span className="text-sm font-semibold text-[#111111] mb-1 block">
                      {item.name}
                    </span>
                    
                    {item.yearsOfExperience && (
                      <span className="text-[10px] text-[#737373] block mb-2">{item.yearsOfExperience}</span>
                    )}

                    {item.proficiency && (
                      <div className="w-full bg-[#E5E5E5] rounded-full h-1.5 mt-2 overflow-hidden">
                        <motion.div 
                          className="bg-[#111111] h-1.5 rounded-full"
                          initial={prefersReduced ? { width: `${item.proficiency}%` } : { width: 0 }}
                          whileInView={{ width: `${item.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
