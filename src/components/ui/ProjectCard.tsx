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
          <div className="flex h-full w-full items-center justify-center bg-[#F5F5F5]">
            <Code2 className="h-16 w-16 text-[#111111]/20" />
          </div>
        )}
        
        {isGrid && (
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 bg-black/20 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex items-center gap-2 rounded-full bg-[#111111] px-4 py-2 text-xs font-semibold text-white shadow-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <Maximize2 className="h-4 w-4" />
              View Details
            </div>
          </div>
        )}
      </div>

      <div className={`flex flex-1 flex-col ${isGrid ? 'p-6 sm:p-8' : 'p-6 sm:p-8'} relative z-20 bg-[#FFFFFF]`}>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((t, idx) => (
            <span
              key={idx}
              className="rounded-md border border-[#E5E5E5] bg-[#F7F7F7] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#555555] transition-colors group-hover:border-[#111111]/30 group-hover:text-[#111111]"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="rounded-md border border-[#E5E5E5] bg-[#F7F7F7] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#737373]">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        <h3 className="mb-3 text-xl sm:text-2xl font-bold tracking-tight text-[#111111] transition-colors">
          {project.title}
        </h3>
        
        <p className={`mb-6 flex-1 text-sm text-[#555555] leading-relaxed ${isGrid ? 'line-clamp-3' : 'line-clamp-4'}`}>
          {project.desc}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#E5E5E5]">
          <div className="flex gap-3">
            {project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[#737373] transition-colors hover:text-[#111111]"
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
                className="text-[#737373] transition-colors hover:text-[#111111]"
                aria-label={`Visit ${project.title} live site`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
          
          {!isGrid && onClick && (
            <button 
              onClick={onClick}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                isActive 
                  ? 'bg-[#111111] text-white' 
                  : 'bg-[#F5F5F5] text-[#555555] border border-[#E5E5E5] hover:bg-[#EBEBEB]'
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
