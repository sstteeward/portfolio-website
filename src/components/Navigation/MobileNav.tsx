import React from 'react';
import { motion } from 'motion/react';
import { NAV_LINKS } from '../../data/navLinks';

interface MobileNavProps {
  activeSection: string;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}

export default function MobileNav({ activeSection, onNavClick }: MobileNavProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="border-b border-white/10 bg-[#050505] px-6 py-4 md:hidden absolute top-20 left-0 right-0 z-40"
    >
      <div className="flex flex-col space-y-4">
        {NAV_LINKS.map((link) => (
          <a
            key={link.path}
            href={`#${link.path}`}
            onClick={(e) => onNavClick(e, link.path)}
            className={`text-lg font-medium ${
              activeSection === link.path
                ? 'text-[#F27D26]'
                : 'text-white/60'
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
