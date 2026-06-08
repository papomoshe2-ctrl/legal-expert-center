export function buildAssessmentPrompt(data: {
  caseType: string
  legalStage: string
  goals: string[]
  urgency: string
  hasLawyer: boolean
}) {
  return `You are a senior criminologist at an Israeli legal expert center. Analyze this case assessment and provide a structured response in Hebrew.

Case Details:
- Case Type: ${data.caseType}
- Legal Stage: ${data.legalStage}
- Goals: ${data.goals.join(', ')}
- Urgency: ${data.urgency}
- Has Lawyer: ${data.hasLawyer ? 'Yes' : 'No'}

Please provide:
1. A complexity score from 1-10 (where 10 is most complex)
2. The most recommended service from our center
3. A brief professional summary in Hebrew (2-3 sentences) explaining the recommended approach

Format your response as JSON:
{
  "complexityScore": <number>,
  "recommendedService": "<service name in Hebrew>",
  "summary": "<Hebrew summary>"
}
`
}
