import React from 'react';
import { motion } from 'motion/react';
import { NAV_LINKS } from '../../data/navLinks';
import ViewerCounter from '../ui/ViewerCounter';

interface DesktopNavProps {
  activeSection: string;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}

export default function DesktopNav({ activeSection, onNavClick }: DesktopNavProps) {
  return (
    <nav className="hidden items-center space-x-8 md:flex">
      {NAV_LINKS.map((link) => {
        const isActive = activeSection === link.path;
        return (
          <a
            key={link.path}
            href={`#${link.path}`}
            onClick={(e) => onNavClick(e, link.path)}
            className={`relative text-base transition-colors hover:text-white ${isActive ? 'font-bold' : 'font-medium'}`}
            style={{ color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.6)' }}
          >
            {link.name}
            {isActive && (
              <motion.div
                layoutId="nav-pill"
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-[#F27D26]"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </a>
        );
      })}
      <div className="pl-2 border-l border-white/10">
        <ViewerCounter />
      </div>
    </nav>
  );
}

