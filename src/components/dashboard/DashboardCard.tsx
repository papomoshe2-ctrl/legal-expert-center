import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Props {
  title: string
  value: string | number
  subtitle?: string
  icon: LucideIcon
  trend?: string
  trendUp?: boolean
  color?: string
}

export default function DashboardCard({ title, value, subtitle, icon: Icon, trend, trendUp, color = '#C9A84C' }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">{title}</p>
          <p className="text-3xl font-bold" style={{ color: '#0A1628' }}>{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${color}18` }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
      </div>
      {trend && (
        <div className={cn('text-xs font-medium flex items-center gap-1', trendUp ? 'text-green-500' : 'text-red-500')}>
          <span>{trendUp ? '↑' : '↓'}</span>
          <span>{trend}</span>
        </div>
      )}
    </div>
  )
}
