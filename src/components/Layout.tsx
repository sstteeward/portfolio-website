import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import DesktopNav from './Navigation/DesktopNav';
import MobileNav from './Navigation/MobileNav';
import ScrollProgress from './ui/ScrollProgress';
import ScrollToTop from './ui/ScrollToTop';
import { useActiveSection } from '../hooks/useActiveSection';
import { NAV_LINKS } from '../data/navLinks';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(NAV_LINKS.map(l => l.path));

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(path);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <ScrollProgress />
      
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 hover:border-[#F27D26] transition-colors bg-[#050505]/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-xl font-bold tracking-tighter shrink-0 transition-colors hover:text-[#F27D26]">
            sstteward
          </a>

          <DesktopNav activeSection={activeSection} onNavClick={handleNavClick} />

          {/* Mobile Nav Toggle */}
          <button
            className="text-white/80 md:hidden p-2 rounded-md hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F27D26]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <MobileNav isOpen={isMenuOpen} activeSection={activeSection} onNavClick={handleNavClick} />
      </header>

      <main className="flex-1 pt-20">{children}</main>

      <footer className="mt-24 border-t border-white/10 hover:border-[#F27D26] transition-colors bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-2xl font-bold tracking-tighter" style={{fontFamily: "'Dancing Script', cursive"}}>
                sstteward
              </span>
              <p className="text-sm text-white/50">Building digital experiences.</p>
            </div>
            
            <div className="flex items-center gap-6 text-sm font-medium">
              {NAV_LINKS.slice(0, 4).map(link => (
                <a key={link.path} href={`#${link.path}`} onClick={(e) => handleNavClick(e, link.path)} className="text-white/60 hover:text-[#F27D26] transition-colors">
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a href="https://github.com/sstteeward" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/10 bg-white/5 text-white/70 hover:border-[#F27D26] hover:text-[#F27D26] transition-all" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/10 bg-white/5 text-white/70 hover:border-[#F27D26] hover:text-[#F27D26] transition-all" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:stewardhumiwat@gmail.com" className="p-2 rounded-full border border-white/10 bg-white/5 text-white/70 hover:border-[#F27D26] hover:text-[#F27D26] transition-all" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>© {new Date().getFullYear()} Steward Humiwat. All rights reserved.</p>
            <button onClick={scrollToTop} className="flex items-center gap-2 hover:text-[#F27D26] transition-colors">
              Back to top <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </footer>
      
      <ScrollToTop />
    </div>
  );
}
