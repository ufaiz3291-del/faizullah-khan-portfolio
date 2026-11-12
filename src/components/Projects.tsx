import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Keyboard, 
  Pill, 
  ExternalLink, 
  Play, 
  Sparkles, 
  CheckCircle, 
  AlertTriangle, 
  Search, 
  RotateCcw, 
  Settings2, 
  Clock, 
  BarChart3, 
  Users, 
  FileText, 
  X,
  Layers,
  Save,
  ShieldAlert
} from 'lucide-react';

interface ProjectData {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  status: string;
  features: string[];
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  accentGradient: string;
  glowBorder: string;
  icon: React.ElementType;
}

export const Projects: React.FC = () => {
  // Configurable URLs with safe storage persistence (SSR & iframe-resilient)
  const [projectUrls, setProjectUrls] = useState<Record<string, { liveUrl: string; repoUrl: string }>>(() => {
    try {
      if (typeof window !== 'undefined' && 'localStorage' in window) {
        const saved = window.localStorage.getItem('fk_project_urls');
        if (saved) {
          return JSON.parse(saved);
        }
      }
    } catch {
      // Storage access can be denied in sandboxed iframes or disabled by user settings
    }
    return {
      'typing-master': {
        liveUrl: '',
        repoUrl: '',
      },
      'medical-store': {
        liveUrl: '',
        repoUrl: '',
      },
    };
  });

  const [urlModalOpen, setUrlModalOpen] = useState<string | null>(null);
  const [activeInteractiveDemo, setActiveInteractiveDemo] = useState<'typing' | 'medical' | null>(null);

  const saveUrl = (id: string, live: string, repo: string) => {
    const updated = {
      ...projectUrls,
      [id]: { liveUrl: live, repoUrl: repo },
    };
    setProjectUrls(updated);
    try {
      if (typeof window !== 'undefined' && 'localStorage' in window) {
        window.localStorage.setItem('fk_project_urls', JSON.stringify(updated));
      }
    } catch {
      // Storage access blocked or quota exceeded
    }
    setUrlModalOpen(null);
  };

  const projects: ProjectData[] = [
    {
      id: 'typing-master',
      number: '01',
      title: 'TYPING MASTER DEVELOPER',
      tagline: 'Speed, Accuracy & Productivity Training Engine',
      description: 'An educational typing practice platform designed to help users improve typing speed, accuracy, and productivity through structured challenges, real-time analytics, and personalized feedback.',
      status: 'Active Development · V1 Prototype',
      features: [
        'Real-time Words-Per-Minute (WPM) calculation',
        'Live character accuracy & keystroke error tracking',
        'User authentication with persistent performance history',
        'Interactive learning modules & progressive skill levels',
        'Minimalist, distraction-free typography interface',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'State Management', 'Web Storage API'],
      liveUrl: projectUrls['typing-master']?.liveUrl || '',
      repoUrl: projectUrls['typing-master']?.repoUrl || '',
      accentGradient: 'from-cyan-500/20 via-blue-600/10 to-transparent',
      glowBorder: 'group-hover:border-cyan-500/50',
      icon: Keyboard,
    },
    {
      id: 'medical-store',
      number: '02',
      title: 'MEDICAL STORE MANAGEMENT',
      tagline: 'Complete Pharmacy Operations & Ledger System',
      description: 'A digital management solution designed to help local medical stores manage daily business operations efficiently, maintain regulatory compliance, and eliminate inventory discrepancies.',
      status: 'Engineered Solution · Field Tested',
      features: [
        'Comprehensive medicine inventory & batch stock tracking',
        'Automated expiry date monitoring & preemptive alerts',
        'Customer credit management (Udhar / Khata ledger)',
        'Point-of-sale receipt & complete transaction history',
        'Fast search by generic formula, brand name, and supplier',
      ],
      techStack: ['Structured Architecture', 'Relational Schemas', 'Business Logic', 'UI Dashboards', 'Report Generation'],
      liveUrl: projectUrls['medical-store']?.liveUrl || '',
      repoUrl: projectUrls['medical-store']?.repoUrl || '',
      accentGradient: 'from-purple-500/20 via-indigo-600/10 to-transparent',
      glowBorder: 'group-hover:border-purple-500/50',
      icon: Pill,
    },
  ];

  return (
    <section id="projects" className="relative py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass border border-white/10 text-xs font-mono text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan-purple">Projects.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical software solutions built to solve everyday challenges in education and business operations. Each project demonstrates structured logic, modern design, and clean user experience.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj, idx) => {
            const Icon = proj.icon;
            const hasCustomLive = Boolean(proj.liveUrl);

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`group relative rounded-3xl p-6 sm:p-8 liquid-glass-card border border-white/10 ${proj.glowBorder} transition-all duration-300 flex flex-col justify-between`}
              >
                {/* Background ambient gradient glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${proj.accentGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Top Bar: Number, Category, Configure Action */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl liquid-glass border border-white/15 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="font-mono text-xs text-cyan-400 tracking-wider">
                          PROJECT {proj.number}
                        </span>
                        <div className="text-[11px] text-slate-400 font-mono">
                          {proj.status}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setUrlModalOpen(proj.id)}
                      className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs transition-colors"
                      title="Edit project deployment URL or repository link"
                    >
                      <Settings2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 group-hover:text-cyan-200 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-300/90 mb-4 uppercase tracking-wider">
                    {proj.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Core Features:
                    </div>
                    <ul className="space-y-1.5">
                      {proj.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActiveInteractiveDemo(proj.id === 'typing-master' ? 'typing' : 'medical')}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-500/90 to-blue-600/90 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 border border-white/20 transition-all active:scale-[0.98]"
                  >
                    <Play className="w-3.5 h-3.5 text-cyan-200" />
                    <span>Launch Live Interactive Simulator</span>
                  </button>

                  {hasCustomLive ? (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-200 bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 transition-all"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5 text-cyan-300" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setUrlModalOpen(proj.id)}
                      className="inline-flex items-center gap-1 px-3 py-2.5 rounded-xl text-[11px] text-slate-400 hover:text-slate-200 bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition-colors"
                    >
                      <span>Set URL</span>
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* URL Customization Modal */}
      <AnimatePresence>
        {urlModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setUrlModalOpen(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md rounded-3xl p-6 liquid-glass border border-white/20 shadow-2xl z-10 space-y-5"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-white">Configure Project Links</h4>
                <button
                  onClick={() => setUrlModalOpen(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-slate-400">
                You can specify live deployment and code repository URLs for{' '}
                <span className="text-cyan-300 font-semibold">{urlModalOpen}</span>.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const target = e.currentTarget;
                  const live = (target.elements.namedItem('live') as HTMLInputElement).value;
                  const repo = (target.elements.namedItem('repo') as HTMLInputElement).value;
                  saveUrl(urlModalOpen, live, repo);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Live Demo URL (Optional)
                  </label>
                  <input
                    type="url"
                    name="live"
                    defaultValue={projectUrls[urlModalOpen]?.liveUrl || ''}
                    placeholder="https://..."
                    className="w-full px-3.5 py-2 rounded-xl bg-white/[0.06] border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Repository URL (Optional)
                  </label>
                  <input
                    type="url"
                    name="repo"
                    defaultValue={projectUrls[urlModalOpen]?.repoUrl || ''}
                    placeholder="https://github.com/..."
                    className="w-full px-3.5 py-2 rounded-xl bg-white/[0.06] border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setUrlModalOpen(null)}
                    className="px-4 py-2 rounded-xl text-xs text-slate-300 hover:bg-white/[0.08]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save URLs</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Interactive Project Simulators */}
      <AnimatePresence>
        {activeInteractiveDemo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveInteractiveDemo(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl rounded-3xl p-6 sm:p-8 liquid-glass border border-white/20 shadow-2xl z-10 space-y-6"
            >
              {activeInteractiveDemo === 'typing' ? (
                <TypingMasterSimulator onClose={() => setActiveInteractiveDemo(null)} />
              ) : (
                <MedicalStoreSimulator onClose={() => setActiveInteractiveDemo(null)} />
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

// ==========================================
// SUB-SIMULATOR 01: TYPING MASTER DEVELOPER
// ==========================================
const samplePhrases = [
  "Building tomorrow through technology requires disciplined learning, clean code, and passionate problem solving.",
  "Faizullah Khan is exploring artificial intelligence and developing meaningful software solutions.",
  "Computer Science unlocks infinite creative power to transform human communication and commerce.",
];

const TypingMasterSimulator: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [currentTextIdx, setCurrentTextIdx] = useState(0);
  const targetText = samplePhrases[currentTextIdx];
  const [inputVal, setInputVal] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (startTime && !isCompleted) {
      interval = setInterval(() => {
        setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
      }, 500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [startTime, isCompleted]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!startTime && val.length > 0) {
      setStartTime(Date.now());
    }
    setInputVal(val);

    if (val === targetText) {
      setIsCompleted(true);
    }
  };

  const resetTest = () => {
    setInputVal('');
    setStartTime(null);
    setElapsedSeconds(0);
    setIsCompleted(false);
    setCurrentTextIdx((prev) => (prev + 1) % samplePhrases.length);
  };

  // Calculations
  const wordCount = inputVal.trim() ? inputVal.trim().split(/\s+/).length : 0;
  const minutes = Math.max(elapsedSeconds / 60, 0.05);
  const wpm = Math.round(wordCount / minutes);

  let correctChars = 0;
  for (let i = 0; i < inputVal.length; i++) {
    if (inputVal[i] === targetText[i]) {
      correctChars++;
    }
  }
  const accuracy = inputVal.length > 0 ? Math.round((correctChars / inputVal.length) * 100) : 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            <Keyboard className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              Interactive Test · Project 01
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Typing Master Developer
            </h3>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.05] border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Metrics Bar */}
      <div className="grid grid-cols-3 gap-3">
        <div className="p-3.5 rounded-2xl liquid-glass border border-white/10 text-center">
          <div className="text-xs text-slate-400">Typing Speed</div>
          <div className="text-2xl font-extrabold text-cyan-300 font-mono mt-1">
            {wpm} <span className="text-xs text-slate-400">WPM</span>
          </div>
        </div>
        <div className="p-3.5 rounded-2xl liquid-glass border border-white/10 text-center">
          <div className="text-xs text-slate-400">Accuracy</div>
          <div className="text-2xl font-extrabold text-purple-300 font-mono mt-1">
            {accuracy}%
          </div>
        </div>
        <div className="p-3.5 rounded-2xl liquid-glass border border-white/10 text-center">
          <div className="text-xs text-slate-400">Elapsed Time</div>
          <div className="text-2xl font-extrabold text-white font-mono mt-1">
            {elapsedSeconds}s
          </div>
        </div>
      </div>

      {/* Target Phrase Display */}
      <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 font-mono text-sm sm:text-base leading-relaxed tracking-wide select-none">
        {targetText.split('').map((char, index) => {
          let color = 'text-slate-400';
          if (index < inputVal.length) {
            color = inputVal[index] === char ? 'text-emerald-400 font-bold' : 'text-rose-400 underline';
          } else if (index === inputVal.length) {
            color = 'text-cyan-300 bg-cyan-500/20 px-0.5 rounded animate-pulse';
          }
          return (
            <span key={index} className={color}>
              {char}
            </span>
          );
        })}
      </div>

      {/* Typing Input Box */}
      <div className="space-y-3">
        <input
          type="text"
          value={inputVal}
          onChange={handleInputChange}
          disabled={isCompleted}
          placeholder="Start typing the text above to test your speed..."
          autoFocus
          className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.06] border border-cyan-500/40 text-white font-mono text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
        />

        {isCompleted && (
          <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-sm flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>Challenge completed! Final speed: <strong>{wpm} WPM</strong> at <strong>{accuracy}%</strong> accuracy.</span>
            </div>
            <button
              onClick={resetTest}
              className="px-3 py-1.5 rounded-xl bg-emerald-500/30 hover:bg-emerald-500/40 text-xs font-semibold text-emerald-100"
            >
              Try Next Phrase
            </button>
          </div>
        )}
      </div>

      {/* Footer controls */}
      <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
        <div className="text-slate-400">
          Typing Engine: Client-side WPM &amp; keystroke validator
        </div>
        <button
          onClick={resetTest}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 border border-white/10"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Test</span>
        </button>
      </div>
    </div>
  );
};

// ==========================================
// SUB-SIMULATOR 02: MEDICAL STORE MANAGEMENT
// ==========================================
interface MedicineItem {
  id: string;
  name: string;
  formula: string;
  stock: number;
  expiry: string;
  isNearExpiry: boolean;
  price: string;
}

const mockMedicines: MedicineItem[] = [
  { id: '1', name: 'Panadol Extra 500mg', formula: 'Paracetamol + Caffeine', stock: 140, expiry: '2027-08', isNearExpiry: false, price: 'Rs. 75' },
  { id: '2', name: 'Augmentin 625mg', formula: 'Amoxicillin + Clavulanic Acid', stock: 24, expiry: '2026-12', isNearExpiry: true, price: 'Rs. 320' },
  { id: '3', name: 'Brufen 400mg', formula: 'Ibuprofen', stock: 85, expiry: '2028-02', isNearExpiry: false, price: 'Rs. 95' },
  { id: '4', name: 'Cravit 500mg', formula: 'Levofloxacin', stock: 12, expiry: '2026-11', isNearExpiry: true, price: 'Rs. 450' },
  { id: '5', name: 'Risek 20mg', formula: 'Omeprazole', stock: 95, expiry: '2027-10', isNearExpiry: false, price: 'Rs. 280' },
];

const MedicalStoreSimulator: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'inventory' | 'credit' | 'analytics'>('inventory');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMedicines = mockMedicines.filter(
    (m) =>
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.formula.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
            <Pill className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-mono text-purple-400 uppercase tracking-wider">
              Management System · Project 02
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Medical Store Management
            </h3>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.05] border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <button
          onClick={() => setActiveTab('inventory')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
            activeTab === 'inventory'
              ? 'bg-purple-500/20 text-purple-200 border border-purple-500/40'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Medicine Inventory &amp; Expiry
        </button>
        <button
          onClick={() => setActiveTab('credit')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
            activeTab === 'credit'
              ? 'bg-purple-500/20 text-purple-200 border border-purple-500/40'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Customer Khata (Credit Book)
        </button>
        <button
          onClick={() => setActiveTab('analytics')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
            activeTab === 'analytics'
              ? 'bg-purple-500/20 text-purple-200 border border-purple-500/40'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Operations Analytics
        </button>
      </div>

      {/* TAB 1: INVENTORY */}
      {activeTab === 'inventory' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search medicine brand or generic formula..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-purple-400"
              />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300 font-mono">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>2 Expiry Warnings</span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 liquid-glass">
            <table className="w-full text-left text-xs">
              <thead className="bg-white/[0.04] text-slate-400 uppercase font-mono text-[10px] border-b border-white/10">
                <tr>
                  <th className="px-4 py-3">Medicine &amp; Formula</th>
                  <th className="px-3 py-3">Stock Units</th>
                  <th className="px-3 py-3">Expiry Date</th>
                  <th className="px-3 py-3">Unit Price</th>
                  <th className="px-3 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-slate-300">
                {filteredMedicines.map((med) => (
                  <tr key={med.id} className="hover:bg-white/[0.02]">
                    <td className="px-4 py-3">
                      <div className="font-semibold text-white">{med.name}</div>
                      <div className="text-[11px] text-slate-400 font-mono">{med.formula}</div>
                    </td>
                    <td className="px-3 py-3 font-mono font-medium text-slate-200">
                      {med.stock} boxes
                    </td>
                    <td className="px-3 py-3 font-mono text-slate-300">
                      {med.expiry}
                    </td>
                    <td className="px-3 py-3 font-mono text-cyan-300">
                      {med.price}
                    </td>
                    <td className="px-3 py-3">
                      {med.isNearExpiry ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                          <AlertTriangle className="w-3 h-3" />
                          <span>Near Expiry</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
                          <CheckCircle className="w-3 h-3" />
                          <span>Optimal</span>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: KHATA / CREDIT BOOK */}
      {activeTab === 'credit' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-200 leading-relaxed">
            Local pharmacy stores in Swat frequently maintain community customer credit ledgers. This module automates balance tracking, SMS reminders, and repayment records.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { customer: 'Muhammad Tariq', balance: 'Rs. 4,250', lastTx: 'Yesterday · Amoxil & Sancos', phone: '+92 345 8891234' },
              { customer: 'Haji Gul Zaman', balance: 'Rs. 1,800', lastTx: '3 days ago · Insulin Cartridge', phone: '+92 300 1234567' },
              { customer: 'Shahid Khan', balance: 'Rs. 620', lastTx: 'Oct 28 · Panadol & ORS', phone: '+92 312 9876543' },
              { customer: 'Farhan Ali', balance: 'Rs. 2,100', lastTx: 'Nov 02 · Nebulizer Mask & Sol', phone: '+92 333 4567890' },
            ].map((khata) => (
              <div key={khata.customer} className="p-4 rounded-2xl liquid-glass border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-white text-xs">{khata.customer}</div>
                  <span className="font-mono text-xs font-bold text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded-md border border-rose-500/20">
                    {khata.balance}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Last purchase: {khata.lastTx}
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  Contact: {khata.phone}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: ANALYTICS */}
      {activeTab === 'analytics' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl liquid-glass border border-white/10 text-center">
              <div className="text-xs text-slate-400">Total Catalog Items</div>
              <div className="text-2xl font-bold font-mono text-white mt-1">1,480+</div>
              <div className="text-[10px] text-cyan-400 font-mono mt-1">All standard brands</div>
            </div>
            <div className="p-4 rounded-2xl liquid-glass border border-white/10 text-center">
              <div className="text-xs text-slate-400">Daily Invoices Handled</div>
              <div className="text-2xl font-bold font-mono text-purple-300 mt-1">320+</div>
              <div className="text-[10px] text-purple-400 font-mono mt-1">Fast barcode POS</div>
            </div>
            <div className="p-4 rounded-2xl liquid-glass border border-white/10 text-center">
              <div className="text-xs text-slate-400">Inventory Accuracy</div>
              <div className="text-2xl font-bold font-mono text-emerald-300 mt-1">99.4%</div>
              <div className="text-[10px] text-emerald-400 font-mono mt-1">Discrepancies eliminated</div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
        <span className="text-slate-400">
          Designed specifically for medical stores &amp; community pharmacies.
        </span>
        <button
          onClick={onClose}
          className="px-4 py-1.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-white font-medium"
        >
          Close Simulator
        </button>
      </div>
    </div>
  );
};
