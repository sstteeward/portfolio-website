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
            className={`relative text-sm font-medium transition-colors hover:text-[#111111] ${isActive ? 'text-[#111111] font-semibold' : 'text-[#666666]'}`}
          >
            {link.name}
            {isActive && (
              <motion.div
                layoutId="nav-pill"
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#111111]"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </a>
        );
      })}
      
      <div className="flex items-center gap-6 pl-6 border-l border-[#E5E5E5]">
        <a 
          href="#" 
          download="Steward-Humiwat-Resume.pdf"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5E5E5] bg-[#FFFFFF] text-xs font-semibold text-[#111111] hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all"
        >
          <Download className="h-3 w-3" />
          Resume
        </a>
        <ViewerCounter />
      </div>
    </nav>
  );
}

