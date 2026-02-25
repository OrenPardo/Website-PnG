'use client';
import { useTranslation } from 'react-i18next';

export default function StorySection() {
  const { t } = useTranslation();
  return (
    <section id="story" className="py-20 md:py-28 container mx-auto px-6 relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <div className="w-full md:w-1/2 text-start md:pe-12 space-y-6">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-primary dark:text-white mb-6">{t('story-title')}</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg">
            <p>{t('story-p1')}</p>
            <p>{t('story-p2')}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative h-[500px]">
          <div className="absolute top-0 left-0 w-3/4 h-64 overflow-hidden shadow-xl z-10">
            <img alt="ברמנים מכינים קוקטיילים באירוע" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsQgoaXHy4fXbwIpsku0NfVcbHq63LWbQ9-WuC7wRWPDPyfUNUlmdUF2vxaoHVAPIJ9RgvxU4J27cddjtQ79mdqM91r2-MUXzU13lIxVts4qsaiZfOVtbzswwkRBJaEfumQvFufuLOpCaNhU62Ln28rzQkYiC5jcOMru1q_gQdawZ1Hcth5mYgWVrjmLL-8IFQrxju1N1ukC2a_vo_HjpJmzl6t9IdZFqT07XBde2z8fzw2Tp4SQrA4MTO9rABdweOiQJeBy-lLbve" width="600" height="256" loading="lazy" decoding="async" />
          </div>
          <div className="absolute bottom-0 right-0 w-2/3 h-80 overflow-hidden shadow-xl z-0 mt-8">
            <img alt="שמפניה על קרח בעיצוב אלגנטי" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEXOabOkANMAGGOoYsERiqgTmWurunhIQFicbyRMZNY6xAb4oFkeu3FMxOxNB9HnJN3ZI7oToalehVmHWID0xPGx2T9CECipXWAEXLVp5_YUSDi4o_fRvrWkSJZKFXJ1oUcLHUcVC51EGmS7Qdo60gLE4ib6uXw2qHmzStZSpEzzypec4KjwyrhTOaoELiI8HwGXbCT86jrqYT76zNaaDg0-45ELUXIjHCOvsRcJ9cW2HKVO1HrX_PV2-1gAldXNr17-YQr900CkQw" width="500" height="320" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
