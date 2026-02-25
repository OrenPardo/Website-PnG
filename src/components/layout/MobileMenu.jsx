'use client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import LangToggle from '@/components/shared/LangToggle';
import { navItems } from '@/data/navigation';

export default function MobileMenu({ open, onClose, isHomepage }) {
  const { t } = useTranslation();

  if (!open) return null;

  return (
    <div className="md:hidden bg-gray-50 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600 shadow-lg px-6 py-5">
      <div className="flex flex-col gap-4 text-lg text-gray-600 dark:text-gray-300 font-semibold">
        <div className="self-end">
          <LangToggle />
        </div>
        <hr className="border-gray-300 dark:border-gray-600" />
        {navItems.map((item) => {
          const href = isHomepage && item.homeHref ? item.homeHref : item.href;
          return (
            <Link
              key={item.key}
              href={href}
              onClick={onClose}
              className="hover:text-primary transition"
            >
              {t(item.key)}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
