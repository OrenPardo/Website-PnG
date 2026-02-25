import LegalPageContent from '@/components/legal/LegalPageContent';

const config = {
  heroTitle: 'terms-hero-title',
  heroSubtitle: 'terms-hero-subtitle',
  updatedKey: 'terms-updated',
  introKey: 'terms-intro',
  sections: [
    { titleKey: 'terms-service-title', textKey: 'terms-service-text' },
    { titleKey: 'terms-eligibility-title', textKey: 'terms-eligibility-text' },
    { titleKey: 'terms-use-title', textKey: 'terms-use-text' },
    { titleKey: 'terms-ip-title', textKey: 'terms-ip-text' },
    { titleKey: 'terms-liability-title', textKey: 'terms-liability-text' },
    { titleKey: 'terms-indemnification-title', textKey: 'terms-indemnification-text' },
    { titleKey: 'terms-links-title', textKey: 'terms-links-text' },
    { titleKey: 'terms-availability-title', textKey: 'terms-availability-text' },
    { titleKey: 'terms-law-title', textKey: 'terms-law-text' },
    { titleKey: 'terms-severability-title', textKey: 'terms-severability-text' },
    { titleKey: 'terms-changes-title', textKey: 'terms-changes-text' },
    { titleKey: 'terms-entire-title', textKey: 'terms-entire-text' },
    { titleKey: 'terms-contact-title', textKey: 'terms-contact-text' },
  ],
};

export const metadata = {
  title: 'תנאי שימוש | Paul & Greg',
  description: 'תנאי השימוש של אתר Paul & Greg — התנאים וההתחייבויות לשימוש באתר.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/terms' },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: '/terms',
    title: 'תנאי שימוש | Paul & Greg',
    description: 'תנאי השימוש של אתר Paul & Greg.',
    images: [{ url: '/logo.png' }],
    siteName: 'Paul & Greg',
  },
};

export default function TermsPage() {
  return <LegalPageContent config={config} />;
}
