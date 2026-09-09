import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { PROJECTS, Project } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';
import ProjectModal from '../components/ui/ProjectModal';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Projects() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const prefersReduced = useReducedMotion();

  const scrollPrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const scrollNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  return (
    <div className="mx-auto max-w-7xl px-0 sm:px-6 py-24 relative overflow-hidden">
      <div className="mb-16 px-6 sm:px-0 flex flex-col items-center justify-center text-center gap-6">
        <div>
          <h2 className="text-xs font-semibold tracking-widest text-[#555555] uppercase mb-3">PORTFOLIO</h2>
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-[#111111]">Selected Works</h1>
          <p className="text-[#555555] max-w-xl text-lg mx-auto">
            A showcase of things I've built. From web apps to interactive UI designs.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={scrollPrev}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E5E5] bg-[#FFFFFF] text-[#111111] transition-all hover:bg-[#F5F5F5] hover:border-[#111111]/30 active:scale-95 shadow-xs"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={scrollNext}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E5E5] bg-[#FFFFFF] text-[#111111] transition-all hover:bg-[#F5F5F5] hover:border-[#111111]/30 active:scale-95 shadow-xs"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      <motion.div
        initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
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
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1200}
          onSwiper={setSwiperInstance}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          className="w-full pt-4 pb-16 [perspective:1000px]"
        >
          {PROJECTS.map((project, i) => (
            <SwiperSlide key={i} className="max-w-[320px] md:max-w-[420px] transition-all duration-300">
              {({ isActive }) => (
                <div onClick={() => setSelectedProject(project)} className="cursor-pointer h-full">
                  <ProjectCard project={project} isActive={isActive} variant="swiper" />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
