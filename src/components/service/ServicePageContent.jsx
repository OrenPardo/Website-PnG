'use client';
import { useTranslation } from 'react-i18next';
import SkipLink from '@/components/layout/SkipLink';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import ContactSection from '@/components/shared/ContactSection';

export default function ServicePageContent({ config }) {
  const { t } = useTranslation();
  return (
    <>
      <SkipLink />
      <Header variant="subpage-light" />
      <main id="main" className="flex-grow">
        {/* Hero */}
        <header id="hero-section" className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
          <img className="absolute inset-0 w-full h-full object-cover" src={config.heroImage} alt={t(config.heroTitle)} fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6 fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t(config.heroTitle)}</h1>
            <p className="text-lg md:text-xl font-light mb-8">{t(config.heroSubtitle)}</p>
            <a href="#contact" className="inline-block px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-sm tracking-wide uppercase font-bold">
              {t(config.heroCta)}
            </a>
          </div>
        </header>

        {/* Description */}
        <section className="py-20 md:py-28 container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="w-full md:w-1/2 text-start md:pe-12 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6">{t(config.descTitle)}</h2>
              {config.descParagraphs.map((key) => (
                <p key={key} className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg">{t(key)}</p>
              ))}
            </div>
            <div className="w-full md:w-1/2">
              <img alt={config.descImageAlt} className="w-full h-80 object-cover shadow-xl hover:scale-[1.02] transition-transform duration-700" src={config.descImage} width="600" height="320" loading="lazy" decoding="async" />
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
