'use client'

import { Button } from '@/components/ui/button'
import type { LegalStage } from '@/types'

const options: { value: LegalStage; label: string; description: string }[] = [
  { value: 'investigation', label: 'חקירה', description: 'בשלב החקירה המשטרתית' },
  { value: 'indictment', label: 'כתב אישום', description: 'לאחר הגשת כתב אישום' },
  { value: 'hearing', label: 'דיון', description: 'במהלך הדיונים בבית המשפט' },
  { value: 'appeal', label: 'ערעור', description: 'שלב הערעור על פסיקה' },
]

interface Props {
  value?: LegalStage
  onChange: (v: LegalStage) => void
  onNext: () => void
  onPrev: () => void
}

export default function Step2LegalStage({ value, onChange, onNext, onPrev }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2" style={{ color: '#0A1628' }}>מהו השלב המשפטי הנוכחי?</h2>
      <p className="text-sm text-gray-500 mb-6">בחרו את השלב הנוכחי של ההליך המשפטי.</p>
      <div className="grid grid-cols-2 gap-3 mb-8">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`p-5 rounded-xl border-2 text-right transition-all ${
              value === opt.value
                ? 'border-[#C9A84C] bg-[#C9A84C]/5'
                : 'border-gray-100 hover:border-gray-200'
            }`}
          >
            <p className="font-bold text-sm" style={{ color: '#0A1628' }}>{opt.label}</p>
            <p className="text-xs text-gray-500 mt-1">{opt.description}</p>
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
