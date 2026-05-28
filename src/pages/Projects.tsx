import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const PROJECTS = [
  {
    title: 'SIL Monitoring System',
    desc: 'A full-stack student internship and laboratory (SIL) monitoring system built as my Software Engineering capstone. Tracks student progress, manages submissions, and provides dashboards for coordinators and admins.',
    tech: ['React', 'JavaScript', 'CSS', 'Supabase'],
    link: '#',
    github: '#',
    color: 'from-[#F27D26]/20 to-transparent',
  },
  {
    title: 'Asian College EIS',
    desc: 'A functional Enrollment Information System (EIS) website built for my Web Design subject. Features student enrollment workflows and information management, built with PHP and CSS.',
    tech: ['PHP', 'CSS', 'HTML'],
    link: '#',
    github: '#',
    color: 'from-[#F27D26]/20 to-transparent',
  },
  {
    title: 'Asian College Speech Recognition Software',
    desc: 'A speech recognition web application built with vanilla JavaScript, HTML, and CSS. Deployed live on Vercel.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: '#',
    github: '#',
    color: 'from-[#F27D26]/20 to-transparent',
  },
  {
    title: 'Re-creating website in the react.js',
    desc: 'This is a prelim exam laboratory activity.',
    tech: ['React'],
    link: '#',
    github: '#',
    color: 'from-[#F27D26]/20 to-transparent',
  },
  {
    title: 'Order Management System',
    desc: 'This is a project is made to layout the order management system.',
    tech: ['Figma', 'Flowchart', 'Wireframe'],
    link: '#',
    github: '#',
    color: 'from-[#F27D26]/20 to-transparent',
  },
  {
    title: 'Portfolio Website',
    desc: 'This is a laboratory activity.',
    tech: ['React', 'HTML', 'CSS'],
    link: '#',
    github: '#',
    color: 'from-[#F27D26]/20 to-transparent',
  },
];

export default function Projects() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const scrollPrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const scrollNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  return (
    <div className="mx-auto max-w-7xl px-0 sm:px-6 py-20 relative overflow-hidden">
      <div className="mb-16 px-6 sm:px-0 flex flex-col items-center justify-center text-center gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Selected Works</h1>
          <p className="text-white/60 max-w-xl text-lg mx-auto">
            A showcase of things I've built. From complex web apps to creative interactive designs.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={scrollPrev}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-white/10 hover:text-white hover:border-[#F27D26] active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={scrollNext}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-white/10 hover:text-white hover:border-[#F27D26] active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={800}
          onSwiper={setSwiperInstance}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          className="w-full pt-4 pb-16 [perspective:1000px]"
        >
          {PROJECTS.map((project, i) => (
            <SwiperSlide key={i} className="max-w-[320px] md:max-w-[420px] transition-all duration-300">
              {({ isActive }) => (
                <div
                  className={`group flex flex-col overflow-hidden rounded-3xl border ${isActive ? 'border-[#F27D26]/50 shadow-2xl shadow-[#F27D26]/10 bg-[#111]' : 'border-white/10 bg-[#0A0A0A] hover:border-[#F27D26]'} transition-all duration-500 h-full`}
                >
                  {/* Top "Image" Area */}
                  <div className="flex h-56 w-full items-center justify-center border-b border-white/10 relative overflow-hidden bg-slate-900">
                     <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 transition-opacity duration-500 group-hover:opacity-60`}
                      />
                     <span className="relative z-10 text-6xl text-white/90 drop-shadow-lg tracking-wide font-bold transition-transform duration-500 group-hover:scale-110" style={{fontFamily: "'Dancing Script', cursive"}}>
                        sstteward
                     </span>

                     {/* Hover Overlay Buttons */}
                     <div className={`absolute inset-0 z-20 flex items-center justify-center gap-4 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isActive ? 'opacity-0 hover:opacity-100' : 'opacity-0'}`}>
                       <a
                         href={project.link}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex items-center gap-2 rounded-full bg-[#F27D26] px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                       >
                         <ExternalLink className="h-4 w-4" /> Live Demo
                       </a>
                       <a
                         href={project.github}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex items-center gap-2 rounded-full bg-[#111] px-5 py-2.5 text-sm font-bold text-white shadow-lg border border-white/5 transition-colors hover:bg-white/10 hover:border-[#F27D26]"
                       >
                         <Github className="h-4 w-4" /> Source
                       </a>
                     </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-1 flex-col p-6 min-h-[220px]">
                    <h3 className="text-xl font-bold tracking-tight mb-3 text-white/90">{project.title}</h3>
                    <p className={`text-sm flex-1 ${isActive ? 'text-white/70' : 'text-white/50 line-clamp-3'}`}>{project.desc}</p>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 hover:border-[#F27D26] transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}
