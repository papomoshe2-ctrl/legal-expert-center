import Link from 'next/link'
import { Scale, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A1628' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#C9A84C' }}>
                <Scale className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight">המרכז לחוות דעת</p>
                <p className="text-xs text-white/60 leading-tight">משפטיות ומומחים בישראל</p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              הגוף המקצועי המוביל למתן חוות דעת קרימינולוגיות ומשפטיות בישראל, בראשות סתיו אווה פפו.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'Facebook'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors text-xs text-white/60"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm mb-4 text-[#C9A84C] uppercase tracking-wider">שירותים</h3>
            <ul className="space-y-2">
              {[
                { label: 'חוות דעת קרימינולוגית', href: '/services/criminological-opinion' },
                { label: 'הערכת מסוכנות', href: '/services/risk-assessment' },
                { label: 'הפחתת עונש', href: '/services/sentence-reduction' },
                { label: 'נוער בסיכון', href: '/services/juvenile-cases' },
                { label: 'משמורת ילדים', href: '/services/custody' },
                { label: 'תוכנית שיקום', href: '/services/rehabilitation' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-sm mb-4 text-[#C9A84C] uppercase tracking-wider">מידע נוסף</h3>
            <ul className="space-y-2">
              {[
                { label: 'אודות', href: '/about' },
                { label: 'לעורכי דין', href: '/for-lawyers' },
                { label: 'מרכז הידע', href: '/knowledge-center' },
                { label: 'הערכת תיק חינם', href: '/case-assessment' },
                { label: 'צור קשר', href: '/contact' },
                { label: 'מדיניות פרטיות', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm mb-4 text-[#C9A84C] uppercase tracking-wider">יצירת קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                <span>052-000-0000</span>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                <span>info@legal-experts.co.il</span>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span>תל אביב, ישראל</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} המרכז לחוות דעת משפטיות ומומחים בישראל. כל הזכויות שמורות.
          </p>
          <p className="text-white/40 text-xs">
            בראשות סתיו אווה פפו — קרימינולוגית קלינית
          </p>
        </div>
      </div>
    </footer>
  )
}
