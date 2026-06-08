import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export const metadata = { title: 'חוות דעת קרימינולוגית — המרכז לחוות דעת משפטיות' }

const includes = [
  'ראיון קליני מעמיק עם הנאשם',
  'ניתוח ההיסטוריה הפלילית והחברתית',
  'שימוש בכלי הערכה מדעיים (HCR-20, PCL-R)',
  'הערכת גורמי סיכון ומגן',
  'המלצות שיקומיות מפורטות',
  'תוצאות בכתב — מסמך מובנה לבית משפט',
  'עדות בבית משפט לפי הצורך',
]

export default function CriminologicalOpinionPage() {
  return (
    <div className="pt-20">
      <div style={{ backgroundColor: '#0A1628' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>שירות</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">חוות דעת קרימינולוגית</h1>
          <p className="text-white/65 text-lg max-w-2xl">
            המסמך המשפטי-מקצועי המקיף ביותר שניתן להגיש לבית משפט בתיק פלילי.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5 text-gray-700 leading-relaxed">
            <p>
              חוות הדעת הקרימינולוגית היא מסמך מקיף הבוחן את הנאשם מכל הזוויות — פסיכולוגית, חברתית, משפחתית והיסטורית. הוא מספק לבית המשפט תמונה אנושית ומדויקת שאינה נגלית מתוך כתב האישום לבדו.
            </p>
            <p>
              המסמך נכתב בידי סתיו אווה פפו ו/או מומחה בכיר מהצוות שלנו, בהתבסס על כלים אבחוניים מוכרים בינלאומית ועל ניסיון מצטבר של מאות תיקים.
            </p>
            <h2 className="text-xl font-bold pt-4" style={{ color: '#0A1628' }}>מה כוללת חוות הדעת?</h2>
            <ul className="space-y-3">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#C9A84C' }} />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold mb-3" style={{ color: '#0A1628' }}>מתאים ל:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['תיקים פליליים מורכבים', 'הפחתת עונש', 'ערעורים', 'תיקי אלימות', 'עבירות כלכליות'].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/contact">
              <Button className="w-full text-white" style={{ backgroundColor: '#C9A84C' }}>בקשת שירות זה</Button>
            </Link>
            <Link href="/case-assessment">
              <Button variant="outline" className="w-full" style={{ borderColor: '#0A1628', color: '#0A1628' }}>הערכת התאמה</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
