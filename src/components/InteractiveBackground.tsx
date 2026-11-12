import React from 'react';
import { motion } from 'motion/react';

export const InteractiveBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep Midnight Base */}
      <div className="absolute inset-0 bg-[#05070f]" />

      {/* Radial Gradient Ambient Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.12),rgba(15,23,42,0))]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_60%,rgba(168,85,247,0.08),rgba(15,23,42,0))]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,rgba(14,165,233,0.07),rgba(15,23,42,0))]" />

      {/* Floating Animated Liquid Glass Orbs */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[10%] right-[10%] w-[380px] h-[380px] md:w-[540px] md:h-[540px] rounded-full bg-gradient-to-tr from-cyan-600/20 via-blue-600/15 to-purple-600/10 blur-[110px] -z-10"
      />

      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 50, -30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-[20%] left-[5%] w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full bg-gradient-to-br from-purple-600/15 via-indigo-600/15 to-blue-500/10 blur-[120px] -z-10"
      />

      <motion.div
        animate={{
          x: [0, 30, -50, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute top-[50%] left-[40%] w-[280px] h-[280px] rounded-full bg-gradient-to-r from-blue-500/10 to-teal-400/10 blur-[100px] -z-10"
      />

      {/* Subtle Grid Sheen */}
      <div 
        className="absolute inset-0 opacity-[0.035]" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
    </div>
  );
};
