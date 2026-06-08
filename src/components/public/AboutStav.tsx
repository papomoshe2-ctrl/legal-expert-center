'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Award, BookOpen, Users } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const credentials = [
  'קרימינולוגית קלינית מוסמכת — אוניברסיטת בר-אילן',
  'בעלת תואר שני בקרימינולוגיה קלינית ופסיכולוגיה',
  'מומחית מוסמכת מטעם בתי משפט בישראל',
  'מרצה ומפתחת תוכניות שיקום ברשויות',
  'ניסיון של 15+ שנה בתיקי עונשין, נוער ומשפחה',
  'מעל 500 חוות דעת שהוגשו לבתי משפט',
]

export default function AboutStav() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div
              className="rounded-2xl overflow-hidden aspect-[4/5] flex items-center justify-center"
              style={{ backgroundColor: '#0A1628' }}
            >
              {/* Professional placeholder */}
              <div className="text-center p-10">
                <div
                  className="w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold"
                  style={{ backgroundColor: 'rgba(201,168,76,0.2)', color: '#C9A84C' }}
                >
                  סא
                </div>
                <p className="text-white text-xl font-bold">סתיו אווה פפו</p>
                <p className="text-white/60 text-sm mt-1">קרימינולוגית קלינית בכירה</p>
              </div>
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
              <div className="flex gap-6">
                {[
                  { icon: Award, value: '15+', label: 'שנות ניסיון' },
                  { icon: BookOpen, value: '500+', label: 'תיקים' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <s.icon className="w-5 h-5 mx-auto mb-1" style={{ color: '#C9A84C' }} />
                    <p className="text-2xl font-bold" style={{ color: '#0A1628' }}>{s.value}</p>
                    <p className="text-xs text-gray-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
              המומחית המובילה
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-5" style={{ color: '#0A1628' }}>
              סתיו אווה פפו
              <br />
              <span className="text-xl font-medium text-gray-500">קרימינולוגית קלינית בכירה</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              סתיו אווה פפו הינה קרימינולוגית קלינית מוסמכת עם ניסיון של למעלה מ-15 שנה בתחום חוות הדעת המשפטיות. במשך השנים ליוותה מאות נאשמים, עורכי דין ומשפחות, תוך מחויבות מוחלטת למקצועיות, אמינות ותוצאות.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              גישתה המקיפה, המבוססת על כלים אבחוניים מדעיים ועל היכרות עמוקה עם מערכת המשפט בישראל, הפכה אותה לאחד הגורמים המקצועיים המבוקשים ביותר בתחום.
            </p>

            <ul className="space-y-3 mb-8">
              {credentials.map((cred) => (
                <li key={cred} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#C9A84C' }} />
                  {cred}
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <Link href="/about">
                <Button
                  className="text-white"
                  style={{ backgroundColor: '#0A1628' }}
                >
                  קרא עוד אודות סתיו
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white"
                >
                  ייצור קשר
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
