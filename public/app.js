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
    'wed-hero-title': 'חתונות וקבלות פנים',
    'wed-hero-subtitle': 'חווית קוקטיילים יוקרתית שתהפוך את היום המיוחד שלכם לבלתי נשכח',
    'wed-hero-cta': 'קבלו הצעת מחיר',
    'wed-desc-title': 'החתונה שלכם, הקוקטיילים שלנו',
    'wed-desc-p1': 'עמלתם קשה, חשבתם על כל פרט קטן. בחרתם את המקום המדויק, הדיג\'יי הכי זורם וברור שהאוכל יהיה בסטנדרט הכי גבוה שיש. אבל בסוף, האווירה של הערב נמדדת ביכולת של האורח להשתחרר כבר מהרגע הראשון.',
    'wed-desc-p2': 'אין דבר שממסגר את הסטייל של האירוע ומכניס קצב כמו בר קוקטיילים בקבלת פנים. זה הטאץ\' שמשלים את הלוק שדמיינתם \u2013 בר קוקטיילים נייד ומעוצב שמגיש דרינק אלגנטי ומדויק לכל אורח, כזה שגורם להם להבין שהם הגיעו למקום הנכון עוד לפני שהתחילה המוזיקה.',
    'wed-desc-p3': 'הנוכחות של בר קוקטיילים בחתונה היא לא רק עניין של עיצוב, היא המנוע של הרחבה. כחלק משירותי בר לאירועים ברמה הגבוהה ביותר, אנחנו דואגים שהאלכוהול יהיה איכותי וההגשה מוקפדת, כך שהדרך לאקסטרה צ\'ייסר קצרה יותר. אנחנו כאן כדי לדאוג שהאורחים שלכם יגיעו לרחבה בשיא שלהם, עם תפריט קוקטיילים לחתונה שנבנה במיוחד כדי להרים את האנרגיה שחיכיתם לה.',
    'wed-feat-title': 'למה לבחור בנו לחתונה שלכם',
    'wed-feat1-title': 'תפריט קוקטיילים מותאם אישית',
    'wed-feat1-desc': 'נבנה יחד תפריט שמשלב את הטעמים האהובים עליכם עם יצירות מקוריות שיפתיעו את האורחים.',
    'wed-feat2-title': 'צוות ברמנים מקצועי',
    'wed-feat2-desc': 'ברמנים מנוסים עם ניסיון בעשרות חתונות, שמביאים אנרגיה ושירות ברמה הגבוהה ביותר.',
    'wed-feat3-title': 'עיצוב בר אלגנטי',
    'wed-feat3-desc': 'עמדת בר מעוצבת שמשתלבת בקונספט של החתונה שלכם ומוסיפה נופך של יוקרה לאירוע.',
    'wed-gallery-title': 'מהחתונות שלנו',
    'wed-testimonial-quote': '\u201Cפאול וגרג הפכו את החתונה שלנו לחוויה בלתי נשכחת. הקוקטיילים היו מושלמים והשירות היה יוצא מן הכלל. כל האורחים שלנו עדיין מדברים על זה!\u201D',
    'wed-testimonial-author': '\u2014 שרה ודניאל, חתונה 2025',
    // Events page
    'evt-hero-title': 'אירועים פרטיים',
    'evt-hero-subtitle': 'הפכו כל רגע לחגיגה עם שירות בר קוקטיילים מותאם אישית',
    'evt-hero-cta': 'קבלו הצעת מחיר',
    'evt-desc-title': 'האירוע שלכם, החוויה שלנו',
    'evt-desc-p1': 'לפעמים הסיבה הכי טובה למסיבה היא פשוט כי בא לכם. זה יכול להיות יום הולדת עגול ומושקע, מסיבת רווקות שחיכיתן לה הרבה זמן, או פשוט ערב שהחלטתם לאסוף בו את כל האנשים שאתם אוהבים וצריך תירוץ להרים. כשמדובר באירוע פרטי, אתם רוצים לארח באמת – להיות חלק מהערב, ולא אלו שמתעסקים בלמלא קרח ולמזוג משקאות.',
    'evt-desc-p2': 'שילוב של בר קוקטיילים לאירועים פרטיים לוקח את החגיגה שלכם צעד אחד קדימה. אנחנו מגיעים לכל לוקיישן עם בר קוקטיילים נייד שמותאם בול לקנה המידה של האירוע, ומביאים איתנו חווית אלכוהול לאירועים שהופכת גם סלון או חצר אחורית לבר הכי נחשק בעיר.',
    'evt-desc-p3': 'אנחנו יודעים להתאים את הקצב לקהל שלכם. תפריט קוקטיילים למסיבת רווקות יביא איתו אנרגיה קלילה וצבעונית, בעוד שאירוע יום הולדת יזכה לתפריט שמשלב קלאסיקות אלגנטיות עם טוויסט מודרני. אנחנו כאן כדי לדייק את הדרינק לאווירה שאתם רוצים לייצר. כי בסוף, כשהחברים הכי טובים אצלכם בידיים עם קוקטייל מדויק וכל מה שנשאר לכם זה רק ללחוץ "פליי" על הפלייליסט \u2013 אתם יודעים שזה האירוע שכולם יזכרו (או לפחות ינסו לזכור בבוקר שאחרי).',
    'evt-feat-title': 'מה אנחנו מציעים',
    'evt-feat1-title': 'חוויה אישית',
    'evt-feat1-desc': 'כל אירוע מתוכנן עד הפרט האחרון בהתאם לרצונות שלכם, מהתפריט ועד האווירה.',
    'evt-feat2-title': 'חבילות גמישות',
    'evt-feat2-desc': 'מגוון חבילות שמתאימות לכל תקציב וגודל אירוע, עם אפשרות להתאמה מלאה.',
    'evt-feat3-title': 'חומרי גלם פרימיום',
    'evt-feat3-desc': 'משקאות ומרכיבים באיכות הגבוהה ביותר, לקוקטיילים שנראים ונטעמים מדהים.',
    'evt-gallery-title': 'מהאירועים שלנו',
    'evt-testimonial-quote': '\u201Cהזמנו את פאול וגרג למסיבת יום ההולדת שלי וזו הייתה ההחלטה הכי טובה! הקוקטיילים היו מדהימים והאווירה הייתה פשוט מושלמת.\u201D',
    'evt-testimonial-author': '\u2014 מיכל כ., מסיבת יום הולדת 30',
    // Corporate page
    'corp-hero-title': 'אירועי חברה',
    'corp-hero-subtitle': 'מיתוג מושלם ואווירה מנצחת לאירוע החברה שלכם',
    'corp-hero-cta': 'קבלו הצעת מחיר',
    'corp-desc-title': 'הרמת כוסית ברמה אחרת',
    'corp-desc-p1': 'בין אם זה אירוע הרמת כוסית, השקה חגיגית או מסיבת חברה שחיכיתם לה כל השנה \u2013 אתם כבר יודעים שהפרטים הקטנים הם אלו שבונים את גאוות היחידה. המטרה היא לייצר רגע שבו העובדים והקולגות עוזבים את המסכים, מחליפים אווירה ומרגישים שהשקיעו בהם באמת.',
    'corp-desc-p2': 'שילוב של בר קוקטיילים לאירועי חברה הוא הדרך המדויקת להפוך חלל משרדי או לוקיישן חיצוני לאירוע פרימיום. זה מתחיל בבר קוקטיילים נייד שמעוצב בקפידה ומשתלב בנראות של המותג שלכם, וממשיך בשירותי בר לעסקים שמבינים את הקצב הנכון: אלגנטיות מאופקת במינגלינג של ההתחלה, ותפריט קצבי כשמגיע הזמן לשחרר לחצים.',
    'corp-desc-p3': 'אנחנו לא מציעים רק שתייה, אלא חווית אלכוהול לאירועים שמורידה מכם את כל הדאגות הלוגיסטיות. עם תפריט קוקטיילים לעסקים שמותאם לאופי החברה, אנחנו דואגים שכל כוס תהיה התחלה של שיחה. כי בסוף, את יודעת שברגע שראית את חדווה מהנהלת חשבונות חוגגת על הרחבה עם קוקטייל ביד \u2013 האירוע שלך רשמית יצא מוצלח.',
    'corp-feat-title': 'למה חברות בוחרות בנו',
    'corp-feat1-title': 'קוקטיילים ממותגים',
    'corp-feat1-desc': 'קוקטיילים בצבעי המותג שלכם, עם אלמנטים עיצוביים שמשקפים את זהות החברה.',
    'corp-feat2-title': 'שירות בקנה מידה גדול',
    'corp-feat2-desc': 'ניסיון באירועים של עשרות ועד מאות משתתפים, עם צוות שמותאם לגודל האירוע.',
    'corp-feat3-title': 'מצגת מקצועית',
    'corp-feat3-desc': 'הופעה מקצועית ומרשימה שמשדרגת את תדמית החברה בעיני העובדים והלקוחות.',
    'corp-gallery-title': 'מאירועי החברה שלנו',
    'corp-testimonial-quote': '\u201Cפאול וגרג העניקו לאירוע החברה שלנו נופך מיוחד. הקוקטיילים הממותגים בצבעי החברה היו להיט ענק והצוות היה מקצועי ברמה הגבוהה ביותר.\u201D',
    'corp-testimonial-author': '\u2014 רון מ., מנהל שיווק, אירוע השקה 2025',
    // Drinks page
    'nav-drinks': 'הדרינקים',
    'footer-drinks': 'הדרינקים',
    'drinks-hero-title': 'הקולקציה',
    'drinks-hero-subtitle': 'המשקאות שאנחנו הכי אוהבים להכין, וכאלו שפשוט חייבים להכיר',
    'drinks-our-title': 'המשקאות שלנו',
    'drinks-our-subtitle': 'הקוקטיילים שפיתחנו במיוחד עבורכם',
    'drinks-classics-title': 'הקלאסיקות',
    'drinks-classics-subtitle': 'הקוקטיילים שכולם מכירים ואוהבים',
    'drinks-filter-all': 'הכל',
    'drinks-filter-classics': 'קלאסיקות',
    'drinks-filter-tropical': 'טרופיים',
    'drinks-filter-modern': 'מודרניים',
    'drinks-filter-specials': 'ספיישלס',
    'drink-1-name': 'אולד פאשנד',
    'drink-1-ing': 'בורבון · סוכר · ביטרס · קליפת תפוז',
    'drink-1-desc': 'הקוקטייל שהתחיל את הכל. אלגנטי, חזק, ובלי שטויות — בדיוק כמו שצריך.',
    'drink-2-name': 'נגרוני',
    'drink-2-ing': "ג'ין · קמפרי · ורמוט מתוק",
    'drink-2-desc': 'מר, מתוק, ומורכב — הקוקטייל האיטלקי שכבש את העולם.',
    'drink-3-name': 'מרטיני',
    'drink-3-ing': "ג'ין · ורמוט יבש · זית / לימון",
    'drink-3-desc': "מזוקק, מינימליסטי ואלגנטי. ג'יימס בונד ידע מה הוא עושה.",
    'drink-4-name': 'מנהטן',
    'drink-4-ing': 'ויסקי · ורמוט מתוק · ביטרס · דובדבן',
    'drink-4-desc': 'הקלאסיקה הניו-יורקית. חלק, עשיר, ועם אופי שלא מפספסים.',
    'drink-5-name': 'וויסקי סאוור',
    'drink-5-ing': 'בורבון · לימון · סוכר · חלבון ביצה',
    'drink-5-desc': 'חמצמץ, קרמי ומפנק — השילוב שגורם לך להזמין עוד אחד.',
    'drink-6-name': 'מוחיטו',
    'drink-6-ing': 'רום לבן · נענע · ליים · סוכר · סודה',
    'drink-6-desc': 'רענן, קל ומזמין — הדרינק שתמיד מתאים, בכל מזג אוויר ובכל מצב רוח.',
    'drink-7-name': 'פינה קולדה',
    'drink-7-ing': 'רום · קוקוס · אננס',
    'drink-7-desc': 'חופשה בכוס. קרמי, טרופי, ועם טעם של שקיעה על החוף.',
    'drink-8-name': 'דייקירי',
    'drink-8-ing': 'רום לבן · ליים · סוכר · תות',
    'drink-8-desc': 'פשוט, נקי ומדויק — שלושה מרכיבים שיוצרים קסם.',
    'drink-9-name': 'מרגריטה',
    'drink-9-ing': 'טקילה · ליים · טריפל סק · מלח',
    'drink-9-desc': 'חמצמצה, מלוחה ומרעננת — המלכה הבלתי מעורערת של כל מסיבה.',
    'drink-10-name': 'אספרסו מרטיני',
    'drink-10-ing': 'וודקה · ליקר קפה · אספרסו · סוכר',
    'drink-10-desc': 'הדרינק שמעיר אותך ומשכר בו-זמנית. הכוכב של כל אירוע ערב.',
    'drink-11-name': 'אפרול שפריץ',
    'drink-11-ing': 'אפרול · פרוסקו · סודה · תפוז',
    'drink-11-desc': 'שמש באיטליה בכל לגימה. קל, מבעבע, ומושלם לכל שעה.',
    'drink-12-name': 'מוסקו מיול',
    'drink-12-ing': "וודקה · בירת ג'ינג'ר · ליים",
    'drink-12-desc': "הג'ינג'ר נותן בעיטה, הליים מאזן, והכוס הנחושת עושה את השאר.",
    'drink-13-name': 'קוסמופוליטן',
    'drink-13-ing': 'וודקה · טריפל סק · חמוציות · ליים',
    'drink-13-desc': 'ורוד, שיקי ועם אטיטיוד — הדרינק שהפך לאייקון תרבותי.',
    'drink-14-name': 'למון דרופ',
    'drink-14-ing': 'וודקה · לימון · סוכר · טריפל סק',
    'drink-14-desc': 'חד, מתוק-חמצמץ ובהיר — כמו קרן שמש בכוס מרטיני.',
    'drink-15-name': 'B-52',
    'drink-15-ing': "קהלואה · ביילי'ס · גרנד מרנייה",
    'drink-15-desc': 'שלוש שכבות מושלמות שנמזגות בדיוק — שוט שהוא יצירת אמנות.',
    'drink-16-name': 'דה אמרלד',
    'drink-16-ing': "ג'ין · בזיליקום · ליים · סירופ סוכר · חלבון ביצה",
    'drink-16-desc': 'ירוק, רענן ואלגנטי — עם קצף משי ועלי בזיליקום שמעלים את החוויה.',
    'drink-17-name': 'דה אוניקס',
    'drink-17-ing': 'וודקה · אספרסו · ליקר קפה · סוכר · מלח',
    'drink-17-desc': 'כהה, עמוק ומסתורי — אספרסו מרטיני עם טוויסט שמשאיר חותם.',
    'drinks-fact-1': '\u201Cהקוקטייל הראשון בהיסטוריה הוזכר בעיתון אמריקאי בשנת 1806 — והוא היה בעצם סוג של אולד פאשנד.\u201D',
    'drinks-fact-2': '\u201Cהמילה \u2018Toast\u2019 (הרמת כוסית) מגיעה מהמנהג הרומאי העתיק לטבול לחם קלוי ביין כדי לרכך את החומציות.\u201D',
    'drinks-cta-title': 'רוצים את הקוקטיילים האלה באירוע שלכם?',
    'drinks-cta-text': 'אנחנו מתאימים תפריט קוקטיילים מושלם לכל סוג אירוע. דברו איתנו ונבנה יחד חוויה בלתי נשכחת.',
    'drinks-cta-btn': 'בואו נדבר על האירוע שלכם',
    // Old Fashioned detail page
    'of-back-link': '→ חזרה לקולקציה',
    'of-profile-desc': 'הקוקטייל שהתחיל את הכל. לפני שהיו שמות מפוצצים, טכניקות מסובכות וגרניצ\'ים שעולים יותר מהמשקה — היה פשוט דרינק טוב. בורבון, קוביית סוכר, כמה טיפות ביטרס וקליפת תפוז שנסחטת מעל הכוס. זה הכל. וזה מושלם.',
    'of-profile-ingredients': 'המרכיבים',
    'of-profile-glass': 'כוס',
    'of-profile-strength': 'חוזק',
    'of-story-title': 'הסיפור',
    'of-story-p1': 'המילה "קוקטייל" הופיעה לראשונה בעיתון אמריקאי בשנת 1806, ומה שהיא תיארה היה בעצם מה שאנחנו מכירים היום כאולד פאשנד — ספיריט, סוכר, מים וביטרס. במשך עשרות שנים, זה היה פשוט "הקוקטייל". לא היה צורך בשם.',
    'of-story-p2': 'אבל כשעולם המשקאות התפתח והברמנים התחילו להוסיף ליקרים, מיצים ועוד רכיבים, מי שרצה את הדרינק המקורי — הפשוט, החזק, האמיתי — התחיל לבקש אותו "בסגנון הישן". ככה נולד השם Old Fashioned. לא בזכות חדשנות, אלא דווקא בזכות נאמנות למקור. וזה בדיוק מה שהופך אותו לנצחי.',
    'of-recipe-title': 'איך אנחנו מכינים את זה',
    'of-step-1-title': 'ביטרס וסוכר',
    'of-step-1': 'מניחים קוביית סוכר בתחתית כוס רוקס, מוסיפים 2-3 טיפות אנגוסטורה ביטרס ומועכים בעדינות עד שהסוכר מתמוסס.',
    'of-step-2-title': 'בורבון',
    'of-step-2': 'מוזגים 60 מ״ל בורבון איכותי ומערבבים בעדינות כדי לשלב את כל המרכיבים.',
    'of-step-3-title': 'קרח',
    'of-step-3': 'מוסיפים קוביית קרח אחת גדולה — היא נמסה לאט ושומרת על הדרינק קר בלי לדלל אותו.',
    'of-step-4-title': 'גרניצ׳',
    'of-step-4': 'סוחטים קליפת תפוז מעל הכוס כדי לשחרר את השמנים האתריים, משפשפים אותה על השפה ומניחים פנימה.',
    'of-var-title': 'וריאציות',
    'of-var-1-title': 'הקלאסי',
    'of-var-1-desc': 'הגרסה המקורית עם בורבון — טהורה, פשוטה ובלתי מתפשרת. השילוב שעומד במבחן הזמן כבר למעלה ממאתיים שנה.',
    'of-var-2-title': 'ברנדי אולד פאשנד',
    'of-var-2-desc': 'סטייל ויסקונסין — עם ברנדי במקום בורבון, נגיעת סודה וגרניצ׳ של דובדבן ותפוז. עגול, חם ומפנק.',
    'of-var-3-title': 'אואחקה אולד פאשנד',
    'of-var-3-desc': 'טוויסט מקסיקני — מזכל מעושן במקום בורבון, עם אגבה ביטרס וקליפת גרייפפרוט. מודרני, נועז ומעשן.',
    'of-tips-title': 'טיפים מהברמן',
    'of-tip-1-title': 'הקרח משנה הכל',
    'of-tip-1': 'תמיד השתמשו בקוביית קרח אחת גדולה. היא נמסה לאט יותר, שומרת על הטמפרטורה ולא מדללת את הדרינק.',
    'of-tip-2-title': 'אל תמהרו עם הקליפה',
    'of-tip-2': 'סחיטת קליפת התפוז מעל הדרינק — לא בתוכו — משחררת את השמנים בצורה עדינה ומוסיפה ארומה בלי מרירות.',
    'of-tip-3-title': 'בורבון טוב = דרינק טוב',
    'of-tip-3': 'באולד פאשנד, הוויסקי הוא הכוכב. אל תחסכו באיכות — בחרו בורבון עם אופי שאתם אוהבים לשתות גם ישר מהכוס.',
    'of-cta-title': 'רוצים אולד פאשנד באירוע שלכם?',
    'of-cta-text': 'הברמנים שלנו מכינים אולד פאשנד ברמה אחרת — מותאם לסטייל האירוע, עם חומרי גלם מהשורה הראשונה. דברו איתנו.',
    'of-cta-btn': 'בואו נדבר על האירוע שלכם',
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
    'footer-services': 'עלינו',
    'footer-weddings': 'חתונות וקבלות פנים',
    'footer-events': 'אירועים פרטיים',
    'footer-corporate': 'אירועי חברה',
    'footer-useful': 'עמודים שימושיים',
    'footer-follow': 'רשתות חברתיות',
    'footer-blog': 'הבלוג של פאול וגרג',
    'footer-facebook': 'פייסבוק | Paul_and_Greg_cocktail_events',
    'footer-instagram': 'אינסטגרם | PAUL & GREG EVENTS',
    'footer-contact': 'יצירת קשר והזמנת אירועים',
    'footer-phone-label': 'טלפון:',
    'footer-email-label': 'אימייל:',
    'footer-privacy': 'מדיניות פרטיות',
    'footer-terms': 'תנאי שימוש',
    'footer-accessibility': 'הצהרת נגישות',
    'footer-copyright': 'כל הזכויות שמורות לפאול וגרג 2026',
    // Privacy Policy page
    'privacy-hero-title': 'מדיניות פרטיות',
    'privacy-hero-subtitle': 'כיצד אנחנו שומרים על המידע שלכם',
    'privacy-updated': 'עדכון אחרון: פברואר 2026',
    'privacy-intro': 'Paul & Greg ("אנחנו", "החברה") מכבדים את פרטיות המבקרים באתר www.paulandgreg.com ("האתר"). מדיניות פרטיות זו מפרטת כיצד אנו אוספים, משתמשים ומגינים על המידע שלכם, בהתאם לחוק הגנת הפרטיות, התשמ"א-1981 ותיקון מס\' 13 שנכנס לתוקף באוגוסט 2025.',
    'privacy-controller-title': 'זהות בעל מאגר המידע',
    'privacy-controller-text': 'בעל מאגר המידע ואחראי על עיבוד המידע האישי הוא Paul & Greg. ניתן ליצור קשר עמנו באימייל: sales@paulandgreg.com או בטלפון: 058-401-2204.',
    'privacy-collect-title': 'מידע שאנו אוספים',
    'privacy-collect-text': 'אנו אוספים מידע שאתם מוסרים לנו מרצונכם באמצעות טופס יצירת הקשר באתר. המידע הנאסף כולל: שם מלא, מספר טלפון, כתובת אימייל, סוג האירוע המבוקש (חתונה, אירוע חברה, יום הולדת/מסיבה פרטית, אחר), והודעה חופשית עם פרטים נוספים שתבחרו לשתף. מסירת המידע הינה וולונטרית לחלוטין ואינה מחויבת על פי חוק. עם זאת, ללא מסירת שם ופרטי התקשרות (טלפון או אימייל) לא נוכל לחזור אליכם עם הצעת מחיר.',
    'privacy-basis-title': 'הבסיס החוקי לעיבוד המידע',
    'privacy-basis-text': 'עיבוד המידע האישי שלכם מתבצע על בסיס הסכמה מדעת שאתם מעניקים בעת שליחת טופס יצירת הקשר. הסכמה זו ניתנת באופן חופשי, מודע וספציפי למטרות המפורטות במדיניות זו. באפשרותכם לחזור בכם מהסכמתכם בכל עת על ידי פנייה אלינו בפרטי הקשר המופיעים בתחתית עמוד זה.',
    'privacy-use-title': 'כיצד אנו משתמשים במידע',
    'privacy-use-text': 'המידע שנאסף משמש אותנו אך ורק למטרות הבאות: יצירת קשר חוזרת אליכם בנוגע לפנייתכם, מתן הצעת מחיר מותאמת אישית לאירוע שלכם, תיאום פרטי השירות במידה והתקשרנו בהסכם, ושיפור השירות שלנו. איננו משתמשים במידע למטרות שיווק ישיר, דיוור אלקטרוני או פרסום, אלא אם נקבל את הסכמתכם המפורשת לכך בנפרד.',
    'privacy-share-title': 'שיתוף מידע עם צדדים שלישיים',
    'privacy-share-text': 'אנו לא מוכרים, משכירים או משתפים את המידע האישי שלכם עם צדדים שלישיים למטרות שיווקיות. המידע עשוי להיות מועבר לספק שירותי אחסון האתר לצורך תפעול טכני בלבד. במקרה שנידרש למסור מידע על פי צו שיפוטי או דרישה חוקית מרשות מוסמכת, נפעל בהתאם לדין.',
    'privacy-transfers-title': 'העברת מידע אל מחוץ לישראל',
    'privacy-transfers-text': 'שרתי האתר עשויים להיות מאוחסנים מחוץ לישראל. במקרה כזה, אנו מוודאים שהמידע מועבר אך ורק למדינות שבהן רמת ההגנה על מידע אישי הולמת, בהתאם לדרישות חוק הגנת הפרטיות.',
    'privacy-retention-title': 'תקופת שמירת המידע',
    'privacy-retention-text': 'אנו שומרים את המידע האישי שלכם למשך הזמן הנדרש לצורך מילוי המטרות שלשמן נאסף, ולא יותר מ-24 חודשים ממועד הפנייה, אלא אם כן נדרשת שמירה ארוכה יותר לצורך עמידה בדרישות חוקיות או לטיפול בתביעות. אנו מבצעים סקירה תקופתית של המידע המאוחסן ומוחקים מידע שאינו נדרש עוד.',
    'privacy-cookies-title': 'עוגיות וטכנולוגיות מעקב',
    'privacy-cookies-text': 'האתר אינו משתמש בעוגיות (cookies) למעקב, פרסום או איסוף מידע אישי. האתר אינו מפעיל כלי אנליטיקה של צדדים שלישיים ואינו מטמיע פיקסלים של רשתות חברתיות. פרטי השפה המועדפת שלכם נשמרים באופן מקומי בדפדפן בלבד (localStorage) ואינם נשלחים לשרתים שלנו.',
    'privacy-security-title': 'אבטחת מידע',
    'privacy-security-text': 'אנו נוקטים אמצעי אבטחה סבירים ומקובלים כדי להגן על המידע האישי שלכם, לרבות: תקשורת מוצפנת באמצעות פרוטוקול HTTPS, הגבלת גישה למידע לעובדים מורשים בלבד, ואחסון מאובטח. עם זאת, אין באפשרותנו להבטיח אבטחה מוחלטת של מידע המועבר באינטרנט.',
    'privacy-rights-title': 'הזכויות שלכם',
    'privacy-rights-text': 'בהתאם לחוק הגנת הפרטיות ותיקון 13, עומדות לכם הזכויות הבאות: הזכות לעיין במידע האישי שנאסף אודותיכם; הזכות לבקש תיקון מידע שגוי או לא מדויק; הזכות לבקש מחיקת המידע שלכם; הזכות להתנגד לעיבוד המידע; הזכות להגביל את עיבוד המידע; הזכות לחזור בכם מהסכמה שניתנה; הזכות לקבל את המידע שלכם בפורמט מובנה ונפוץ (ניידות מידע); והזכות להגיש תלונה לרשות להגנת הפרטיות. לצורך מימוש זכויותיכם, אנא פנו אלינו בפרטי הקשר שלהלן ונשיב לבקשתכם תוך 30 יום.',
    'privacy-minors-title': 'מידע על קטינים',
    'privacy-minors-text': 'האתר אינו מיועד לילדים מתחת לגיל 18 ואיננו אוספים ביודעין מידע אישי מקטינים. אם נודע לנו שנאסף מידע אישי של קטין, נמחק אותו בהקדם.',
    'privacy-changes-title': 'שינויים במדיניות הפרטיות',
    'privacy-changes-text': 'אנו עשויים לעדכן מדיניות פרטיות זו מעת לעת. במקרה של שינויים מהותיים, נפרסם הודעה בולטת באתר. המשך השימוש באתר לאחר עדכון המדיניות מהווה הסכמה לשינויים. מומלץ לבדוק עמוד זה מעת לעת.',
    'privacy-contact-title': 'יצירת קשר בנושא פרטיות',
    'privacy-contact-text': 'לכל שאלה, בקשה או תלונה בנושא מדיניות הפרטיות או עיבוד המידע האישי שלכם, ניתן לפנות אלינו באימייל: sales@paulandgreg.com או בטלפון: 058-401-2204. כמו כן, באפשרותכם לפנות לרשות להגנת הפרטיות (הרשמ"ק) בכתובת: www.gov.il/he/departments/the_privacy_protection_authority.',
    // Terms of Service page
    'terms-hero-title': 'תנאי שימוש',
    'terms-hero-subtitle': 'התנאים וההתחייבויות לשימוש באתר',
    'terms-updated': 'עדכון אחרון: פברואר 2026',
    'terms-intro': 'ברוכים הבאים לאתר של Paul & Greg ("האתר", "אנחנו", "החברה"). האתר מופעל על ידי Paul & Greg. השימוש באתר כפוף לתנאי שימוש אלה. גלישה באתר ו/או שימוש בשירותים המוצעים בו מהווים הסכמה מלאה ובלתי מסויגת לתנאים המפורטים להלן. אם אינכם מסכימים לתנאים אלה, אנא הימנעו משימוש באתר.',
    'terms-service-title': 'אודות השירות',
    'terms-service-text': 'האתר מספק מידע על שירותי בר קוקטיילים לאירועים המוצעים על ידי Paul & Greg, לרבות חתונות וקבלות פנים, אירועים פרטיים ואירועי חברה. התוכן המוצג באתר, לרבות תמונות, טקסטים, תיאורים ומחירונים (ככל שמוצגים), נועד למטרות מידע ושיווק בלבד ואינו מהווה הצעה מחייבת או התחייבות חוזית. כל עסקה תיכרת בהסכם נפרד ומפורט בין הצדדים.',
    'terms-eligibility-title': 'כשירות שימוש',
    'terms-eligibility-text': 'השימוש באתר מותר לכל אדם מעל גיל 18. בשימוש באתר אתם מאשרים כי אתם בגירים ובעלי כשרות משפטית להתקשר בהתחייבויות על פי כל דין.',
    'terms-use-title': 'שימוש מותר באתר',
    'terms-use-text': 'השימוש באתר מותר למטרות חוקיות בלבד. אין לעשות שימוש באתר באופן שעלול לפגוע באתר, לשבש את פעולתו, או להפריע למשתמשים אחרים. בפרט, חל איסור על: העתקה, שכפול או הפצה של תוכן מהאתר ללא אישור מראש; שימוש בתוכנות סריקה, רובוטים או כלים אוטומטיים לאיסוף תוכן מהאתר; ניסיון לגשת למערכות או מידע שאינם מיועדים לגישה ציבורית; שימוש באתר להפצת תוכן פוגעני, מטעה או בלתי חוקי.',
    'terms-ip-title': 'קניין רוחני',
    'terms-ip-text': 'כל התוכן באתר, לרבות עיצוב, לוגו, סימני מסחר, טקסטים, תמונות, גרפיקה, קוד מקור ותוכנה, הם קניינה הרוחני הבלעדי של Paul & Greg או של בעלי רישיון מורשים, ומוגנים על פי חוק זכות יוצרים, התשס"ח-2007 וחוקי קניין רוחני נוספים. אין להעתיק, לשכפל, להפיץ, לשדר, להציג בפומבי, לעבד או לעשות שימוש מסחרי כלשהו בתוכן מהאתר ללא אישור מראש ובכתב מאיתנו.',
    'terms-liability-title': 'הגבלת אחריות',
    'terms-liability-text': 'האתר מוצע כמות שהוא ("as-is") וכפי שהוא זמין ("as-available"). אנו עושים מאמצים סבירים לוודא שהמידע באתר מדויק ומעודכן, אך איננו מתחייבים לדיוק מלא, שלמות או רציפות הפעילות. בשום מקרה לא נישא באחריות לנזקים ישירים, עקיפים, מקריים, תוצאתיים או מיוחדים הנובעים מהשימוש באתר או מחוסר האפשרות להשתמש בו, לרבות אובדן רווחים, אובדן מידע או כל נזק אחר.',
    'terms-indemnification-title': 'שיפוי',
    'terms-indemnification-text': 'אתם מתחייבים לשפות ולפצות את Paul & Greg, עובדיה ושלוחיה בגין כל תביעה, דרישה, נזק, הוצאה (לרבות שכ"ט עו"ד) הנובעים משימוש שלכם באתר בניגוד לתנאי שימוש אלה או בניגוד לכל דין.',
    'terms-links-title': 'קישורים לאתרים חיצוניים',
    'terms-links-text': 'האתר עשוי להכיל קישורים לאתרים חיצוניים, כגון רשתות חברתיות ואתרי שותפים. קישורים אלה מסופקים לנוחיותכם בלבד. אנו לא אחראים לתוכן, מדיניות הפרטיות, אבטחת המידע או הפרקטיקות של אתרים אלה, ואין בהצגת הקישורים משום המלצה או אישור מצדנו.',
    'terms-availability-title': 'זמינות האתר',
    'terms-availability-text': 'אנו שואפים לשמור על זמינות האתר באופן רציף, אך איננו מתחייבים לכך. האתר עשוי להיות מושבת באופן זמני לצורך תחזוקה, עדכונים או מסיבות טכניות אחרות. לא נישא באחריות לכל הפסד או אי-נוחות שייגרמו כתוצאה מהשבתה זמנית של האתר.',
    'terms-law-title': 'דין חל וסמכות שיפוט',
    'terms-law-text': 'תנאי שימוש אלה כפופים אך ורק לחוקי מדינת ישראל. כל סכסוך שיתעורר בקשר לשימוש באתר יידון באופן בלעדי בבתי המשפט המוסמכים במחוז תל אביב-יפו.',
    'terms-severability-title': 'תניית סלבטוריו (הפרדה)',
    'terms-severability-text': 'אם ייקבע כי תנאי כלשהו מתנאי שימוש אלה אינו תקף או אינו ניתן לאכיפה, יתר התנאים ימשיכו לעמוד בתוקפם במלואם.',
    'terms-changes-title': 'שינויים בתנאי השימוש',
    'terms-changes-text': 'אנו שומרים לעצמנו את הזכות לעדכן תנאי שימוש אלה מעת לעת ללא הודעה מוקדמת. שינויים יכנסו לתוקף עם פרסומם באתר. המשך השימוש באתר לאחר ביצוע שינויים מהווה הסכמה לתנאים המעודכנים. מומלץ לבדוק עמוד זה מעת לעת.',
    'terms-entire-title': 'הסכם שלם',
    'terms-entire-text': 'תנאי שימוש אלה, יחד עם מדיניות הפרטיות והצהרת הנגישות, מהווים את ההסכם המלא והשלם בינכם לבין Paul & Greg בנוגע לשימוש באתר, ומחליפים כל הסכמה קודמת, בעל פה או בכתב.',
    'terms-contact-title': 'יצירת קשר',
    'terms-contact-text': 'לכל שאלה בנושא תנאי השימוש, ניתן לפנות אלינו באימייל: sales@paulandgreg.com או בטלפון: 058-401-2204.',
    // Accessibility Statement page
    'access-hero-title': 'הצהרת נגישות',
    'access-hero-subtitle': 'המחויבות שלנו לנגישות דיגיטלית',
    'access-updated': 'עדכון אחרון: פברואר 2026',
    'access-intro': 'Paul & Greg מחויבים להנגשת האתר www.paulandgreg.com ("האתר") לכלל הציבור, לרבות אנשים עם מוגבלויות, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998, תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013, וחוק הנגישות לשירותי אינטרנט.',
    'access-standard-title': 'תקן הנגישות',
    'access-standard-text': 'אנו פועלים להתאים את האתר לתקן הישראלי ת"י 5568 המבוסס על הנחיות WCAG 2.1 של ארגון W3C ברמת התאמה AA. תקן זה מגדיר כיצד להפוך תוכן אינטרנטי לנגיש יותר עבור אנשים עם מגוון מוגבלויות, לרבות מוגבלויות ראייה, שמיעה, מוטוריקה וקוגניטיביות.',
    'access-measures-title': 'אמצעי הנגישות שננקטו',
    'access-measures-text': 'במסגרת הנגשת האתר בוצעו, בין היתר, הפעולות הבאות: ניווט מלא באמצעות מקלדת בלבד (Tab, Enter, Escape); תגיות alt תיאוריות לכל התמונות באתר; מבנה כותרות היררכי ולוגי (H1-H6) לניווט נוח עם קוראי מסך; ניגודיות צבעים מספקת בין טקסט לרקע ברחבי האתר; תוויות aria-label לאלמנטים אינטראקטיביים; כפתור "דלג לתוכן הראשי" (skip-link) בראש כל עמוד; תמיכה בשינוי גודל הטקסט באמצעות הדפדפן עד 200% ללא אובדן תוכן; תמיכה מלאה בכיווניות RTL (ימין לשמאל) לעברית; ותאימות לטכנולוגיות מסייעות (קוראי מסך, מתגי גישה).',
    'access-tech-title': 'טכנולוגיות נגישות',
    'access-tech-text': 'האתר נבנה בטכנולוגיות HTML5 סמנטי, CSS3 ו-JavaScript, תוך שימוש בתקני WAI-ARIA להנגשת אלמנטים דינמיים. האתר תומך בדפדפנים המובילים (Chrome, Firefox, Safari, Edge) בגרסאותיהם העדכניות ותואם לטכנולוגיות מסייעות כגון NVDA, JAWS ו-VoiceOver.',
    'access-limitations-title': 'מגבלות ידועות',
    'access-limitations-text': 'למרות מאמצינו, ייתכנו רכיבים באתר שטרם הונגשו באופן מלא, בפרט: תמונות מאינסטגרם הנטענות ממקורות חיצוניים עשויות להיות חסרות תיאור alt מלא; וטפסי יצירת קשר עשויים לדרוש התאמות נוספות עבור סוגים מסוימים של טכנולוגיות מסייעות. אנו ממשיכים לעבוד על שיפור הנגישות ומתעדכנים באופן שוטף.',
    'access-assistance-title': 'בקשת סיוע בנגישות',
    'access-assistance-text': 'אם נתקלתם בבעיית נגישות באתר, או אם אתם זקוקים למידע בפורמט נגיש חלופי, אנא פנו אלינו ונשמח לסייע. נעשה כמיטב יכולתנו להנגיש עבורכם את המידע המבוקש בתוך זמן סביר.',
    'access-contact-title': 'רכז נגישות – פרטי התקשרות',
    'access-contact-text': 'לכל פנייה בנושא נגישות, ניתן ליצור קשר עם רכז הנגישות שלנו באימייל: sales@paulandgreg.com או בטלפון: 058-401-2204. אנו מתחייבים לטפל בכל פנייה בנושא נגישות תוך 14 ימי עסקים.',
    'access-complaint-title': 'הגשת תלונה',
    'access-complaint-text': 'אם פנייתכם לא טופלה לשביעות רצונכם, באפשרותכם לפנות לנציבות שוויון זכויות לאנשים עם מוגבלות במשרד המשפטים: טלפון 073-392-5999 או באתר: www.gov.il/he/departments/units/commission_equal_rights_persons_disabilities. כמו כן, ניתן להגיש תלונה לנציב נגישות השירות.',
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
    'wed-hero-title': 'Weddings & Receptions',
    'wed-hero-subtitle': 'A premium cocktail experience that will make your special day unforgettable',
    'wed-hero-cta': 'Get a Quote',
    'wed-desc-title': 'Your Wedding, Our Cocktails',
    'wed-desc-p1': 'You\'ve worked hard, thought about every little detail. You chose the perfect venue, the best DJ, and of course the food will be top-notch. But in the end, the evening\'s atmosphere is measured by how quickly your guests can let loose from the very first moment.',
    'wed-desc-p2': 'Nothing frames the style of an event and sets the rhythm quite like a cocktail bar at the reception. It\'s the finishing touch that completes the look you envisioned \u2014 a mobile, beautifully designed cocktail bar serving an elegant, precise drink to every guest, the kind that makes them realize they\'ve arrived at the right place before the music even starts.',
    'wed-desc-p3': 'Having a cocktail bar at a wedding isn\'t just about aesthetics \u2014 it\'s the engine of the dance floor. As part of our premium bar services, we ensure the alcohol is top quality and the presentation is impeccable, so the path to that extra chaser is shorter. We\'re here to make sure your guests hit the dance floor at their peak, with a wedding cocktail menu built specifically to raise the energy you\'ve been waiting for.',
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
    'evt-desc-p1': 'Sometimes the best reason for a party is simply because you feel like it. It could be a milestone birthday you\'ve invested in, a bachelorette party you\'ve been waiting for, or just an evening where you decided to gather all the people you love and needed an excuse to celebrate. When it comes to a private event, you want to truly host \u2014 to be part of the evening, not the ones busy filling ice and pouring drinks.',
    'evt-desc-p2': 'Adding a cocktail bar to your private event takes the celebration one step further. We arrive at any location with a mobile cocktail bar perfectly suited to the scale of your event, bringing with us a premium alcohol experience that turns even a living room or backyard into the most sought-after bar in town.',
    'evt-desc-p3': 'We know how to match the pace to your crowd. A bachelorette party cocktail menu brings light, colorful energy, while a birthday event gets a menu that blends elegant classics with a modern twist. We\'re here to fine-tune the drink to the vibe you want to create. Because in the end, when your best friends are at your place with a perfectly crafted cocktail and all that\'s left is to hit play on the playlist \u2014 you know this is the event everyone will remember (or at least try to remember the morning after).',
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
    'corp-desc-p1': 'Whether it\'s a toast event, a festive launch, or the company party you\'ve been waiting for all year \u2014 you already know that the small details are what build team pride. The goal is to create a moment where employees and colleagues step away from their screens, shift the atmosphere, and feel truly invested in.',
    'corp-desc-p2': 'Adding a cocktail bar to corporate events is the perfect way to transform an office space or external venue into a premium event. It starts with a mobile cocktail bar carefully designed to blend with your brand\'s visual identity, and continues with bar services for businesses that understand the right pace: understated elegance during the opening mingling, and an upbeat menu when it\'s time to let loose.',
    'corp-desc-p3': 'We don\'t just offer drinks \u2014 we offer a premium alcohol experience that takes all the logistical worries off your plate. With a business cocktail menu tailored to your company\'s character, we make sure every glass is the start of a conversation. Because in the end, you know that the moment you see Hadva from accounting celebrating on the dance floor with a cocktail in hand \u2014 your event is officially a success.',
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
    // Drinks page
    'nav-drinks': 'The Drinks',
    'footer-drinks': 'The Drinks',
    'drinks-hero-title': 'The Collection',
    'drinks-hero-subtitle': 'The drinks we love to make, and the ones you simply have to know',
    'drinks-our-title': 'Our Drinks',
    'drinks-our-subtitle': 'Cocktails we crafted especially for you',
    'drinks-classics-title': 'The Classics',
    'drinks-classics-subtitle': 'The cocktails everyone knows and loves',
    'drinks-filter-all': 'All',
    'drinks-filter-classics': 'Classics',
    'drinks-filter-tropical': 'Tropical',
    'drinks-filter-modern': 'Modern',
    'drinks-filter-specials': 'Specials',
    'drink-1-name': 'Old Fashioned',
    'drink-1-ing': 'Bourbon \u00B7 Sugar \u00B7 Bitters \u00B7 Orange Peel',
    'drink-1-desc': 'The cocktail that started it all. Elegant, strong, and no-nonsense \u2014 exactly as it should be.',
    'drink-2-name': 'Negroni',
    'drink-2-ing': 'Gin \u00B7 Campari \u00B7 Sweet Vermouth',
    'drink-2-desc': 'Bitter, sweet, and complex \u2014 the Italian cocktail that conquered the world.',
    'drink-3-name': 'Martini',
    'drink-3-ing': 'Gin \u00B7 Dry Vermouth \u00B7 Olive / Lemon',
    'drink-3-desc': 'Distilled, minimalist, and elegant. James Bond knew what he was doing.',
    'drink-4-name': 'Manhattan',
    'drink-4-ing': 'Whiskey \u00B7 Sweet Vermouth \u00B7 Bitters \u00B7 Cherry',
    'drink-4-desc': 'The New York classic. Smooth, rich, and with unmistakable character.',
    'drink-5-name': 'Whiskey Sour',
    'drink-5-ing': 'Bourbon \u00B7 Lemon \u00B7 Sugar \u00B7 Egg White',
    'drink-5-desc': 'Tangy, creamy, and indulgent \u2014 the combo that makes you order another.',
    'drink-6-name': 'Mojito',
    'drink-6-ing': 'White Rum \u00B7 Mint \u00B7 Lime \u00B7 Sugar \u00B7 Soda',
    'drink-6-desc': 'Fresh, light, and inviting \u2014 the drink that always fits, in any weather and any mood.',
    'drink-7-name': 'Pi\u00F1a Colada',
    'drink-7-ing': 'Rum \u00B7 Coconut \u00B7 Pineapple',
    'drink-7-desc': 'A vacation in a glass. Creamy, tropical, and tasting like a sunset on the beach.',
    'drink-8-name': 'Daiquiri',
    'drink-8-ing': 'White Rum \u00B7 Lime \u00B7 Sugar \u00B7 Strawberry',
    'drink-8-desc': 'Simple, clean, and precise \u2014 three ingredients creating magic.',
    'drink-9-name': 'Margarita',
    'drink-9-ing': 'Tequila \u00B7 Lime \u00B7 Triple Sec \u00B7 Salt',
    'drink-9-desc': 'Tangy, salty, and refreshing \u2014 the undisputed queen of every party.',
    'drink-10-name': 'Espresso Martini',
    'drink-10-ing': 'Vodka \u00B7 Coffee Liqueur \u00B7 Espresso \u00B7 Sugar',
    'drink-10-desc': 'The drink that wakes you up and gets you tipsy at the same time. The star of every evening event.',
    'drink-11-name': 'Aperol Spritz',
    'drink-11-ing': 'Aperol \u00B7 Prosecco \u00B7 Soda \u00B7 Orange',
    'drink-11-desc': 'Italian sunshine in every sip. Light, bubbly, and perfect for any hour.',
    'drink-12-name': 'Moscow Mule',
    'drink-12-ing': 'Vodka \u00B7 Ginger Beer \u00B7 Lime',
    'drink-12-desc': 'The ginger kicks, the lime balances, and the copper cup does the rest.',
    'drink-13-name': 'Cosmopolitan',
    'drink-13-ing': 'Vodka \u00B7 Triple Sec \u00B7 Cranberry \u00B7 Lime',
    'drink-13-desc': 'Pink, chic, and with attitude \u2014 the drink that became a cultural icon.',
    'drink-14-name': 'Lemon Drop',
    'drink-14-ing': 'Vodka \u00B7 Lemon \u00B7 Sugar \u00B7 Triple Sec',
    'drink-14-desc': 'Sharp, sweet-tart, and bright \u2014 like a sunbeam in a martini glass.',
    'drink-15-name': 'B-52',
    'drink-15-ing': "Kahl\u00FAa \u00B7 Baileys \u00B7 Grand Marnier",
    'drink-15-desc': 'Three perfect layers poured with precision \u2014 a shot that is a work of art.',
    'drink-16-name': 'The Emerald',
    'drink-16-ing': 'Gin \u00B7 Basil \u00B7 Lime \u00B7 Sugar Syrup \u00B7 Egg White',
    'drink-16-desc': 'Green, fresh, and elegant \u2014 with silky foam and basil leaves that elevate the experience.',
    'drink-17-name': 'The Onyx',
    'drink-17-ing': 'Vodka \u00B7 Espresso \u00B7 Coffee Liqueur \u00B7 Sugar \u00B7 Salt',
    'drink-17-desc': 'Dark, deep, and mysterious \u2014 an espresso martini with a twist that leaves its mark.',
    'drinks-fact-1': '\u201CThe first cocktail in history was mentioned in an American newspaper in 1806 \u2014 and it was basically a type of Old Fashioned.\u201D',
    'drinks-fact-2': '\u201CThe word \u2018Toast\u2019 (raising a glass) comes from the ancient Roman custom of dipping toasted bread into wine to soften the acidity.\u201D',
    'drinks-cta-title': 'Want these cocktails at your event?',
    'drinks-cta-text': 'We tailor a perfect cocktail menu for every type of event. Talk to us and let\u2019s build an unforgettable experience together.',
    'drinks-cta-btn': 'Let\u2019s talk about your event',
    // Old Fashioned detail page
    'of-back-link': '\u2190 Back to Collection',
    'of-profile-desc': 'The cocktail that started it all. Before fancy names, complicated techniques, and garnishes that cost more than the drink \u2014 there was simply a good drink. Bourbon, a sugar cube, a few dashes of bitters, and an orange peel expressed over the glass. That\u2019s it. And it\u2019s perfect.',
    'of-profile-ingredients': 'Ingredients',
    'of-profile-glass': 'Glass',
    'of-profile-strength': 'Strength',
    'of-story-title': 'The Story',
    'of-story-p1': 'The word "cocktail" first appeared in an American newspaper in 1806, and what it described was essentially what we know today as an Old Fashioned \u2014 spirit, sugar, water, and bitters. For decades, it was simply "the cocktail." No name was needed.',
    'of-story-p2': 'But as the world of drinks evolved and bartenders started adding liqueurs, juices, and more ingredients, those who wanted the original drink \u2014 simple, strong, authentic \u2014 began asking for it "the old-fashioned way." That\u2019s how the name Old Fashioned was born. Not through innovation, but through loyalty to the source. And that\u2019s exactly what makes it timeless.',
    'of-recipe-title': 'How We Make It',
    'of-step-1-title': 'Bitters & Sugar',
    'of-step-1': 'Place a sugar cube at the bottom of a rocks glass, add 2\u20133 dashes of Angostura bitters, and gently muddle until the sugar dissolves.',
    'of-step-2-title': 'Bourbon',
    'of-step-2': 'Pour 60ml of quality bourbon and gently stir to combine all the ingredients.',
    'of-step-3-title': 'Ice',
    'of-step-3': 'Add one large ice cube \u2014 it melts slowly and keeps the drink cold without diluting it.',
    'of-step-4-title': 'Garnish',
    'of-step-4': 'Express an orange peel over the glass to release the essential oils, rub it along the rim, and place it inside.',
    'of-var-title': 'Variations',
    'of-var-1-title': 'The Classic',
    'of-var-1-desc': 'The original bourbon version \u2014 pure, simple, and uncompromising. The combination that has stood the test of time for over two hundred years.',
    'of-var-2-title': 'Brandy Old Fashioned',
    'of-var-2-desc': 'Wisconsin style \u2014 with brandy instead of bourbon, a splash of soda, and a cherry-orange garnish. Round, warm, and indulgent.',
    'of-var-3-title': 'Oaxaca Old Fashioned',
    'of-var-3-desc': 'A Mexican twist \u2014 smoky mezcal instead of bourbon, with agave bitters and grapefruit peel. Modern, bold, and smoky.',
    'of-tips-title': 'Bartender Tips',
    'of-tip-1-title': 'Ice Changes Everything',
    'of-tip-1': 'Always use one large ice cube. It melts slower, maintains the temperature, and doesn\u2019t dilute the drink.',
    'of-tip-2-title': 'Don\u2019t Rush the Peel',
    'of-tip-2': 'Expressing the orange peel above the drink \u2014 not into it \u2014 releases the oils gently and adds aroma without bitterness.',
    'of-tip-3-title': 'Good Bourbon = Good Drink',
    'of-tip-3': 'In an Old Fashioned, the whiskey is the star. Don\u2019t cut corners on quality \u2014 choose a bourbon with character that you\u2019d enjoy sipping neat.',
    'of-cta-title': 'Want an Old Fashioned at your event?',
    'of-cta-text': 'Our bartenders craft Old Fashioneds on another level \u2014 tailored to your event\u2019s style, with top-tier ingredients. Talk to us.',
    'of-cta-btn': 'Let\u2019s talk about your event',
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
    'footer-services': 'About Us',
    'footer-weddings': 'Weddings & Receptions',
    'footer-events': 'Private Events',
    'footer-corporate': 'Corporate Events',
    'footer-useful': 'Useful Pages',
    'footer-follow': 'Social Media',
    'footer-blog': 'Paul & Greg Blog',
    'footer-facebook': 'Facebook | Paul_and_Greg_cocktail_events',
    'footer-instagram': 'Instagram | PAUL & GREG EVENTS',
    'footer-contact': 'Contact & Event Booking',
    'footer-phone-label': 'Phone:',
    'footer-email-label': 'Email:',
    'footer-privacy': 'Privacy Policy',
    'footer-terms': 'Terms of Service',
    'footer-accessibility': 'Accessibility Statement',
    'footer-copyright': 'All rights reserved to Paul & Greg 2026',
    // Privacy Policy page
    'privacy-hero-title': 'Privacy Policy',
    'privacy-hero-subtitle': 'How we protect your information',
    'privacy-updated': 'Last updated: February 2026',
    'privacy-intro': 'Paul & Greg ("we", "the company") respects the privacy of visitors to www.paulandgreg.com ("the website"). This privacy policy details how we collect, use, and protect your information, in accordance with the Israeli Privacy Protection Law, 5741-1981 and Amendment No. 13 which took effect in August 2025.',
    'privacy-controller-title': 'Data Controller Identity',
    'privacy-controller-text': 'The data controller responsible for processing personal information is Paul & Greg. You may contact us by email: sales@paulandgreg.com or by phone: 058-401-2204.',
    'privacy-collect-title': 'Information We Collect',
    'privacy-collect-text': 'We collect information you voluntarily provide through the contact form on our website. The information collected includes: full name, phone number, email address, requested event type (wedding, corporate event, birthday/private party, other), and a free-text message with additional details you choose to share. Providing this information is entirely voluntary and is not required by law. However, without providing your name and contact details (phone or email), we will be unable to respond with a quote.',
    'privacy-basis-title': 'Legal Basis for Processing',
    'privacy-basis-text': 'Processing of your personal data is based on informed consent that you grant when submitting the contact form. This consent is given freely, knowingly, and specifically for the purposes described in this policy. You may withdraw your consent at any time by contacting us using the details provided at the bottom of this page.',
    'privacy-use-title': 'How We Use Your Information',
    'privacy-use-text': 'The information collected is used solely for the following purposes: contacting you regarding your inquiry, providing a customized event quote, coordinating service details if we enter into an agreement, and improving our service. We do not use your information for direct marketing, email campaigns, or advertising unless we receive your separate explicit consent.',
    'privacy-share-title': 'Sharing Information with Third Parties',
    'privacy-share-text': 'We do not sell, rent, or share your personal information with third parties for marketing purposes. Information may be transferred to our website hosting provider solely for technical operation purposes. If we are required to disclose information pursuant to a court order or lawful demand from a competent authority, we will act in accordance with the law.',
    'privacy-transfers-title': 'International Data Transfers',
    'privacy-transfers-text': 'Our website servers may be hosted outside of Israel. In such cases, we ensure that information is transferred only to countries with an adequate level of personal data protection, in accordance with the Privacy Protection Law requirements.',
    'privacy-retention-title': 'Data Retention',
    'privacy-retention-text': 'We retain your personal information for the period necessary to fulfill the purposes for which it was collected, and no longer than 24 months from the date of your inquiry, unless longer retention is required for legal compliance or handling claims. We conduct periodic reviews of stored information and delete data that is no longer needed.',
    'privacy-cookies-title': 'Cookies and Tracking Technologies',
    'privacy-cookies-text': 'The website does not use cookies for tracking, advertising, or collecting personal information. The website does not employ third-party analytics tools and does not embed social network pixels. Your preferred language setting is stored locally in your browser only (localStorage) and is not transmitted to our servers.',
    'privacy-security-title': 'Data Security',
    'privacy-security-text': 'We implement reasonable and customary security measures to protect your personal information, including: encrypted communication via HTTPS protocol, restricted access to authorized personnel only, and secure storage. However, we cannot guarantee absolute security of information transmitted over the internet.',
    'privacy-rights-title': 'Your Rights',
    'privacy-rights-text': 'Under the Privacy Protection Law and Amendment 13, you have the following rights: the right to access personal data collected about you; the right to request correction of inaccurate data; the right to request deletion of your data; the right to object to data processing; the right to restrict processing; the right to withdraw consent; the right to receive your data in a structured and commonly used format (data portability); and the right to file a complaint with the Privacy Protection Authority. To exercise your rights, please contact us using the details below and we will respond within 30 days.',
    'privacy-minors-title': 'Minors\' Information',
    'privacy-minors-text': 'The website is not intended for children under the age of 18 and we do not knowingly collect personal information from minors. If we become aware that personal information of a minor has been collected, we will delete it promptly.',
    'privacy-changes-title': 'Changes to Privacy Policy',
    'privacy-changes-text': 'We may update this privacy policy from time to time. In the case of material changes, we will post a prominent notice on the website. Continued use of the website after policy updates constitutes acceptance of the changes. We recommend checking this page periodically.',
    'privacy-contact-title': 'Privacy Contact',
    'privacy-contact-text': 'For any questions, requests, or complaints regarding this privacy policy or the processing of your personal data, please contact us by email: sales@paulandgreg.com or by phone: 058-401-2204. You may also contact the Privacy Protection Authority (PPA) at: www.gov.il/he/departments/the_privacy_protection_authority.',
    // Terms of Service page
    'terms-hero-title': 'Terms of Service',
    'terms-hero-subtitle': 'Terms and conditions for using our website',
    'terms-updated': 'Last updated: February 2026',
    'terms-intro': 'Welcome to the Paul & Greg website ("the website", "we", "the company"). The website is operated by Paul & Greg. Use of this website is subject to these terms of service. Browsing the website and/or using the services offered therein constitutes full and unconditional acceptance of the terms detailed below. If you do not agree to these terms, please refrain from using the website.',
    'terms-service-title': 'About the Service',
    'terms-service-text': 'The website provides information about cocktail bar services for events offered by Paul & Greg, including weddings and receptions, private events, and corporate events. Content displayed on the website, including images, text, descriptions, and pricing (if displayed), is for informational and marketing purposes only and does not constitute a binding offer or contractual obligation. Any transaction will be executed through a separate detailed agreement between the parties.',
    'terms-eligibility-title': 'Eligibility',
    'terms-eligibility-text': 'Use of the website is permitted for persons over the age of 18. By using the website, you confirm that you are of legal age and have the legal capacity to enter into binding obligations under applicable law.',
    'terms-use-title': 'Permitted Use',
    'terms-use-text': 'Use of the website is permitted for lawful purposes only. You may not use the website in a manner that could damage, disrupt its operation, or interfere with other users. Specifically, it is prohibited to: copy, reproduce, or distribute content from the website without prior consent; use scanning software, robots, or automated tools to collect website content; attempt to access systems or information not intended for public access; use the website to distribute offensive, misleading, or unlawful content.',
    'terms-ip-title': 'Intellectual Property',
    'terms-ip-text': 'All content on the website, including design, logo, trademarks, text, images, graphics, source code, and software, is the exclusive intellectual property of Paul & Greg or authorized licensors, and is protected under the Israeli Copyright Law, 5768-2007 and additional intellectual property laws. No content may be copied, reproduced, distributed, transmitted, publicly displayed, modified, or commercially used without our prior written consent.',
    'terms-liability-title': 'Limitation of Liability',
    'terms-liability-text': 'The website is offered as-is and as-available. We make reasonable efforts to ensure the information on the website is accurate and up-to-date, but we do not guarantee complete accuracy, completeness, or uninterrupted availability. In no event shall we be liable for direct, indirect, incidental, consequential, or special damages arising from the use of or inability to use the website, including loss of profits, loss of data, or any other damage.',
    'terms-indemnification-title': 'Indemnification',
    'terms-indemnification-text': 'You agree to indemnify and hold harmless Paul & Greg, its employees, and agents from any claim, demand, damage, or expense (including attorney\'s fees) arising from your use of the website in violation of these terms of service or any applicable law.',
    'terms-links-title': 'Links to External Websites',
    'terms-links-text': 'The website may contain links to external websites, such as social networks and partner sites. These links are provided for your convenience only. We are not responsible for the content, privacy policies, data security, or practices of these websites, and the display of links does not constitute a recommendation or endorsement on our part.',
    'terms-availability-title': 'Website Availability',
    'terms-availability-text': 'We strive to maintain continuous website availability but do not guarantee it. The website may be temporarily unavailable for maintenance, updates, or other technical reasons. We shall not be liable for any loss or inconvenience caused by temporary unavailability.',
    'terms-law-title': 'Governing Law and Jurisdiction',
    'terms-law-text': 'These terms of service are governed exclusively by the laws of the State of Israel. Any dispute arising in connection with the use of the website shall be adjudicated exclusively by the competent courts in the Tel Aviv-Jaffa district.',
    'terms-severability-title': 'Severability',
    'terms-severability-text': 'If any provision of these terms of service is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.',
    'terms-changes-title': 'Changes to Terms',
    'terms-changes-text': 'We reserve the right to update these terms of service from time to time without prior notice. Changes will take effect upon publication on the website. Continued use of the website after changes constitutes acceptance of the updated terms. We recommend checking this page periodically.',
    'terms-entire-title': 'Entire Agreement',
    'terms-entire-text': 'These terms of service, together with the privacy policy and accessibility statement, constitute the complete and entire agreement between you and Paul & Greg regarding use of the website, and supersede any prior agreement, oral or written.',
    'terms-contact-title': 'Contact Us',
    'terms-contact-text': 'For any questions about these terms of service, please contact us by email: sales@paulandgreg.com or by phone: 058-401-2204.',
    // Accessibility Statement page
    'access-hero-title': 'Accessibility Statement',
    'access-hero-subtitle': 'Our commitment to digital accessibility',
    'access-updated': 'Last updated: February 2026',
    'access-intro': 'Paul & Greg is committed to making our website www.paulandgreg.com ("the website") accessible to all members of the public, including people with disabilities, in accordance with the Israeli Equal Rights for Persons with Disabilities Law, 5758-1998, the Equal Rights for Persons with Disabilities (Accessibility Accommodations for Service) Regulations, 5773-2013, and the Internet Services Accessibility Law.',
    'access-standard-title': 'Accessibility Standard',
    'access-standard-text': 'We strive to comply with the Israeli Standard IS 5568, based on the W3C WCAG 2.1 guidelines at Level AA conformance. This standard defines how to make web content more accessible to people with a range of disabilities, including visual, auditory, motor, and cognitive disabilities.',
    'access-measures-title': 'Accessibility Measures Taken',
    'access-measures-text': 'As part of making the website accessible, the following measures have been taken, among others: full keyboard-only navigation (Tab, Enter, Escape); descriptive alt tags for all images; logical hierarchical heading structure (H1-H6) for easy screen reader navigation; sufficient color contrast between text and background throughout the site; aria-label attributes for interactive elements; a "Skip to main content" button at the top of every page; support for text resizing via the browser up to 200% without content loss; full RTL (right-to-left) directionality support for Hebrew; and compatibility with assistive technologies (screen readers, switch access).',
    'access-tech-title': 'Accessibility Technologies',
    'access-tech-text': 'The website is built with semantic HTML5, CSS3, and JavaScript, using WAI-ARIA standards for accessible dynamic elements. The website supports leading browsers (Chrome, Firefox, Safari, Edge) in their latest versions and is compatible with assistive technologies such as NVDA, JAWS, and VoiceOver.',
    'access-limitations-title': 'Known Limitations',
    'access-limitations-text': 'Despite our efforts, some website elements may not yet be fully accessible, particularly: Instagram images loaded from external sources may lack complete alt descriptions; and contact forms may require additional adaptations for certain types of assistive technologies. We continue to work on improving accessibility and update regularly.',
    'access-assistance-title': 'Requesting Accessibility Assistance',
    'access-assistance-text': 'If you encounter an accessibility issue on the website, or if you need information in an alternative accessible format, please contact us and we will be happy to assist. We will do our best to make the requested information accessible within a reasonable timeframe.',
    'access-contact-title': 'Accessibility Coordinator – Contact Details',
    'access-contact-text': 'For any accessibility-related inquiries, please contact our accessibility coordinator by email: sales@paulandgreg.com or by phone: 058-401-2204. We commit to addressing every accessibility inquiry within 14 business days.',
    'access-complaint-title': 'Filing a Complaint',
    'access-complaint-text': 'If your inquiry was not handled to your satisfaction, you may contact the Commission for Equal Rights of Persons with Disabilities at the Ministry of Justice: phone 073-392-5999 or website: www.gov.il/he/departments/units/commission_equal_rights_persons_disabilities. You may also file a complaint with the Accessibility Commissioner.',
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

// Mobile lang button
const mobileLangBtn = document.getElementById('mobile-lang-btn');
if (mobileLangBtn) {
  mobileLangBtn.addEventListener('click', () => {
    const current = document.documentElement.lang || 'he';
    switchLanguage(current === 'he' ? 'en' : 'he');
  });
}

// Burger menu toggle
const burgerBtn = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (burgerBtn && mobileMenu) {
  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      mobileMenu.classList.add('hidden');
    }
  }, { passive: true });
}

// Sticky header — on homepage: shows after scrolling past hero; on subpages: always visible
const header = document.getElementById('sticky-header');
const hero = document.getElementById('hero-section');
const isHomepage = window.location.pathname === '/';

if (isHomepage) {
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
} else {
  // Subpages: header always visible, solid background appears after scrolling past banner
  let heroHeight = hero.offsetHeight;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY >= heroHeight) {
          header.classList.add('header-scrolled');
        } else {
          header.classList.remove('header-scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    heroHeight = hero.offsetHeight;
  }, { passive: true });
}

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
        card.style.flex = '1 1 0%';
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
      card.style.flex = '1 1 0%';
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

// Drinks page — category filter
const drinksFilter = document.getElementById('drinks-filter');
if (drinksFilter) {
  const filterBtns = drinksFilter.querySelectorAll('.drink-filter-btn');
  const drinkCards = document.querySelectorAll('#drinks-grid > [data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button styles
      filterBtns.forEach(b => {
        b.classList.remove('active', 'border-amber-400/50', 'text-amber-400', 'bg-amber-400/10');
        b.classList.add('border-gray-600', 'text-gray-400');
      });
      btn.classList.add('active', 'border-amber-400/50', 'text-amber-400', 'bg-amber-400/10');
      btn.classList.remove('border-gray-600', 'text-gray-400');

      // Filter cards
      drinkCards.forEach(card => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter || cat === 'all') {
          card.classList.remove('filter-hidden');
        } else {
          card.classList.add('filter-hidden');
        }
      });
    });
  });

  // Touch device support — toggle overlay on tap
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) {
    document.querySelectorAll('.drink-card').forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const wasActive = card.classList.contains('touch-active');
        document.querySelectorAll('.drink-card.touch-active').forEach(c => c.classList.remove('touch-active'));
        if (!wasActive) card.classList.add('touch-active');
      });
    });
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
