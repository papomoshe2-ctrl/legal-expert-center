'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Scale, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  {
    label: 'שירותים',
    href: '/services',
    children: [
      { label: 'חוות דעת קרימינולוגית', href: '/services/criminological-opinion' },
      { label: 'הערכת מסוכנות', href: '/services/risk-assessment' },
      { label: 'הפחתת עונש', href: '/services/sentence-reduction' },
      { label: 'נוער בסיכון', href: '/services/juvenile-cases' },
      { label: 'משמורת ילדים', href: '/services/custody' },
      { label: 'תוכנית שיקום', href: '/services/rehabilitation' },
    ],
  },
  { label: 'לעורכי דין', href: '/for-lawyers' },
  { label: 'אודות', href: '/about' },
  { label: 'מרכז הידע', href: '/knowledge-center' },
  { label: 'צור קשר', href: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#C9A84C' }}>
              <Scale className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <p
                className={cn(
                  'text-sm font-bold leading-tight transition-colors',
                  isScrolled ? 'text-[#0A1628]' : 'text-white'
                )}
              >
                המרכז לחוות דעת
              </p>
              <p
                className={cn(
                  'text-xs leading-tight transition-colors',
                  isScrolled ? 'text-gray-500' : 'text-white/80'
                )}
              >
                משפטיות ומומחים
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    isScrolled
                      ? 'text-gray-700 hover:text-[#0A1628] hover:bg-gray-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3 h-3 opacity-60" />}
                </Link>

                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full right-0 mt-1 w-52 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#0A1628] hover:text-white transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/case-assessment">
              <Button
                size="sm"
                variant="outline"
                className={cn(
                  'border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white transition-all',
                  !isScrolled && 'border-white/60 text-white hover:bg-white hover:text-[#0A1628]'
                )}
              >
                בדיקת התאמת תיק
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="sm"
                className="text-white font-semibold"
                style={{ backgroundColor: '#0A1628' }}
              >
                ייעוץ ראשוני
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={cn(
              'lg:hidden p-2 rounded-md transition-colors',
              isScrolled ? 'text-gray-700' : 'text-white'
            )}
            aria-label="תפריט ניווט"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3 text-gray-800 font-medium rounded-md hover:bg-gray-50 text-base"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pr-4 space-y-1 mb-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setIsMobileOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-[#0A1628]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <Link href="/case-assessment" onClick={() => setIsMobileOpen(false)}>
                <Button variant="outline" className="w-full border-[#C9A84C] text-[#C9A84C]">
                  בדיקת התאמת תיק
                </Button>
              </Link>
              <Link href="/contact" onClick={() => setIsMobileOpen(false)}>
                <Button className="w-full text-white" style={{ backgroundColor: '#0A1628' }}>
                  ייעוץ ראשוני
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
