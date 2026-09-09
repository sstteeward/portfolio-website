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
    <div className="flex min-h-screen flex-col font-sans bg-[#FAFAFA]">
      <ScrollProgress />
      
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#E5E5E5] bg-[#FFFFFF]/90 backdrop-blur-md transition-colors">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-xl font-bold tracking-tighter shrink-0 transition-colors text-[#111111] hover:text-[#000000]">
            sstteward
          </a>

          <DesktopNav activeSection={activeSection} onNavClick={handleNavClick} />

          {/* Mobile Nav Toggle */}
          <button
            className="text-[#111111] md:hidden p-2 rounded-md hover:bg-[#F5F5F5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <MobileNav isOpen={isMenuOpen} activeSection={activeSection} onNavClick={handleNavClick} />
      </header>

      <main className="flex-1 pt-20">{children}</main>

      <footer className="mt-24 border-t border-[#E5E5E5] bg-[#FFFFFF] text-[#111111]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-2xl font-bold tracking-tighter text-[#111111]" style={{fontFamily: "'Dancing Script', cursive"}}>
                sstteward
              </span>
              <p className="text-sm text-[#737373]">Building digital experiences.</p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
              {NAV_LINKS.map(link => (
                <a key={link.path} href={`#${link.path}`} onClick={(e) => handleNavClick(e, link.path)} className="text-[#555555] hover:text-[#111111] transition-colors">
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a href="https://github.com/sstteeward" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-[#E5E5E5] bg-[#F5F5F5] text-[#111111] hover:border-[#111111] hover:bg-[#111111] hover:text-white transition-all shadow-xs" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/steward-humiwat-a7a324334/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-[#E5E5E5] bg-[#F5F5F5] text-[#111111] hover:border-[#111111] hover:bg-[#111111] hover:text-white transition-all shadow-xs" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:stewardhumiwat@gmail.com" className="p-2.5 rounded-full border border-[#E5E5E5] bg-[#F5F5F5] text-[#111111] hover:border-[#111111] hover:bg-[#111111] hover:text-white transition-all shadow-xs" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-[#E5E5E5] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#737373]">
            <p>© {new Date().getFullYear()} Steward Humiwat. All rights reserved.</p>
            <button onClick={scrollToTop} className="flex items-center gap-2 hover:text-[#111111] transition-colors font-medium cursor-pointer">
              Back to top <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </footer>
      
      <ScrollToTop />
    </div>
  );
}
