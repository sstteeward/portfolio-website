import { motion } from 'motion/react';
import { GraduationCap, Award, CheckCircle2, Calendar } from 'lucide-react';
import { EDUCATION } from '../../data/education';
import { CERTIFICATIONS } from '../../data/certifications';
import SectionHeading from '../ui/SectionHeading';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function Education() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-24 border-t border-white/10 w-full">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading 
          badge="EDUCATION &amp; CREDENTIALS" 
          title="Academic Background &amp; Certifications" 
          subtitle="My formal education in Information Technology along with my professional certifications and achievements."
        />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">

          {/* ── Left Column: Academic History ── */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-3 w-3 rounded-full bg-[#F27D26]" />
              <GraduationCap className="h-5 w-5 text-[#F27D26]" />
              <h3 className="text-sm font-bold tracking-widest uppercase text-white">Academic History</h3>
            </div>

            {/* Timeline */}
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-[#F27D26]/60 via-white/10 to-transparent" />

              <div className="flex flex-col gap-5">
                {EDUCATION.map((item, index) => {
                  const isCurrent = item.status === 'current';
                  return (
                    <motion.div
                      key={index}
                      initial={prefersReduced ? { opacity: 1 } : { opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: prefersReduced ? 0 : index * 0.1 }}
                      className="relative"
                    >
                      {/* Timeline dot */}
                      <div className={`absolute -left-8 top-5 h-6 w-6 rounded-full flex items-center justify-center z-10 ${
                        isCurrent 
                          ? 'bg-[#F27D26] shadow-[0_0_12px_rgba(242,125,38,0.5)]' 
                          : 'bg-[#1A1A1A] border border-white/15'
                      }`}>
                        <item.icon className={`h-3 w-3 ${isCurrent ? 'text-white' : 'text-white/50'}`} />
                      </div>

                      {/* Card */}
                      <div className="rounded-2xl border border-white/5 bg-[#0A0A0A] p-5 hover:border-[#F27D26]/30 transition-colors duration-300">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <h4 className="text-base font-bold text-white mb-1">{item.school}</h4>
                            <p className={`text-sm font-medium ${isCurrent ? 'text-[#F27D26]' : 'text-[#F27D26]/70'}`}>
                              {item.program}
                            </p>
                            {item.years && (
                              <div className="flex items-center gap-2 mt-2 text-xs text-white/40">
                                <Calendar className="h-3.5 w-3.5" />
                                <span>{item.years}</span>
                                {isCurrent && (
                                  <span className="text-white/30">· {item.statusLabel}</span>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Status badge */}
                          <div className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                            isCurrent
                              ? 'bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/30'
                              : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          }`}>
                            <div className={`h-1.5 w-1.5 rounded-full ${isCurrent ? 'bg-[#F27D26] animate-pulse' : 'bg-emerald-400'}`} />
                            {isCurrent ? 'Currently Studying' : 'Graduated'}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Right Column: Certifications & Credentials ── */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-3 w-3 rounded-full bg-[#F27D26]" />
              <Award className="h-5 w-5 text-[#F27D26]" />
              <h3 className="text-sm font-bold tracking-widest uppercase text-white">Certifications &amp; Credentials</h3>
            </div>

            <div className="flex flex-col gap-4">
              {CERTIFICATIONS.map((group, index) => (
                <motion.div
                  key={index}
                  initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: prefersReduced ? 0 : index * 0.1 }}
                  className="rounded-2xl border border-white/5 bg-[#0A0A0A] p-5 hover:border-[#F27D26]/20 transition-colors duration-300"
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F27D26]/10">
                      <group.icon className="h-4 w-4 text-[#F27D26]" />
                    </div>
                    <h4 className="text-xs font-bold tracking-widest uppercase text-white/90">{group.category}</h4>
                  </div>

                  {/* Items */}
                  <ul className="space-y-3">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span className="text-sm text-white/70">{item.title}</span>
                        </div>
                        <span className="shrink-0 inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-white/50 whitespace-nowrap">
                          {item.issuer}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
