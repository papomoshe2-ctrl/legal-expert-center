'use client'

import { motion } from 'framer-motion'
import { Brain, Stethoscope, GraduationCap, Scale, Users, BookOpen } from 'lucide-react'

const experts = [
  { icon: Brain, title: 'פסיכולוגים קלינאיים', count: '12+' },
  { icon: Stethoscope, title: 'פסיכיאטרים', count: '8+' },
  { icon: GraduationCap, title: 'קרימינולוגים', count: '6+' },
  { icon: Scale, title: 'עובדים סוציאליים', count: '10+' },
  { icon: Users, title: 'מומחי נוער', count: '5+' },
  { icon: BookOpen, title: 'מומחי שיקום', count: '7+' },
]

export default function ExpertNetwork() {
  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#C9A84C' }}
          >
            הצוות שלנו
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold"
            style={{ color: '#0A1628' }}
          >
            רשת מומחים בין-תחומית
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 mt-3 max-w-lg mx-auto text-sm"
          >
            מאחורי כל חוות דעת עומד צוות רחב של מומחים מתחומים שונים, המאפשר גישה הוליסטית ומקיפה לכל תיק.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {experts.map((expert, i) => (
            <motion.div
              key={expert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-md transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: 'rgba(10,22,40,0.05)' }}
              >
                <expert.icon className="w-6 h-6" style={{ color: '#0A1628' }} />
              </div>
              <p className="text-2xl font-bold mb-1" style={{ color: '#C9A84C' }}>
                {expert.count}
              </p>
              <p className="text-xs text-gray-600 leading-tight">{expert.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
