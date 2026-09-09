import { motion } from 'motion/react';
import { Calendar, Briefcase, Flag, Target } from 'lucide-react';
import { EXPERIENCE, Experience } from '../../data/experience';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';
import { useReducedMotion } from '../../hooks/useReducedMotion';

function JobCard({ item, index, prefersReduced }: { item: Experience; index: number; prefersReduced: boolean }) {
  if (item.isMilestone) {
    return (
      <motion.div
        initial={prefersReduced ? { opacity: 1 } : { opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: prefersReduced ? 0 : index * 0.1 }}
        className="relative pl-8 md:pl-0"
      >
        <div className="md:grid md:grid-cols-5 md:gap-8 lg:gap-12 items-center">
          <div className="hidden md:block md:col-span-2 text-right">
            <span className="text-sm font-bold text-[#111111] tracking-widest uppercase">{item.date}</span>
          </div>

          <div className="relative md:col-span-3">
            <div className="absolute left-[-39px] md:left-[-35px] lg:left-[-41px] top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#111111] bg-[#FFFFFF] text-[#111111] shadow-xs z-10">
              <Target className="h-4 w-4" />
            </div>

            <div className="md:hidden mb-2 text-sm font-bold text-[#111111] tracking-widest uppercase">
              {item.date}
            </div>

            <GlassCard className="!p-5 border-dashed border-[#111111]/30 !bg-[#F7F7F7]" hoverEffect={false}>
              <h4 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                <Flag className="h-4 w-4 text-[#111111]" /> {item.role}
              </h4>
              <ul className="mt-3 space-y-1.5 text-sm text-[#555555]">
                {item.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#111111]/60" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 1 } : { opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: prefersReduced ? 0 : index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      <div className="md:grid md:grid-cols-5 md:gap-8 lg:gap-12">
        <div className="hidden md:block md:col-span-2 text-right mt-1">
          <span className="text-sm font-bold text-[#737373] tracking-wider uppercase">{item.date}</span>
        </div>

        <div className="relative md:col-span-3">
          {/* Timeline Node */}
          <div className="absolute left-[-37px] md:left-[-33px] lg:left-[-39px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#E5E5E5] bg-[#FFFFFF] z-10 transition-colors group-hover:border-[#111111]">
            <div className="h-2 w-2 rounded-full bg-[#737373]" />
          </div>

          <div className="md:hidden mb-2 text-xs font-bold text-[#737373] tracking-wider uppercase flex items-center gap-2">
            <Calendar className="h-3 w-3" /> {item.date}
          </div>

          <GlassCard className="!p-6 relative group">
            <h4 className="text-xl font-bold text-[#111111] transition-colors">{item.role}</h4>
            <div className="mb-4 mt-1 flex items-center gap-2 text-sm font-medium text-[#555555]">
              <Briefcase className="h-4 w-4" />
              <span>{item.company}</span>
            </div>
            
            <ul className="space-y-2 text-sm text-[#555555]">
              {item.description.map((desc, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#CCCCCC] group-hover:bg-[#111111] transition-colors" />
                  <span className="leading-relaxed">{desc}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="w-full flex flex-col">
      <div className="flex items-center gap-3 mb-8">
        <h3 className="text-2xl font-bold tracking-tight text-[#111111]">WORK HISTORY</h3>
      </div>

      <div className="relative mt-4">
        {/* Main timeline line */}
        <div className="absolute left-[11px] md:left-[40%] top-2 bottom-2 w-[2px] bg-[#E5E5E5] rounded-full" />
        
        <div className="flex flex-col gap-10">
          {EXPERIENCE.map((item, index) => (
            <JobCard key={index} item={item} index={index} prefersReduced={prefersReduced} />
          ))}
        </div>
      </div>
    </section>
  );
}
