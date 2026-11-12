import React from 'react';
import { motion } from 'motion/react';
import { Milestone, Calendar, GraduationCap, Code, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

interface TimelineStep {
  year: string;
  badge: string;
  title: string;
  institution: string;
  description: string;
  achievements: string[];
  gradient: string;
  glowNode: string;
  current?: boolean;
}

const steps: TimelineStep[] = [
  {
    year: '2025',
    badge: 'Foundation Year',
    title: 'Commenced Computer Science Academic Journey',
    institution: 'Government College of Management Sciences, Matta, Swat',
    description: 'Began the Bachelor of Science in Computer Science (BSCS) program. Established core algorithmic thinking, computational mathematics, programming syntax, and foundational computer hardware architectures.',
    achievements: [
      'Mastered programming logic, structured programming concepts, and control flow in C++',
      'Studied computer system organization, digital logic, and operating system basics',
      'Developed initial academic console utilities and foundational coding routines',
    ],
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    glowNode: 'bg-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.8)]',
  },
  {
    year: '2026',
    badge: 'Current Stage · 3rd Semester',
    title: 'Practical Project Development & AI Exploration',
    institution: 'Government College of Management Sciences, Matta, Swat',
    description: 'Currently studying in the 3rd semester of BSCS. Actively developing practical full-stack projects, software solutions for community needs, and immersing into modern AI model integration and emerging web frameworks.',
    achievements: [
      'Engineered Typing Master Developer (educational speed & accuracy training engine)',
      'Designed Medical Store Management (inventory, stock tracking & customer credit ledger system)',
      'Exploration of generative AI tools, LLM APIs, and prompt engineering architectures',
      'Advanced coursework in Object-Oriented Programming (OOP) and Database Systems',
    ],
    gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
    glowNode: 'bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.9)] animate-pulse',
    current: true,
  },
  {
    year: 'Next Horizons',
    badge: 'Future Roadmap',
    title: 'Advanced Software Engineering & Intelligent Systems',
    institution: 'Continuous Professional Learning & Applied Industry Practice',
    description: 'Looking forward to completing higher semesters with excellence, diving deeper into distributed systems, autonomous AI agents, enterprise-scale web solutions, and industry collaboration.',
    achievements: [
      'Deepening expertise in cloud architecture, containerization, and microservices',
      'Building production-grade AI-powered applications that solve systemic challenges',
      'Contributing to open-source developer communities and innovative software products',
    ],
    gradient: 'from-teal-500/20 via-emerald-500/10 to-transparent',
    glowNode: 'bg-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.7)]',
  },
];

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="relative py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass border border-white/10 text-xs font-mono text-cyan-400">
            <Milestone className="w-3.5 h-3.5" />
            <span>ACADEMIC &amp; TECHNICAL MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My Educational <span className="text-gradient-cyan-purple">Journey.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From discovering the fundamental beauty of algorithms to building practical software systems and exploring modern artificial intelligence.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-12">
          
          {steps.map((step, idx) => {
            return (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Glowing Node on the Timeline Axis */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[47px] top-6 w-3.5 h-3.5 rounded-full border-2 border-[#05070f] ${step.glowNode} transition-transform duration-300 group-hover:scale-125`}
                />

                {/* Timeline Card */}
                <div className="relative rounded-3xl p-6 sm:p-8 liquid-glass-card border border-white/10 transition-all duration-300 group-hover:border-white/20 group-hover:translate-x-1">
                  
                  {/* Subtle Background Accent */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div className="relative z-10 space-y-4">
                    {/* Top line: Year & Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {step.year}
                        </span>
                        <span className={`text-[11px] font-mono px-3 py-1 rounded-full border ${
                          step.current 
                            ? 'bg-purple-500/20 text-purple-300 border-purple-500/40' 
                            : 'bg-white/[0.05] text-slate-300 border-white/10'
                        }`}>
                          {step.badge}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 font-mono">
                        {step.institution}
                      </div>
                    </div>

                    {/* Milestone Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Specific Achievements */}
                    <div className="pt-2 space-y-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Key Milestones &amp; Learnings:
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.achievements.map((ach) => (
                          <div key={ach} className="flex items-start gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
