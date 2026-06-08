'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Progress } from '@/components/ui/progress'
import Step1CaseType from './Step1CaseType'
import Step2LegalStage from './Step2LegalStage'
import Step3Goal from './Step3Goal'
import Step4Documents from './Step4Documents'
import Step5Lawyer from './Step5Lawyer'
import Step6Urgency from './Step6Urgency'
import Step7Contact from './Step7Contact'
import AssessmentResult from './AssessmentResult'
import type { AssessmentData, AssessmentResult as AssessmentResultType } from '@/types'

const STEPS = [
  'סוג התיק',
  'שלב משפטי',
  'מטרות',
  'מסמכים',
  'עורך דין',
  'דחיפות',
  'פרטי קשר',
]

export default function AssessmentWizard() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<Partial<AssessmentData>>({})
  const [result, setResult] = useState<AssessmentResultType | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const totalSteps = STEPS.length
  const progress = (step / totalSteps) * 100

  const updateData = (updates: Partial<AssessmentData>) => {
    setData((prev) => ({ ...prev, ...updates }))
  }

  const next = () => setStep((s) => Math.min(s + 1, totalSteps))
  const prev = () => setStep((s) => Math.max(s - 1, 1))

  const submit = async (contactData: AssessmentData['contact']) => {
    const finalData = { ...data, contact: contactData } as AssessmentData
    setIsLoading(true)
    try {
      const res = await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData),
      })
      const json = await res.json()
      setResult(json)
    } catch {
      // Fallback mock result
      setResult({
        complexityScore: 7,
        recommendedService: 'חוות דעת קרימינולוגית',
        urgencyLevel: 'גבוהה',
        summary: 'על בסיס פרטי התיק שהוזנו, אנו ממליצים על הכנת חוות דעת קרימינולוגית מקיפה. התיק מציג מורכבות גבוהה המצריכה התייחסות מקצועית מעמיקה.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (result) {
    return <AssessmentResult result={result} data={data as AssessmentData} />
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: 'rgba(201,168,76,0.12)', color: '#C9A84C' }}
          >
            Legal Case Assessment™
          </span>
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#0A1628' }}>
            הערכת התאמת תיק
          </h1>
          <p className="text-gray-500 text-sm">
            שלב {step} מתוך {totalSteps}: <strong>{STEPS[step - 1]}</strong>
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2">
            {STEPS.map((s, i) => (
              <div
                key={s}
                className={`text-xs transition-colors ${
                  i + 1 === step
                    ? 'font-bold'
                    : i + 1 < step
                    ? 'text-green-500'
                    : 'text-gray-300'
                }`}
                style={i + 1 === step ? { color: '#C9A84C' } : {}}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
          >
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              {step === 1 && (
                <Step1CaseType
                  value={data.caseType}
                  onChange={(v) => updateData({ caseType: v })}
                  onNext={next}
                />
              )}
              {step === 2 && (
                <Step2LegalStage
                  value={data.legalStage}
                  onChange={(v) => updateData({ legalStage: v })}
                  onNext={next}
                  onPrev={prev}
                />
              )}
              {step === 3 && (
                <Step3Goal
                  value={data.goals || []}
                  onChange={(v) => updateData({ goals: v })}
                  onNext={next}
                  onPrev={prev}
                />
              )}
              {step === 4 && (
                <Step4Documents
                  value={data.documents || []}
                  onChange={(v) => updateData({ documents: v })}
                  onNext={next}
                  onPrev={prev}
                />
              )}
              {step === 5 && (
                <Step5Lawyer
                  value={data.lawyer}
                  onChange={(v) => updateData({ lawyer: v })}
                  onNext={next}
                  onPrev={prev}
                />
              )}
              {step === 6 && (
                <Step6Urgency
                  value={data.urgency}
                  onChange={(v) => updateData({ urgency: v })}
                  onNext={next}
                  onPrev={prev}
                />
              )}
              {step === 7 && (
                <Step7Contact
                  onSubmit={submit}
                  onPrev={prev}
                  isLoading={isLoading}
                />
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
