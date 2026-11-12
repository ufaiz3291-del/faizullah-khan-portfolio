import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  Globe, 
  Terminal, 
  Code2, 
  Sparkles, 
  Lightbulb, 
  CheckCircle2, 
  Layers, 
  ArrowRight, 
  X, 
  Cpu, 
  Workflow
} from 'lucide-react';

interface InterestItem {
  id: string;
  title: string;
  category: 'interest' | 'verified_skill';
  icon: React.ElementType;
  brief: string;
  gradient: string;
  borderColor: string;
  glowColor: string;
  verifiedCapabilities: string[];
  activeExplorations: string[];
  toolsAndLangs: string[];
}

const interestsData: InterestItem[] = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    category: 'interest',
    icon: Bot,
    brief: 'Passionate exploration of generative AI, large language models, prompt engineering, and intelligent automation systems.',
    gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
    borderColor: 'group-hover:border-purple-500/40',
    glowColor: 'bg-purple-500/20',
    verifiedCapabilities: [
      'Prompt engineering & context design',
      'AI-assisted development workflows',
      'Integration of AI APIs in web products',
    ],
    activeExplorations: [
      'Neural network fundamentals & deep learning',
      'Local model execution & inference pipelines',
      'Autonomous agents & multi-agent systems',
    ],
    toolsAndLangs: ['Gemini API', 'LLM Architectures', 'Python AI Libraries', 'Vector Embeddings'],
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    category: 'verified_skill',
    icon: Globe,
    brief: 'Crafting responsive, responsive liquid-glass web applications with modern frontend frameworks and modular architectures.',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    borderColor: 'group-hover:border-cyan-500/40',
    glowColor: 'bg-cyan-500/20',
    verifiedCapabilities: [
      'Modern HTML5, CSS3 & modern JavaScript (ES6+)',
      'React & TypeScript component development',
      'Responsive design & Tailwind CSS utilities',
      'Client-side state management & UX interactions',
    ],
    activeExplorations: [
      'Full-stack Next.js & Server Components',
      'Real-time WebSockets & collaborative states',
      'Web performance & Core Web Vitals optimization',
    ],
    toolsAndLangs: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5/CSS3'],
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    category: 'verified_skill',
    icon: Terminal,
    brief: 'Building practical desktop and web software systems with structured data flows and real-world business utility.',
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    borderColor: 'group-hover:border-blue-500/40',
    glowColor: 'bg-blue-500/20',
    verifiedCapabilities: [
      'System requirement decomposition',
      'CRUD operations & persistent data management',
      'Inventory, billing, and record tracking logic',
      'Clean modular software architecture',
    ],
    activeExplorations: [
      'Distributed systems & microservices',
      'Cloud deployment pipelines & Docker',
      'Database indexing & performance profiling',
    ],
    toolsAndLangs: ['Object-Oriented Design', 'SQL & RDBMS', 'Express.js', 'Git / Version Control'],
  },
  {
    id: 'programming',
    title: 'Programming',
    category: 'verified_skill',
    icon: Code2,
    brief: 'Solidifying theoretical foundations in C++, algorithms, data structures, and object-oriented programming paradigms.',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    borderColor: 'group-hover:border-emerald-500/40',
    glowColor: 'bg-emerald-500/20',
    verifiedCapabilities: [
      'Object-Oriented Programming (OOP) concepts',
      'Data structures (Arrays, Linked Lists, Stacks, Queues)',
      'Algorithmic problem decomposition & debugging',
      'Strong syntactic and logical programming foundation',
    ],
    activeExplorations: [
      'Advanced graph algorithms & dynamic programming',
      'Memory management & systems programming',
      'Functional programming patterns',
    ],
    toolsAndLangs: ['C++', 'JavaScript', 'TypeScript', 'Python Fundamentals'],
  },
  {
    id: 'emerging-tech',
    title: 'Emerging Technologies',
    category: 'interest',
    icon: Sparkles,
    brief: 'Continuously tracking technological shifts across computing, cloud-native infrastructures, spatial UI, and modern developer tooling.',
    gradient: 'from-pink-500/20 via-purple-500/10 to-transparent',
    borderColor: 'group-hover:border-pink-500/40',
    glowColor: 'bg-pink-500/20',
    verifiedCapabilities: [
      'Modern tooling workflows (Vite, npm, Git)',
      'Cloud compute hosting platforms & serverless',
      'Rapid prototyping with AI-native methodologies',
    ],
    activeExplorations: [
      'Edge computing & web assembly',
      'Spatial and ambient user computing interfaces',
      'Open-source AI ecosystems & lightweight models',
    ],
    toolsAndLangs: ['Cloud Run', 'Serverless Functions', 'Modern DevTools', 'API Gateways'],
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    category: 'verified_skill',
    icon: Lightbulb,
    brief: 'Translating real-world operational challenges into streamlined digital workflows and productive user experiences.',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    borderColor: 'group-hover:border-amber-500/40',
    glowColor: 'bg-amber-500/20',
    verifiedCapabilities: [
      'Logical workflow mapping for business needs',
      'User experience friction reduction',
      'Structured step-by-step troubleshooting',
      'Edge-case anticipation in data management',
    ],
    activeExplorations: [
      'Algorithm optimization for high throughput',
      'System design interviews & competitive problem solving',
      'Design thinking & user empathy research',
    ],
    toolsAndLangs: ['Algorithmic Logic', 'Data Flow Diagrams', 'Root Cause Analysis', 'User Journey Mapping'],
  },
];

export const Interests: React.FC = () => {
  const [activeModal, setActiveModal] = useState<InterestItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'verified_skill' | 'interest'>('all');

  const filteredData = interestsData.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="interests" className="relative py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass border border-white/10 text-xs font-mono text-cyan-400">
              <Cpu className="w-3.5 h-3.5" />
              <span>CAPABILITIES &amp; HORIZONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Technology &amp; <span className="text-gradient-cyan-purple">Interests.</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Transparently distinguishing academic &amp; verified technical foundations from active pursuits and emerging technology interests.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="inline-flex items-center gap-1 p-1.5 rounded-2xl liquid-glass border border-white/10 shrink-0 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-cyan-500/80 to-blue-600/80 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              All Dimensions ({interestsData.length})
            </button>
            <button
              onClick={() => setFilter('verified_skill')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                filter === 'verified_skill'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              Verified Foundations
            </button>
            <button
              onClick={() => setFilter('interest')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                filter === 'interest'
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              Emerging Pursuits
            </button>
          </div>
        </div>

        {/* Grid of 6 Liquid Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item, idx) => {
            const Icon = item.icon;
            const isVerified = item.category === 'verified_skill';

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setActiveModal(item)}
                className={`group relative rounded-3xl p-6 sm:p-7 liquid-glass-card border border-white/10 ${item.borderColor} cursor-pointer transition-all duration-300 hover:-translate-y-1.5`}
              >
                {/* Background Ambient Glow */}
                <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                <div className="flex flex-col h-full justify-between space-y-6">
                  <div>
                    {/* Top row: Icon + Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl liquid-glass border border-white/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white group-hover:text-cyan-300 transition-colors" />
                      </div>
                      <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${
                        isVerified 
                          ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/25' 
                          : 'bg-purple-500/10 text-purple-300 border-purple-500/25'
                      }`}>
                        {isVerified ? 'Academic & Applied' : 'Active Exploration'}
                      </span>
                    </div>

                    {/* Title & Brief */}
                    <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-cyan-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.brief}
                    </p>
                  </div>

                  {/* Highlights Pill Preview & Action */}
                  <div className="space-y-4 pt-3 border-t border-white/[0.08]">
                    <div className="flex flex-wrap gap-1.5">
                      {item.toolsAndLangs.slice(0, 3).map((tool) => (
                        <span key={tool} className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/[0.06]">
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                      <span>Explore Overview</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Detail Modal */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 liquid-glass border border-white/20 shadow-2xl backdrop-blur-2xl z-10 space-y-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    <activeModal.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${
                      activeModal.category === 'verified_skill'
                        ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                        : 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                    }`}>
                      {activeModal.category === 'verified_skill' ? 'Verified Foundation' : 'Emerging Interest'}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                      {activeModal.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Brief */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {activeModal.brief}
              </p>

              {/* Verified Capabilities */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Verified Competencies &amp; Coursework</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModal.verifiedCapabilities.map((item) => (
                    <div key={item} className="flex items-start gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Explorations */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-purple-400 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-purple-400" />
                  <span>Active Explorations &amp; Current Horizon</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModal.activeExplorations.map((item) => (
                    <div key={item} className="flex items-start gap-2 p-2.5 rounded-xl bg-purple-500/[0.05] border border-purple-500/15 text-xs text-purple-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Associated Tooling */}
              <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="text-slate-400">Associated Tools &amp; Concepts:</div>
                <div className="flex flex-wrap gap-1.5">
                  {activeModal.toolsAndLangs.map((tool) => (
                    <span key={tool} className="px-2.5 py-1 rounded-lg bg-white/10 text-white font-mono text-xs border border-white/15">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
