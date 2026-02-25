import DrinksPageContent from '@/components/drinks/DrinksPageContent';

export const metadata = {
  title: 'הדרינקים | Paul & Greg',
  description: 'הקולקציה של פאול וגרג - מגוון קוקטיילים קלאסיים, טרופיים ומודרניים. גלו את עולם הקוקטיילים שלנו.',
  alternates: { canonical: '/drinks' },
  other: { 'theme-color': '#0A1128' },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: '/drinks',
    title: 'הדרינקים | Paul & Greg',
    description: 'הקולקציה של פאול וגרג - מגוון קוקטיילים קלאסיים, טרופיים ומודרניים.',
    images: [{ url: '/logo.png' }],
    siteName: 'Paul & Greg',
  },
};

export default function DrinksPage() {
  return <DrinksPageContent />;
}
