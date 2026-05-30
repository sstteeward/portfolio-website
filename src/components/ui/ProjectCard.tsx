import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
}

export default function ProjectCard({ project, isActive }: ProjectCardProps) {
  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-3xl border ${isActive ? 'border-indigo-500/50 shadow-2xl shadow-indigo-500/10 bg-[#111]' : 'border-white/10 bg-[#0A0A0A]'} transition-all duration-500 h-full`}
    >
      {/* Top "Image" Area */}
      <div className="flex h-56 w-full items-center justify-center border-b border-white/10 relative overflow-hidden bg-slate-900">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 transition-opacity duration-500 group-hover:opacity-60 z-10`}
        />
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        ) : (
          <span className="relative z-10 text-6xl text-white/90 drop-shadow-lg tracking-wide font-bold transition-transform duration-500 group-hover:scale-110" style={{fontFamily: "'Dancing Script', cursive"}}>
            sstteward
          </span>
        )}

        {/* Hover Overlay Buttons */}
        <div className={`absolute inset-0 z-20 flex items-center justify-center gap-4 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isActive ? 'opacity-0 hover:opacity-100' : 'opacity-0'}`}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
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
  );
}
