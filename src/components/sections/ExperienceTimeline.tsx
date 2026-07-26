import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { EXPERIENCE } from '../../data/experience';

const JobCard = ({ job, i }: { job: any; i: number }) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: i * 0.1 }}
    className="relative flex items-start group gap-8"
  >
    {/* Timeline dot */}
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
      className="absolute left-0 top-12 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md z-10 ml-5"
    >
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 10, delay: i * 0.1 + 0.4 }}
        className="h-2.5 w-2.5 rounded-full bg-[#F27D26] shadow-[0_0_10px_2px_rgba(242,125,38,0.5)]" 
      />
    </motion.div>
    
    {/* Content box */}
    <div className="w-full pl-16">
      <div className="flex flex-col rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:border-[#F27D26]/50 hover:bg-white/10 hover:shadow-[0_0_20px_-5px_rgba(242,125,38,0.2)]">
        <div className="flex items-center gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-white/90">{job.role}</h3>
            <span className="text-sm font-semibold text-[#F27D26]">{job.company}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-white/40 mb-4 text-xs font-semibold">
          <Calendar className="h-3.5 w-3.5" />
          <span>{job.date}</span>
        </div>
        
        <ul className="space-y-2">
          {job.description.map((desc: string, idx: number) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-white/60 font-medium">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#F27D26] shrink-0" />
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

export default function ExperienceTimeline() {
  return (
    <div>
      <div className="mb-10 flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-[#F27D26] shadow-[0_0_10px_2px_rgba(242,125,38,0.5)]" />
        <h2 className="text-sm font-bold tracking-widest text-white/80 uppercase">WORK HISTORY</h2>
      </div>
      
      <div className="relative space-y-8">
        {/* Animated vertical line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-5 top-0 w-0.5 -translate-x-px bg-white/5"
        />
        {EXPERIENCE.map((job, i) => (
          <JobCard key={i} job={job} i={i} />
        ))}
      </div>
    </div>
  );
}
