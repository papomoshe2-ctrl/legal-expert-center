'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Clock, FileText, LayoutDashboard, Headphones, Star, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { lawyerCollaborationSchema, type LawyerCollaborationFormData } from '@/lib/validations'

const benefits = [
  { icon: Clock, title: 'מענה ב-24 שעות', description: 'קבלת הצעת מחיר ולוח זמנים ביום הפנייה.' },
  { icon: FileText, title: 'דוחות ממוקדי בית משפט', description: 'כתיבה משפטית-מקצועית המותאמת לציפיות השופטים.' },
  { icon: LayoutDashboard, title: 'פורטל מעקב ייעודי', description: 'גישה לסטטוס התיק, מסמכים ועדכונים בזמן אמת.' },
  { icon: Headphones, title: 'זמינות מלאה', description: 'ליווי לפגישות הכנה, עדות בבית משפט ושאלות בדרך.' },
  { icon: Star, title: 'עדיפות לשותפים', description: 'לקוחות קבועים מקבלים עדיפות בתור ותנאים מיוחדים.' },
]

const process = [
  { step: '01', title: 'פנייה ראשונית', description: 'שלחו את פרטי התיק בטופס הבא. נחזור תוך 24 שעות.' },
  { step: '02', title: 'פגישת היכרות', description: 'שיחה קצרה להבנת הצרכים וקביעת לוח זמנים.' },
  { step: '03', title: 'הגשת חומרים', description: 'העבירו את מסמכי התיק דרך הפורטל המאובטח שלנו.' },
  { step: '04', title: 'עריכת חוות הדעת', description: 'הצוות שלנו עובד על החוות דעת תוך פרקי הזמן שנקבעו.' },
  { step: '05', title: 'עדות בבית המשפט', description: 'המומחה מגיע לעדות מוכן ומקצועי — לצידכם עד הסוף.' },
]

export default function ForLawyersPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<LawyerCollaborationFormData>({
    resolver: zodResolver(lawyerCollaborationSchema),
  })

  const onSubmit = async (data: LawyerCollaborationFormData) => {
    await new Promise((r) => setTimeout(r, 800))
    console.log('Lawyer form:', data)
    reset()
    alert('הבקשה נשלחה בהצלחה! ניצור איתך קשר בהקדם.')
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#0A1628' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>
              לעורכי דין
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5">
              שירותי מומחים
              <br />
              <span style={{ color: '#C9A84C' }}>למשרדי עורכי דין</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl">
              שותפות מקצועית שמשדרגת כל תיק — ממתן חוות דעת קרימינולוגית ועד עדות בבית המשפט.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ color: '#0A1628' }}>מה אנחנו מציעים לעורכי דין</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(10,22,40,0.06)' }}>
                  <b.icon className="w-5 h-5" style={{ color: '#0A1628' }} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: '#0A1628' }}>{b.title}</h3>
                <p className="text-sm text-gray-500">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#0A1628' }}>איך עובד התהליך</h2>
          <div className="space-y-4">
            {process.map((step) => (
              <div key={step.step} className="flex gap-5 items-start bg-white p-6 rounded-2xl border border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: '#0A1628', color: '#C9A84C' }}
                >
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: '#0A1628' }}>{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3" style={{ color: '#0A1628' }}>פתיחת שיתוף פעולה</h2>
            <p className="text-gray-500 text-sm">מלאו את הטופס ונחזור אליכם תוך 24 שעות</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>שם מלא *</Label>
                <Input {...register('name')} placeholder="עו״ד שם משפחה" />
                {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label>שם המשרד *</Label>
                <Input {...register('firm')} placeholder="משרד עורכי דין" />
                {errors.firm && <p className="text-xs text-red-500">{errors.firm.message}</p>}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>טלפון *</Label>
                <Input {...register('phone')} placeholder="05X-XXXXXXX" dir="ltr" />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label>אימייל *</Label>
                <Input {...register('email')} placeholder="lawyer@firm.co.il" dir="ltr" />
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>תחום התמחות *</Label>
              <Input {...register('specialization')} placeholder="דין פלילי, משפחה, נוער..." />
              {errors.specialization && <p className="text-xs text-red-500">{errors.specialization.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label>הודעה נוספת</Label>
              <Textarea {...register('message')} placeholder="תארו את הצרכים הספציפיים שלכם..." rows={3} />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-white font-semibold"
              style={{ backgroundColor: '#C9A84C' }}
            >
              {isSubmitting ? 'שולח...' : 'שליחת בקשת שיתוף פעולה'}
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}
