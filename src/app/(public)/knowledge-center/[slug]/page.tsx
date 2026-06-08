import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Clock } from 'lucide-react'

const articles: Record<string, { tag: string; title: string; content: string; readTime: string; date: string }> = {
  'risk-assessment-guide': {
    tag: 'הערכת מסוכנות',
    title: 'מדריך להערכת מסוכנות: כלים וגישות בפסיקה הישראלית',
    readTime: '8 דק׳',
    date: 'ינואר 2025',
    content: `הערכת מסוכנות היא אחד הכלים המרכזיים בפרקטיקה הקרימינולוגית הישראלית המודרנית. בשנים האחרונות גברה ההכרה של בתי המשפט בחשיבות הערכות אלה, הן בשלב גזר הדין והן בשלב הערעור.

## כלי HCR-20

כלי HCR-20 (Historical Clinical Risk Management-20) הוא כלי הערכת המסוכנות הנפוץ ביותר בעולם, הכולל 20 פריטים המחולקים לשלושה תחומים:
- **היסטורי (H):** גורמים מהעבר כגון אלימות קודמת, גיל תחילת ההתנהגות האנטי-חברתית
- **קליני (C):** מצב נפשי נוכחי, תובנה, תוכניות עתיד
- **ניהול סיכונים (R):** תוכניות שיקום, תמיכה חברתית, גורמי מגן

## כלי PCL-R

המדרג הפסיכופתי של הייר (PCL-R) הוא כלי ייחודי לאבחון פסיכופתיה. הוא מורכב מ-20 פריטים ומעניק ציון כולל המשקף את מידת הפסיכופתיה. בתי משפט בישראל מקבלים ממצאי PCL-R כראיה מדעית לגיטימית.

## קבלתם בפסיקה הישראלית

בשנים האחרונות, בתי המשפט בישראל נוטים יותר ויותר לאמץ ממצאי הערכות מסוכנות. פסקי דין של בית המשפט העליון מאשנ"ב 2014 ואילך קבעו כי הערכת מסוכנות מקצועית היא חלק אינטגרלי מגזר הדין בתיקים של אלימות חמורה.`,
  },
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles[slug] || {
    tag: 'מאמר',
    title: 'מאמר מקצועי',
    readTime: '5 דק׳',
    date: '2025',
    content: 'תוכן המאמר יפורסם בקרוב. חזרו אלינו שוב.',
  }

  return (
    <div className="pt-20">
      <div style={{ backgroundColor: '#0A1628' }} className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/knowledge-center" className="flex items-center gap-2 text-white/50 hover:text-white text-sm mb-6 transition-colors">
            <ArrowRight className="w-4 h-4" />
            חזרה למרכז הידע
          </Link>
          <Badge style={{ backgroundColor: 'rgba(201,168,76,0.2)', color: '#C9A84C', border: 'none' }} className="mb-4">
            {article.tag}
          </Badge>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 text-white/50 text-sm">
            <span>{article.date}</span>
            <span>|</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{article.readTime} קריאה</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          style={{ direction: 'rtl' }}
        >
          {article.content.split('\n\n').map((para, i) => {
            if (para.startsWith('## ')) {
              return <h2 key={i} className="text-xl font-bold mt-8 mb-3" style={{ color: '#0A1628' }}>{para.replace('## ', '')}</h2>
            }
            return <p key={i} className="mb-4">{para}</p>
          })}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
          <Link href="/contact">
            <Button className="text-white" style={{ backgroundColor: '#C9A84C' }}>קבלת ייעוץ ראשוני</Button>
          </Link>
          <Link href="/case-assessment">
            <Button variant="outline" style={{ borderColor: '#0A1628', color: '#0A1628' }}>הערכת תיק חינם</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
