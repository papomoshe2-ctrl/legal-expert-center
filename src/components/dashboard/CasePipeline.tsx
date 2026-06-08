import { Badge } from '@/components/ui/badge'

const stages = [
  {
    label: 'לידים חדשים',
    color: '#6B7280',
    items: [
      { id: 'L001', name: 'ישראל כהן', type: 'פלילי', date: 'היום' },
      { id: 'L002', name: 'מרים לוי', type: 'משמורת', date: 'אתמול' },
    ],
  },
  {
    label: 'בטיפול',
    color: '#3B82F6',
    items: [
      { id: 'L003', name: 'דוד אברהם', type: 'נוער', date: '2 ימים' },
    ],
  },
  {
    label: 'הצעת מחיר',
    color: '#F59E0B',
    items: [
      { id: 'L004', name: 'שרה ביטון', type: 'פלילי', date: '3 ימים' },
      { id: 'L005', name: 'יוסף משה', type: 'ערעור', date: '5 ימים' },
    ],
  },
  {
    label: 'תיק פעיל',
    color: '#10B981',
    items: [
      { id: 'C001', name: 'רחל גרין', type: 'הפחתת עונש', date: 'שבועיים' },
    ],
  },
  {
    label: 'הושלם',
    color: '#8B5CF6',
    items: [
      { id: 'C002', name: 'אברהם נגר', type: 'חוות דעת', date: 'חודש' },
    ],
  },
]

export default function CasePipeline() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-5" style={{ color: '#0A1628' }}>Pipeline — תיקים ולידים</h2>
      <div className="flex gap-4 overflow-x-auto pb-3">
        {stages.map((stage) => (
          <div key={stage.label} className="min-w-[200px] flex-shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: stage.color }} />
              <span className="text-xs font-semibold text-gray-600">{stage.label}</span>
              <span className="text-xs text-gray-400 mr-auto">({stage.items.length})</span>
            </div>
            <div className="space-y-2">
              {stage.items.map((item) => (
                <div key={item.id} className="bg-white border border-gray-100 rounded-xl p-3 hover:shadow-sm transition-shadow cursor-pointer">
                  <p className="text-sm font-medium" style={{ color: '#0A1628' }}>{item.name}</p>
                  <div className="flex items-center justify-between mt-2">
                    <Badge style={{ backgroundColor: `${stage.color}15`, color: stage.color, border: 'none' }} className="text-[10px]">
                      {item.type}
                    </Badge>
                    <span className="text-[10px] text-gray-400">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
