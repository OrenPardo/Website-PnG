// --- Language system ---
const translations = {
  he: {
    // Nav
    'nav-story': 'הסיפור שלנו',
    'nav-weddings': 'חתונות וקבלות פנים',
    'nav-events': 'אירועים פרטיים',
    'nav-corporate': 'אירועי חברה',
    'nav-cta': 'יצירת קשר',
    'lang-btn': 'EN',
    'nav-aria': 'ניווט ראשי',
    // Hero (homepage)
    'hero-cta': 'האירוע שלכם מתחיל כאן',
    // Story
    'story-title': 'הסיפור שלנו',
    'story-p1': 'אנחנו פאול וגרג, שני חברים שהפכו את התשוקה שלהם לקוקטיילים למקצוע מאז 2020. לא התאחדנו כדי להוכיח משהו על עצמנו, אלא אנחנו כאן למען הציבור הרחב.',
    'story-p2': 'העבודה שלנו היא ברורה: לגרום לכם לשמוח ולזכור כל אירוע שיש לכם כאירוע הכי טוב בחיים שלכם. אנחנו רק אמצעי להגשים את המטרה וכדי לתת עוד פריצת שמחה ברגעים היפים שלכם. אומרים שאלכוהול מחבר בין אנשים, וכך גם אנחנו באים לחבר את הקהל שלכם בצורה הכי מדויקת שניתן לעשות זאת.',
    'story-btn': 'למדו עוד',
    // Services (homepage)
    'services-title': 'שירותי הבר שלנו',
    'svc-weddings-btn': 'חתונות וקבלות פנים',
    'svc-events-btn': 'אירועים פרטיים',
    'svc-corporate-btn': 'אירועי חברה',
    // Gallery (homepage)
    'gallery-title': 'מהגלריה שלנו',
    'gallery-cta': 'עקבו אחרינו באינסטגרם',
    // Weddings page
    'wed-hero-title': 'בר קוקטיילים לחתונות',
    'wed-hero-subtitle': 'חווית קוקטיילים יוקרתית שתהפוך את היום המיוחד שלכם לבלתי נשכח',
    'wed-hero-cta': 'קבלו הצעת מחיר',
    'wed-desc-title': 'החתונה שלכם, הקוקטיילים שלנו',
    'wed-desc-p1': 'אנחנו מאמינים שכל חתונה היא סיפור ייחודי, וכך גם הקוקטיילים שלנו. צוות הברמנים המקצועי שלנו יעבוד איתכם כדי ליצור תפריט קוקטיילים מותאם אישית שמשקף את הסגנון והאישיות שלכם.',
    'wed-desc-p2': 'מקוקטיילים קלאסיים ועד יצירות מקוריות, אנחנו מביאים את הניסיון, היצירתיות והמקצועיות שהופכים כל אירוע לחגיגה של טעמים. הבר שלנו הוא לא רק משקאות — הוא חוויה שלמה שהאורחים שלכם ידברו עליה עוד שנים.',
    'wed-feat-title': 'למה לבחור בנו לחתונה שלכם',
    'wed-feat1-title': 'תפריט קוקטיילים מותאם אישית',
    'wed-feat1-desc': 'נבנה יחד תפריט שמשלב את הטעמים האהובים עליכם עם יצירות מקוריות שיפתיעו את האורחים.',
    'wed-feat2-title': 'צוות ברמנים מקצועי',
    'wed-feat2-desc': 'ברמנים מנוסים עם ניסיון בעשרות חתונות, שמביאים אנרגיה ושירות ברמה הגבוהה ביותר.',
    'wed-feat3-title': 'עיצוב בר אלגנטי',
    'wed-feat3-desc': 'עמדת בר מעוצבת שמשתלבת בקונספט של החתונה שלכם ומוסיפה נופך של יוקרה לאירוע.',
    'wed-gallery-title': 'מהחתונות שלנו',
    'wed-testimonial-quote': '\u201Cפול וגרג הפכו את החתונה שלנו לחוויה בלתי נשכחת. הקוקטיילים היו מושלמים והשירות היה יוצא מן הכלל. כל האורחים שלנו עדיין מדברים על זה!\u201D',
    'wed-testimonial-author': '\u2014 שרה ודניאל, חתונה 2025',
    // Events page
    'evt-hero-title': 'אירועים פרטיים',
    'evt-hero-subtitle': 'הפכו כל רגע לחגיגה עם שירות בר קוקטיילים מותאם אישית',
    'evt-hero-cta': 'קבלו הצעת מחיר',
    'evt-desc-title': 'האירוע שלכם, החוויה שלנו',
    'evt-desc-p1': 'בין אם מדובר ביום הולדת מיוחד, מסיבת רווקים, או כל אירוע פרטי אחר — אנחנו מביאים את חווית הבר ישירות אליכם. כל אירוע מקבל יחס אישי ותפריט שנבנה במיוחד עבורכם.',
    'evt-desc-p2': 'הצוות שלנו מתאים את עצמו לכל סגנון ואווירה — ממסיבה אינטימית ועד חגיגה גדולה. עם חומרי גלם פרימיום וקוקטיילים יצירתיים, האורחים שלכם ייהנו מחוויה שאי אפשר לשכוח.',
    'evt-feat-title': 'מה אנחנו מציעים',
    'evt-feat1-title': 'חוויה אישית',
    'evt-feat1-desc': 'כל אירוע מתוכנן עד הפרט האחרון בהתאם לרצונות שלכם, מהתפריט ועד האווירה.',
    'evt-feat2-title': 'חבילות גמישות',
    'evt-feat2-desc': 'מגוון חבילות שמתאימות לכל תקציב וגודל אירוע, עם אפשרות להתאמה מלאה.',
    'evt-feat3-title': 'חומרי גלם פרימיום',
    'evt-feat3-desc': 'משקאות ומרכיבים באיכות הגבוהה ביותר, לקוקטיילים שנראים ונטעמים מדהים.',
    'evt-gallery-title': 'מהאירועים שלנו',
    'evt-testimonial-quote': '\u201Cהזמנו את פול וגרג למסיבת יום ההולדת שלי וזו הייתה ההחלטה הכי טובה! הקוקטיילים היו מדהימים והאווירה הייתה פשוט מושלמת.\u201D',
    'evt-testimonial-author': '\u2014 מיכל כ., מסיבת יום הולדת 30',
    // Corporate page
    'corp-hero-title': 'אירועי חברה',
    'corp-hero-subtitle': 'מיתוג מושלם ואווירה מנצחת לאירוע החברה שלכם',
    'corp-hero-cta': 'קבלו הצעת מחיר',
    'corp-desc-title': 'הרמת כוסית ברמה אחרת',
    'corp-desc-p1': 'אירוע חברה מוצלח הוא הרבה יותר מפגישה עסקית — הוא הזדמנות לחזק קשרים, לחגוג הצלחות וליצור זכרונות משותפים. אנחנו מביאים את חווית הבר היוקרתית שלנו ישירות לאירוע שלכם.',
    'corp-desc-p2': 'מהשקות מוצר ועד ימי גיבוש, כנסים ומסיבות סוף שנה — אנחנו מתאימים את התפריט, העיצוב והשירות למותג ולאופי האירוע שלכם. קוקטיילים ממותגים בצבעי החברה? אפשרי לגמרי.',
    'corp-feat-title': 'למה חברות בוחרות בנו',
    'corp-feat1-title': 'קוקטיילים ממותגים',
    'corp-feat1-desc': 'קוקטיילים בצבעי המותג שלכם, עם אלמנטים עיצוביים שמשקפים את זהות החברה.',
    'corp-feat2-title': 'שירות בקנה מידה גדול',
    'corp-feat2-desc': 'ניסיון באירועים של עשרות ועד מאות משתתפים, עם צוות שמותאם לגודל האירוע.',
    'corp-feat3-title': 'מצגת מקצועית',
    'corp-feat3-desc': 'הופעה מקצועית ומרשימה שמשדרגת את תדמית החברה בעיני העובדים והלקוחות.',
    'corp-gallery-title': 'מאירועי החברה שלנו',
    'corp-testimonial-quote': '\u201Cפול וגרג העניקו לאירוע החברה שלנו נופך מיוחד. הקוקטיילים הממותגים בצבעי החברה היו להיט ענק והצוות היה מקצועי ברמה הגבוהה ביותר.\u201D',
    'corp-testimonial-author': '\u2014 רון מ., מנהל שיווק, אירוע השקה 2025',
    // Contact form
    'contact-title': 'צרו קשר',
    'contact-subtitle': 'השאירו פרטים ונחזור אליכם בהקדם',
    'contact-direct': 'ליצירת קשר ישיר',
    'contact-whatsapp': 'לשיחה בוואטסאפ',
    'contact-follow': 'עקבו אחרינו',
    'contact-name': 'שם מלא',
    'contact-phone': 'טלפון',
    'contact-email': 'אימייל',
    'contact-event-type': 'סוג האירוע',
    'contact-message': 'הודעה',
    'contact-submit': 'שליחת הודעה',
    'contact-success-title': 'ההודעה נשלחה בהצלחה!',
    'contact-success-desc': 'נחזור אליך בהקדם האפשרי',
    'err-name': 'נא למלא שם מלא',
    'err-phone-email': 'נא למלא טלפון או אימייל',
    'err-email-invalid': 'נא להזין כתובת אימייל תקינה',
    'err-message': 'נא לכתוב הודעה של לפחות 10 תווים',
    'opt-wedding': 'חתונה',
    'opt-corporate': 'אירוע חברה',
    'opt-birthday': 'יום הולדת / מסיבה פרטית',
    'opt-other': 'אחר',
    // Placeholders
    'ph-name': 'ישראל ישראלי',
    'ph-phone': '050-0000000',
    'ph-email': 'example@mail.com',
    'ph-message': 'ספרו לנו קצת על האירוע שלכם...',
    // Footer
    'footer-services': 'השירותים שלנו',
    'footer-weddings': 'חתונות וקבלות פנים',
    'footer-events': 'אירועים פרטיים',
    'footer-corporate': 'אירועי חברה',
    'footer-follow': 'עקבו אחרינו',
    'footer-blog': 'הבלוג של פול וגרג',
    'footer-facebook': 'פייסבוק | Paul_and_Greg_cocktail_events',
    'footer-instagram': 'אינסטגרם | PAUL & GREG EVENTS',
    'footer-contact': 'ליצירת קשר',
    'footer-phone-label': 'טלפון:',
    'footer-email-label': 'אימייל:',
    'footer-copyright': 'כל הזכויות שמורות לפול וגרג בע"מ \u00A9 2026',
    // WhatsApp
    'whatsapp-text': 'לתיאום אירוע בוואטסאפ',
    'whatsapp-aria': 'צרו קשר בוואטסאפ',
    // Skip link
    'skip-link': 'דלג לתוכן הראשי',
  },
  en: {
    // Nav
    'nav-story': 'Our Story',
    'nav-weddings': 'Weddings & Receptions',
    'nav-events': 'Private Events',
    'nav-corporate': 'Corporate Events',
    'nav-cta': 'Contact Us',
    'lang-btn': 'HE',
    'nav-aria': 'Main navigation',
    // Hero (homepage)
    'hero-cta': 'Your Event Starts Here',
    // Story
    'story-title': 'Our Story',
    'story-p1': 'We are Paul & Greg, two friends who turned their passion for cocktails into a profession since 2020. We didn\'t come together to prove something about ourselves \u2014 we\'re here for you.',
    'story-p2': 'Our mission is clear: to make you happy and ensure every event feels like the best one of your life. We are simply a means to bring another burst of joy to your most beautiful moments. They say alcohol brings people together, and that\'s exactly what we do \u2014 connect your guests in the most memorable way possible.',
    'story-btn': 'Learn More',
    // Services (homepage)
    'services-title': 'Our Bar Services',
    'svc-weddings-btn': 'Weddings & Receptions',
    'svc-events-btn': 'Private Events',
    'svc-corporate-btn': 'Corporate Events',
    // Gallery (homepage)
    'gallery-title': 'From Our Gallery',
    'gallery-cta': 'Follow Us on Instagram',
    // Weddings page
    'wed-hero-title': 'Wedding Cocktail Bar',
    'wed-hero-subtitle': 'A premium cocktail experience that will make your special day unforgettable',
    'wed-hero-cta': 'Get a Quote',
    'wed-desc-title': 'Your Wedding, Our Cocktails',
    'wed-desc-p1': 'We believe every wedding is a unique story, and so are our cocktails. Our professional bartending team will work with you to create a custom cocktail menu that reflects your style and personality.',
    'wed-desc-p2': 'From classic cocktails to original creations, we bring the experience, creativity, and professionalism that turn every event into a celebration of flavors. Our bar is not just drinks \u2014 it\'s a complete experience your guests will talk about for years.',
    'wed-feat-title': 'Why Choose Us for Your Wedding',
    'wed-feat1-title': 'Custom Cocktail Menu',
    'wed-feat1-desc': 'We\'ll build a menu together that combines your favorite flavors with original creations that will surprise your guests.',
    'wed-feat2-title': 'Professional Bartender Team',
    'wed-feat2-desc': 'Experienced bartenders with dozens of weddings under their belt, bringing energy and top-tier service.',
    'wed-feat3-title': 'Elegant Bar Design',
    'wed-feat3-desc': 'A beautifully designed bar station that complements your wedding concept and adds a touch of luxury.',
    'wed-gallery-title': 'From Our Weddings',
    'wed-testimonial-quote': '\u201CPaul & Greg made our wedding an unforgettable experience. The cocktails were perfect and the service was exceptional. All our guests are still talking about it!\u201D',
    'wed-testimonial-author': '\u2014 Sarah & Daniel, Wedding 2025',
    // Events page
    'evt-hero-title': 'Private Events',
    'evt-hero-subtitle': 'Turn every moment into a celebration with a personalized cocktail bar service',
    'evt-hero-cta': 'Get a Quote',
    'evt-desc-title': 'Your Event, Our Experience',
    'evt-desc-p1': 'Whether it\'s a special birthday, bachelor party, or any other private event \u2014 we bring the bar experience directly to you. Every event receives personal attention and a menu built especially for you.',
    'evt-desc-p2': 'Our team adapts to every style and atmosphere \u2014 from an intimate gathering to a grand celebration. With premium ingredients and creative cocktails, your guests will enjoy an unforgettable experience.',
    'evt-feat-title': 'What We Offer',
    'evt-feat1-title': 'Personal Experience',
    'evt-feat1-desc': 'Every event is planned down to the last detail according to your wishes, from the menu to the atmosphere.',
    'evt-feat2-title': 'Flexible Packages',
    'evt-feat2-desc': 'A variety of packages that fit every budget and event size, with full customization options.',
    'evt-feat3-title': 'Premium Ingredients',
    'evt-feat3-desc': 'The highest quality spirits and ingredients, for cocktails that look and taste amazing.',
    'evt-gallery-title': 'From Our Events',
    'evt-testimonial-quote': '\u201CWe hired Paul & Greg for my birthday party and it was the best decision! The cocktails were amazing and the atmosphere was simply perfect.\u201D',
    'evt-testimonial-author': '\u2014 Michal K., 30th Birthday Party',
    // Corporate page
    'corp-hero-title': 'Corporate Events',
    'corp-hero-subtitle': 'Perfect branding and a winning atmosphere for your corporate event',
    'corp-hero-cta': 'Get a Quote',
    'corp-desc-title': 'A Toast on Another Level',
    'corp-desc-p1': 'A successful corporate event is much more than a business meeting \u2014 it\'s an opportunity to strengthen connections, celebrate achievements, and create shared memories. We bring our premium bar experience directly to your event.',
    'corp-desc-p2': 'From product launches to team building days, conferences, and year-end parties \u2014 we tailor the menu, design, and service to your brand and event character. Brand-colored cocktails? Absolutely possible.',
    'corp-feat-title': 'Why Companies Choose Us',
    'corp-feat1-title': 'Branded Cocktails',
    'corp-feat1-desc': 'Cocktails in your brand colors, with design elements that reflect your company\'s identity.',
    'corp-feat2-title': 'Large-Scale Service',
    'corp-feat2-desc': 'Experience with events from dozens to hundreds of participants, with a team sized to your event.',
    'corp-feat3-title': 'Professional Presentation',
    'corp-feat3-desc': 'A professional and impressive appearance that elevates your company\'s image in the eyes of employees and clients.',
    'corp-gallery-title': 'From Our Corporate Events',
    'corp-testimonial-quote': '\u201CPaul & Greg gave our corporate event a special touch. The brand-colored cocktails were a huge hit and the team was professional at the highest level.\u201D',
    'corp-testimonial-author': '\u2014 Ron M., Marketing Manager, Launch Event 2025',
    // Contact form
    'contact-title': 'Contact Us',
    'contact-subtitle': 'Leave your details and we\'ll get back to you shortly',
    'contact-direct': 'Direct Contact',
    'contact-whatsapp': 'Chat on WhatsApp',
    'contact-follow': 'Follow Us',
    'contact-name': 'Full Name',
    'contact-phone': 'Phone',
    'contact-email': 'Email',
    'contact-event-type': 'Event Type',
    'contact-message': 'Message',
    'contact-submit': 'Send Message',
    'contact-success-title': 'Message sent successfully!',
    'contact-success-desc': 'We\'ll get back to you as soon as possible',
    'err-name': 'Please enter your full name',
    'err-phone-email': 'Please enter a phone number or email',
    'err-email-invalid': 'Please enter a valid email address',
    'err-message': 'Please write a message of at least 10 characters',
    'opt-wedding': 'Wedding',
    'opt-corporate': 'Corporate Event',
    'opt-birthday': 'Birthday / Private Party',
    'opt-other': 'Other',
    // Placeholders
    'ph-name': 'John Doe',
    'ph-phone': '050-0000000',
    'ph-email': 'example@mail.com',
    'ph-message': 'Tell us a bit about your event...',
    // Footer
    'footer-services': 'Our Services',
    'footer-weddings': 'Weddings & Receptions',
    'footer-events': 'Private Events',
    'footer-corporate': 'Corporate Events',
    'footer-follow': 'Follow Us',
    'footer-blog': 'Paul & Greg Blog',
    'footer-facebook': 'Facebook | Paul_and_Greg_cocktail_events',
    'footer-instagram': 'Instagram | PAUL & GREG EVENTS',
    'footer-contact': 'Contact Us',
    'footer-phone-label': 'Phone:',
    'footer-email-label': 'Email:',
    'footer-copyright': 'All rights reserved to Paul & Greg Ltd. \u00A9 2026',
    // WhatsApp
    'whatsapp-text': 'Book an event on WhatsApp',
    'whatsapp-aria': 'Contact us on WhatsApp',
    // Skip link
    'skip-link': 'Skip to main content',
  }
};

// WCAG 4.1.3 — Aria-live region for language change announcements
const langLiveRegion = document.createElement('div');
langLiveRegion.id = 'lang-live-region';
langLiveRegion.setAttribute('aria-live', 'polite');
langLiveRegion.setAttribute('aria-atomic', 'true');
langLiveRegion.style.cssText = 'position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0';
document.body.appendChild(langLiveRegion);

let isInitialLoad = true;

function switchLanguage(lang) {
  const t = translations[lang];
  // Swap text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (t[el.dataset.i18n] !== undefined) {
      el.textContent = t[el.dataset.i18n];
    }
  });
  // Swap placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    if (t[el.dataset.i18nPh] !== undefined) {
      el.placeholder = t[el.dataset.i18nPh];
    }
  });
  // Swap aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    if (t[el.dataset.i18nAria] !== undefined) {
      el.setAttribute('aria-label', t[el.dataset.i18nAria]);
    }
  });
  // Toggle direction & language
  document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  // Save preference
  localStorage.setItem('lang', lang);
  // Announce language change to screen readers (skip initial page load)
  if (!isInitialLoad) {
    langLiveRegion.textContent = '';
    requestAnimationFrame(() => {
      langLiveRegion.textContent = lang === 'he'
        ? 'השפה שונתה לעברית'
        : 'Language changed to English';
    });
  }
}

// Apply saved language on load
const savedLang = localStorage.getItem('lang');
if (savedLang && savedLang !== 'he') {
  switchLanguage(savedLang);
}
isInitialLoad = false;

// Language button click handler
document.getElementById('lang-btn').addEventListener('click', () => {
  const current = document.documentElement.lang || 'he';
  switchLanguage(current === 'he' ? 'en' : 'he');
});

// Sticky header — shows after scrolling past hero section
const header = document.getElementById('sticky-header');
const hero = document.getElementById('hero-section');
let heroHeight = hero.offsetHeight;
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      if (window.scrollY >= heroHeight) {
        header.classList.remove('-translate-y-full');
        header.classList.add('translate-y-0');
      } else {
        header.classList.add('-translate-y-full');
        header.classList.remove('translate-y-0');
      }
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

window.addEventListener('resize', () => {
  heroHeight = hero.offsetHeight;
}, { passive: true });

// Services accordion — expand/collapse on hover (desktop only, homepage only)
const accordion = document.getElementById('services-accordion');
if (accordion) {
  const cardData = Array.from(accordion.querySelectorAll('.service-card')).map(card => ({
    card,
    img: card.querySelector('img'),
  }));

  function setActiveCard(activeIndex) {
    cardData.forEach(({ card, img }, i) => {
      if (i === activeIndex) {
        card.style.flex = '0 0 850px';
        card.classList.add('active');
        card.setAttribute('aria-expanded', 'true');
        img.style.transform = 'scale(1.05)';
      } else {
        card.style.flex = '0 0 150px';
        card.classList.remove('active');
        card.setAttribute('aria-expanded', 'false');
        img.style.transform = 'scale(1)';
      }
    });
  }

  function resetAllCards() {
    cardData.forEach(({ card, img }) => {
      card.style.flex = '0 0 150px';
      card.classList.remove('active');
      card.setAttribute('aria-expanded', 'false');
      img.style.transform = 'scale(1)';
    });
  }

  if (window.innerWidth >= 768) {
    cardData.forEach(({ card }, i) => {
      card.addEventListener('mouseenter', () => setActiveCard(i));
      card.addEventListener('focus', () => setActiveCard(i));
    });
    accordion.addEventListener('mouseleave', () => resetAllCards());
  }
}

// Contact form validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const nameInput = document.getElementById('contact-name');
  const phoneInput = document.getElementById('contact-phone');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const successEl = document.getElementById('contact-success');

  function showError(input, errorEl) {
    input.classList.add('input-error');
    errorEl.classList.remove('hidden');
  }

  function clearError(input, errorEl) {
    input.classList.remove('input-error');
    errorEl.classList.add('hidden');
  }

  // Clear errors on input
  [nameInput, phoneInput, emailInput, messageInput].forEach(input => {
    if (!input) return;
    const errorEl = input.closest('div')?.querySelector('.form-error');
    if (errorEl) {
      input.addEventListener('input', () => clearError(input, errorEl));
    }
  });

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    // Validate name
    const nameError = nameInput.closest('div').querySelector('.form-error');
    if (!nameInput.value.trim()) {
      showError(nameInput, nameError);
      valid = false;
    } else {
      clearError(nameInput, nameError);
    }

    // Validate phone or email (at least one required)
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const phoneError = phoneInput.closest('div').querySelector('.form-error');
    const emailError = emailInput.closest('div').querySelector('.form-error');

    if (!phone && !email) {
      showError(phoneInput, phoneError);
      valid = false;
    } else {
      clearError(phoneInput, phoneError);
    }

    // Validate email format if provided
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(emailInput, emailError);
      valid = false;
    } else {
      clearError(emailInput, emailError);
    }

    // Validate message (at least 10 chars)
    const msgError = messageInput.closest('div').querySelector('.form-error');
    if (messageInput.value.trim().length < 10) {
      showError(messageInput, msgError);
      valid = false;
    } else {
      clearError(messageInput, msgError);
    }

    if (!valid) return;

    // Success — hide form, show success message
    contactForm.classList.add('hidden');
    successEl.classList.remove('hidden');
  });
}
