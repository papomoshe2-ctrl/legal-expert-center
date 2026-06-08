'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { contactSchema, type ContactFormData } from '@/lib/validations'

export default function ContactSection() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 1000))
    console.log('Contact form:', data)
    reset()
    alert('ההודעה נשלחה בהצלחה! ניצור איתך קשר בהקדם.')
  }

  return (
    <section className="py-20 lg:py-28 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
              צור קשר
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-5" style={{ color: '#0A1628' }}>
              נשמח לשמוע ממכם
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              פנו אלינו לייעוץ ראשוני ללא עלות. נחזור אליכם תוך 24 שעות עם הערכה ראשונית ופרטים נוספים.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Phone, label: 'טלפון', value: '052-000-0000' },
                { icon: Mail, label: 'אימייל', value: 'info@legal-experts.co.il' },
                { icon: MapPin, label: 'מיקום', value: 'תל אביב, ישראל' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(201,168,76,0.12)' }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: '#C9A84C' }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">{item.label}</p>
                    <p className="text-sm font-medium" style={{ color: '#0A1628' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="p-5 rounded-xl border border-gray-100">
              <p className="text-sm font-semibold mb-3" style={{ color: '#0A1628' }}>שעות פעילות</p>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex justify-between"><span>ראשון — חמישי</span><span className="font-medium">09:00 — 18:00</span></div>
                <div className="flex justify-between"><span>שישי</span><span className="font-medium">09:00 — 13:00</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold" style={{ color: '#0A1628' }}>שלח הודעה</h3>

              <div className="space-y-2">
                <Label htmlFor="name">שם מלא *</Label>
                <Input id="name" {...register('name')} placeholder="שם מלא" />
                {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">טלפון *</Label>
                <Input id="phone" {...register('phone')} placeholder="05X-XXXXXXX" dir="ltr" />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">אימייל</Label>
                <Input id="email" {...register('email')} placeholder="your@email.com" dir="ltr" />
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">הודעה *</Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  placeholder="תארו בקצרה את הנושא שבו אתם זקוקים לסיוע..."
                  rows={4}
                />
                {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white font-semibold"
                style={{ backgroundColor: '#0A1628' }}
              >
                {isSubmitting ? 'שולח...' : (
                  <>
                    <Send className="w-4 h-4 ml-2" />
                    שלח הודעה
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
