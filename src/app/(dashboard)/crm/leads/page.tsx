import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export const metadata = { title: 'לידים — CRM' }

const leads = [
  { id: '1', name: 'ישראל כהן', phone: '050-1234567', email: 'israel@example.com', caseType: 'פלילי', urgency: 'דחוף', status: 'new', date: '08/06/2025' },
  { id: '2', name: 'מרים לוי', phone: '052-9876543', email: 'miriam@example.com', caseType: 'משמורת', urgency: 'השבוע', status: 'contacted', date: '07/06/2025' },
  { id: '3', name: 'דוד אברהם', phone: '054-5556677', email: 'david@example.com', caseType: 'נוער', urgency: 'החודש', status: 'qualified', date: '05/06/2025' },
]

const statusLabels: Record<string, { label: string; color: string }> = {
  new: { label: 'חדש', color: '#6B7280' },
  contacted: { label: 'פנינו', color: '#3B82F6' },
  qualified: { label: 'מוסמך', color: '#F59E0B' },
  proposal: { label: 'הצעה', color: '#8B5CF6' },
  won: { label: 'נסגר', color: '#10B981' },
  lost: { label: 'אבד', color: '#EF4444' },
}

export default function LeadsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold" style={{ color: '#0A1628' }}>לידים</h1>
        <Button size="sm" className="text-white" style={{ backgroundColor: '#C9A84C' }}>
          <Plus className="w-4 h-4 ml-1" />
          הוסף ליד
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-50 flex gap-3">
          <div className="relative flex-1 max-w-xs">
            <Search className="w-4 h-4 absolute top-1/2 right-3 -translate-y-1/2 text-gray-400" />
            <Input placeholder="חיפוש לידים..." className="pr-9" />
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-right">
              {['שם', 'טלפון', 'אימייל', 'סוג תיק', 'דחיפות', 'סטטוס', 'תאריך', ''].map((h) => (
                <th key={h} className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {leads.map((lead) => {
              const status = statusLabels[lead.status]
              return (
                <tr key={lead.id} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 text-sm font-medium" style={{ color: '#0A1628' }}>{lead.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-500" dir="ltr">{lead.phone}</td>
                  <td className="px-4 py-3 text-sm text-gray-500" dir="ltr">{lead.email}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{lead.caseType}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{lead.urgency}</td>
                  <td className="px-4 py-3">
                    <Badge style={{ backgroundColor: `${status.color}15`, color: status.color, border: 'none' }} className="text-xs">
                      {status.label}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-400" dir="ltr">{lead.date}</td>
                  <td className="px-4 py-3">
                    <Link href={`/crm/leads/${lead.id}`}>
                      <Button size="sm" variant="ghost" className="text-xs">צפה</Button>
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
