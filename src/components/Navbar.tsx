import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'interests', label: 'Interests' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <nav className="relative flex items-center justify-between gap-6 px-4 sm:px-6 py-2.5 rounded-2xl liquid-glass border border-white/10 shadow-2xl backdrop-blur-2xl">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('hero');
              }}
              className="flex items-center gap-3 group whitespace-nowrap shrink-0 text-decoration-none"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-purple-600/30 p-[1px] shadow-lg group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#090d19]/90 rounded-[11px] flex items-center justify-center border border-white/10 backdrop-blur-md">
                  <span className="font-extrabold text-sm tracking-wider bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    FK
                  </span>
                </div>
                <div className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  Faizullah Khan
                </span>
                <span className="text-[11px] text-slate-400 hidden sm:inline-block">
                  CS Student &amp; AI Explorer
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all duration-200 whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md shadow-inner"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Zone 3: Primary Action & Mobile Menu Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500/80 via-blue-600/80 to-purple-600/80 hover:from-cyan-400 hover:to-purple-500 rounded-xl border border-white/20 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-200" />
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.05] border border-white/10 hover:bg-white/[0.09] transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden p-4 rounded-2xl liquid-glass border border-white/15 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <Sparkles className="w-3.5 h-3.5 text-cyan-400" />}
                  </button>
                );
              })}
              <div className="pt-2 mt-1 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('contact');
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl shadow-lg shadow-cyan-500/20"
                >
                  <span>Connect with Faizullah</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
