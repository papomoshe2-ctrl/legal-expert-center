import { CheckCircle, Award, BookOpen, Users, Scale } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'אודות — המרכז לחוות דעת משפטיות',
}

const timeline = [
  { year: '2009', event: 'תואר ראשון בפסיכולוגיה ועבודה סוציאלית, אוניברסיטת בר-אילן' },
  { year: '2011', event: 'תואר שני בקרימינולוגיה קלינית, אוניברסיטת בר-אילן' },
  { year: '2012', event: 'התמחות ב-HCR-20 ו-PCL-R בהשתלמות בינלאומית' },
  { year: '2013', event: 'מינוי כמומחית מטעם בתי משפט — ראשון לציון ותל אביב' },
  { year: '2016', event: 'ייסוד המרכז לחוות דעת משפטיות ומומחים בישראל' },
  { year: '2020', event: 'הרחבת הרשת — 48 מומחים ו-200 עורכי דין שותפים' },
  { year: '2024', event: '500 חוות דעת שהוגשו לבתי משפט בכל רחבי הארץ' },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#0A1628' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>
              אודות
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5">
              סתיו אווה פפו
            </h1>
            <p className="text-xl text-white/70 mb-3">קרימינולוגית קלינית בכירה</p>
            <p className="text-white/55 leading-relaxed max-w-2xl">
              מומחית מוסמכת בעלת ניסיון של למעלה מ-15 שנה, מייסדת ומנהלת המרכז לחוות דעת משפטיות ומומחים בישראל.
            </p>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            <div className="lg:col-span-2 space-y-5 text-gray-700 leading-relaxed">
              <p>
                סתיו אווה פפו מחזיקה בתואר שני בקרימינולוגיה קלינית מאוניברסיטת בר-אילן ובמוסמכות בכלי הערכה בינלאומיים כגון HCR-20, PCL-R ו-LSI-R. מעל 15 שנות ניסיון בשטח, מאות תיקים פליליים, משפחתיים ונוער — והכרה של כל ערכאות המשפט בישראל.
              </p>
              <p>
                גישתה הייחודית שילוב בין ידע מדעי מובהק לבין הבנה עמוקה של מערכת המשפט הישראלית. כל חוות דעת שהיא מכינה נכתבת לא רק כמסמך מקצועי — אלא כנשק הגנה אפקטיבי בידי עורך הדין.
              </p>
              <p>
                בשנת 2016 ייסדה סתיו את המרכז לחוות דעת משפטיות ומומחים, מתוך ראיה כי השוק הישראלי זקוק לגוף מקצועי, שקוף ואמין שיוכל לשרת הן עורכי דין והן נאשמים ומשפחותיהם.
              </p>
              <p>
                כיום עומדת סתיו בראש רשת של למעלה מ-48 מומחים מתחומים שונים — פסיכולוגיה קלינית, פסיכיאטריה, עבודה סוציאלית, קרימינולוגיה ועוד — המספקת מענה הוליסטי לכל צרכי חוות הדעת המשפטית.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Award, label: '15+ שנות ניסיון' },
                { icon: BookOpen, label: '500+ חוות דעת' },
                { icon: Users, label: '200+ עורכי דין שותפים' },
                { icon: Scale, label: 'הכרה בכל ערכאות המשפט' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <item.icon className="w-5 h-5 flex-shrink-0" style={{ color: '#C9A84C' }} />
                  <span className="text-sm font-medium" style={{ color: '#0A1628' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 text-center" style={{ color: '#0A1628' }}>ציר זמן מקצועי</h2>
          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-5 items-start">
                <div
                  className="w-16 text-sm font-bold flex-shrink-0 text-center py-1 rounded-lg"
                  style={{ backgroundColor: 'rgba(201,168,76,0.15)', color: '#C9A84C' }}
                >
                  {item.year}
                </div>
                <div className="flex items-start gap-3 flex-1 pt-0.5">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#C9A84C' }} />
                  <p className="text-sm text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#0A1628' }}>מוכנים להתחיל?</h2>
        <p className="text-gray-500 mb-7 text-sm">צרו קשר לייעוץ ראשוני ללא עלות</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button className="text-white" style={{ backgroundColor: '#C9A84C' }}>קבלת ייעוץ ראשוני</Button>
          </Link>
          <Link href="/case-assessment">
            <Button variant="outline" style={{ borderColor: '#0A1628', color: '#0A1628' }}>הערכת תיק חינם</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
