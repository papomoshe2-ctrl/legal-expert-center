export type CaseType = 'criminal' | 'family' | 'juvenile' | 'other'
export type LegalStage = 'investigation' | 'indictment' | 'hearing' | 'appeal'
export type CaseGoal =
  | 'sentence_reduction'
  | 'risk_assessment'
  | 'rehabilitation'
  | 'custody'
  | 'expert_opinion'
export type Urgency = 'immediate' | 'this_week' | 'this_month' | 'no_rush'

export interface AssessmentData {
  caseType: CaseType
  legalStage: LegalStage
  goals: CaseGoal[]
  documents: File[]
  lawyer?: {
    name: string
    firm: string
    phone: string
    email: string
  }
  urgency: Urgency
  contact: {
    name: string
    phone: string
    email: string
    message: string
  }
}

export interface AssessmentResult {
  complexityScore: number
  recommendedService: string
  urgencyLevel: string
  summary: string
}
