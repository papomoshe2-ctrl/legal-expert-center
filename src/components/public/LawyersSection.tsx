'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, FileText, LayoutDashboard, Headphones, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const benefits = [
  { icon: Clock, title: 'מענה ב-24 שעות', description: 'תגובה מהירה לכל פנייה, עם הערכה ראשונית ביום הפנייה.' },
  { icon: FileText, title: 'דוחות ממוקדי בית משפט', description: 'כתיבה מקצועית המותאמת לשפה ולציפיות של ערכאות המשפט.' },
  { icon: LayoutDashboard, title: 'פורטל מעקב לעורכי דין', description: 'גישה ייעודית לסטטוס התיק, מסמכים ועדכונים בזמן אמת.' },
  { icon: Headphones, title: 'ליווי משפטי מלא', description: 'זמינות לפגישות הכנה, שאלות ועדות בבית משפט כשנדרש.' },
  { icon: Star, title: 'עדיפות ללקוחות קבועים', description: 'עורכי דין שותפים זוכים לקדימות בתור ובתנאים מיוחדים.' },
]

export default function LawyersSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
              שיתוף פעולה מקצועי
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-5" style={{ color: '#0A1628' }}>
              שירותי מומחים
              <br />
              למשרדי עורכי דין
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              אנחנו עובדים יד ביד עם עורכי דין פליליים, משפחה ונוער. אנו מספקים כלים מקצועיים שמשדרגים את ההגנה ומשפיעים על תוצאות התיק — ממש כפי שצריך.
            </p>
            <Link href="/for-lawyers">
              <Button
                size="lg"
                className="text-white font-semibold"
                style={{ backgroundColor: '#C9A84C' }}
              >
                פתיחת שיתוף פעולה
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-[#C9A84C]/20 hover:shadow-sm transition-all"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(10,22,40,0.06)' }}
                >
                  <b.icon className="w-5 h-5" style={{ color: '#0A1628' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1" style={{ color: '#0A1628' }}>{b.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{b.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
