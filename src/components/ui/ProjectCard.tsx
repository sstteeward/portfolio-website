import { motion } from 'motion/react';
import { ExternalLink, Github, Code2, Maximize2 } from 'lucide-react';
import { Project } from '../../data/projects';
import GlassCard from './GlassCard';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ProjectCardProps {
  project: Project;
  isActive?: boolean;
  onClick?: () => void;
  variant?: 'swiper' | 'grid';
}

export default function ProjectCard({ project, isActive = true, onClick, variant = 'swiper' }: ProjectCardProps) {
  const prefersReduced = useReducedMotion();

  const isGrid = variant === 'grid';

  return (
    <GlassCard 
      className={`group flex h-full flex-col overflow-hidden ${isGrid ? 'cursor-pointer p-0' : 'p-0'} transition-all duration-500`}
      hoverEffect={isGrid}
    >
      <div 
        className="relative h-48 sm:h-56 w-full overflow-hidden" 
        onClick={isGrid ? onClick : undefined}
      >
        <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40 z-10 transition-opacity duration-300 group-hover:opacity-20`} />
        
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#0A0A0A]">
            <Code2 className="h-16 w-16 text-white/10" />
          </div>
        )}
        
        {isGrid && (
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex items-center gap-2 rounded-full bg-[#F27D26] px-4 py-2 font-bold text-white shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <Maximize2 className="h-4 w-4" />
              View Details
            </div>
          </div>
        )}
      </div>

      <div className={`flex flex-1 flex-col ${isGrid ? 'p-6 sm:p-8' : 'p-6 sm:p-8'} relative z-20 bg-[#0A0A0A]`}>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((t, idx) => (
            <span
              key={idx}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/60 transition-colors group-hover:border-[#F27D26]/30 group-hover:text-[#F27D26]"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/60">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        <h3 className="mb-3 text-xl sm:text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-[#F27D26]">
          {project.title}
        </h3>
        
        <p className={`mb-6 flex-1 text-sm text-white/60 leading-relaxed ${isGrid ? 'line-clamp-3' : 'line-clamp-4'}`}>
          {project.desc}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex gap-3">
            {project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-white/40 transition-colors hover:text-white"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-white/40 transition-colors hover:text-[#F27D26]"
                aria-label={`Visit ${project.title} live site`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
          
          {!isGrid && onClick && (
            <button 
              onClick={onClick}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                isActive 
                  ? 'bg-[#F27D26] text-white' 
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              Details
            </button>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
