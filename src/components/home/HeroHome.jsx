'use client';
import { useTranslation } from 'react-i18next';
import Logo from '@/components/shared/Logo';

export default function HeroHome() {
  const { t } = useTranslation();
  return (
    <header id="hero-section" className="relative h-screen w-full flex flex-col items-center justify-center bg-brand-bg dark:bg-background-dark text-primary px-4 overflow-hidden">
      <div className="z-10 text-center max-w-4xl mx-auto space-y-4 fade-in-up flex flex-col items-center">
        <div className="mb-4 relative">
          <Logo className="w-96 md:w-[36rem] mx-auto" priority />
          <h1 lang="en" className="text-sm md:text-base tracking-widest text-primary font-bold uppercase mt-6">Premium Bar & Cocktails</h1>
        </div>
        <div className="pt-8">
          <a href="#contact" className="inline-block px-12 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-sm md:text-base tracking-wide uppercase font-bold">
            {t('hero-cta')}
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/50 to-transparent dark:from-background-dark opacity-50" />
    </header>
  );
}
