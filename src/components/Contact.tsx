import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { CONTACT_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('loading');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        }
      );

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      console.error('EmailJS error:', error);
      const msg = error?.text || error?.message || JSON.stringify(error) || 'Unknown error';
      setErrorMsg(msg);
      setStatus('error');
      setTimeout(() => { setStatus('idle'); setErrorMsg(''); }, 6000);
    }
  };

  return (
    <section id="contact" className="py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="container-width px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display uppercase tracking-tighter text-slate-900 dark:text-white mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              {t.contact.contactInfoTitle}
            </h3>
            <div className="space-y-6">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 dark:bg-pink-950/30 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-100 transition-colors">
                  <Mail size={20} className="text-pink-500" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">EMAIL</p>
                  <p className="font-semibold text-slate-900 dark:text-white group-hover:text-pink-500 transition-colors break-all">{CONTACT_INFO.email}</p>
                </div>
              </a>

              <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-100 transition-colors">
                  <Github size={20} className="text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">GITHUB</p>
                  <p className="font-semibold text-slate-900 dark:text-white group-hover:text-pink-500 transition-colors">github.com/otabek0311</p>
                </div>
              </a>

              <a href={CONTACT_INFO.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/30 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-100 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-sky-500">
                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">TELEGRAM</p>
                  <p className="font-semibold text-slate-900 dark:text-white group-hover:text-pink-500 transition-colors">@Otabek_Abdullayevvvv</p>
                </div>
              </a>
            </div>
            <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800">
              <p className="text-sm text-slate-400 dark:text-slate-500">{t.contact.urgentMsg}</p>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm"
          >
            <form ref={formRef} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{t.contact.name}</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{t.contact.message}</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder={t.contact.messagePlaceholder} rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-sm resize-none" />
              </div>

              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 px-4 py-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl">
                  <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                  <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">{t.contact.successMsg}</p>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 px-4 py-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl">
                  <AlertCircle size={18} className="text-red-500 flex-shrink-0" />
                  <p className="text-sm font-medium text-red-700 dark:text-red-400">
                    {!form.name || !form.email || !form.message
                      ? t.contact.fillAll
                      : `${t.contact.errorPrefix}: ${errorMsg}`}
                  </p>
                </motion.div>
              )}

              <button onClick={handleSubmit} disabled={status === 'loading' || status === 'success'}
                className="w-full px-8 py-4 bg-pink-500 hover:bg-pink-600 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-2xl font-bold text-base transition-all shadow-lg shadow-pink-500/25 flex items-center justify-center gap-3 group">
                {status === 'loading' ? (
                  <><Loader2 size={20} className="animate-spin" /> {t.contact.sending}</>
                ) : status === 'success' ? (
                  <><CheckCircle size={20} /> {t.contact.sent}</>
                ) : (
                  <>{t.contact.send} <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
