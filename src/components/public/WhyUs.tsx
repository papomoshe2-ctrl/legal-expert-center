'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, BarChart3, FileCheck, Headphones, Lock } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'מהירות ויעילות',
    description: 'אנו מגיבים תוך 24 שעות ומספקים חוות דעת בפרקי זמן תחרותיים, מבלי לפשר על איכות.',
  },
  {
    icon: Shield,
    title: 'הכרה בכל בתי המשפט',
    description: 'חוות הדעת שלנו מוכרות ומקובלות בכל ערכאות המשפט בישראל, כולל בית המשפט העליון.',
  },
  {
    icon: BarChart3,
    title: 'כלים אבחוניים מדעיים',
    description: 'שימוש בכלים מקצועיים בינלאומיים מוכרים: HCR-20, PCL-R, LSI-R ועוד.',
  },
  {
    icon: FileCheck,
    title: 'דוחות מובנים ומפורטים',
    description: 'כל חוות דעת נכתבת בפורמט ברור, מובנה ומתאים להגשה משפטית — ללא אי-בהירות.',
  },
  {
    icon: Headphones,
    title: 'ליווי מלא לאורך כל הדרך',
    description: 'אנחנו לצידכם מהפנייה הראשונה ועד לפסיקה — כולל עדות בבית המשפט.',
  },
  {
    icon: Lock,
    title: 'סודיות מוחלטת',
    description: 'פרטיות הלקוח היא ערך עליון. כל המידע מוגן ומועבר בצינורות מאובטחים בלבד.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#0A1628' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#C9A84C' }}
          >
            היתרון שלנו
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-white"
          >
            למה בוחרים בנו?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-7 rounded-2xl border border-white/10 hover:border-[#C9A84C]/40 transition-all group"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: 'rgba(201,168,76,0.15)' }}
              >
                <reason.icon className="w-6 h-6" style={{ color: '#C9A84C' }} />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{reason.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
