'use client';
import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';

const PhoneIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 007.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 003.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0013.6 2.326zM7.994 14.521a6.573 6.573 0 01-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 01-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 014.66 1.931 6.557 6.557 0 011.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 00-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);

export default function ContactSection() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-primary dark:text-white mb-2">{t('contact-title')}</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm tracking-wider">{t('contact-subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16">
          <div className="md:col-span-3">
            <ContactForm />
          </div>
          <div className="md:col-span-2 flex flex-col justify-center md:border-s border-gray-200 dark:border-gray-700 md:ps-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-semibold text-primary dark:text-white tracking-widest uppercase mb-5">{t('contact-direct')}</h3>
                <div className="space-y-4">
                  <a href="tel:+972584012204" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    <PhoneIcon />
                    <span dir="ltr" className="text-sm font-light">058-401-2204</span>
                  </a>
                  <a href="https://wa.me/972584012204" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-green-700 transition">
                    <WhatsAppIcon />
                    <span className="text-sm font-light">{t('contact-whatsapp')}</span>
                  </a>
                  <a href="mailto:sales@paulandgreg.com" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition">
                    <EmailIcon />
                    <span className="text-sm font-light">sales@paulandgreg.com</span>
                  </a>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xs font-semibold text-primary dark:text-white tracking-widest uppercase mb-5">{t('contact-follow')}</h3>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/png_drinks/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="ig-hover w-10 h-10 border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 transition-all duration-300">
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
