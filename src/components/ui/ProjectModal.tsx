import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, Code2 } from 'lucide-react';
import { Project } from '../../data/projects';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const prefersReduced = useReducedMotion();

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-3xl bg-[#0A0A0A] border border-white/10 shadow-2xl z-10 custom-scrollbar"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-[#F27D26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F27D26]"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image Header */}
            <div className={`relative h-64 sm:h-80 w-full overflow-hidden bg-gradient-to-b ${project.color}`}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-90"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code2 className="h-24 w-24 text-white/20" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
            </div>

            {/* Content Body */}
            <div className="px-6 pb-10 sm:px-10 -mt-10 relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                {project.title}
              </h2>
              
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#F27D26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F27D26]"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                )}
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-[#F27D26]/20 px-4 py-2 text-sm font-medium text-[#F27D26] transition-colors hover:bg-[#F27D26] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F27D26]"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">About the Project</h3>
                  <p className="text-white/70 leading-relaxed text-base sm:text-lg">
                    {project.desc}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
