'use client'

import { Button } from '@/components/ui/button'
import type { CaseGoal } from '@/types'

const options: { value: CaseGoal; label: string }[] = [
  { value: 'sentence_reduction', label: 'הפחתת עונש' },
  { value: 'risk_assessment', label: 'הערכת מסוכנות' },
  { value: 'rehabilitation', label: 'תוכנית שיקום' },
  { value: 'custody', label: 'משמורת ילדים' },
  { value: 'expert_opinion', label: 'חוות דעת מומחה' },
]

interface Props {
  value: CaseGoal[]
  onChange: (v: CaseGoal[]) => void
  onNext: () => void
  onPrev: () => void
}

export default function Step3Goal({ value, onChange, onNext, onPrev }: Props) {
  const toggle = (goal: CaseGoal) => {
    onChange(value.includes(goal) ? value.filter((g) => g !== goal) : [...value, goal])
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2" style={{ color: '#0A1628' }}>מהן המטרות העיקריות?</h2>
      <p className="text-sm text-gray-500 mb-6">ניתן לבחור מספר מטרות.</p>
      <div className="space-y-2 mb-8">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => toggle(opt.value)}
            className={`w-full p-4 rounded-xl border-2 text-right flex items-center gap-3 transition-all ${
              value.includes(opt.value)
                ? 'border-[#C9A84C] bg-[#C9A84C]/5'
                : 'border-gray-100 hover:border-gray-200'
            }`}
          >
            <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${
              value.includes(opt.value) ? 'border-[#C9A84C] bg-[#C9A84C]' : 'border-gray-300'
            }`}>
              {value.includes(opt.value) && <span className="text-white text-xs">✓</span>}
            </div>
            <span className="text-sm font-medium" style={{ color: '#0A1628' }}>{opt.label}</span>
          </button>
        ))}
      </div>
      <div className="flex gap-3">
        <Button variant="outline" onClick={onPrev} className="flex-1">חזור</Button>
        <Button onClick={onNext} disabled={value.length === 0} className="flex-1 text-white" style={{ backgroundColor: '#0A1628' }}>המשך</Button>
      </div>
    </div>
  )
}
