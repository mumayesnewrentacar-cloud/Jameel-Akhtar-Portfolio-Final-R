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
import { CANDIDATE_PROFILE } from '../data/portfolioData';
import { useLocalization } from '../context/LocalizationContext';

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
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Work Together Resume CTA Banner */}
        <div className="mb-16 p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 shadow-lg dark:shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="px-2.5 py-1 rounded text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
              {t('contact.collabTag')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-3">
              {t('contact.collabTitle')}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              {t('contact.collabDesc')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenCVModal}
              id="cta-download-cv-btn"
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <FileText className="w-4 h-4" />
              <span>{t('contact.downloadCV')}</span>
            </button>

            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t('nav.contact')}</span>
            </a>
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400">
            <span>{t('contact.tag')}</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Grid: Form & Channels */}
        <div id="contact-form" className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 space-y-6 shadow-sm dark:shadow-lg">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  {t('contact.directInquiries')}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Prompt professional response guaranteed within 24 business hours.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Email */}
                <a
                  href={`mailto:${CANDIDATE_PROFILE.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Official Email</div>
                    <div className="text-slate-900 dark:text-white font-medium break-all mt-0.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                      {CANDIDATE_PROFILE.email}
                    </div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={CANDIDATE_PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">LinkedIn Profile</div>
                    <div className="text-slate-900 dark:text-white font-medium mt-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors break-all">
                      linkedin.com/in/jameel-akhtar-184508431
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Phone / WhatsApp</div>
                    <div className="text-slate-900 dark:text-white font-mono mt-0.5">
                      {CANDIDATE_PROFILE.phone}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{t('contact.location')}</div>
                    <div className="text-slate-900 dark:text-white font-medium mt-0.5">
                      {CANDIDATE_PROFILE.location}
                    </div>
                  </div>
                </div>

              </div>

              {/* Status Note */}
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t('contact.availability')}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  {CANDIDATE_PROFILE.availability}
                </p>
              </div>

            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 shadow-sm dark:shadow-xl">
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                {t('contact.formTitle')}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-mono">
                All inquiries are treated with strict corporate confidentiality.
              </p>

              {/* Success Notification */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 text-xs text-emerald-800 dark:text-emerald-200 flex items-start gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-emerald-900 dark:text-emerald-300">{t('contact.successTitle')}</div>
                    <p className="mt-0.5">
                      {t('contact.successDesc')}
                    </p>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {status === 'error' && errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-500/30 text-xs text-rose-800 dark:text-rose-200 flex items-start gap-3 animate-in fade-in">
                  <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-rose-900 dark:text-rose-300">Validation Notice</div>
                    <p className="mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block font-mono text-xs text-slate-700 dark:text-slate-300 mb-1.5">
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block font-mono text-xs text-slate-700 dark:text-slate-300 mb-1.5">
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block font-mono text-xs text-slate-700 dark:text-slate-300 mb-1.5">
                    {t('contact.subjectLabel')}
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t('contact.subjectPlaceholder')}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block font-mono text-xs text-slate-700 dark:text-slate-300 mb-1.5">
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 disabled:opacity-50 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
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
          </div>

        </div>

      </div>
    </section>
  );
};
