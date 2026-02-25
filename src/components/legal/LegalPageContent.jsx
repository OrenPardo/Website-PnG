'use client';
import { useTranslation } from 'react-i18next';
import SkipLink from '@/components/layout/SkipLink';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';

export default function LegalPageContent({ config }) {
  const { t } = useTranslation();
  return (
    <>
      <SkipLink />
      <Header variant="subpage-light" />
      <main id="main" className="flex-grow">
        {/* Hero */}
        <header id="hero-section" className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #5A6337 0%, #3d4425 50%, #2a2f1a 100%)' }}>
          <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6 fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{t(config.heroTitle)}</h1>
            <p className="text-lg font-light text-white/70">{t(config.heroSubtitle)}</p>
          </div>
        </header>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-sm text-gray-400 dark:text-gray-500 mb-8">{t(config.updatedKey)}</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-12">{t(config.introKey)}</p>
            <div className="space-y-10">
              {config.sections.map((section) => (
                <div key={section.titleKey}>
                  <h2 className="text-xl font-bold text-primary dark:text-white mb-3">{t(section.titleKey)}</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">{t(section.textKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
