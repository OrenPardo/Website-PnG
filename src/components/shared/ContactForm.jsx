'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactForm({ dark = false }) {
  const { t } = useTranslation();
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const clearError = (field) => {
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const newErrors = {};
    if (!name) newErrors.name = true;
    if (!phone && !email) newErrors.phone = true;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = true;
    if (message.length < 10) newErrors.message = true;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setSuccess(true);
  };

  const borderClass = dark ? 'border-white/20' : 'border-gray-300 dark:border-gray-600';
  const focusClass = dark ? 'focus:border-amber-400' : 'focus:border-primary';
  const textClass = dark ? 'text-white placeholder:text-gray-500' : '';
  const selectBg = dark ? 'bg-gray-900 text-white' : '';
  const btnClass = dark
    ? 'bg-amber-400 text-background-dark hover:bg-amber-300'
    : 'bg-primary text-white hover:bg-primary/90';

  if (success) {
    return (
      <div className="text-center py-12">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 success-checkmark ${dark ? 'bg-green-900/30' : 'bg-green-100 dark:bg-green-900/30'}`}>
          <svg className={`w-8 h-8 ${dark ? 'text-green-400' : 'text-green-600 dark:text-green-400'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
        </div>
        <h3 className={`text-xl font-bold mb-2 ${dark ? 'text-white' : 'text-primary dark:text-white'}`}>{t('contact-success-title')}</h3>
        <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>{t('contact-success-desc')}</p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder={t('ph-name')}
            onChange={() => clearError('name')}
            className={`w-full px-0 py-3 border-b ${borderClass} bg-transparent ${focusClass} outline-none transition text-start text-sm ${textClass} ${errors.name ? 'input-error' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{t('err-name')}</p>}
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            dir="ltr"
            placeholder={t('ph-phone')}
            onChange={() => clearError('phone')}
            className={`w-full px-0 py-3 border-b ${borderClass} bg-transparent ${focusClass} outline-none transition text-sm text-end ${textClass} ${errors.phone ? 'input-error' : ''}`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{t('err-phone-email')}</p>}
        </div>
      </div>
      <div>
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder={t('ph-email')}
          onChange={() => clearError('email')}
          className={`w-full px-0 py-3 border-b ${borderClass} bg-transparent ${focusClass} outline-none transition text-start text-sm ${textClass} ${errors.email ? 'input-error' : ''}`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{t('err-email-invalid')}</p>}
      </div>
      <select name="event_type" className={`w-full px-0 py-3 border-b ${borderClass} bg-transparent ${focusClass} outline-none transition text-start text-sm ${textClass}`}>
        <option className={selectBg}>{t('opt-wedding')}</option>
        <option className={selectBg}>{t('opt-corporate')}</option>
        <option className={selectBg}>{t('opt-birthday')}</option>
        <option className={selectBg}>{t('opt-other')}</option>
      </select>
      <div>
        <textarea
          rows="3"
          name="message"
          required
          minLength="10"
          placeholder={t('ph-message')}
          onChange={() => clearError('message')}
          className={`w-full px-0 py-3 border-b ${borderClass} bg-transparent ${focusClass} outline-none transition resize-none text-start text-sm ${textClass} ${errors.message ? 'input-error' : ''}`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{t('err-message')}</p>}
      </div>
      <button type="submit" className={`w-full py-3.5 text-sm tracking-wider font-semibold transition-all ${btnClass}`}>
        {t('contact-submit')}
      </button>
    </form>
  );
}
