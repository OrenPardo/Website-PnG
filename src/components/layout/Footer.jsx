'use client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Logo from '@/components/shared/Logo';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary text-white flex-shrink-0 md:h-[300px]">
      <div className="container mx-auto px-6 md:h-full flex flex-col justify-center py-12 md:pt-12 md:pb-0">
        <div className="grid grid-cols-1 md:grid-cols-5 md:items-stretch gap-6 text-center md:text-start pb-4">
          {/* Logo */}
          <div className="flex flex-col items-center w-fit mx-auto md:mx-0">
            <Link href="/#hero-section" className="transition-opacity hover:opacity-80">
              <Logo className="w-28" invert style={{ transform: 'scale(2.8125)' }} />
              <div lang="en" className="text-xs uppercase tracking-widest opacity-80 mt-1">Bar & Cocktails</div>
            </Link>
          </div>

          {/* Services */}
          <div className="space-y-2">
            <h4 className="text-base font-bold border-b border-white/20 pb-1 inline-block md:block mb-2">{t('footer-services')}</h4>
            <ul className="space-y-1 text-sm font-light text-gray-200">
              <li><Link className="hover:text-white transition" href="/weddings">{t('footer-weddings')}</Link></li>
              <li><Link className="hover:text-white transition" href="/events">{t('footer-events')}</Link></li>
              <li><Link className="hover:text-white transition" href="/corporate">{t('footer-corporate')}</Link></li>
              <li><Link className="hover:text-white transition" href="/drinks">{t('footer-drinks')}</Link></li>
            </ul>
          </div>

          {/* Useful Pages */}
          <div className="space-y-2">
            <h4 className="text-base font-bold border-b border-white/20 pb-1 inline-block md:block mb-2">{t('footer-useful')}</h4>
            <ul className="space-y-1 text-sm font-light text-gray-200">
              <li><Link className="hover:text-white transition" href="/terms">{t('footer-terms')}</Link></li>
              <li><Link className="hover:text-white transition" href="/privacy">{t('footer-privacy')}</Link></li>
              <li><Link className="hover:text-white transition" href="/accessibility">{t('footer-accessibility')}</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-2">
            <h4 className="text-base font-bold border-b border-white/20 pb-1 inline-block md:block mb-2">{t('footer-follow')}</h4>
            <ul className="space-y-1 text-sm font-light text-gray-200">
              <li><a className="hover:text-white transition" href="https://www.instagram.com/png_drinks/" target="_blank" rel="noopener noreferrer">{t('footer-instagram')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h4 className="text-base font-bold border-b border-white/20 pb-1 inline-block md:block mb-2">{t('footer-contact')}</h4>
            <ul className="space-y-1 text-sm font-light text-gray-200">
              <li><span>{t('footer-phone-label')}</span> <a className="hover:text-white transition" dir="ltr" href="tel:+972584012204">058-401-2204</a></li>
              <li><span>{t('footer-email-label')}</span> <a className="hover:text-white transition" href="mailto:sales@paulandgreg.com">sales@paulandgreg.com</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-4 text-center text-xs text-gray-200 font-light">
          <span>{t('footer-copyright')}</span>
        </div>
      </div>
    </footer>
  );
}
