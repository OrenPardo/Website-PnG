'use client';
import { useTranslation } from 'react-i18next';

const InstagramIcon = () => (
  <svg className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);

const gallery = [
  { img: '/gallery-ig-1.jpg', url: 'https://www.instagram.com/p/DVEWxG3CGWV/?img_index=1', alt: 'קוקטיילים בחתונה', span: 'md:row-span-2' },
  { img: '/gallery-ig-2.jpg', url: 'https://www.instagram.com/p/DU58xFRiJ6R/', alt: 'קוקטייל מאינסטגרם' },
  { img: '/gallery-ig-3.jpg', url: 'https://www.instagram.com/p/DUfkhqsiHu3/', alt: 'קוקטייל מאינסטגרם' },
  { img: '/gallery-ig-4.jpg', url: 'https://www.instagram.com/p/DUlX4wsiKPa/?img_index=1', alt: 'קוקטייל מאינסטגרם' },
  { img: '/gallery-ig-5.jpg', url: 'https://www.instagram.com/p/CXY30Gvoe0C/', alt: 'קוקטייל מאינסטגרם', span: 'md:row-span-2' },
];

export default function GallerySection() {
  const { t } = useTranslation();
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-primary dark:text-white mb-2">{t('gallery-title')}</h2>
          <a href="https://www.instagram.com/png_drinks/" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 text-sm tracking-widest hover:text-primary dark:hover:text-white transition-colors">@png_drinks</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-auto md:grid-rows-2 gap-2 max-w-5xl mx-auto md:h-[480px]">
          {gallery.map((item) => (
            <a key={item.img} href={item.url} target="_blank" rel="noopener noreferrer" className={`${item.span || ''} relative overflow-hidden group`}>
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.img} alt={item.alt} loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon />
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="https://www.instagram.com/png_drinks/" target="_blank" rel="noopener noreferrer" className="ig-hover inline-flex items-center gap-3 border border-primary dark:border-white text-primary dark:text-white px-8 py-3 text-sm tracking-wider font-semibold transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            <span>{t('gallery-cta')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
