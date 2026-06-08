import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = { title: 'תוכנית שיקום — המרכז לחוות דעת משפטיות' }

export default function Page() {
  return (
    <div className="pt-20">
      <div style={{ backgroundColor: '#0A1628' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>שירות</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">תוכנית שיקום</h1>
          <p className="text-white/65 text-lg">שירות מקצועי מותאם לצרכים שלכם.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-gray-600 leading-relaxed mb-8">
          המרכז לחוות דעת משפטיות מספק שירות תוכנית שיקום ברמה הגבוהה ביותר, המבוסס על כלים אבחוניים מדעיים מוכרים וניסיון מצטבר של מאות תיקים.
        </p>
        <div className="flex gap-4">
          <Link href="/contact">
            <Button className="text-white" style={{ backgroundColor: '#C9A84C' }}>בקשת שירות זה</Button>
          </Link>
          <Link href="/case-assessment">
            <Button variant="outline" style={{ borderColor: '#0A1628', color: '#0A1628' }}>הערכת התאמה חינם</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
