import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  FileText, 
  AlertCircle,
  MessageSquare,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';
import { useLocalization } from '../context/LocalizationContext';
import { 
  AnimatedSectionHeader, 
  CinematicScrollReveal 
} from './AnimatedSection';

interface ContactSectionProps {
  onOpenCVModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCVModal }) => {
  const { t } = useLocalization();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields (Name, Email, Message).');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please provide a valid business email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Simulate reliable dispatch
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-20 bg-[#090614] text-slate-100 border-b border-purple-950/60 overflow-hidden">
      {/* Background Matrix & Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-fuchsia-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Work Together Resume CTA Banner with Motion Reveal */}
        <CinematicScrollReveal direction="up" delay={0.1} className="relative mb-16 p-8 sm:p-10 rounded-2xl bg-[#130d2b]/95 border border-purple-800/50 shadow-2xl shadow-purple-950/60 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
          {/* Corner Optical Reticles */}
          <span className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-pink-500/60 pointer-events-none" />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-pink-500/60 pointer-events-none" />
          <span className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-pink-500/60 pointer-events-none" />
          <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-pink-500/60 pointer-events-none" />

          <div className="max-w-2xl">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-950/80 text-pink-400 border border-purple-800/50 shadow-sm">
              {t('contact.collabTag')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3">
              {t('contact.collabTitle')}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              {t('contact.collabDesc')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenCVModal}
              id="cta-download-cv-btn"
              type="button"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 active:opacity-90 transition-all shadow-lg shadow-pink-500/25 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>{t('contact.downloadCV')}</span>
            </button>

            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-purple-200 bg-[#181135] hover:bg-[#201642] border border-purple-800/60 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-pink-400" />
              <span>{t('nav.contact')}</span>
            </a>
          </div>
        </CinematicScrollReveal>

        {/* Section Header with Motion Scroll Entrance */}
        <AnimatedSectionHeader
          badge={
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-xs font-mono font-medium text-pink-400 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              <span>{t('contact.tag')}</span>
            </div>
          }
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        {/* Contact Grid: Form & Channels */}
        <div id="contact-form" className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Information Cards */}
          <CinematicScrollReveal direction="left" delay={0.15} className="lg:col-span-5 space-y-6">
            <div className="relative p-6 rounded-2xl bg-[#130d2b]/95 border border-purple-800/50 space-y-6 shadow-2xl shadow-purple-950/60 overflow-hidden">
              {/* Corner Optical Reticles */}
              <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-pink-500/60 pointer-events-none" />
              <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-pink-500/60 pointer-events-none" />
              <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-pink-500/60 pointer-events-none" />
              <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-pink-500/60 pointer-events-none" />

              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {t('contact.directInquiries')}
                </h3>
                <p className="text-xs text-purple-300 mt-1">
                  Prompt professional response guaranteed within 24 business hours.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Email */}
                <a
                  href={`mailto:${CANDIDATE_PROFILE.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#181135] border border-purple-800/40 hover:border-pink-500/50 transition-all group"
                >
                  <div className="w-9 h-9 rounded-full bg-purple-950/80 border border-purple-800/60 flex items-center justify-center text-pink-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-purple-300">Official Email</div>
                    <div className="text-white font-medium break-all mt-0.5 group-hover:text-pink-300 transition-colors">
                      {CANDIDATE_PROFILE.email}
                    </div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={CANDIDATE_PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#181135] border border-purple-800/40 hover:border-pink-500/50 transition-all group"
                >
                  <div className="w-9 h-9 rounded-full bg-purple-950/80 border border-purple-800/60 flex items-center justify-center text-pink-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-purple-300">LinkedIn Profile</div>
                    <div className="text-white font-medium mt-0.5 group-hover:text-pink-300 transition-colors break-all">
                      linkedin.com/in/jameel-akhtar-184508431
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#181135] border border-purple-800/40">
                  <div className="w-9 h-9 rounded-full bg-purple-950/80 border border-purple-800/60 flex items-center justify-center text-pink-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-purple-300">Phone / WhatsApp</div>
                    <div className="text-white font-mono mt-0.5">
                      {CANDIDATE_PROFILE.phone}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#181135] border border-purple-800/40">
                  <div className="w-9 h-9 rounded-full bg-purple-950/80 border border-purple-800/60 flex items-center justify-center text-pink-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-purple-300">{t('contact.location')}</div>
                    <div className="text-white font-medium mt-0.5">
                      {CANDIDATE_PROFILE.location}
                    </div>
                  </div>
                </div>

              </div>

              {/* Status Note */}
              <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-800/50 text-xs text-purple-200 space-y-1">
                <div className="flex items-center gap-1.5 font-mono text-pink-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t('contact.availability')}</span>
                </div>
                <p className="text-slate-300">
                  {CANDIDATE_PROFILE.availability}
                </p>
              </div>

            </div>
          </CinematicScrollReveal>

          {/* Right: Interactive Contact Form */}
          <CinematicScrollReveal direction="right" delay={0.2} className="lg:col-span-7">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-[#130d2b]/95 border border-purple-800/50 shadow-2xl shadow-purple-950/60 overflow-hidden">
              {/* Corner Optical Reticles */}
              <span className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-pink-500/60 pointer-events-none" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-pink-500/60 pointer-events-none" />
              <span className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-pink-500/60 pointer-events-none" />
              <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-pink-500/60 pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                {t('contact.formTitle')}
              </h3>
              <p className="text-xs text-purple-300 mb-6 font-mono">
                All inquiries are treated with strict corporate confidentiality.
              </p>

              {/* Success Notification */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-purple-950/80 border border-pink-500/50 text-xs text-pink-200 flex items-start gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">{t('contact.successTitle')}</div>
                    <p className="mt-0.5">
                      {t('contact.successDesc')}
                    </p>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {status === 'error' && errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/80 border border-rose-500/50 text-xs text-rose-200 flex items-start gap-3 animate-in fade-in">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Validation Notice</div>
                    <p className="mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block font-mono text-xs text-purple-300 mb-1.5">
                      {t('contact.nameLabel')}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.namePlaceholder')}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181135] border border-purple-800/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block font-mono text-xs text-purple-300 mb-1.5">
                      {t('contact.emailLabel')}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.emailPlaceholder')}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181135] border border-purple-800/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block font-mono text-xs text-purple-300 mb-1.5">
                    {t('contact.subjectLabel')}
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t('contact.subjectPlaceholder')}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181135] border border-purple-800/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block font-mono text-xs text-purple-300 mb-1.5">
                    {t('contact.messageLabel')}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.messagePlaceholder')}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181135] border border-purple-800/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 disabled:opacity-50 transition-all shadow-lg shadow-pink-500/25 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Clock className="w-4 h-4 animate-spin" />
                        <span>{t('contact.sendingBtn')}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 rtl:rotate-180" />
                        <span>{t('contact.sendBtn')}</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </CinematicScrollReveal>

        </div>

      </div>
    </section>
  );
};
