import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Mail, 
  Linkedin, 
  ArrowUpRight, 
  Send, 
  CheckCircle2, 
  Copy, 
  AlertCircle, 
  Sparkles,
  PhoneCall,
  ExternalLink
} from 'lucide-react';

export const Contact: React.FC = () => {
  const whatsappNumber = '+92 329 8646816';
  const whatsappUrl = 'https://wa.me/923298646816?text=Hello%20Faizullah!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.';
  const emailAddress = 'faizullahswat294@gmail.com';
  const emailSubject = 'Portfolio Contact — Collaboration Opportunity';
  const emailUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}`;
  const linkedinUrl = 'https://www.linkedin.com/in/faiz-ullah-29459b432/';

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submissionFeedback, setSubmissionFeedback] = useState<{
    status: 'idle' | 'prepared' | 'copied';
    msg: string;
  }>({ status: 'idle', msg: '' });

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errors.message = 'Please write your message.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Honest handling: Generate standard mailto and WhatsApp options
    setSubmissionFeedback({
      status: 'prepared',
      msg: 'Your message has been formatted. Choose your preferred delivery method below to send directly to Faizullah:',
    });
  };

  const openEmailDraft = () => {
    const fullBody = `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`;
    const url = `mailto:${emailAddress}?subject=${encodeURIComponent(
      formData.subject || emailSubject
    )}&body=${encodeURIComponent(fullBody)}`;
    const link = document.createElement('a');
    link.href = url;
    link.click();
  };

  const openWhatsAppDraft = () => {
    const text = `Hello Faizullah! My name is ${formData.name} (${formData.email}). Regarding: "${formData.subject}".\n\n${formData.message}`;
    const url = `https://wa.me/923298646816?text=${encodeURIComponent(text)}`;
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  const copyMessage = async () => {
    const fullBody = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}`;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(fullBody);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = fullBody;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setSubmissionFeedback({
        status: 'copied',
        msg: 'Message copied to clipboard! You can paste it into any application.',
      });
    } catch {
      setSubmissionFeedback({
        status: 'copied',
        msg: 'Ready to send! Please use the WhatsApp or Email button above.',
      });
    }
  };

  return (
    <section id="contact" className="relative py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/10 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIRECT CONNECTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something <span className="text-gradient-cyan-purple">Amazing.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have an idea, opportunity, or interesting project? Let&apos;s connect and create something meaningful.
          </p>
        </div>

        {/* 3 Prominent Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl p-6 sm:p-8 liquid-glass-card border border-emerald-500/30 hover:border-emerald-400/60 shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Green Accent Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-emerald-500/20" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Instant Response
                </span>
              </div>

              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Direct Messaging
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                  WhatsApp
                </h3>
                <div className="font-mono text-sm text-emerald-300 mt-1 font-semibold">
                  {whatsappNumber}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly on WhatsApp with pre-filled greeting. Perfect for rapid discussions, questions, or project inquiries.
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-500/25 border border-emerald-400/30 transition-all duration-200 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-200" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Gmail */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl p-6 sm:p-8 liquid-glass-card border border-cyan-500/30 hover:border-cyan-400/60 shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Cyan Accent Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                  Official Email
                </span>
              </div>

              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Formal Inquiries
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                  Gmail
                </h3>
                <a 
                  href={emailUrl}
                  className="font-mono text-xs sm:text-sm text-cyan-300 hover:text-cyan-200 underline mt-1 block truncate font-medium"
                >
                  {emailAddress}
                </a>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Open in your default email client with pre-configured subject &ldquo;Portfolio Contact — Collaboration Opportunity&rdquo;.
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <a
                href={emailUrl}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 border border-cyan-400/30 transition-all duration-200 active:scale-[0.98]"
              >
                <Mail className="w-4 h-4" />
                <span>Send Me an Email</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-200" />
              </a>
            </div>
          </motion.div>

          {/* Card 3: LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl p-6 sm:p-8 liquid-glass-card border border-blue-500/30 hover:border-blue-400/60 shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Blue Accent Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 via-purple-500/10 to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 fill-blue-500/20" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                  Professional Network
                </span>
              </div>

              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Career Profile
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                  LinkedIn
                </h3>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs sm:text-sm text-blue-300 hover:text-blue-200 underline mt-1 block truncate font-medium"
                >
                  linkedin.com/in/faiz-ullah-29459b432
                </a>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Connect on LinkedIn to expand mutual professional networks, explore shared technology interests, and stay updated.
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 border border-blue-400/30 transition-all duration-200 active:scale-[0.98]"
              >
                <Linkedin className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-blue-200" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Modern Liquid-Glass Contact Form */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-6 sm:p-10 liquid-glass-card border border-white/15 shadow-2xl overflow-hidden"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Fill in the details below. You can immediately launch a pre-filled email draft or transmit through WhatsApp with zero friction.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alexander Vance"
                    className={`w-full px-4 py-3 rounded-2xl bg-white/[0.04] border ${
                      formErrors.name ? 'border-rose-400/60' : 'border-white/10'
                    } text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400 transition-all`}
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{formErrors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alexander@example.com"
                    className={`w-full px-4 py-3 rounded-2xl bg-white/[0.04] border ${
                      formErrors.email ? 'border-rose-400/60' : 'border-white/10'
                    } text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400 transition-all`}
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{formErrors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                  Subject <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Collaboration Opportunity / Software Project Discussion"
                  className={`w-full px-4 py-3 rounded-2xl bg-white/[0.04] border ${
                    formErrors.subject ? 'border-rose-400/60' : 'border-white/10'
                  } text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400 transition-all`}
                />
                {formErrors.subject && (
                  <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{formErrors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                  Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your inquiry, project scope, or opportunity..."
                  className={`w-full px-4 py-3 rounded-2xl bg-white/[0.04] border ${
                    formErrors.message ? 'border-rose-400/60' : 'border-white/10'
                  } text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400 transition-all`}
                />
                {formErrors.message && (
                  <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{formErrors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-xl shadow-cyan-500/20 border border-white/20 transition-all duration-300 active:scale-[0.99]"
              >
                <Send className="w-4 h-4 text-cyan-200" />
                <span>Send Message</span>
              </button>
            </form>

            {/* Transparent Feedback & Action Bar */}
            <AnimatePresence>
              {submissionFeedback.status !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="mt-6 p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-slate-200 space-y-3"
                >
                  <div className="flex items-start gap-2 text-cyan-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{submissionFeedback.msg}</span>
                  </div>

                  <div className="flex flex-wrap gap-2.5 pt-1">
                    <button
                      onClick={openEmailDraft}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium shadow-sm transition-colors text-xs"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open Pre-filled Email</span>
                    </button>
                    <button
                      onClick={openWhatsAppDraft}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-sm transition-colors text-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Forward on WhatsApp</span>
                    </button>
                    <button
                      onClick={copyMessage}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-medium transition-colors text-xs"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Text</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
