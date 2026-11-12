import React from 'react';
import { ArrowUp, MessageCircle, Mail, Linkedin, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#05070f]/80 backdrop-blur-xl pt-16 pb-12 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between pb-12 border-b border-white/[0.06]">
          
          {/* Brand & Slogans */}
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-purple-600/30 p-[1px] shadow-md">
                <div className="w-full h-full bg-[#090d19] rounded-[10px] flex items-center justify-center border border-white/10">
                  <span className="font-extrabold text-xs tracking-wider bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    FK
                  </span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                FAIZULLAH KHAN
              </span>
            </div>

            <p className="text-sm font-medium text-slate-300">
              &ldquo;Turning Curiosity Into Creativity.&rdquo;
            </p>
            <p className="text-xs text-slate-500">
              Computer Science Student · Exploring AI · Aspiring Software Developer · Matta, Swat, Pakistan
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-5 flex flex-col md:items-end gap-4">
            <div className="flex items-center gap-2.5">
              <a
                href="https://wa.me/923298646816?text=Hello%20Faizullah!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl liquid-glass border border-white/10 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="mailto:faizullahswat294@gmail.com?subject=Portfolio%20Contact%20%E2%80%94%20Collaboration%20Opportunity"
                className="p-2.5 rounded-xl liquid-glass border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Gmail"
                title="Send an Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/faiz-ullah-29459b432/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl liquid-glass border border-white/10 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                aria-label="LinkedIn"
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl liquid-glass border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-white/20 transition-all ml-2"
                aria-label="Scroll back to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="text-xs text-slate-400 font-mono flex items-center gap-1">
              <span>Designed &amp; Built with Passion.</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} Faizullah Khan. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Building Tomorrow Through Technology</span>
            <span>·</span>
            <span>GCMS Matta Swat</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
