import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ badge, title, subtitle, align = 'center' }: SectionHeadingProps) {
  const prefersReduced = useReducedMotion();
  const alignmentClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-16 flex w-full flex-col gap-4 ${alignmentClass}`}
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
        <div className="h-2 w-2 rounded-full bg-[#F27D26] shadow-[0_0_10px_rgba(242,125,38,0.5)]" />
        <span className="text-xs font-bold tracking-widest text-white/80 uppercase">
          {badge}
        </span>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white lg:text-6xl">
        {title}
      </h2>
      
      {subtitle && (
        <p className="max-w-2xl text-lg text-white/60">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
