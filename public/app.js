// --- Language system ---
const translations = {
  he: {
    // Nav
    'nav-story': 'הסיפור שלנו',
    'nav-weddings': 'בר קוקטיילים לחתונות',
    'nav-events': 'אירועים פרטיים',
    'nav-corporate': 'אירועי חברה',
    'nav-cta': 'יצירת קשר',
    'lang-btn': 'EN',
    'nav-aria': 'ניווט ראשי',
    // Hero
    'hero-cta': 'האירוע שלכם מתחיל כאן',
    // Story
    'story-title': 'הסיפור שלנו',
    'story-p1': 'אנחנו פאול וגרג, שני חברים שהפכו את התשוקה שלהם לקוקטיילים למקצוע מאז 2020. לא התאחדנו כדי להוכיח משהו על עצמנו, אלא אנחנו כאן למען הציבור הרחב.',
    'story-p2': 'העבודה שלנו היא ברורה: לגרום לכם לשמוח ולזכור כל אירוע שיש לכם כאירוע הכי טוב בחיים שלכם. אנחנו רק אמצעי להגשים את המטרה וכדי לתת עוד פריצת שמחה ברגעים היפים שלכם. אומרים שאלכוהול מחבר בין אנשים, וכך גם אנחנו באים לחבר את הקהל שלכם בצורה הכי מדויקת שניתן לעשות זאת.',
    'story-btn': 'למדו עוד',
    // Services
    'services-title': 'שירותי הבר שלנו',
    'svc-weddings-btn': 'בר קוקטיילים לחתונות',
    'svc-weddings-desc': 'חווית קוקטיילים יוקרתית המותאמת אישית לכל סוג של אירוע, עם דגש על איכות ושירות ללא פשרות.',
    'svc-events-btn': 'אירועים פרטיים',
    'svc-events-desc': 'הופכים את היום המיוחד שלכם לחגיגה של טעמים וסטייל עם תפריט קוקטיילים מעוצב ומרגש.',
    'svc-corporate-btn': 'אירועי חברה',
    'svc-corporate-desc': 'מיתוג מושלם ואווירה מנצחת לאירוע החברה שלכם, עם קוקטיילים יצירתיים שכולם ידברו עליהם.',
    // Contact form
    'contact-title': 'צרו קשר',
    'contact-subtitle': 'השאירו פרטים ונחזור אליכם בהקדם עם הצעה מנצחת לאירוע שלכם',
    'contact-name': 'שם מלא',
    'contact-phone': 'טלפון',
    'contact-email': 'אימייל',
    'contact-event-type': 'סוג האירוע',
    'contact-message': 'הודעה',
    'contact-submit': 'שליחת הודעה',
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
    'footer-weddings': 'בר קוקטיילים לחתונות',
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
    'whatsapp-text': 'לדבר איתנו בוואטסאפ',
    'whatsapp-aria': 'צרו קשר בוואטסאפ',
  },
  en: {
    // Nav
    'nav-story': 'Our Story',
    'nav-weddings': 'Wedding Cocktail Bar',
    'nav-events': 'Private Events',
    'nav-corporate': 'Corporate Events',
    'nav-cta': 'Contact Us',
    'lang-btn': 'HE',
    'nav-aria': 'Main navigation',
    // Hero
    'hero-cta': 'Your Event Starts Here',
    // Story
    'story-title': 'Our Story',
    'story-p1': 'We are Paul & Greg, two friends who turned their passion for cocktails into a profession since 2020. We didn\'t come together to prove something about ourselves — we\'re here for you.',
    'story-p2': 'Our mission is clear: to make you happy and ensure every event feels like the best one of your life. We are simply a means to bring another burst of joy to your most beautiful moments. They say alcohol brings people together, and that\'s exactly what we do — connect your guests in the most memorable way possible.',
    'story-btn': 'Learn More',
    // Services
    'services-title': 'Our Bar Services',
    'svc-weddings-btn': 'Wedding Cocktail Bar',
    'svc-weddings-desc': 'A premium cocktail experience personally tailored for every type of event, with an emphasis on quality and uncompromising service.',
    'svc-events-btn': 'Private Events',
    'svc-events-desc': 'Turning your special day into a celebration of flavors and style with a beautifully crafted cocktail menu.',
    'svc-corporate-btn': 'Corporate Events',
    'svc-corporate-desc': 'Perfect branding and a winning atmosphere for your corporate event, with creative cocktails everyone will talk about.',
    // Contact form
    'contact-title': 'Contact Us',
    'contact-subtitle': 'Leave your details and we\'ll get back to you shortly with a winning offer for your event',
    'contact-name': 'Full Name',
    'contact-phone': 'Phone',
    'contact-email': 'Email',
    'contact-event-type': 'Event Type',
    'contact-message': 'Message',
    'contact-submit': 'Send Message',
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
    'footer-weddings': 'Wedding Cocktail Bar',
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
    'whatsapp-text': 'Chat with us on WhatsApp',
    'whatsapp-aria': 'Contact us on WhatsApp',
  }
};

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
}

// Apply saved language on load
const savedLang = localStorage.getItem('lang');
if (savedLang && savedLang !== 'he') {
  switchLanguage(savedLang);
}

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

// Services accordion — expand/collapse on hover (desktop only)
const accordion = document.getElementById('services-accordion');
const cardData = Array.from(accordion.querySelectorAll('.service-card')).map(card => ({
  card,
  overlay: card.querySelector('.card-overlay'),
  img: card.querySelector('img'),
}));

function setActiveCard(activeIndex) {
  cardData.forEach(({ card, overlay, img }, i) => {
    if (i === activeIndex) {
      card.style.flex = '0 0 850px';
      card.classList.add('active');
      overlay.style.opacity = '1';
      img.style.transform = 'scale(1.05)';
    } else {
      card.style.flex = '0 0 150px';
      card.classList.remove('active');
      overlay.style.opacity = '0';
      img.style.transform = 'scale(1)';
    }
  });
}

if (window.innerWidth >= 768) {
  cardData.forEach(({ card }, i) => {
    card.addEventListener('mouseenter', () => setActiveCard(i));
  });
  accordion.addEventListener('mouseleave', () => setActiveCard(1));
}
