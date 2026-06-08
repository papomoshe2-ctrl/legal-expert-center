'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Download, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { AssessmentData, AssessmentResult as ResultType } from '@/types'

interface Props {
  result: ResultType
  data: AssessmentData
}

const urgencyMap: Record<string, { label: string; color: string }> = {
  immediate: { label: 'דחוף מאוד', color: '#EF4444' },
  this_week: { label: 'השבוע', color: '#F97316' },
  this_month: { label: 'החודש', color: '#EAB308' },
  no_rush: { label: 'ללא לחץ', color: '#22C55E' },
}

export default function AssessmentResult({ result, data }: Props) {
  const urgency = urgencyMap[data.urgency] || { label: result.urgencyLevel, color: '#C9A84C' }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
        >
          {/* Header */}
          <div className="p-8 text-center border-b border-gray-100" style={{ backgroundColor: '#0A1628' }}>
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: 'rgba(201,168,76,0.2)' }}
            >
              <CheckCircle className="w-7 h-7" style={{ color: '#C9A84C' }} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">תוצאות ההערכה</h2>
            <p className="text-white/60 text-sm">Legal Case Assessment™</p>
          </div>

          <div className="p-8">
            {/* Score */}
            <div className="flex items-center justify-between mb-6 p-5 bg-gray-50 rounded-xl">
              <div>
                <p className="text-xs text-gray-500 mb-1">מורכבות התיק</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold" style={{ color: '#0A1628' }}>
                    {result.complexityScore}
                  </span>
                  <span className="text-xl text-gray-400 mb-1">/10</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1">דחיפות</p>
                <Badge
                  className="font-semibold"
                  style={{ backgroundColor: `${urgency.color}15`, color: urgency.color, border: 'none' }}
                >
                  {urgency.label}
                </Badge>
              </div>
            </div>

            {/* Recommended Service */}
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">שירות מומלץ</p>
              <div
                className="p-4 rounded-xl border-2"
                style={{ borderColor: 'rgba(201,168,76,0.3)', backgroundColor: 'rgba(201,168,76,0.04)' }}
              >
                <p className="font-bold text-lg" style={{ color: '#0A1628' }}>{result.recommendedService}</p>
              </div>
            </div>

            {/* AI Summary */}
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">סיכום מקצועי</p>
              <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 p-4 rounded-xl">{result.summary}</p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <Link href="/contact">
                <Button
                  className="w-full text-white font-semibold"
                  style={{ backgroundColor: '#C9A84C' }}
                >
                  <MessageCircle className="w-4 h-4 ml-2" />
                  קבלת ייעוץ ראשוני
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full border-gray-200"
                onClick={() => window.print()}
              >
                <Download className="w-4 h-4 ml-2" />
                הדפסת סיכום PDF
              </Button>
            </div>

            <p className="text-center text-xs text-gray-400 mt-4">
              קיבלתם הצעת ייעוץ ללא עלות — ניצור איתכם קשר בהקדם
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
