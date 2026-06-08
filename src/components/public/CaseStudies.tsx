'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

const cases = [
  {
    tag: 'דין פלילי',
    title: 'הפחתת עונש משמעותית בתיק סמים',
    description: 'לקוח שהורשע בעבירת סמים חמורה. חוות הדעת הקרימינולוגית שנכתבה על-ידינו הדגישה גורמים שיקומיים ופגיעות נפשית. תוצאה: הפחתת העונש ב-40% לעומת המבוקש על-ידי התביעה.',
    outcome: 'הפחתה של 40% בעונש',
    color: '#C9A84C',
  },
  {
    tag: 'נוער',
    title: 'העברה לטיפול חינוכי במקום מאסר',
    description: 'קטין בן 17 שעמד בפני מאסר בגין עבירות אלימות. תסקיר מקיף ותוכנית שיקום אישית הובילו את בית המשפט לנוער להורות על מסגרת חינוכית במקום כליאה.',
    outcome: 'מניעת מאסר — מסגרת חינוכית',
    color: '#4CAF82',
  },
  {
    tag: 'משפחה',
    title: 'קביעת משמורת מלאה לטובת הילד',
    description: 'סכסוך משמורת מורכב עם ספקות לגבי כשירות הורית. הערכה קרימינולוגית מקיפה סיפקה לבית המשפט תמונה מלאה שהובילה לפסיקה הגנה על טובת הילד.',
    outcome: 'הכרעה לטובת הילד',
    color: '#5B8DEF',
  },
]

export default function CaseStudies() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#C9A84C' }}
          >
            תוצאות מוכחות
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold"
            style={{ color: '#0A1628' }}
          >
            סיפורי הצלחה (אנונימיים)
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 mt-3 text-sm"
          >
            כל הפרטים המזהים הוסרו לשמירה על פרטיות הלקוחות
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-all"
            >
              <Badge
                className="mb-4 text-xs font-semibold"
                style={{ backgroundColor: `${c.color}15`, color: c.color, border: 'none' }}
              >
                {c.tag}
              </Badge>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#0A1628' }}>
                {c.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">{c.description}</p>
              <div
                className="pt-4 border-t border-gray-100 flex items-center gap-2"
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: c.color }}
                />
                <span className="text-sm font-semibold" style={{ color: c.color }}>
                  {c.outcome}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
