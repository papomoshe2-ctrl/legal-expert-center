'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard, Users, Briefcase, Scale, UserCircle, Settings,
  ChevronLeft, LogOut
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'לוח בקרה', href: '/crm', icon: LayoutDashboard },
  { label: 'לידים', href: '/crm/leads', icon: Users },
  { label: 'תיקים', href: '/cases', icon: Briefcase },
  { label: 'פורטל עורכי דין', href: '/lawyer-portal', icon: Scale },
  { label: 'פורטל לקוחות', href: '/client-portal', icon: UserCircle },
  { label: 'פורטל מומחים', href: '/expert-portal', icon: Users },
  { label: 'ניהול', href: '/admin', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 flex-shrink-0 flex flex-col h-screen sticky top-0" style={{ backgroundColor: '#0A1628' }}>
      {/* Logo */}
      <div className="p-5 border-b border-white/10">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#C9A84C' }}>
            <Scale className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-xs font-bold text-white leading-tight">המרכז לחוות דעת</p>
            <p className="text-[10px] text-white/40">Dashboard</p>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + '/')
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all',
                active
                  ? 'text-white'
                  : 'text-white/55 hover:text-white hover:bg-white/5'
              )}
              style={active ? { backgroundColor: 'rgba(201,168,76,0.2)', color: '#C9A84C' } : {}}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {item.label}
              {active && <ChevronLeft className="w-3 h-3 mr-auto opacity-60" />}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-white/10">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all"
        >
          <LogOut className="w-4 h-4" />
          יציאה לאתר
        </Link>
      </div>
    </aside>
  )
}
