import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import profileImg from '../../assets/images/profile.jpg';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden w-full bg-[#FAFAFA]">
      {/* Background Subtle Grid Pattern */}
      {!prefersReduced && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
      )}

      <div className="mx-auto max-w-7xl w-full px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start text-left"
        >
          <span className="text-[#555555] text-xs font-semibold tracking-widest uppercase mb-8">
            Portfolio
          </span>

          <h1 className="mb-10 text-[5rem] sm:text-[7rem] lg:text-[8rem] font-bold tracking-tighter leading-[0.9] text-[#111111]">
            steward<br />
            humiwat
          </h1>

          <p className="mb-10 max-w-md text-lg text-[#555555] leading-relaxed">
            I build interactive, modern, and beautiful web experiences. Passionate about frontend design, performance, and clean code.
          </p>

          <a
            href="#projects"
            className="group flex items-center gap-3 rounded-full bg-[#111111] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#262626] shadow-sm"
          >
            Explore Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: prefersReduced ? 0 : 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[48px] overflow-hidden border border-[#E5E5E5] bg-[#FFFFFF] shadow-sm group">
            <img
              src={profileImg}
              alt="Steward Humiwat"
              fetchPriority="high"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
