import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
export const metadata = { title: 'תיקים — Dashboard' }
const cases = [
  { id: 'C001', number: '2025-001', title: 'תיק אלימות', client: 'ישראל כהן', status: 'active', expert: 'סתיו פפו', deadline: '15/07/2025' },
  { id: 'C002', number: '2025-002', title: 'הפחתת עונש', client: 'מרים לוי', status: 'review', expert: 'ד"ר גל אברהם', deadline: '01/07/2025' },
]
const statusMap: Record<string, { label: string; color: string }> = {
  active: { label: 'פעיל', color: '#10B981' },
  review: { label: 'בבדיקה', color: '#F59E0B' },
  delivered: { label: 'נמסר', color: '#8B5CF6' },
  closed: { label: 'סגור', color: '#6B7280' },
}
export default function CasesPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold" style={{ color: '#0A1628' }}>תיקים</h1>
        <Button size="sm" className="text-white" style={{ backgroundColor: '#C9A84C' }}>
          <Plus className="w-4 h-4 ml-1" />
          תיק חדש
        </Button>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead><tr className="bg-gray-50 text-right">
            {['מספר', 'שם התיק', 'לקוח', 'מומחה', 'סטטוס', 'דדליין', ''].map(h => (
              <th key={h} className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase">{h}</th>
            ))}
          </tr></thead>
          <tbody className="divide-y divide-gray-50">
            {cases.map((c) => {
              const s = statusMap[c.status]
              return (
                <tr key={c.id} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 text-xs text-gray-400 font-mono" dir="ltr">{c.number}</td>
                  <td className="px-4 py-3 text-sm font-medium" style={{ color: '#0A1628' }}>{c.title}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{c.client}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{c.expert}</td>
                  <td className="px-4 py-3"><Badge style={{ backgroundColor: `${s.color}15`, color: s.color, border: 'none' }} className="text-xs">{s.label}</Badge></td>
                  <td className="px-4 py-3 text-xs text-gray-400" dir="ltr">{c.deadline}</td>
                  <td className="px-4 py-3"><Link href={`/cases/${c.id}`}><Button size="sm" variant="ghost" className="text-xs">צפה</Button></Link></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
