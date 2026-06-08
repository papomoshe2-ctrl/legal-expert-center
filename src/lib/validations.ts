import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'שם חייב להכיל לפחות 2 תווים'),
  phone: z.string().min(9, 'מספר טלפון לא תקין'),
  email: z.string().email('כתובת אימייל לא תקינה').optional().or(z.literal('')),
  message: z.string().min(10, 'ההודעה חייבת להכיל לפחות 10 תווים'),
})

export const lawyerCollaborationSchema = z.object({
  name: z.string().min(2, 'שם חייב להכיל לפחות 2 תווים'),
  firm: z.string().min(2, 'שם משרד חייב להכיל לפחות 2 תווים'),
  phone: z.string().min(9, 'מספר טלפון לא תקין'),
  email: z.string().email('כתובת אימייל לא תקינה'),
  specialization: z.string().min(2, 'נא לציין תחום התמחות'),
  message: z.string().optional(),
})

export const assessmentContactSchema = z.object({
  name: z.string().min(2, 'שם חייב להכיל לפחות 2 תווים'),
  phone: z.string().min(9, 'מספר טלפון לא תקין'),
  email: z.string().email('כתובת אימייל לא תקינה').optional().or(z.literal('')),
  message: z.string().optional(),
})

export const lawyerInfoSchema = z.object({
  name: z.string().optional(),
  firm: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email('כתובת אימייל לא תקינה').optional().or(z.literal('')),
})

export type ContactFormData = z.infer<typeof contactSchema>
export type LawyerCollaborationFormData = z.infer<typeof lawyerCollaborationSchema>
export type AssessmentContactFormData = z.infer<typeof assessmentContactSchema>
export type LawyerInfoFormData = z.infer<typeof lawyerInfoSchema>
