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
      <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-[#FFFFFF] px-4 py-1.5">
        <div className="h-1.5 w-1.5 rounded-full bg-[#111111]" />
        <span className="text-xs font-semibold tracking-widest text-[#555555] uppercase">
          {badge}
        </span>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111111] lg:text-6xl">
        {title}
      </h2>
      
      {subtitle && (
        <p className="max-w-2xl text-lg text-[#555555]">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
