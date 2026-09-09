import { motion } from 'motion/react';
import SectionHeading from '../ui/SectionHeading';
import profileImg from '../../assets/images/profile.jpg';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function About() {
  const prefersReduced = useReducedMotion();


  return (
    <section className="py-24 border-t border-[#E5E5E5] w-full overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading 
          badge="ABOUT ME" 
          title="Who I Am" 
          subtitle="Get to know the person behind the code."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Profile Image (Left) */}
          <motion.div
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[48px] overflow-hidden border border-[#E5E5E5] bg-[#FFFFFF] group shadow-sm">
              <img 
                src={profileImg} 
                alt="Steward Humiwat - About" 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Content (Right) */}
          <motion.div
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start text-left gap-8"
          >
            <div className="space-y-6 text-lg text-[#555555] leading-relaxed">
              <p>
                Hello! I'm <span className="text-[#111111] font-bold">Steward Humiwat</span>, an aspiring software engineer with a deep passion for building scalable, accessible, and visually stunning web applications. 
              </p>
              <p>
                Currently, I am pursuing my <span className="text-[#111111] font-medium">Bachelor of Science in Information Technology</span> at Asian College in Dumaguete. My academic journey has provided me with a strong foundation in computer science principles, but my true growth comes from getting my hands dirty with real-world code.
              </p>
              <p>
                I thrive in the intersection of design and engineering. Whether it's architecting a robust backend database with MySQL and Supabase, or meticulously crafting a pixel-perfect React frontend with Tailwind CSS and Framer Motion, I enjoy every layer of the stack.
              </p>
              <p>
                My ultimate goal is to become a versatile Senior Full Stack Developer who not only writes clean, maintainable code but also builds products that solve meaningful problems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
