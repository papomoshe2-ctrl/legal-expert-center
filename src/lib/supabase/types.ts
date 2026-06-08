export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type UserRole = 'admin' | 'expert' | 'lawyer' | 'client'
export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'proposal' | 'won' | 'lost'
export type CaseStatus = 'intake' | 'active' | 'review' | 'delivered' | 'closed'
export type DocumentType = 'indictment' | 'verdict' | 'medical' | 'psychological' | 'other'
export type TaskStatus = 'pending' | 'in_progress' | 'done'
export type TimelineEventType = 'status_change' | 'document_upload' | 'message' | 'payment' | 'note'
export type ArticleStatus = 'draft' | 'published' | 'archived'
export type NotificationType = 'lead' | 'case' | 'message' | 'task' | 'system'

export interface Database {
  public: {
    Tables: {
      users: {
        Row: User
        Insert: Omit<User, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<User, 'id'>>
      }
      lawyers: {
        Row: Lawyer
        Insert: Omit<Lawyer, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Lawyer, 'id'>>
      }
      experts: {
        Row: Expert
        Insert: Omit<Expert, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Expert, 'id'>>
      }
      clients: {
        Row: Client
        Insert: Omit<Client, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Client, 'id'>>
      }
      leads: {
        Row: Lead
        Insert: Omit<Lead, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Lead, 'id'>>
      }
      assessments: {
        Row: Assessment
        Insert: Omit<Assessment, 'id' | 'created_at'>
        Update: Partial<Omit<Assessment, 'id'>>
      }
      cases: {
        Row: Case
        Insert: Omit<Case, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Case, 'id'>>
      }
      case_documents: {
        Row: CaseDocument
        Insert: Omit<CaseDocument, 'id' | 'uploaded_at'>
        Update: Partial<Omit<CaseDocument, 'id'>>
      }
      case_messages: {
        Row: CaseMessage
        Insert: Omit<CaseMessage, 'id' | 'created_at'>
        Update: Partial<Omit<CaseMessage, 'id'>>
      }
      case_tasks: {
        Row: CaseTask
        Insert: Omit<CaseTask, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<CaseTask, 'id'>>
      }
      case_timeline: {
        Row: CaseTimelineEvent
        Insert: Omit<CaseTimelineEvent, 'id' | 'created_at'>
        Update: Partial<Omit<CaseTimelineEvent, 'id'>>
      }
      expert_assignments: {
        Row: ExpertAssignment
        Insert: Omit<ExpertAssignment, 'id' | 'assigned_at'>
        Update: Partial<Omit<ExpertAssignment, 'id'>>
      }
      articles: {
        Row: Article
        Insert: Omit<Article, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Article, 'id'>>
      }
      faq: {
        Row: FAQ
        Insert: Omit<FAQ, 'id' | 'created_at'>
        Update: Partial<Omit<FAQ, 'id'>>
      }
      partners: {
        Row: Partner
        Insert: Omit<Partner, 'id' | 'created_at'>
        Update: Partial<Omit<Partner, 'id'>>
      }
      notifications: {
        Row: Notification
        Insert: Omit<Notification, 'id' | 'created_at'>
        Update: Partial<Omit<Notification, 'id'>>
      }
      audit_logs: {
        Row: AuditLog
        Insert: Omit<AuditLog, 'id' | 'created_at'>
        Update: never
      }
    }
  }
}

export interface User {
  id: string
  email: string
  full_name: string
  phone?: string
  role: UserRole
  avatar_url?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Lawyer {
  id: string
  user_id: string
  bar_number: string
  firm_name?: string
  specializations: string[]
  years_experience: number
  is_verified: boolean
  portal_access: boolean
  created_at: string
  updated_at: string
}

export interface Expert {
  id: string
  user_id: string
  title: string
  specializations: string[]
  credentials: string[]
  bio?: string
  is_available: boolean
  created_at: string
  updated_at: string
}

export interface Client {
  id: string
  user_id: string
  id_number?: string
  case_ids: string[]
  referred_by_lawyer_id?: string
  notes?: string
  created_at: string
  updated_at: string
}

export interface Lead {
  id: string
  name: string
  phone: string
  email?: string
  source: string
  status: LeadStatus
  case_type?: string
  legal_stage?: string
  goals?: string[]
  urgency?: string
  lawyer_name?: string
  lawyer_firm?: string
  assessment_id?: string
  notes?: string
  assigned_to?: string
  created_at: string
  updated_at: string
}

export interface Assessment {
  id: string
  lead_id?: string
  case_type: string
  legal_stage: string
  goals: string[]
  urgency: string
  complexity_score: number
  recommended_service: string
  ai_summary?: string
  contact_name: string
  contact_phone: string
  contact_email?: string
  has_lawyer: boolean
  lawyer_name?: string
  lawyer_firm?: string
  created_at: string
}

export interface Case {
  id: string
  case_number: string
  title: string
  status: CaseStatus
  client_id: string
  lawyer_id?: string
  lead_expert_id?: string
  case_type: string
  legal_stage: string
  court?: string
  judge?: string
  next_hearing_date?: string
  deadline?: string
  fee?: number
  fee_paid?: number
  notes?: string
  created_at: string
  updated_at: string
}

export interface CaseDocument {
  id: string
  case_id: string
  uploaded_by: string
  file_name: string
  file_url: string
  file_size: number
  document_type: DocumentType
  description?: string
  uploaded_at: string
}

export interface CaseMessage {
  id: string
  case_id: string
  sender_id: string
  content: string
  is_internal: boolean
  attachments?: string[]
  created_at: string
}

export interface CaseTask {
  id: string
  case_id: string
  assigned_to: string
  title: string
  description?: string
  status: TaskStatus
  due_date?: string
  created_at: string
  updated_at: string
}

export interface CaseTimelineEvent {
  id: string
  case_id: string
  actor_id: string
  event_type: TimelineEventType
  description: string
  metadata?: Json
  created_at: string
}

export interface ExpertAssignment {
  id: string
  case_id: string
  expert_id: string
  role: string
  fee?: number
  status: string
  assigned_at: string
}

export interface Article {
  id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  author_id: string
  status: ArticleStatus
  tags: string[]
  cover_image?: string
  read_time_minutes?: number
  views: number
  created_at: string
  updated_at: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
  sort_order: number
  is_active: boolean
  created_at: string
}

export interface Partner {
  id: string
  name: string
  logo_url?: string
  website?: string
  partner_type: string
  is_active: boolean
  created_at: string
}

export interface Notification {
  id: string
  user_id: string
  type: NotificationType
  title: string
  body: string
  link?: string
  is_read: boolean
  created_at: string
}

export interface AuditLog {
  id: string
  actor_id: string
  action: string
  entity_type: string
  entity_id: string
  changes?: Json
  ip_address?: string
  created_at: string
}
