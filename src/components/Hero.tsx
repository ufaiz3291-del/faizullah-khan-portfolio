import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Mail, Terminal, Cpu, GraduationCap, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const portraitUrl = '/assets/aistudio/WhatsApp_Image_2026-11-12_at_5.24.40_AM_147252f5.jpeg';

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Mobile Profile Photo (Centered on mobile as required) */}
          <div className="lg:hidden flex justify-center w-full">
            <div className="relative group max-w-[280px] w-full">
              {/* Animated Glow Halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-85 transition duration-500" />
              
              {/* Liquid Glass Frame */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/30 via-white/5 to-cyan-400/20 shadow-2xl backdrop-blur-xl border border-white/20 overflow-hidden">
                <div className="relative rounded-[22px] overflow-hidden aspect-[4/5] bg-[#090e1a]">
                  <img
                    src={portraitUrl}
                    alt="Faizullah Khan - Professional Portrait"
                    className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle specular glass reflection gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070f]/90 via-transparent to-white/10 pointer-events-none" />
                  
                  {/* Mobile Status Tag */}
                  <div className="absolute bottom-3 inset-x-3 text-center py-1.5 px-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-medium text-cyan-200">
                    Faizullah Khan · BSCS Student
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LEFT SIDE: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border border-cyan-500/30 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="text-xs font-semibold tracking-wide bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent">
                Learning • Building • Innovating
              </span>
            </motion.div>

            {/* Owner Name & Big Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <div className="text-xs sm:text-sm font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                FAIZULLAH KHAN
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Building Tomorrow{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Through Technology.
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg font-medium text-slate-300 max-w-2xl leading-relaxed"
            >
              Computer Science Student <span className="text-cyan-400">|</span> Exploring AI <span className="text-purple-400">|</span> Future Software Developer
            </motion.p>

            {/* Personal Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed"
            >
              Welcome to my digital space. I&apos;m passionate about technology, artificial intelligence, and creating digital solutions that make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 border border-white/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 text-cyan-200" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] hover:text-white liquid-glass border border-white/15 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Quick Credentials Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 border-t border-white/[0.08] w-full"
            >
              <div className="flex items-center gap-1.5 text-slate-300">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>BSCS · 3rd Semester</span>
              </div>
              <span className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>GCMS Matta, Swat</span>
              </div>
              <span className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Open to Projects</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT SIDE: Desktop Portrait with Liquid Glass Frame */}
          <div className="hidden lg:col-span-5 lg:flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[390px]"
            >
              {/* Dynamic Glowing Ambient Orb Behind Portrait */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/40 via-blue-600/35 to-purple-600/40 rounded-[38px] blur-2xl -z-10"
              />

              {/* Master Liquid Glass Outer Frame */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative p-2.5 rounded-[32px] bg-gradient-to-b from-white/25 via-white/5 to-cyan-500/20 backdrop-blur-2xl border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]"
              >
                {/* Secondary inner rim with glowing specular gradient */}
                <div className="relative rounded-[24px] overflow-hidden bg-[#090e1a] aspect-[3.8/5] border border-white/10 group">
                  <img
                    src={portraitUrl}
                    alt="Faizullah Khan - Professional Portrait"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />

                  {/* Liquid glass light sheen overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-white/15 pointer-events-none" />

                  {/* Corner Accent Glows */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-400/30 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/30 to-transparent pointer-events-none" />

                  {/* Floating Glass Badge on Portrait */}
                  <div className="absolute bottom-4 inset-x-4 p-3 rounded-2xl liquid-glass border border-white/20 backdrop-blur-xl shadow-lg flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white tracking-tight">Faizullah Khan</div>
                      <div className="text-[11px] text-cyan-300 font-medium">Aspiring Software Developer</div>
                    </div>
                    <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-white/15 text-cyan-300">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
