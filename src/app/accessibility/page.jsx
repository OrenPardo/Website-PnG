import LegalPageContent from '@/components/legal/LegalPageContent';

const config = {
  heroTitle: 'access-hero-title',
  heroSubtitle: 'access-hero-subtitle',
  updatedKey: 'access-updated',
  introKey: 'access-intro',
  sections: [
    { titleKey: 'access-standard-title', textKey: 'access-standard-text' },
    { titleKey: 'access-measures-title', textKey: 'access-measures-text' },
    { titleKey: 'access-tech-title', textKey: 'access-tech-text' },
    { titleKey: 'access-limitations-title', textKey: 'access-limitations-text' },
    { titleKey: 'access-assistance-title', textKey: 'access-assistance-text' },
    { titleKey: 'access-contact-title', textKey: 'access-contact-text' },
    { titleKey: 'access-complaint-title', textKey: 'access-complaint-text' },
  ],
};

export const metadata = {
  title: 'הצהרת נגישות | Paul & Greg',
  description: 'הצהרת הנגישות של Paul & Greg — המחויבות שלנו לנגישות דיגיטלית בהתאם לתקן WCAG 2.1 AA.',
  alternates: { canonical: '/accessibility' },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: '/accessibility',
    title: 'הצהרת נגישות | Paul & Greg',
    description: 'הצהרת הנגישות של Paul & Greg.',
    images: [{ url: '/logo.png' }],
    siteName: 'Paul & Greg',
  },
};

export default function AccessibilityPage() {
  return <LegalPageContent config={config} />;
}
