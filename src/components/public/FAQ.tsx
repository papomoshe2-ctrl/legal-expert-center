'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'מה ההבדל בין חוות דעת קרימינולוגית לחוות דעת פסיכיאטרית?',
    a: 'חוות דעת קרימינולוגית מתמקדת בהקשר החברתי, ההתנהגותי והסביבתי של הנאשם — כולל גורמי סיכון, קרימינוגנזה ותוכנית שיקום. חוות דעת פסיכיאטרית עוסקת בעיקר בבריאות הנפשית ובכשירות משפטית. לעיתים קרובות שתיהן משלימות זו את זו.',
  },
  {
    q: 'כמה זמן לוקח להכין חוות דעת?',
    a: 'בממוצע, חוות דעת מקיפה נמסרת תוך 10–14 ימי עסקים מרגע קבלת כל החומרים הרלוונטיים. בתיקים דחופים, ניתן לספק חוות דעת מקוצרת תוך 48–72 שעות.',
  },
  {
    q: 'האם חוות הדעת שלכם מוכרות בכל בתי המשפט בישראל?',
    a: 'כן. חוות הדעת שלנו מוכרות ומקובלות בכל ערכאות המשפט בישראל, כולל בית משפט השלום, המחוזי ובית המשפט העליון. המסמכים כתובים בהתאם לדרישות הפרוצדורליות של כל ערכאה.',
  },
  {
    q: 'האם המומחה יגיע לעדות בבית המשפט?',
    a: 'כן. עדות בבית משפט היא חלק אינטגרלי מהשירות. המומחה מגיע לעדות, עובר הכנה מקדימה מול עורך הדין, ומסוגל להתמודד עם חקירת נגד.',
  },
  {
    q: 'מה קורה אם בית המשפט דוחה את חוות הדעת?',
    a: 'חוות דעת אינה נדחית סתם — היא נשקלת על-ידי השופט. גם כאשר השופט אינו מאמץ אותה במלואה, היא משפיעה על גזר הדין כגורם מקל. אנו נדאג לכך שהחוות דעת תהיה מבוססת ועמידה בפני ביקורת.',
  },
  {
    q: 'האם ניתן להזמין חוות דעת גם לאחר גזר הדין (לצורך ערעור)?',
    a: 'כן. חוות דעת לשלב הערעור היא שירות שכיח. אנו מתאימים את החוות דעת לצרכים הספציפיים של הערעור — לרבות ביקורת על חוות דעת קודמות או הצגת ממצאים חדשים.',
  },
  {
    q: 'כיצד מגנים על פרטיות הלקוח?',
    a: 'כל המידע שמוסר לנו מוגן בהסכם סודיות מחייב. אנו משתמשים בתשתיות מאובטחות להעברת מסמכים ומקפידים על אי-חשיפת פרטים מזהים בשום שלב.',
  },
  {
    q: 'מה ההליך לפנייה ראשונה?',
    a: 'ניתן לפנות אלינו דרך טופס הקשר, ווצאפ או טלפון. בתוך 24 שעות נדבר לקביעת פגישת הכרות (ללא עלות) בה נבין את צרכי התיק ונחליט יחד על מתווה הפעולה.',
  },
]

export default function FAQ() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#C9A84C' }}
          >
            שאלות נפוצות
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold"
            style={{ color: '#0A1628' }}
          >
            יש לכם שאלות?
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={i}
                className="bg-white border border-gray-100 rounded-xl px-6"
              >
                <AccordionTrigger className="text-right font-semibold text-sm py-5 hover:no-underline" style={{ color: '#0A1628' }}>
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
