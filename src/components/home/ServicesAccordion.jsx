'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const services = [
  { key: 'svc-weddings-btn', href: '/weddings', img: '/services/weddings.svg', alt: 'בר קוקטיילים מקצועי לחתונות' },
  { key: 'svc-events-btn', href: '/events', img: '/services/private-events.svg', alt: 'ברמן מוזג קוקטייל באירוע פרטי' },
  { key: 'svc-corporate-btn', href: '/corporate', img: '/services/corporate-events.svg', alt: 'עיצוב בר אלגנטי לאירועי חברה' },
];

export default function ServicesAccordion() {
  const { t } = useTranslation();
  const [active, setActive] = useState(null);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <section className="w-full overflow-hidden py-20 md:py-28">
      <div className="text-center py-12 bg-white dark:bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-primary dark:text-white">{t('services-title')}</h2>
      </div>
      <div className="container mx-auto px-6">
        <div
          id="services-accordion"
          className="flex flex-col md:flex-row md:h-[850px] gap-1"
          onMouseLeave={() => isDesktop && setActive(null)}
        >
          {services.map((svc, i) => {
            const isActive = active === i;
            const flexStyle = isDesktop
              ? active === null
                ? { flex: '1 1 0%' }
                : isActive
                ? { flex: '1 1 0%' }
                : { flex: '0 0 150px' }
              : {};

            return (
              <Link
                key={svc.key}
                href={svc.href}
                className="service-card relative overflow-hidden aspect-video md:aspect-auto md:h-full cursor-pointer transition-[flex] duration-700 ease-in-out block"
                style={flexStyle}
                onMouseEnter={() => isDesktop && setActive(i)}
                onFocus={() => isDesktop && setActive(i)}
                aria-expanded={isActive}
              >
                <img
                  alt={svc.alt}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}
                  src={svc.img}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-center z-20">
                  <h3 className="text-white text-lg md:text-xl font-semibold tracking-wide drop-shadow-lg">{t(svc.key)}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
