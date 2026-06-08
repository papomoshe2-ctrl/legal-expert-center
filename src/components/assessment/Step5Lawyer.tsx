'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface LawyerInfo {
  name: string
  firm: string
  phone: string
  email: string
}

interface Props {
  value?: LawyerInfo
  onChange: (v: LawyerInfo | undefined) => void
  onNext: () => void
  onPrev: () => void
}

export default function Step5Lawyer({ value, onChange, onNext, onPrev }: Props) {
  const [hasLawyer, setHasLawyer] = useState<boolean | null>(value !== undefined ? true : null)
  const [form, setForm] = useState<LawyerInfo>(value || { name: '', firm: '', phone: '', email: '' })

  const handleToggle = (has: boolean) => {
    setHasLawyer(has)
    if (!has) onChange(undefined)
  }

  const handleChange = (field: keyof LawyerInfo, val: string) => {
    const updated = { ...form, [field]: val }
    setForm(updated)
    onChange(updated)
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2" style={{ color: '#0A1628' }}>האם יש לכם עורך דין?</h2>
      <p className="text-sm text-gray-500 mb-6">מידע זה אינו חובה, אך יעזור לנו להתאים את השירות.</p>

      <div className="flex gap-3 mb-6">
        {[
          { val: true, label: 'כן, יש לי עורך דין' },
          { val: false, label: 'לא, אין לי כרגע' },
        ].map((opt) => (
          <button
            key={String(opt.val)}
            onClick={() => handleToggle(opt.val)}
            className={`flex-1 p-4 rounded-xl border-2 text-sm font-medium transition-all ${
              hasLawyer === opt.val
                ? 'border-[#C9A84C] bg-[#C9A84C]/5 text-[#0A1628]'
                : 'border-gray-100 text-gray-600 hover:border-gray-200'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {hasLawyer === true && (
        <div className="space-y-4 mb-6">
          <div className="space-y-1.5">
            <Label>שם עורך הדין</Label>
            <Input value={form.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="עו״ד ישראל ישראלי" />
          </div>
          <div className="space-y-1.5">
            <Label>שם המשרד</Label>
            <Input value={form.firm} onChange={(e) => handleChange('firm', e.target.value)} placeholder="משרד ישראלי ושות׳" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>טלפון</Label>
              <Input value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} placeholder="05X-XXXXXXX" dir="ltr" />
            </div>
            <div className="space-y-1.5">
              <Label>אימייל</Label>
              <Input value={form.email} onChange={(e) => handleChange('email', e.target.value)} placeholder="lawyer@firm.co.il" dir="ltr" />
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <Button variant="outline" onClick={onPrev} className="flex-1">חזור</Button>
        <Button onClick={onNext} disabled={hasLawyer === null} className="flex-1 text-white" style={{ backgroundColor: '#0A1628' }}>המשך</Button>
      </div>
    </div>
  )
}
