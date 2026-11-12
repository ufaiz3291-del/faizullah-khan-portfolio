import React from 'react';
import { InteractiveBackground } from './components/InteractiveBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Interests } from './components/Interests';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-100 bg-[#05070f] selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Liquid Glass Background Effects */}
      <InteractiveBackground />

      {/* Floating Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Interests />
        <Projects />
        <Journey />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
