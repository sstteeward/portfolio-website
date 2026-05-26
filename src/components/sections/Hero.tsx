import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const profileImg = new URL('../../assets/images/profile.jpg', import.meta.url).href;

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 md:gap-16 lg:gap-24 w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 md:mb-12"
          >
            <span className="font-mono text-sm tracking-widest text-[#F27D26] uppercase">
              Portfolio
            </span>
            <h1 className="mt-4 text-6xl font-bold tracking-tighter sm:text-8xl md:text-8xl lg:text-[10rem] leading-[0.9] shrink-0">
              steward
              <br />
              humiwat<span className="text-[#F27D26]">.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col items-start gap-8 sm:flex-row sm:items-center"
          >
            <p className="max-w-md text-lg text-white/60 leading-relaxed">
              I build interactive, modern, and beautiful web experiences. Passionate about frontend design, performance, and clean code.
            </p>

            <a
              href="#projects"
              className="group shrink-0 flex items-center gap-2 rounded-full border border-white/20 bg-white/5 py-4 px-8 text-sm font-medium transition-all hover:bg-white/10"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          src={profileImg}
          alt="Steward Humiwat"
          className="w-48 h-64 sm:w-64 sm:h-80 md:w-[20rem] md:h-[26rem] xl:w-[26rem] xl:h-[32rem] object-cover rounded-[2rem] xl:rounded-[3rem] border border-white/10 shadow-2xl shrink-0"
        />
      </div>
    </section>
  );
}
