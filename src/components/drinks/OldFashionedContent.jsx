'use client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import SkipLink from '@/components/layout/SkipLink';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import ContactSection from '@/components/shared/ContactSection';

const steps = [
  { num: 1, titleKey: 'of-step-1-title', descKey: 'of-step-1' },
  { num: 2, titleKey: 'of-step-2-title', descKey: 'of-step-2' },
  { num: 3, titleKey: 'of-step-3-title', descKey: 'of-step-3' },
  { num: 4, titleKey: 'of-step-4-title', descKey: 'of-step-4' },
];

const variations = [
  {
    titleKey: 'of-var-1-title',
    descKey: 'of-var-1-desc',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
  },
  {
    titleKey: 'of-var-2-title',
    descKey: 'of-var-2-desc',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />,
  },
  {
    titleKey: 'of-var-3-title',
    descKey: 'of-var-3-desc',
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </>
    ),
  },
];

const tips = [
  {
    titleKey: 'of-tip-1-title',
    descKey: 'of-tip-1',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
  },
  {
    titleKey: 'of-tip-2-title',
    descKey: 'of-tip-2',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    titleKey: 'of-tip-3-title',
    descKey: 'of-tip-3',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
  },
];

const ingredients = [
  { he: '\u05D1\u05D5\u05E8\u05D1\u05D5\u05DF', en: 'Bourbon' },
  { he: '\u05E1\u05D5\u05DB\u05E8', en: 'Sugar' },
  { he: '\u05D0\u05E0\u05D2\u05D5\u05E1\u05D8\u05D5\u05E8\u05D4 \u05D1\u05D9\u05D8\u05E8\u05E1', en: 'Angostura Bitters' },
  { he: '\u05E7\u05DC\u05D9\u05E4\u05EA \u05EA\u05E4\u05D5\u05D6', en: 'Orange Peel' },
];

export default function OldFashionedContent() {
  const { t, i18n } = useTranslation();
  const isHe = i18n.language === 'he';

  return (
    <>
      <SkipLink />
      <Header variant="subpage-dark" />
      <main id="main" className="flex-grow">
        {/* Hero */}
        <header id="hero-section" className="relative h-[70vh] w-full flex items-end overflow-hidden">
          <img className="absolute inset-0 w-full h-full object-cover" src="/drinks/old-fashioned.jpg" alt="Old Fashioned" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-black/60 to-black/30" />
          <div className="relative z-10 w-full">
            <div className="container mx-auto px-6 pb-16">
              <Link href="/drinks" className="inline-flex items-center gap-2 text-amber-300/80 hover:text-amber-200 text-sm font-light mb-6 transition">
                {t('of-back-link')}
              </Link>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-3 tracking-tight fade-in-up">{t('drink-1-name')}</h1>
              <p className="text-2xl md:text-3xl font-light text-amber-200/70 tracking-wide" lang="en">Old Fashioned</p>
            </div>
          </div>
        </header>

        {/* Drink Profile */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
              <div className="w-full md:w-1/2 text-start space-y-8">
                <p className="text-gray-300 leading-relaxed font-light text-lg">{t('of-profile-desc')}</p>
                <div>
                  <h3 className="text-xs font-semibold text-amber-400 tracking-widest uppercase mb-4">{t('of-profile-ingredients')}</h3>
                  <div className="flex flex-wrap gap-3">
                    {ingredients.map((ing) => (
                      <span key={ing.en} className="px-4 py-2 border border-amber-400/30 text-amber-200 text-sm rounded-full">
                        {isHe ? ing.he : ing.en}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-8">
                  <div>
                    <h3 className="text-xs font-semibold text-amber-400 tracking-widest uppercase mb-2">{t('of-profile-glass')}</h3>
                    <p className="text-gray-300 font-light">Rocks Glass</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-amber-400 tracking-widest uppercase mb-2">{t('of-profile-strength')}</h3>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i} className={`w-3 h-3 rounded-full ${i <= 3 ? 'bg-amber-400' : 'bg-amber-400/30'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="overflow-hidden rounded-lg">
                  <img alt="Old Fashioned cocktail" className="w-full h-96 object-cover hover:scale-[1.02] transition-transform duration-700" src="/drinks/old-fashioned.jpg" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Story */}
        <section className="py-20 md:py-28" style={{ background: 'linear-gradient(135deg, rgba(10,17,40,0.95), rgba(26,26,46,0.95))' }}>
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="border-s-4 border-amber-400 ps-8 md:ps-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{t('of-story-title')}</h2>
              <p className="text-gray-300 leading-relaxed font-light text-lg mb-6">{t('of-story-p1')}</p>
              <p className="text-gray-300 leading-relaxed font-light text-lg">{t('of-story-p2')}</p>
            </div>
          </div>
        </section>

        {/* How We Make It */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">{t('of-recipe-title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-xl">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{t(step.titleKey)}</h3>
                    <p className="text-gray-400 font-light leading-relaxed">{t(step.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Variations */}
        <section className="py-20 md:py-28" style={{ background: 'rgba(26,26,46,0.6)' }}>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">{t('of-var-title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {variations.map((v) => (
                <div key={v.titleKey} className="text-center space-y-4 p-8 rounded-lg border border-white/10 hover:border-amber-400/30 transition-colors duration-300">
                  <div className="w-16 h-16 mx-auto bg-amber-400/10 rounded-full flex items-center justify-center">
                    <svg aria-hidden="true" className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">{v.icon}</svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">{t(v.titleKey)}</h3>
                  <p className="text-gray-400 font-light">{t(v.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bartender Tips */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">{t('of-tips-title')}</h2>
            <div className="space-y-8">
              {tips.map((tip) => (
                <div key={tip.titleKey} className="flex gap-6 items-start p-6 rounded-lg border border-white/5 hover:border-amber-400/20 transition-colors duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-400/10 rounded-full flex items-center justify-center">
                    <svg aria-hidden="true" className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">{tip.icon}</svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{t(tip.titleKey)}</h3>
                    <p className="text-gray-400 font-light leading-relaxed">{t(tip.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('of-cta-title')}</h2>
            <p className="text-gray-400 font-light mb-8">{t('of-cta-text')}</p>
            <a href="#contact" className="inline-block px-10 py-4 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-background-dark transition-all duration-300 text-sm tracking-wide uppercase font-bold">
              {t('of-cta-btn')}
            </a>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
