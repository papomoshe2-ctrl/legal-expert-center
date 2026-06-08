'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, FileText, Scale, Users, Baby, Heart } from 'lucide-react'

const services = [
  {
    icon: FileText,
    title: 'חוות דעת קרימינולוגית',
    description: 'חוות דעת מקצועית ומקיפה המבוססת על הערכה פסיכולוגית וקרימינולוגית של הנאשם, לשימוש בבית המשפט.',
    href: '/services/criminological-opinion',
    tag: 'הכי מבוקש',
  },
  {
    icon: Shield,
    title: 'הערכת מסוכנות',
    description: 'הערכה מדעית ומובנית של רמת המסוכנות לפי כלים מקצועיים מוכרים — HCR-20, PCL-R ועוד.',
    href: '/services/risk-assessment',
  },
  {
    icon: Scale,
    title: 'הפחתת עונש',
    description: 'תוכנית מקצועית לתמיכה בבקשה להפחתת עונש: שיקום, חרטה, גורמים מקלים ועדות מומחה.',
    href: '/services/sentence-reduction',
  },
  {
    icon: Users,
    title: 'נוער בסיכון',
    description: 'טיפול מיוחד בתיקי קטינים — הערכה התפתחותית, המלצות שיקומיות ועדות לבית משפט לנוער.',
    href: '/services/juvenile-cases',
  },
  {
    icon: Baby,
    title: 'משמורת ילדים',
    description: 'חוות דעת קרימינולוגית בתיקי משמורת ומינהל: הערכת כשירות הורית, סיכוני חשיפה וצרכי הילד.',
    href: '/services/custody',
  },
  {
    icon: Heart,
    title: 'תוכנית שיקום',
    description: 'בניית תוכנית שיקום אישית ומפורטת המוצגת לבית המשפט כחלק אינטגרלי מהגנת הנאשם.',
    href: '/services/rehabilitation',
  },
]

export default function ServicesSection() {
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
            תחומי המומחיות שלנו
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold"
            style={{ color: '#0A1628' }}
          >
            שירותים מקצועיים ומותאמים אישית
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={service.href}>
                <div className="group h-full bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#C9A84C]/30 hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden">
                  {service.tag && (
                    <span
                      className="absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: 'rgba(201,168,76,0.12)', color: '#C9A84C' }}
                    >
                      {service.tag}
                    </span>
                  )}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: 'rgba(10,22,40,0.06)' }}
                  >
                    <service.icon className="w-6 h-6" style={{ color: '#0A1628' }} />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#0A1628' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  <div
                    className="mt-5 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: '#C9A84C' }}
                  >
                    קרא עוד
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
