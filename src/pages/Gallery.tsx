import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { EffectCoverflow, Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const IMAGES = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600&h=900',
    title: 'Code & Coffee',
    desc: 'The essential developer fuel.',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600&h=900',
    title: 'Modern Workspace',
    desc: 'Clean environment for clean code.',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600&h=900',
    title: 'Late Night Debugging',
    desc: 'When the best ideas come to light.',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600&h=900',
    title: 'Data Visualization',
    desc: 'Turning complex logic into beautiful UI.',
  },
];

export default function Gallery() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const scrollPrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const scrollNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  return (
    <div className="mx-auto max-w-7xl px-0 sm:px-6 py-20 relative overflow-hidden min-h-[80vh] flex flex-col">
      <div className="mb-12 px-6 sm:px-0 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Gallery</h1>
          <p className="mt-4 text-white/60">A visual journey through my workspace & inspiration.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={scrollPrev}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-white/10 hover:text-white active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={scrollNext}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-white/10 hover:text-white active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="w-full relative flex-1">
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
          pagination={{ clickable: true, el: '.custom-pagination' }}
          onSwiper={setSwiperInstance}
          modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
          className="w-full pt-4 pb-16 [perspective:1000px]"
        >
          {IMAGES.map((img) => (
            <SwiperSlide key={img.id} className="max-w-[320px] md:max-w-[600px] lg:max-w-[800px] transition-all duration-300">
              {({ isActive }) => (
                <div
                  className={`group flex flex-col overflow-hidden rounded-3xl border ${isActive ? 'border-white/20 shadow-2xl shadow-white/5 bg-[#111]' : 'border-white/10 bg-[#0A0A0A]'} transition-all duration-500 h-full relative aspect-video`}
                >
                  <img src={img.url} alt={img.title} className="absolute inset-0 w-full h-full object-cover" />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-60'}`} />

                  {/* Content Info */}
                  <div className={`absolute bottom-8 left-8 right-8 pointer-events-none transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <h2 className="text-3xl font-bold text-white drop-shadow-md">
                      {img.title}
                    </h2>
                    <p className="mt-2 text-lg text-white/80 drop-shadow-md">
                      {img.desc}
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-8 flex justify-center gap-2 [&>.swiper-pagination-bullet]:w-2 [&>.swiper-pagination-bullet]:h-2 [&>.swiper-pagination-bullet]:bg-white/40 [&>.swiper-pagination-bullet]:rounded-full [&>.swiper-pagination-bullet-active]:w-8 [&>.swiper-pagination-bullet-active]:bg-[#F27D26] [&>.swiper-pagination-bullet]:transition-all [&>.swiper-pagination-bullet]:cursor-pointer"></div>
      </div>
    </div>
  );
}
