import LegalPageContent from '@/components/legal/LegalPageContent';

const config = {
  heroTitle: 'privacy-hero-title',
  heroSubtitle: 'privacy-hero-subtitle',
  updatedKey: 'privacy-updated',
  introKey: 'privacy-intro',
  sections: [
    { titleKey: 'privacy-controller-title', textKey: 'privacy-controller-text' },
    { titleKey: 'privacy-collect-title', textKey: 'privacy-collect-text' },
    { titleKey: 'privacy-basis-title', textKey: 'privacy-basis-text' },
    { titleKey: 'privacy-use-title', textKey: 'privacy-use-text' },
    { titleKey: 'privacy-share-title', textKey: 'privacy-share-text' },
    { titleKey: 'privacy-transfers-title', textKey: 'privacy-transfers-text' },
    { titleKey: 'privacy-retention-title', textKey: 'privacy-retention-text' },
    { titleKey: 'privacy-cookies-title', textKey: 'privacy-cookies-text' },
    { titleKey: 'privacy-security-title', textKey: 'privacy-security-text' },
    { titleKey: 'privacy-rights-title', textKey: 'privacy-rights-text' },
    { titleKey: 'privacy-minors-title', textKey: 'privacy-minors-text' },
    { titleKey: 'privacy-changes-title', textKey: 'privacy-changes-text' },
    { titleKey: 'privacy-contact-title', textKey: 'privacy-contact-text' },
  ],
};

export const metadata = {
  title: 'מדיניות פרטיות | Paul & Greg',
  description: 'מדיניות הפרטיות של Paul & Greg — כיצד אנחנו אוספים, משתמשים ומגינים על המידע שלכם.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/privacy' },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: '/privacy',
    title: 'מדיניות פרטיות | Paul & Greg',
    description: 'מדיניות הפרטיות של Paul & Greg.',
    images: [{ url: '/logo.png' }],
    siteName: 'Paul & Greg',
  },
};

export default function PrivacyPage() {
  return <LegalPageContent config={config} />;
}
