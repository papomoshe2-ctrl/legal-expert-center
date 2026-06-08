import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Clock } from 'lucide-react'

export const metadata = { title: 'מרכז הידע — המרכז לחוות דעת משפטיות' }

const articles = [
  { slug: 'risk-assessment-guide', tag: 'הערכת מסוכנות', title: 'מדריך להערכת מסוכנות: כלים וגישות בפסיקה הישראלית', excerpt: 'סקירה מקיפה של כלי הערכת המסוכנות המוכרים בישראל.', readTime: '8 דק׳', date: 'ינואר 2025' },
  { slug: 'juvenile-cases-system', tag: 'נוער', title: 'מערכת השיפוט לנוער בישראל: מה כל עורך דין צריך לדעת', excerpt: 'סקירת מערכת בית המשפט לנוער וחשיבות התסקיר הקרימינולוגי.', readTime: '6 דק׳', date: 'פברואר 2025' },
  { slug: 'rehabilitation-criminal-law', tag: 'שיקום', title: 'שיקום בדין הפלילי: כיצד תוכנית שיקום משפיעה על גזר הדין', excerpt: 'ניתוח תיאורטי ומעשי של השפעת תוכניות שיקום.', readTime: '10 דק׳', date: 'מרץ 2025' },
  { slug: 'expert-testimony-guide', tag: 'עדות מומחה', title: 'עדות מומחה בבית משפט: מה לצפות ואיך להתכונן', excerpt: 'מדריך מעשי לעורכי דין ולמומחים לקראת דיון בבית משפט.', readTime: '7 דק׳', date: 'אפריל 2025' },
  { slug: 'custody-assessment', tag: 'משמורת', title: 'הערכה קרימינולוגית בתיקי משמורת: עקרונות ומתודולוגיה', excerpt: 'כיצד נערכת הערכה קרימינולוגית בתיקי משמורת ומינהל.', readTime: '9 דק׳', date: 'מאי 2025' },
  { slug: 'hcr20-explained', tag: 'כלי הערכה', title: 'HCR-20: הכלי המוביל להערכת מסוכנות — הסבר מקיף', excerpt: 'כיצד פועל כלי HCR-20 ומה הוא מודד בהערכת מסוכנות.', readTime: '12 דק׳', date: 'יוני 2025' },
]

export default function KnowledgeCenterPage() {
  return (
    <div className="pt-20">
      <div style={{ backgroundColor: '#0A1628' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>ידע מקצועי</p>
          <h1 className="text-4xl font-bold text-white">מרכז הידע</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.slug} href={`/knowledge-center/${article.slug}`}>
              <div className="group h-full border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                <div className="h-2" style={{ backgroundColor: '#C9A84C' }} />
                <div className="p-6">
                  <Badge className="mb-4 text-xs" style={{ backgroundColor: 'rgba(201,168,76,0.12)', color: '#C9A84C', border: 'none' }}>
                    {article.tag}
                  </Badge>
                  <h2 className="font-bold text-lg mb-3 group-hover:text-[#C9A84C] transition-colors" style={{ color: '#0A1628' }}>
                    {article.title}
                  </h2>
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
          ))}
        </div>
      </div>
    </div>
  )
}
