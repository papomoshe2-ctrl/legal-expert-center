'use client'

import { Button } from '@/components/ui/button'
import type { CaseType } from '@/types'

const options: { value: CaseType; label: string; description: string }[] = [
  { value: 'criminal', label: 'פלילי', description: 'תיק עונשין, כתב אישום, חקירה' },
  { value: 'family', label: 'משפחה', description: 'גירושים, משמורת, מזונות' },
  { value: 'juvenile', label: 'נוער', description: 'עבירות קטינים, בית משפט לנוער' },
  { value: 'other', label: 'אחר', description: 'תחום אחר הדורש חוות דעת' },
]

interface Props {
  value?: CaseType
  onChange: (v: CaseType) => void
  onNext: () => void
}

export default function Step1CaseType({ value, onChange, onNext }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2" style={{ color: '#0A1628' }}>מהו סוג התיק?</h2>
      <p className="text-sm text-gray-500 mb-6">בחרו את הקטגוריה המתאימה ביותר לתיק שלכם.</p>
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
      <Button
        onClick={onNext}
        disabled={!value}
        className="w-full text-white"
        style={{ backgroundColor: '#0A1628' }}
      >
        המשך
      </Button>
    </div>
  )
}
