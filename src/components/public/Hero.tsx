'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Award, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#0A1628' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(201,168,76,0.3) 39px, rgba(201,168,76,0.3) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(201,168,76,0.3) 39px, rgba(201,168,76,0.3) 40px)',
          }}
        />
      </div>

      {/* Stav photo — right side desktop */}
      <div className="absolute left-0 bottom-0 h-full w-1/2 hidden lg:block pointer-events-none select-none">
        <div className="relative h-full w-full">
          <Image
            src="/stav-papo.jpg"
            alt="סתיו אווה פפו — קרימינולוגית קלינית"
            fill
            priority
            className="object-cover object-top"
            style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to top, transparent 0%, black 8%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to top, transparent 0%, black 8%)', maskComposite: 'intersect', WebkitMaskComposite: 'source-in' }}
          />
          {/* Gradient overlay to blend into navy */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0A1628 0%, transparent 35%, transparent 65%, #0A1628 100%), linear-gradient(to top, #0A1628 0%, transparent 10%)' }} />
        </div>
      </div>

      {/* Gold accent line */}
      <div
        className="absolute top-0 right-0 w-1 h-full opacity-60"
        style={{ background: 'linear-gradient(to bottom, transparent, #C9A84C, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl lg:max-w-xl xl:max-w-2xl mr-0 lg:mr-auto lg:ml-0" style={{ marginRight: 'auto' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border text-sm font-medium"
            style={{ borderColor: 'rgba(201,168,76,0.4)', color: '#C9A84C', backgroundColor: 'rgba(201,168,76,0.08)' }}
          >
            <Award className="w-4 h-4" />
            המרכז המוביל לחוות דעת משפטיות בישראל
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            חוות דעת מקצועיות
            <br />
            <span style={{ color: '#C9A84C' }}>שמשנות תוצאות</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/70 mb-3 leading-relaxed"
          >
            בראשות <span className="text-white font-semibold">סתיו אווה פפו</span> — קרימינולוגית קלינית בכירה
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base text-white/55 mb-10 leading-relaxed max-w-2xl"
          >
            הערכות מסוכנות, חוות דעת קרימינולוגיות, תוכניות שיקום ועדויות מומחה — לבתי משפט, לעורכי דין ולנאשמים המבקשים ייצוג מקצועי ברמה הגבוהה ביותר.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="text-white font-semibold px-8 h-12 text-base shadow-lg"
                style={{ backgroundColor: '#C9A84C' }}
              >
                קבלת ייעוץ ראשוני
                <ArrowLeft className="w-4 h-4 mr-2 rtl-flip" />
              </Button>
            </Link>
            <Link href="/for-lawyers">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-[#0A1628] font-semibold px-8 h-12 text-base"
              >
                לעורכי דין
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-8"
          >
            {[
              { icon: Shield, value: '500+', label: 'תיקים מוצלחים' },
              { icon: Award, value: '15+', label: 'שנות ניסיון' },
              { icon: Users, value: '200+', label: 'עורכי דין שותפים' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(201,168,76,0.15)' }}
                >
                  <stat.icon className="w-5 h-5" style={{ color: '#C9A84C' }} />
                </div>
                <div>
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/50">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, rgba(10,22,40,0.8))' }} />
    </section>
  )
}
