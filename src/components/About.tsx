import React from 'react';
import { motion } from 'motion/react';
import { User, Heart, Compass, GraduationCap, MapPin, Calendar, Award, BookOpen, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const cards = [
    {
      icon: User,
      title: 'WHO I AM',
      subtitle: 'Student & Tech Explorer',
      text: 'A Computer Science student exploring software development and modern technology, driven by curiosity and hands-on building.',
      glow: 'from-blue-500/20 to-cyan-500/10',
      iconColor: 'text-cyan-400',
    },
    {
      icon: Heart,
      title: 'WHAT I LOVE',
      subtitle: 'Passions & Pursuits',
      text: 'Artificial Intelligence, innovation, programming, and solving real-world problems through clean architecture and intuitive design.',
      glow: 'from-purple-500/20 to-pink-500/10',
      iconColor: 'text-purple-400',
    },
    {
      icon: Compass,
      title: 'MY VISION',
      subtitle: 'Direction & Growth',
      text: 'Building useful digital products and continuously improving my technical abilities to engineer impactful technological solutions.',
      glow: 'from-teal-500/20 to-blue-500/10',
      iconColor: 'text-teal-400',
    },
  ];

  return (
    <section id="about" className="relative py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass border border-white/10 text-xs font-mono text-cyan-400">
            <span>ABOUT FAIZULLAH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Beyond the <span className="text-gradient-cyan-purple">Code.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            &ldquo;Hello, I&apos;m Faizullah Khan, a Computer Science student passionate about exploring emerging technologies, artificial intelligence, and building meaningful digital experiences. I enjoy transforming creative ideas into practical solutions while continuously learning and improving my technical abilities.&rdquo;
          </p>
        </div>

        {/* 3 Liquid Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl p-6 sm:p-8 liquid-glass-card border border-white/10 transition-all duration-300"
              >
                {/* Background glow accent */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
                  <div>
                    <div className="w-12 h-12 rounded-2xl liquid-glass border border-white/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${card.iconColor}`} />
                    </div>
                    <div className="text-xs font-mono tracking-wider text-slate-400 uppercase mb-1">
                      {card.subtitle}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {card.text}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono">0{idx + 1}</span>
                    <span className="text-cyan-400/80 group-hover:text-cyan-300 transition-colors">Core Pillar</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-6 sm:p-10 liquid-glass-card border border-white/15 overflow-hidden shadow-2xl"
        >
          {/* Subtle accent backdrop */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/15 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-300">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Foundation</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Bachelor of Science in Computer Science (BSCS)
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 pt-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Government College of Management Sciences, Matta, Swat</span>
                </div>
                <span className="text-slate-600 hidden sm:inline">·</span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>Currently in 3rd Semester</span>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed pt-2">
                Engaged in deep coursework including Data Structures, Object-Oriented Programming, Database Management Systems, Algorithm Analysis, and Web Technologies. Combining theoretical computer science rigor with practical software development and AI engineering.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-4 rounded-2xl liquid-glass border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Current Milestone</span>
                  <span className="font-mono text-cyan-400">Semester 3</span>
                </div>
                <div className="text-sm font-semibold text-white">Core Computer Science Focus</div>
                <div className="w-full bg-white/10 rounded-full h-1.5 mt-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-full rounded-full w-[37.5%]" />
                </div>
              </div>

              <div className="p-4 rounded-2xl liquid-glass border border-white/10 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-300 border border-purple-500/20">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Institution Location</div>
                  <div className="text-xs sm:text-sm font-medium text-white">Matta, Swat, Khyber Pakhtunkhwa, Pakistan</div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
