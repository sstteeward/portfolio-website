import { motion } from 'motion/react';
import { ArrowRight, Mail, Linkedin, Github, Facebook, Instagram } from 'lucide-react';

const CONTACT_LINKS = [
  {
    title: 'EMAIL',
    value: 'stewardhumiwat@gmail.com',
    icon: Mail,
    href: 'mailto:stewardhumiwat@gmail.com',
    iconColor: 'text-[#F27D26]',
    iconBg: 'bg-[#F27D26]/10',
  },
  {
    title: 'LINKEDIN',
    value: 'Steward S. Humiwat',
    icon: Linkedin,
    href: 'https://linkedin.com/',
    iconColor: 'text-[#F27D26]',
    iconBg: 'bg-[#F27D26]/10',
  },
  {
    title: 'GITHUB',
    value: 'sstteeward',
    icon: Github,
    href: 'https://github.com/sstteeward',
    iconColor: 'text-white',
    iconBg: 'bg-white/10',
  },
  {
    title: 'FACEBOOK',
    value: 'Steward Sarong Humiwat',
    icon: Facebook,
    href: 'https://facebook.com/',
    iconColor: 'text-[#F27D26]',
    iconBg: 'bg-[#F27D26]/10',
  },
  {
    title: 'INSTAGRAM',
    value: '@sho__ess',
    icon: Instagram,
    href: 'https://instagram.com/sho__ess',
    iconColor: 'text-[#F27D26]',
    iconBg: 'bg-[#F27D26]/10',
  },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 flex min-h-[80vh] flex-col justify-center">
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center w-full flex flex-col items-center"
        >
          <span className="font-mono text-sm tracking-widest text-[#F27D26] uppercase mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-5xl font-bold tracking-tight mb-6 lg:text-7xl">
            Let's build<br className="hidden md:block" /> something together.
          </h1>
          <p className="text-lg text-white/60 mb-10 max-w-xl text-center">
            I'm currently available for freelance work and full-time opportunities. Reach out to me through any of the platforms below.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid gap-4 md:grid-cols-2"
      >
        {CONTACT_LINKS.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
            }}
            className="group flex items-center justify-between rounded-2xl border border-white/5 bg-[#0A0A0A] p-4 transition-all hover:border-[#F27D26] hover:bg-white/5 relative overflow-hidden"
          >
            {/* Subtle gradient hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            <div className="flex items-center gap-4 relative z-10">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl \${link.iconBg} \${link.iconColor}`}>
                <link.icon className="h-6 w-6 stroke-[1.5]" />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-wider text-white/40 mb-0.5">{link.title}</p>
                <p className="text-sm font-semibold text-white/90">{link.value}</p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-white/20 transition-transform group-hover:translate-x-1 group-hover:text-white/60 relative z-10" />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
