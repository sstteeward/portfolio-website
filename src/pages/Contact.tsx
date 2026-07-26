import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionHeading from '../components/ui/SectionHeading';
import GlassCard from '../components/ui/GlassCard';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const prefersReduced = useReducedMotion();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Make sure to replace these with actual EmailJS credentials
    // For now, we'll simulate the submission since we don't have the real keys
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      form.current?.reset();

      // Reset status after a few seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);

    /*
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setSubmitStatus('success');
        form.current?.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus('idle'), 5000);
      });
    */
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'stewardhumiwat@gmail.com',
      link: 'mailto:stewardhumiwat@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Miguel Bacong, Negros Oriental, Philippines',
      link: null
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '09659080925',
      link: 'tel:09659080925'
    }
  ];

  return (
    <section className="py-24 w-full">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="CONTACT"
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Contact Info */}
          <motion.div
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left"
          >
            <h3 className="mb-4 text-3xl font-bold tracking-tight text-white">Let's talk about your next project.</h3>
            <p className="mb-10 text-lg text-white/60 leading-relaxed">
              I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex flex-col gap-6 w-full mb-10">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-[#F27D26] border border-white/10 hover:border-[#F27D26]/50 hover:bg-[#F27D26]/10 transition-colors">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white/50 uppercase tracking-widest mb-0.5">{info.title}</p>
                    {info.link ? (
                      <a href={info.link} className="text-sm font-medium text-white hover:text-[#F27D26] transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/sstteeward" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white/70 border border-white/10 hover:bg-[#F27D26] hover:text-white hover:border-[#F27D26] transition-all">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/steward-humiwat-a7a324334/" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white/70 border border-white/10 hover:bg-[#F27D26] hover:text-white hover:border-[#F27D26] transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <GlassCard className="!p-8 sm:!p-10 relative overflow-hidden w-full" hoverEffect={false}>
              {/* Form Status Overlays */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0A0A0A]/90 backdrop-blur-sm"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 mb-6">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-white/60 text-center max-w-xs">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0A0A0A]/90 backdrop-blur-sm"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500/20 text-red-500 mb-6">
                      <AlertCircle className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Oops!</h3>
                    <p className="text-white/60 text-center max-w-xs mb-6">
                      Something went wrong while sending your message. Please try again later.
                    </p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="px-6 py-2 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 transition-colors"
                    >
                      Try Again
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="user_name" className="text-sm font-bold tracking-wide text-white/70 uppercase">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      required
                      placeholder="Type your name here"
                      className="rounded-xl border border-white/10 bg-[#050505] px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-[#F27D26] focus:outline-none focus:ring-1 focus:ring-[#F27D26]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="user_email" className="text-sm font-bold tracking-wide text-white/70 uppercase">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      id="user_email"
                      required
                      placeholder="Type your email here"
                      className="rounded-xl border border-white/10 bg-[#050505] px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-[#F27D26] focus:outline-none focus:ring-1 focus:ring-[#F27D26]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-bold tracking-wide text-white/70 uppercase">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    placeholder="Project Inquiry"
                    className="rounded-xl border border-white/10 bg-[#050505] px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-[#F27D26] focus:outline-none focus:ring-1 focus:ring-[#F27D26]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-bold tracking-wide text-white/70 uppercase">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    placeholder="Hello, I'd like to talk about..."
                    className="rounded-xl border border-white/10 bg-[#050505] px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-[#F27D26] focus:outline-none focus:ring-1 focus:ring-[#F27D26] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F27D26] to-[#e66c15] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all hover:shadow-[#F27D26]/25 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
