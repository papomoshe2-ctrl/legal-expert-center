'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Award, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: '#0A1628' }}
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(201,168,76,0.3) 39px, rgba(201,168,76,0.3) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(201,168,76,0.3) 39px, rgba(201,168,76,0.3) 40px)',
          }}
        />
      </div>

      {/* Gold accent line — right edge */}
      <div
        className="absolute top-0 right-0 w-1 h-full opacity-60 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #C9A84C, transparent)' }}
      />

      {/* ─── DESKTOP layout: two columns ─── */}
      <div className="hidden lg:flex flex-row-reverse min-h-screen">

        {/* LEFT col — Stav photo */}
        <div className="relative w-[45%] flex-shrink-0">
          <Image
            src="/stav-papo.png"
            alt="סתיו אווה פפו"
            fill
            priority
            className="object-cover object-top"
          />
          {/* Right-edge fade into navy */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, transparent 50%, #0A1628 100%), linear-gradient(to top, #0A1628 0%, transparent 8%)',
            }}
          />
        </div>

        {/* RIGHT col — content */}
        <div className="flex-1 flex items-center px-12 xl:px-20 py-40">
          <div className="max-w-xl">

            <motion.div
              initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border text-sm font-medium"
              style={{ borderColor: 'rgba(201,168,76,0.4)', color: '#C9A84C', backgroundColor: 'rgba(201,168,76,0.08)' }}
            >
              <Award className="w-4 h-4" />
              המרכז המוביל לחוות דעת משפטיות בישראל
            </motion.div>

            <motion.h1
              initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl xl:text-6xl font-bold text-white leading-tight mb-5"
            >
              חוות דעת מקצועיות
              <br />
              <span style={{ color: '#C9A84C' }}>שמשנות תוצאות</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 mb-3 leading-relaxed"
            >
              בראשות <span className="text-white font-semibold">סתיו אווה פפו</span> — קרימינולוגית קלינית בכירה
            </motion.p>

            <motion.p
              initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base text-white/50 mb-10 leading-relaxed"
            >
              הערכות מסוכנות, חוות דעת קרימינולוגיות, תוכניות שיקום ועדויות מומחה — לבתי משפט, לעורכי דין ולנאשמים המבקשים ייצוג ברמה הגבוהה ביותר.
            </motion.p>

            <motion.div
              initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link href="/contact">
                <Button size="lg" className="text-white font-semibold px-8 h-12 text-base shadow-lg" style={{ backgroundColor: '#C9A84C' }}>
                  קבלת ייעוץ ראשוני
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </Button>
              </Link>
              <Link href="/for-lawyers">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-[#0A1628] font-semibold px-8 h-12 text-base">
                  לעורכי דין
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-8"
            >
              {[
                { icon: Shield, value: '500+', label: 'תיקים מוצלחים' },
                { icon: Award, value: '15+', label: 'שנות ניסיון' },
                { icon: Users, value: '200+', label: 'עורכי דין שותפים' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(201,168,76,0.15)' }}>
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
      </div>

      {/* ─── MOBILE layout: stacked ─── */}
      <div className="lg:hidden flex flex-col min-h-screen">

        {/* Photo top half */}
        <div className="relative h-72 sm:h-96 w-full flex-shrink-0">
          <Image
            src="/stav-papo.png"
            alt="סתיו אווה פפו"
            fill
            priority
            className="object-cover object-top"
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(10,22,40,0.2) 0%, transparent 40%, #0A1628 100%)' }}
          />
        </div>

        {/* Content bottom half */}
        <div className="flex-1 px-5 pt-6 pb-16 text-center">

          <motion.div
            initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border text-xs font-medium"
            style={{ borderColor: 'rgba(201,168,76,0.4)', color: '#C9A84C', backgroundColor: 'rgba(201,168,76,0.08)' }}
          >
            <Award className="w-3 h-3" />
            המרכז המוביל לחוות דעת משפטיות בישראל
          </motion.div>

          <motion.h1
            initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4"
          >
            חוות דעת מקצועיות
            <br />
            <span style={{ color: '#C9A84C' }}>שמשנות תוצאות</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-white/70 mb-2"
          >
            בראשות <span className="text-white font-semibold">סתיו אווה פפו</span> — קרימינולוגית קלינית בכירה
          </motion.p>

          <motion.p
            initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm text-white/45 mb-8 leading-relaxed"
          >
            הערכות מסוכנות, חוות דעת קרימינולוגיות, תוכניות שיקום ועדויות מומחה לבתי משפט ועורכי דין.
          </motion.p>

          <motion.div
            initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row justify-center gap-3 mb-10"
          >
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto text-white font-semibold px-6 h-11 text-sm shadow-lg" style={{ backgroundColor: '#C9A84C' }}>
                קבלת ייעוץ ראשוני
              </Button>
            </Link>
            <Link href="/for-lawyers">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white font-semibold px-6 h-11 text-sm">
                לעורכי דין
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 1 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.45 }}
            className="flex justify-center gap-6"
          >
            {[
              { value: '500+', label: 'תיקים' },
              { value: '15+', label: 'שנות ניסיון' },
              { value: '200+', label: 'עורכי דין' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xl font-bold" style={{ color: '#C9A84C' }}>{stat.value}</p>
                <p className="text-xs text-white/40">{stat.label}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  )
}
