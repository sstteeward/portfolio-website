import { motion } from 'motion/react';
import { GraduationCap, Calendar, CheckCircle, Award, Check } from 'lucide-react';
import { EDUCATION } from '../../data/education';
import { CERTIFICATIONS } from '../../data/certifications';

export default function Education() {
  return (
    <section className="py-24 border-t border-white/10 w-full" id="education">
      {/* Main Header */}
      <div className="mb-16 text-center w-full flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/5 mb-3 hover:border-[#F27D26] transition-colors">
          <GraduationCap className="h-4 w-4 text-[#F27D26]" />
          <span className="text-xs font-semibold tracking-wide text-white/80 uppercase">Education & Credentials</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
          Academic Background & Certifications
        </h2>
        <p className="text-base text-white/60 max-w-xl mx-auto">
          My formal education in Information Technology along with my professional certifications and achievements.
        </p>
      </div>

      {/* Grid Container: Left = Academic History, Right = Certifications */}
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start w-full">
        {/* Left Column: Academic History Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-2.5 w-2.5 rounded-full bg-[#F27D26] shadow-[0_0_10px_2px_rgba(242,125,38,0.5)]" />
            <h3 className="text-sm font-bold tracking-widest text-white/90 uppercase flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-[#F27D26]" />
              Academic History
            </h3>
          </div>

          <div className="relative space-y-6">
            {/* Vertical timeline line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute left-4 top-0 w-0.5 -translate-x-px bg-[#F27D26]/20"
            />

            {EDUCATION.map((entry, i) => {
              const isCurrent = entry.status === 'current';
              const Icon = entry.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative flex items-start group gap-5 pl-12"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-0 top-3.5 flex h-8 w-8 items-center justify-center rounded-full z-10 transition-colors ${
                      isCurrent
                        ? 'bg-[#F27D26] text-white shadow-[0_0_12px_rgba(242,125,38,0.5)]'
                        : 'bg-[#0A0A0A] border border-white/10 text-[#F27D26]'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {isCurrent && (
                      <span className="absolute inset-0 rounded-full animate-ping bg-[#F27D26]/30 pointer-events-none" />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full rounded-2xl border p-4 md:p-5 transition-all duration-300 ${
                      isCurrent
                        ? 'border-[#F27D26]/40 bg-[#F27D26]/[0.03] hover:border-[#F27D26]'
                        : 'border-white/5 bg-[#0A0A0A] hover:border-white/20'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-1.5">
                      <h4 className="text-base font-bold tracking-tight text-white/90">
                        {entry.school}
                      </h4>
                      {isCurrent ? (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#F27D26]/15 border border-[#F27D26]/30 text-[11px] font-semibold text-[#F27D26] w-fit">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#F27D26] animate-pulse" />
                          Currently Studying
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-400 w-fit">
                          <CheckCircle className="h-3 w-3" />
                          Graduated
                        </span>
                      )}
                    </div>

                    <p className="text-xs font-semibold text-[#F27D26] mb-2">
                      {entry.program}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-white/40">
                      {entry.years && (
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-white/30" />
                          <span>{entry.years}</span>
                        </div>
                      )}
                      {isCurrent && (
                        <span className="text-white/60 font-semibold">• {entry.statusLabel}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column: Certifications & Credentials */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-2.5 w-2.5 rounded-full bg-[#F27D26] shadow-[0_0_10px_2px_rgba(242,125,38,0.5)]" />
            <h3 className="text-sm font-bold tracking-widest text-white/90 uppercase flex items-center gap-2">
              <Award className="h-4 w-4 text-[#F27D26]" />
              Certifications & Credentials
            </h3>
          </div>

          <div className="space-y-5">
            {CERTIFICATIONS.map((group, groupIdx) => {
              const GroupIcon = group.icon;
              return (
                <motion.div
                  key={groupIdx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
                  className="rounded-2xl border border-white/5 bg-[#0A0A0A] p-5 hover:border-[#F27D26]/40 transition-colors group"
                >
                  <div className="flex items-center gap-2.5 mb-3 text-[#F27D26]">
                    <GroupIcon className="h-4 w-4 shrink-0" />
                    <h4 className="text-sm font-bold text-white/90 uppercase tracking-wide">
                      {group.category}
                    </h4>
                  </div>

                  <ul className="space-y-2.5 pl-1">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-white/70 font-medium leading-snug">
                        <div className="mt-1 h-4 w-4 rounded-full bg-[#F27D26]/10 border border-[#F27D26]/30 flex items-center justify-center shrink-0">
                          <Check className="h-2.5 w-2.5 text-[#F27D26]" />
                        </div>
                        <div className="flex-1 flex flex-wrap items-center justify-between gap-1">
                          <span className="text-white/90 font-medium">{item.title}</span>
                          <span className="text-[10px] font-semibold text-[#F27D26]/80 bg-[#F27D26]/10 px-2 py-0.5 rounded-md border border-[#F27D26]/20">
                            {item.issuer}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
