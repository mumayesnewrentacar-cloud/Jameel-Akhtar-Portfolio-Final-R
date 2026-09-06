import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Sparkles, HelpCircle, Check, MessageSquare } from 'lucide-react';

interface DiscoverMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiscoverMoreModal: React.FC<DiscoverMoreModalProps> = ({ isOpen, onClose }) => {
  const [topic, setTopic] = useState('Custom Enterprise Requirements');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const handleClose = () => {
    setSent(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="discover-more-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
          role="dialog"
          aria-modal="true"
          onClick={handleClose}
        >
          <motion.div
            key="discover-more-card"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            className="relative w-full max-w-lg bg-[#120d26] border border-purple-800/60 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/70 text-slate-100 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 4 Optical Corner Reticles */}
            <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
              <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-pink-500/70" />
              <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-pink-500/70" />
              <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-pink-500/70" />
              <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-pink-500/70" />
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-purple-900/40">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-pink-400" />
                <span className="text-xs font-mono font-bold text-fuchsia-300 uppercase tracking-wider">
                  DIGIMAX // CONSULTATION & DISCOVERY
                </span>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="p-1 rounded-full text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {sent ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 to-fuchsia-600 flex items-center justify-center mx-auto shadow-lg shadow-pink-500/30">
                  <Check className="w-7 h-7 text-white stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Our strategic digital architects have received your inquiry and will reach out to <strong className="text-pink-300">{email}</strong> within 2 business hours.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white font-bold text-xs uppercase"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pt-5 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold text-white tracking-tight">
                    Discover More with DigiMax
                  </h3>
                  <p className="text-xs text-slate-400">
                    Have custom questions or specific scale requirements? Let us know.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="partner@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d091d] border border-purple-900/60 focus:border-pink-500 focus:outline-none text-xs text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Subject / Focus
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d091d] border border-purple-900/60 focus:border-pink-500 focus:outline-none text-xs text-white"
                  >
                    <option>Custom Enterprise Requirements</option>
                    <option>Full-Service Digital Brand Transformation</option>
                    <option>UI/UX & Mobile App Architecture</option>
                    <option>Security & Service Level Agreements</option>
                    <option>Other Questions</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Your Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your brand vision, target timeline, or specific questions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d091d] border border-purple-900/60 focus:border-pink-500 focus:outline-none text-xs text-white resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-pink-500/30"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
