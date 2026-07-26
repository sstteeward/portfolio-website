import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ACHIEVEMENTS } from '../../data/achievements';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { useReducedMotion } from '../../hooks/useReducedMotion';

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const prefersReduced = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (prefersReduced) {
      setCount(value);
      return;
    }

    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const incrementTime = (duration * 1000) / end;
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      // Fallback for large numbers
      if (incrementTime < 10) {
        clearInterval(timer);
        const steps = 60; // 60fps
        const stepTime = (duration * 1000) / steps;
        const stepValue = end / steps;
        
        let currentStep = 0;
        timer = setInterval(() => {
          currentStep++;
          setCount(Math.min(Math.round(stepValue * currentStep), end));
          if (currentStep >= steps) clearInterval(timer);
        }, stepTime);
      }

      return () => clearInterval(timer);
    }
  }, [value, duration, isInView, prefersReduced]);

  return <span ref={ref}>{count}</span>;
}

export default function Achievements() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-14 border-t border-white/10 w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading 
          badge="MILESTONES" 
          title="Achievements in Numbers" 
          subtitle="Quantifying my journey as a developer so far."
        />

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-8">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: prefersReduced ? 0 : idx * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col items-center text-center !p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F27D26]/10 text-[#F27D26] mb-3">
                  <item.icon className="h-4 w-4" />
                </div>
                
                <div className="flex items-baseline justify-center gap-0.5 mb-1">
                  <h4 className="text-2xl font-bold tracking-tighter text-white">
                    <AnimatedCounter value={item.value} />
                  </h4>
                  {item.suffix && (
                    <span className="text-lg font-bold text-[#F27D26]">
                      {item.suffix}
                    </span>
                  )}
                </div>
                
                <p className="text-[10px] font-medium uppercase tracking-wider text-white/50">
                  {item.label}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
