import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import DesktopNav from './Navigation/DesktopNav';
import MobileNav from './Navigation/MobileNav';
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

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 hover:border-[#F27D26] transition-colors bg-[#050505]/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-xl font-bold tracking-tighter">
            sstteward
          </a>

          <DesktopNav activeSection={activeSection} onNavClick={handleNavClick} />

          {/* Mobile Nav Toggle */}
          <button
            className="text-white/80 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <MobileNav activeSection={activeSection} onNavClick={handleNavClick} />
        )}
      </header>

      <main className="flex-1 pt-20">{children}</main>

      <footer className="border-t border-white/10 hover:border-[#F27D26] transition-colors py-12 text-center text-sm text-white/40">
        <p>© {new Date().getFullYear()} Steward Humiwat. All rights reserved.</p>
      </footer>
    </div>
  );
}
