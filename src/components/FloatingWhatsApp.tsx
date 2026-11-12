import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = 'https://wa.me/923298646816?text=Hello%20Faizullah!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Speech bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 10 }}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl liquid-glass border border-emerald-500/30 text-xs text-white shadow-2xl backdrop-blur-xl"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Chat directly with Faizullah on WhatsApp</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-slate-400 hover:text-white ml-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Faizullah Khan on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#128C7E]/90 hover:bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] border border-white/30 backdrop-blur-md transition-colors duration-300"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping pointer-events-none opacity-60" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white/10 text-white relative z-10 transition-transform group-hover:rotate-12 duration-300" />
      </motion.a>
    </div>
  );
};
