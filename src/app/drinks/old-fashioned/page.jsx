import OldFashionedContent from '@/components/drinks/OldFashionedContent';

export const metadata = {
  title: 'אולד פאשנד | Paul & Greg',
  description: 'אולד פאשנד — הקוקטייל שהתחיל את הכל. בורבון, סוכר, ביטרס וקליפת תפוז. הסיפור, המתכון והווריאציות שלנו.',
  alternates: { canonical: '/drinks/old-fashioned' },
  other: { 'theme-color': '#0A1128' },
  openGraph: {
    type: 'article',
    locale: 'he_IL',
    url: '/drinks/old-fashioned',
    title: 'אולד פאשנד | Paul & Greg',
    description: 'אולד פאשנד — הקוקטייל שהתחיל את הכל. בורבון, סוכר, ביטרס וקליפת תפוז.',
    images: [{ url: '/drinks/old-fashioned.jpg' }],
    siteName: 'Paul & Greg',
  },
};

export default function OldFashionedPage() {
  return <OldFashionedContent />;
}
