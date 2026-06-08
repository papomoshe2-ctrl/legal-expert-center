'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const articles = [
  {
    slug: 'risk-assessment-guide',
    tag: 'הערכת מסוכנות',
    title: 'מדריך להערכת מסוכנות: כלים וגישות בפסיקה הישראלית',
    excerpt: 'סקירה מקיפה של כלי הערכת המסוכנות המוכרים בישראל — HCR-20, PCL-R ו-LSI-R — ואופן קבלתם בפסיקה.',
    readTime: '8 דק׳',
    date: 'ינואר 2025',
  },
  {
    slug: 'juvenile-cases-system',
    tag: 'נוער',
    title: 'מערכת השיפוט לנוער בישראל: מה כל עורך דין צריך לדעת',
    excerpt: 'סקירת מערכת בית המשפט לנוער, חשיבות התסקיר הקרימינולוגי ודרכי ההתמודדות עם תיקי קטינים.',
    readTime: '6 דק׳',
    date: 'פברואר 2025',
  },
  {
    slug: 'rehabilitation-criminal-law',
    tag: 'שיקום',
    title: 'שיקום בדין הפלילי: כיצד תוכנית שיקום משפיעה על גזר הדין',
    excerpt: 'ניתוח תיאורטי ומעשי של השפעת תוכניות שיקום על גזרי דין, עם דוגמאות מהפסיקה העדכנית.',
    readTime: '10 דק׳',
    date: 'מרץ 2025',
  },
]

export default function KnowledgeCenter() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#C9A84C' }}>
              ידע מקצועי
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: '#0A1628' }}>
              מרכז הידע
            </h2>
          </div>
          <Link href="/knowledge-center">
            <Button variant="outline" className="border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628] hover:text-white">
              כל המאמרים
              <ArrowLeft className="w-4 h-4 mr-2 rtl-flip" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/knowledge-center/${article.slug}`}>
                <div className="group h-full border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                  <div
                    className="h-2"
                    style={{ backgroundColor: '#C9A84C' }}
                  />
                  <div className="p-6">
                    <Badge
                      className="mb-4 text-xs"
                      style={{ backgroundColor: 'rgba(201,168,76,0.12)', color: '#C9A84C', border: 'none' }}
                    >
                      {article.tag}
                    </Badge>
                    <h3 className="font-bold text-lg mb-3 group-hover:text-[#C9A84C] transition-colors" style={{ color: '#0A1628' }}>
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{article.date}</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime} קריאה</span>
                      </div>
                    </div>
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
