'use client';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/shared/Logo';
import LangToggle from '@/components/shared/LangToggle';
import MobileMenu from './MobileMenu';
import { navItems } from '@/data/navigation';

const BurgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export default function Header({ variant = 'subpage-light' }) {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(variant !== 'homepage');
  const heroRef = useRef(null);

  const isHomepage = variant === 'homepage';
  const isDark = variant === 'subpage-dark';

  useEffect(() => {
    const hero = document.getElementById('hero-section');
    if (!hero) return;
    heroRef.current = hero;

    let heroHeight = hero.offsetHeight;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (isHomepage) {
            setVisible(window.scrollY >= heroHeight);
          } else {
            setScrolled(window.scrollY >= heroHeight);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const onResize = () => {
      heroHeight = hero.offsetHeight;
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [isHomepage]);

  const isActive = (href) => {
    if (href.startsWith('#') || href.startsWith('/#')) return false;
    return pathname === href || pathname.startsWith(href + '/');
  };

  // Class logic
  const headerBase = 'fixed top-0 left-0 w-full z-[60] transition-transform duration-300';
  const homepageClasses = isHomepage
    ? `bg-white dark:bg-gray-900 shadow-sm ${visible ? 'translate-y-0' : '-translate-y-full'}`
    : `bg-transparent ${scrolled ? 'header-scrolled' : ''}`;

  const navTextColor = isHomepage
    ? 'text-gray-600 dark:text-gray-300'
    : scrolled
    ? 'text-gray-600 dark:text-gray-300'
    : 'text-white';

  const linkHover = isHomepage || scrolled
    ? 'hover:text-primary dark:hover:text-white'
    : 'hover:text-white/70';

  const underlineColor = isHomepage || scrolled
    ? 'after:bg-primary'
    : 'after:bg-white';

  return (
    <nav
      id="sticky-header"
      aria-label={t('nav-aria')}
      className={`${headerBase} ${homepageClasses}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-44">
        {/* Logo */}
        <div className="flex-1 flex items-center gap-8">
          <Link href={isHomepage ? '#hero-section' : '/'} className="transition-opacity hover:opacity-80">
            <Logo className="h-[125px] w-auto" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className={`nav-links-container hidden md:flex items-center justify-center gap-6 text-lg font-semibold -mt-6 ${navTextColor}`}>
          {navItems.map((item) => {
            const href = isHomepage && item.homeHref ? item.homeHref : item.href;
            const active = isActive(item.href);
            return (
              <Link
                key={item.key}
                href={href}
                className={`relative transition after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-300 ${
                  active
                    ? `nav-active ${underlineColor} after:w-full`
                    : `${linkHover} after:w-0 ${underlineColor} hover:after:w-full`
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex-1 flex items-center justify-end gap-3 -mt-6">
          <div className="hidden md:flex">
            <LangToggle variant={!isHomepage && !scrolled ? 'subpage' : 'default'} />
          </div>
          <Link
            href={isHomepage ? '#contact' : '#contact'}
            className="bg-primary text-white px-5 py-2 text-sm font-semibold hover:bg-primary/90 transition"
          >
            {t('nav-cta')}
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`burger-btn md:hidden p-2 ${isHomepage || scrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'}`}
            aria-label="תפריט"
          >
            <BurgerIcon />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} isHomepage={isHomepage} />
    </nav>
  );
}
