import React from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { NAV_LINKS } from '../../data/navLinks';
import ViewerCounter from '../ui/ViewerCounter';

interface DesktopNavProps {
  activeSection: string;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}

export default function DesktopNav({ activeSection, onNavClick }: DesktopNavProps) {
  return (
    <nav className="hidden items-center space-x-6 lg:space-x-8 md:flex">
      {NAV_LINKS.map((link) => {
        const isActive = activeSection === link.path;
        return (
          <a
            key={link.path}
            href={`#${link.path}`}
            onClick={(e) => onNavClick(e, link.path)}
            className={`relative text-sm font-medium transition-colors hover:text-white ${isActive ? 'text-white' : 'text-white/60'}`}
          >
            {link.name}
            {isActive && (
              <motion.div
                layoutId="nav-pill"
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#F27D26]"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </a>
        );
      })}
      
      <div className="flex items-center gap-6 pl-6 border-l border-white/10">
        <a 
          href="#" 
          download="Steward-Humiwat-Resume.pdf"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-semibold hover:border-[#F27D26] hover:bg-[#F27D26]/10 hover:text-[#F27D26] transition-all"
        >
          <Download className="h-3 w-3" />
          Resume
        </a>
        <ViewerCounter />
      </div>
    </nav>
  );
}

