import ServicePageContent from '@/components/service/ServicePageContent';

const config = {
  heroImage: '/services/weddings.svg',
  heroTitle: 'wed-hero-title',
  heroSubtitle: 'wed-hero-subtitle',
  heroCta: 'wed-hero-cta',
  descTitle: 'wed-desc-title',
  descParagraphs: ['wed-desc-p1', 'wed-desc-p2', 'wed-desc-p3'],
  descImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsQgoaXHy4fXbwIpsku0NfVcbHq63LWbQ9-WuC7wRWPDPyfUNUlmdUF2vxaoHVAPIJ9RgvxU4J27cddjtQ79mdqM91r2-MUXzU13lIxVts4qsaiZfOVtbzswwkRBJaEfumQvFufuLOpCaNhU62Ln28rzQkYiC5jcOMru1q_gQdawZ1Hcth5mYgWVrjmLL-8IFQrxju1N1ukC2a_vo_HjpJmzl6t9IdZFqT07XBde2z8fzw2Tp4SQrA4MTO9rABdweOiQJeBy-lLbve',
  descImageAlt: 'ברמנים מכינים קוקטיילים בחתונה',
};

export const metadata = {
  title: 'חתונות וקבלות פנים | Paul & Greg',
  description: 'שירות בר קוקטיילים יוקרתי לחתונות. תפריט מותאם אישית, ברמנים מקצועיים ועיצוב בר אלגנטי ליום המיוחד שלכם.',
  alternates: { canonical: '/weddings' },
  openGraph: { type: 'website', locale: 'he_IL', url: '/weddings', title: 'חתונות וקבלות פנים | Paul & Greg', description: 'שירות בר קוקטיילים יוקרתי לחתונות.', images: [{ url: '/logo.png' }], siteName: 'Paul & Greg' },
};

export default function WeddingsPage() {
  return <ServicePageContent config={config} />;
}
