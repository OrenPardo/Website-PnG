'use client';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import SkipLink from '@/components/layout/SkipLink';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import ContactForm from '@/components/shared/ContactForm';

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

const houseSpecials = [
  { id: 16, nameKey: 'drink-16-name', ingKey: 'drink-16-ing', descKey: 'drink-16-desc', image: '/drinks/the-emerald.jpg', enName: 'The Emerald', accentEn: 'text-emerald-200/70', accentIng: 'text-emerald-300', objectPos: 'object-bottom' },
  { id: 17, nameKey: 'drink-17-name', ingKey: 'drink-17-ing', descKey: 'drink-17-desc', image: '/drinks/the-onyx.jpg', enName: 'The Onyx', accentEn: 'text-gray-300/70', accentIng: 'text-amber-300', objectPos: 'object-top' },
];

const classicDrinks = [
  { id: 1, nameKey: 'drink-1-name', ingKey: 'drink-1-ing', descKey: 'drink-1-desc', image: '/drinks/old-fashioned.jpg', enName: 'Old Fashioned', category: 'classics', featured: true, accentEn: 'text-amber-200/70', accentIng: 'text-amber-300', link: '/drinks/old-fashioned' },
  { id: 2, nameKey: 'drink-2-name', ingKey: 'drink-2-ing', descKey: 'drink-2-desc', image: '/drinks/negroni.jpg', enName: 'Negroni', category: 'classics', accentEn: 'text-red-200/70', accentIng: 'text-red-300' },
  { id: 3, nameKey: 'drink-3-name', ingKey: 'drink-3-ing', descKey: 'drink-3-desc', image: '/drinks/martini.jpg', enName: 'Martini', category: 'classics', accentEn: 'text-blue-200/70', accentIng: 'text-blue-300' },
  { type: 'fact', key: 'drinks-fact-1', emoji: '\u{1F378}', category: 'all' },
  { id: 4, nameKey: 'drink-4-name', ingKey: 'drink-4-ing', descKey: 'drink-4-desc', image: '/drinks/manhattan.jpg', enName: 'Manhattan', category: 'classics', accentEn: 'text-red-200/70', accentIng: 'text-red-300' },
  { id: 5, nameKey: 'drink-5-name', ingKey: 'drink-5-ing', descKey: 'drink-5-desc', image: '/drinks/whiskey-sour.jpg', enName: 'Whiskey Sour', category: 'classics', accentEn: 'text-yellow-200/70', accentIng: 'text-yellow-300' },
  { id: 6, nameKey: 'drink-6-name', ingKey: 'drink-6-ing', descKey: 'drink-6-desc', image: '/drinks/mojito.jpg', enName: 'Mojito', category: 'tropical', featured: true, accentEn: 'text-green-200/70', accentIng: 'text-green-300' },
  { id: 7, nameKey: 'drink-7-name', ingKey: 'drink-7-ing', descKey: 'drink-7-desc', image: '/drinks/pina-colada.jpg', enName: 'Piña Colada', category: 'tropical', accentEn: 'text-yellow-200/70', accentIng: 'text-yellow-300' },
  { id: 8, nameKey: 'drink-8-name', ingKey: 'drink-8-ing', descKey: 'drink-8-desc', image: '/drinks/daiquiri.jpg', enName: 'Daiquiri', category: 'tropical', accentEn: 'text-pink-200/70', accentIng: 'text-pink-300' },
  { id: 9, nameKey: 'drink-9-name', ingKey: 'drink-9-ing', descKey: 'drink-9-desc', image: '/drinks/margarita.jpg', enName: 'Margarita', category: 'tropical', accentEn: 'text-lime-200/70', accentIng: 'text-lime-300' },
  { id: 10, nameKey: 'drink-10-name', ingKey: 'drink-10-ing', descKey: 'drink-10-desc', image: '/drinks/espresso-martini.jpg', enName: 'Espresso Martini', category: 'modern', featured: true, accentEn: 'text-amber-200/70', accentIng: 'text-amber-300' },
  { id: 11, nameKey: 'drink-11-name', ingKey: 'drink-11-ing', descKey: 'drink-11-desc', image: '/drinks/aperol-spritz.jpg', enName: 'Aperol Spritz', category: 'modern', accentEn: 'text-orange-200/70', accentIng: 'text-orange-300' },
  { type: 'fact', key: 'drinks-fact-2', emoji: '\u{1F942}', category: 'all' },
  { id: 12, nameKey: 'drink-12-name', ingKey: 'drink-12-ing', descKey: 'drink-12-desc', image: '/drinks/moscow-mule.jpg', enName: 'Moscow Mule', category: 'modern', accentEn: 'text-amber-200/70', accentIng: 'text-amber-300' },
  { id: 13, nameKey: 'drink-13-name', ingKey: 'drink-13-ing', descKey: 'drink-13-desc', image: '/drinks/cosmopolitan.jpg', enName: 'Cosmopolitan', category: 'modern', accentEn: 'text-pink-200/70', accentIng: 'text-pink-300' },
  { id: 14, nameKey: 'drink-14-name', ingKey: 'drink-14-ing', descKey: 'drink-14-desc', image: '/drinks/lemon-drop.jpg', enName: 'Lemon Drop', category: 'specials', accentEn: 'text-yellow-200/70', accentIng: 'text-yellow-300' },
  { id: 15, nameKey: 'drink-15-name', ingKey: 'drink-15-ing', descKey: 'drink-15-desc', image: '/drinks/b52.jpg', enName: 'B-52', category: 'specials', accentEn: 'text-amber-200/70', accentIng: 'text-amber-300' },
];

const filters = [
  { key: 'drinks-filter-all', value: 'all' },
  { key: 'drinks-filter-classics', value: 'classics' },
  { key: 'drinks-filter-tropical', value: 'tropical' },
  { key: 'drinks-filter-modern', value: 'modern' },
  { key: 'drinks-filter-specials', value: 'specials' },
];

function DrinkCard({ drink, t }) {
  const [touchActive, setTouchActive] = useState(false);
  const isFeatured = drink.featured;
  const titleSize = isFeatured ? 'text-2xl' : 'text-xl';
  const Wrapper = drink.link ? Link : 'div';
  const wrapperProps = drink.link ? { href: drink.link } : {};

  const handleTouch = useCallback((e) => {
    if ('ontouchstart' in window) {
      e.preventDefault();
      setTouchActive((prev) => !prev);
    }
  }, []);

  return (
    <Wrapper
      {...wrapperProps}
      className={`drink-card ${isFeatured ? 'bento-span-2' : ''} relative rounded-lg overflow-hidden cursor-pointer group ${drink.link ? 'block' : ''} ${touchActive ? 'touch-active' : ''}`}
      style={{ height: 340 }}
      onClick={drink.link ? undefined : handleTouch}
    >
      <img src={drink.image} alt={drink.enName} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 p-5 z-10">
        <h3 className={`text-white ${titleSize} font-bold drop-shadow-lg`}>{t(drink.nameKey)}</h3>
        <p className={`${drink.accentEn} text-sm font-light drop-shadow`} lang="en">{drink.enName}</p>
      </div>
      <div className="drink-overlay absolute inset-0 z-20 flex flex-col justify-end p-5">
        <h3 className={`text-white ${titleSize} font-bold mb-1`}>{t(drink.nameKey)}</h3>
        <p className={`${drink.accentEn} text-sm font-light mb-3`} lang="en">{drink.enName}</p>
        <p className={`${drink.accentIng} text-xs font-semibold mb-2`}>{t(drink.ingKey)}</p>
        <p className="text-gray-200 text-sm font-light leading-relaxed">{t(drink.descKey)}</p>
      </div>
    </Wrapper>
  );
}

function FactCard({ item, t }) {
  return (
    <div
      className="relative rounded-lg overflow-hidden flex items-center justify-center p-6 text-center"
      style={{ height: 340, background: 'linear-gradient(135deg, #1a1a2e, #16213e)' }}
    >
      <div>
        <div className="text-4xl mb-4">{item.emoji}</div>
        <p className="text-gray-300 text-sm font-light leading-relaxed italic">{t(item.key)}</p>
      </div>
    </div>
  );
}

export default function DrinksPageContent() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const isVisible = (item) => {
    if (activeFilter === 'all') return true;
    if (item.type === 'fact') return item.category === 'all';
    return item.category === activeFilter;
  };

  return (
    <>
      <SkipLink />
      <Header variant="subpage-dark" />
      <main id="main" className="flex-grow bg-background-dark">
        {/* Hero */}
        <header id="hero-section" className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1128 0%, #1a1a2e 40%, #16213e 70%, #0f3460 100%)' }}>
          <div className="absolute inset-0 shimmer" />
          <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6 fade-in-up py-24">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">{t('drinks-hero-title')}</h1>
            <p className="text-lg md:text-xl font-light text-gray-300 max-w-xl mx-auto">{t('drinks-hero-subtitle')}</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background-dark to-transparent" />
        </header>

        {/* Our Drinks (House Specials) */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{t('drinks-our-title')}</h2>
              <p className="text-gray-400 font-light text-sm md:text-base max-w-lg mx-auto">{t('drinks-our-subtitle')}</p>
            </div>
            <div className="bento-grid">
              {houseSpecials.map((drink) => (
                <DrinkCard key={drink.id} drink={drink} t={t} />
              ))}
            </div>
          </div>
        </section>

        {/* The Classics Header */}
        <div className="text-center pb-6 pt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{t('drinks-classics-title')}</h2>
          <p className="text-gray-400 font-light text-sm md:text-base max-w-lg mx-auto">{t('drinks-classics-subtitle')}</p>
        </div>

        {/* Category Filter Bar */}
        <div className="sticky top-0 z-50 py-4 transition-all duration-300" style={{ background: 'rgba(10, 17, 40, 0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
          <div className="container mx-auto px-6">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide justify-center">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`px-5 py-2 text-sm font-semibold rounded-full border transition-all duration-300 whitespace-nowrap ${
                    activeFilter === f.value
                      ? 'border-amber-400/50 text-amber-400 bg-amber-400/10'
                      : 'border-gray-600 text-gray-400 hover:border-amber-400/50 hover:text-amber-400'
                  }`}
                >
                  {t(f.key)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="bento-grid">
              {classicDrinks.map((item, idx) => {
                if (!isVisible(item)) return null;
                if (item.type === 'fact') return <FactCard key={`fact-${idx}`} item={item} t={t} />;
                return <DrinkCard key={item.id} drink={item} t={t} />;
              })}
            </div>
          </div>
        </section>

        {/* CTA + Contact Section */}
        <section id="contact" className="py-16 md:py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('drinks-cta-title')}</h2>
              <p className="text-gray-400 font-light">{t('drinks-cta-text')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16">
              <div className="md:col-span-3">
                <ContactForm dark />
              </div>
              <div className="md:col-span-2 flex flex-col justify-center md:border-s border-white/10 md:ps-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs font-semibold text-white tracking-widest uppercase mb-5">{t('contact-direct')}</h3>
                    <div className="space-y-4">
                      <a href="tel:+972584012204" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition">
                        <PhoneIcon />
                        <span dir="ltr" className="text-sm font-light">058-401-2204</span>
                      </a>
                      <a href="https://wa.me/972584012204" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition">
                        <WhatsAppIcon />
                        <span className="text-sm font-light">{t('contact-whatsapp')}</span>
                      </a>
                      <a href="mailto:sales@paulandgreg.com" className="flex items-center gap-3 text-gray-300 hover:text-red-400 transition">
                        <EmailIcon />
                        <span className="text-sm font-light">sales@paulandgreg.com</span>
                      </a>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <h3 className="text-xs font-semibold text-white tracking-widest uppercase mb-5">{t('contact-follow')}</h3>
                    <div className="flex gap-4">
                      <a href="https://www.instagram.com/png_drinks/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="ig-hover w-10 h-10 border border-gray-600 flex items-center justify-center text-gray-400 transition-all duration-300">
                        <InstagramIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
