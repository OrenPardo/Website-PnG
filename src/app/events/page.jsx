import ServicePageContent from '@/components/service/ServicePageContent';

const config = {
  heroImage: '/services/private-events.svg',
  heroTitle: 'evt-hero-title',
  heroSubtitle: 'evt-hero-subtitle',
  heroCta: 'evt-hero-cta',
  descTitle: 'evt-desc-title',
  descParagraphs: ['evt-desc-p1', 'evt-desc-p2', 'evt-desc-p3'],
  descImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEXOabOkANMAGGOoYsERiqgTmWurunhIQFicbyRMZNY6xAb4oFkeu3FMxOxNB9HnJN3ZI7oToalehVmHWID0xPGx2T9CECipXWAEXLVp5_YUSDi4o_fRvrWkSJZKFXJ1oUcLHUcVC51EGmS7Qdo60gLE4ib6uXw2qHmzStZSpEzzypec4KjwyrhTOaoELiI8HwGXbCT86jrqYT76zNaaDg0-45ELUXIjHCOvsRcJ9cW2HKVO1HrX_PV2-1gAldXNr17-YQr900CkQw',
  descImageAlt: 'ברמן מוזג קוקטייל באירוע פרטי',
};

export const metadata = {
  title: 'אירועים פרטיים | Paul & Greg',
  description: 'שירות בר קוקטיילים לאירועים פרטיים - ימי הולדת, מסיבות ואירועים מיוחדים.',
  alternates: { canonical: '/events' },
  openGraph: { type: 'website', locale: 'he_IL', url: '/events', title: 'אירועים פרטיים | Paul & Greg', images: [{ url: '/logo.png' }], siteName: 'Paul & Greg' },
};

export default function EventsPage() {
  return <ServicePageContent config={config} />;
}
