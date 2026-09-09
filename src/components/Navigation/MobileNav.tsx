import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download } from 'lucide-react';
import { NAV_LINKS } from '../../data/navLinks';
import ViewerCounter from '../ui/ViewerCounter';

interface MobileNavProps {
  isOpen: boolean;
  activeSection: string;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}

export default function MobileNav({ isOpen, activeSection, onNavClick }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -20, height: 0 }}
          transition={{ duration: 0.2 }}
          className="border-b border-[#E5E5E5] bg-[#FFFFFF]/95 px-6 py-6 md:hidden absolute top-[79px] left-0 right-0 z-40 backdrop-blur-xl shadow-lg overflow-hidden"
        >
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.path}
                  href={`#${link.path}`}
                  onClick={(e) => onNavClick(e, link.path)}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === link.path
                      ? 'text-[#111111] font-semibold'
                      : 'text-[#666666] hover:text-[#111111]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <a 
              href="#"
              download="Steward-Humiwat-Resume.pdf"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#111111] text-white font-semibold hover:bg-[#262626] transition-colors shadow-xs"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>

            <div className="pt-6 border-t border-[#E5E5E5] flex items-center justify-between">
              <span className="text-xs font-medium text-[#737373] tracking-widest uppercase">Portfolio Activity</span>
              <ViewerCounter />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

