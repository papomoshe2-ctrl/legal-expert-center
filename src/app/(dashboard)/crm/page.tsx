import { Users, Briefcase, TrendingUp, DollarSign, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import DashboardCard from '@/components/dashboard/DashboardCard'
import CasePipeline from '@/components/dashboard/CasePipeline'
import LeadTable from '@/components/dashboard/LeadTable'

export const metadata = { title: 'CRM Dashboard' }

export default function CRMPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: '#0A1628' }}>לוח בקרה</h1>
          <p className="text-sm text-gray-500 mt-1">עדכון אחרון: {new Date().toLocaleDateString('he-IL')}</p>
        </div>
        <div className="flex gap-3">
          <Link href="/crm/leads">
            <Button size="sm" className="text-white" style={{ backgroundColor: '#C9A84C' }}>
              <Plus className="w-4 h-4 ml-1" />
              ליד חדש
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        <DashboardCard
          title="סה״כ לידים"
          value={47}
          subtitle="החודש הנוכחי"
          icon={Users}
          trend="12% מהחודש שעבר"
          trendUp
        />
        <DashboardCard
          title="לידים מוסמכים"
          value={18}
          subtitle="38% מכלל הלידים"
          icon={TrendingUp}
          trend="5% מהחודש שעבר"
          trendUp
          color="#3B82F6"
        />
        <DashboardCard
          title="תיקים פעילים"
          value={12}
          subtitle="3 בסיום השבוע"
          icon={Briefcase}
          color="#8B5CF6"
        />
        <DashboardCard
          title="הכנסות החודש"
          value="₪84,500"
          subtitle="יעד: ₪100,000"
          icon={DollarSign}
          trend="8% מהחודש שעבר"
          trendUp
          color="#10B981"
        />
      </div>

      {/* Pipeline */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
        <CasePipeline />
      </div>

      {/* Lead Table */}
      <LeadTable />
    </div>
  )
}
