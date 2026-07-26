import Hero from '../components/sections/Hero';
import Education from '../components/sections/Education';
import TechStack from '../components/sections/TechStack';
import ExperienceTimeline from '../components/sections/ExperienceTimeline';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <Hero />
      <Education />
      
      <section className="py-24 border-t border-white/10 flex flex-col items-center w-full" id="skills-experience">
        <div className="text-center mb-16 w-full">
          <h2 className="text-sm font-bold tracking-widest text-[#F27D26] uppercase mb-3">WHAT I KNOW</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Skills & Experience</h3>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Technologies I work with and the professional experiences that have shaped my career.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 w-full items-start">
          <TechStack />
          <ExperienceTimeline />
        </div>
      </section>
    </div>
  );
}

