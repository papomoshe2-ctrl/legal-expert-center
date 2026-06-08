import { Badge } from '@/components/ui/badge'

const statusMap: Record<string, { label: string; color: string }> = {
  new: { label: 'חדש', color: '#6B7280' },
  contacted: { label: 'פנינו', color: '#3B82F6' },
  qualified: { label: 'מוסמך', color: '#F59E0B' },
  proposal: { label: 'הצעה', color: '#8B5CF6' },
  won: { label: 'נסגר', color: '#10B981' },
  lost: { label: 'אבד', color: '#EF4444' },
}

const leads = [
  { id: 'L001', name: 'ישראל כהן', phone: '050-1234567', caseType: 'פלילי', urgency: 'דחוף', status: 'new', date: '08/06/2025' },
  { id: 'L002', name: 'מרים לוי', phone: '052-9876543', caseType: 'משמורת', urgency: 'השבוע', status: 'contacted', date: '07/06/2025' },
  { id: 'L003', name: 'דוד אברהם', phone: '054-5556677', caseType: 'נוער', urgency: 'החודש', status: 'qualified', date: '05/06/2025' },
  { id: 'L004', name: 'שרה ביטון', phone: '058-1112233', caseType: 'ערעור', urgency: 'דחוף', status: 'proposal', date: '03/06/2025' },
  { id: 'L005', name: 'יוסף משה', phone: '050-4445566', caseType: 'פלילי', urgency: 'ללא לחץ', status: 'won', date: '01/06/2025' },
]

export default function LeadTable() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-50">
        <h3 className="font-bold text-sm" style={{ color: '#0A1628' }}>לידים אחרונים</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-right">
              {['שם', 'טלפון', 'סוג תיק', 'דחיפות', 'סטטוס', 'תאריך'].map((h) => (
                <th key={h} className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {leads.map((lead) => {
              const status = statusMap[lead.status]
              return (
                <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors cursor-pointer">
                  <td className="px-4 py-3 text-sm font-medium" style={{ color: '#0A1628' }}>{lead.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-500" dir="ltr">{lead.phone}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{lead.caseType}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{lead.urgency}</td>
                  <td className="px-4 py-3">
                    <Badge style={{ backgroundColor: `${status.color}15`, color: status.color, border: 'none' }} className="text-xs">
                      {status.label}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-400" dir="ltr">{lead.date}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
