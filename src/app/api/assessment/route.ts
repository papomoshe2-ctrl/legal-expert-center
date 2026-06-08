import { NextRequest, NextResponse } from 'next/server'

const serviceMap: Record<string, string> = {
  sentence_reduction: 'הפחתת עונש',
  risk_assessment: 'הערכת מסוכנות',
  rehabilitation: 'תוכנית שיקום',
  custody: 'משמורת ילדים',
  expert_opinion: 'חוות דעת קרימינולוגית',
}

const urgencyLabelMap: Record<string, string> = {
  immediate: 'דחוף מאוד',
  this_week: 'גבוהה',
  this_month: 'בינונית',
  no_rush: 'נמוכה',
}

function calcComplexity(caseType: string, legalStage: string, goals: string[]): number {
  let score = 4
  if (caseType === 'criminal') score += 2
  if (caseType === 'juvenile') score += 1
  if (legalStage === 'appeal') score += 2
  if (legalStage === 'hearing') score += 1
  if (goals.length > 2) score += 1
  return Math.min(score, 10)
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { caseType, legalStage, goals, urgency } = data

    const complexityScore = calcComplexity(caseType, legalStage, goals || [])
    const primaryGoal = goals?.[0] || 'expert_opinion'
    const recommendedService = serviceMap[primaryGoal] || 'חוות דעת קרימינולוגית'
    const urgencyLevel = urgencyLabelMap[urgency] || 'בינונית'

    // Try OpenAI if key is available, else return mock
    let summary = `על בסיס ניתוח פרטי התיק, אנו ממליצים על ${recommendedService}. רמת מורכבות התיק הינה ${complexityScore}/10 — ${complexityScore >= 7 ? 'מורכבות גבוהה המצריכה ליווי מקצועי מעמיק' : 'מורכבות בינונית הניתנת לטיפול יעיל'}. נשמח לתאם פגישה ראשונית ולהציג בפניכם את המתווה המלא.`

    if (process.env.OPENAI_API_KEY) {
      try {
        const { openai } = await import('@/lib/openai/client')
        const { buildAssessmentPrompt } = await import('@/lib/openai/prompts')
        const prompt = buildAssessmentPrompt({
          caseType,
          legalStage,
          goals: goals || [],
          urgency,
          hasLawyer: !!data.lawyer,
        })
        const completion = await openai.chat.completions.create({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: prompt }],
          response_format: { type: 'json_object' },
        })
        const aiResult = JSON.parse(completion.choices[0].message.content || '{}')
        if (aiResult.summary) summary = aiResult.summary
      } catch {
        // Fall through to mock summary
      }
    }

    return NextResponse.json({
      complexityScore,
      recommendedService,
      urgencyLevel,
      summary,
    })
  } catch {
    return NextResponse.json({ error: 'שגיאה בעיבוד הבקשה' }, { status: 500 })
  }
}
