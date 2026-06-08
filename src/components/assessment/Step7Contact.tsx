'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { assessmentContactSchema, type AssessmentContactFormData } from '@/lib/validations'
import type { AssessmentData } from '@/types'
import { Loader2 } from 'lucide-react'

interface Props {
  onSubmit: (data: AssessmentData['contact']) => void
  onPrev: () => void
  isLoading: boolean
}

export default function Step7Contact({ onSubmit, onPrev, isLoading }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<AssessmentContactFormData>({
    resolver: zodResolver(assessmentContactSchema),
  })

  const submit = (data: AssessmentContactFormData) => {
    onSubmit({
      name: data.name,
      phone: data.phone,
      email: data.email || '',
      message: data.message || '',
    })
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2" style={{ color: '#0A1628' }}>פרטי יצירת קשר</h2>
      <p className="text-sm text-gray-500 mb-6">נחזור אליכם עם תוצאות ההערכה ואפשרויות המשך.</p>

      <form onSubmit={handleSubmit(submit)} className="space-y-4">
        <div className="space-y-1.5">
          <Label>שם מלא *</Label>
          <Input {...register('name')} placeholder="שם מלא" />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div className="space-y-1.5">
          <Label>טלפון *</Label>
          <Input {...register('phone')} placeholder="05X-XXXXXXX" dir="ltr" />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
        </div>

        <div className="space-y-1.5">
          <Label>אימייל</Label>
          <Input {...register('email')} placeholder="your@email.com" dir="ltr" />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div className="space-y-1.5">
          <Label>הערות נוספות</Label>
          <Textarea {...register('message')} placeholder="כל מידע נוסף שתרצו לשתף..." rows={3} />
        </div>

        <div className="flex gap-3 pt-2">
          <Button type="button" variant="outline" onClick={onPrev} className="flex-1" disabled={isLoading}>
            חזור
          </Button>
          <Button type="submit" disabled={isLoading} className="flex-1 text-white" style={{ backgroundColor: '#C9A84C' }}>
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                מנתח...
              </>
            ) : (
              'קבל הערכה'
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
