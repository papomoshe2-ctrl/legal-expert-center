'use client'

import { Button } from '@/components/ui/button'
import type { Urgency } from '@/types'

const options: { value: Urgency; label: string; description: string; color: string }[] = [
  { value: 'immediate', label: 'דחוף מאוד', description: 'נדרשת תגובה תוך 24–48 שעות', color: '#EF4444' },
  { value: 'this_week', label: 'השבוע', description: 'נדרשת חוות הדעת השבוע הנוכחי', color: '#F97316' },
  { value: 'this_month', label: 'החודש', description: 'בתוך מספר שבועות', color: '#EAB308' },
  { value: 'no_rush', label: 'ללא לחץ זמן', description: 'יש זמן לתכנון מסודר', color: '#22C55E' },
]

interface Props {
  value?: Urgency
  onChange: (v: Urgency) => void
  onNext: () => void
  onPrev: () => void
}

export default function Step6Urgency({ value, onChange, onNext, onPrev }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2" style={{ color: '#0A1628' }}>מהי רמת הדחיפות?</h2>
      <p className="text-sm text-gray-500 mb-6">נשתמש במידע זה כדי לתעדף את הטיפול בפנייתכם.</p>
      <div className="space-y-3 mb-8">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`w-full p-4 rounded-xl border-2 text-right flex items-center gap-4 transition-all ${
              value === opt.value
                ? 'border-[#C9A84C] bg-[#C9A84C]/5'
                : 'border-gray-100 hover:border-gray-200'
            }`}
          >
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: opt.color }} />
            <div>
              <p className="font-semibold text-sm" style={{ color: '#0A1628' }}>{opt.label}</p>
              <p className="text-xs text-gray-500">{opt.description}</p>
            </div>
          </button>
        ))}
      </div>
      <div className="flex gap-3">
        <Button variant="outline" onClick={onPrev} className="flex-1">חזור</Button>
        <Button onClick={onNext} disabled={!value} className="flex-1 text-white" style={{ backgroundColor: '#0A1628' }}>המשך</Button>
      </div>
    </div>
  )
}
