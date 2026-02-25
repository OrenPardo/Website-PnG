import SkipLink from '@/components/layout/SkipLink';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import HeroHome from '@/components/home/HeroHome';
import StorySection from '@/components/home/StorySection';
import ServicesAccordion from '@/components/home/ServicesAccordion';
import GallerySection from '@/components/home/GallerySection';
import ContactSection from '@/components/shared/ContactSection';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Paul & Greg",
  "description": "שירותי בר קוקטלים לאירועים, חתונות ואירועי חברה",
  "url": "https://www.paulandgreg.com",
  "logo": "https://www.paulandgreg.com/logo.png",
  "image": "https://www.paulandgreg.com/logo.png",
  "telephone": "+972-58-401-2204",
  "email": "sales@paulandgreg.com",
  "priceRange": "$$",
  "areaServed": { "@type": "Country", "name": "Israel" },
  "inLanguage": "he",
  "knowsLanguage": ["he", "en"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "שירותי בר",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "בר קוקטלים לאירועים" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "בר קוקטלים לחתונות" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "בר קוקטלים לאירועי חברה" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "סדנת קוקטיילים" } },
    ],
  },
};

export const metadata = {
  title: 'Paul & Greg - World Wide Bar & Cocktails Services',
  description: 'פאול וגרג - שירותי בר קוקטלים לאירועים, חתונות ואירועי חברה. צרו קשר לקבלת הצעה מותאמת אישית.',
  robots: 'index, follow',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: '/',
    title: 'Paul & Greg - World Wide Bar & Cocktails Services',
    description: 'פאול וגרג - שירותי בר קוקטלים לאירועים, חתונות ואירועי חברה. צרו קשר לקבלת הצעה מותאמת אישית.',
    images: [{ url: '/logo.png', width: 1250, height: 1250, alt: 'Paul & Greg logo' }],
    siteName: 'Paul & Greg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paul & Greg - World Wide Bar & Cocktails Services',
    description: 'פאול וגרג - שירותי בר קוקטלים לאירועים, חתונות ואירועי חברה.',
    images: ['/logo.png'],
  },
  other: { 'theme-color': '#5A6337' },
};

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Header variant="homepage" />
      <main id="main" className="flex-grow">
        <HeroHome />
        <StorySection />
        <ServicesAccordion />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
