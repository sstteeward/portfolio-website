import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', path: 'home' },
  { name: 'About Me', path: 'skills-experience' },
  { name: 'Projects', path: 'projects' },
  { name: 'Gallery', path: 'gallery' },
  { name: 'Contact', path: 'contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => document.getElementById(link.path));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_LINKS[i].path);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            sstteward<span className="text-[#F27D26]">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden space-x-10 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.path;
              return (
                <a
                  key={link.path}
                  href={`#${link.path}`}
                  onClick={(e) => handleNavClick(e, link.path)}
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
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="text-white/80 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border-b border-white/10 bg-[#050505] px-6 py-4 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.path}
                  href={`#${link.path}`}
                  onClick={(e) => handleNavClick(e, link.path)}
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
        )}
      </header>

      <main className="flex-1 pt-20">{children}</main>

      <footer className="border-t border-white/10 hover:border-[#F27D26] transition-colors py-12 text-center text-sm text-white/40">
        <p>© {new Date().getFullYear()} Steward Humiwat. All rights reserved.</p>
      </footer>
    </div>
  );
}
