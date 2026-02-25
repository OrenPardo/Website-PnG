import ServicePageContent from '@/components/service/ServicePageContent';

const config = {
  heroImage: '/services/corporate-events.svg',
  heroTitle: 'corp-hero-title',
  heroSubtitle: 'corp-hero-subtitle',
  heroCta: 'corp-hero-cta',
  descTitle: 'corp-desc-title',
  descParagraphs: ['corp-desc-p1', 'corp-desc-p2', 'corp-desc-p3'],
  descImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWVqDyZ-WBI5ufZwP6ncnLhXmLHpKcc4KcG23y2Wg-07y117-B53wVxES7dKFb4cH-ys0YqZsLfi9JcL6fFMqKn9SDzA8yZ84cwU8d2eq7UyB2Wlag2WlCwT6iOv7alLwsn3I7TDVNq3zLALzgxD8XwBSdLRzezejiBQCk7t9JGxGi8uK2ng8q2ihx85X-xi-WqMAD4h8zYrzMlIMv2FOem-osDrrUfYwZ1ZROP-10KAGFUv2sYbMi6Ja-Tr8EDMnjLtWUFucgKWyP',
  descImageAlt: 'בר אלגנטי באירוע חברה',
};

export const metadata = {
  title: 'אירועי חברה | Paul & Greg',
  description: 'שירות בר קוקטיילים מקצועי לאירועי חברה, השקות, ימי גיבוש וכנסים.',
  alternates: { canonical: '/corporate' },
  openGraph: { type: 'website', locale: 'he_IL', url: '/corporate', title: 'אירועי חברה | Paul & Greg', images: [{ url: '/logo.png' }], siteName: 'Paul & Greg' },
};

export default function CorporatePage() {
  return <ServicePageContent config={config} />;
}
