import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <div className="p-8">
      <Link href="/crm/leads" className="flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm mb-6">
        <ArrowRight className="w-4 h-4" />
        חזרה ללידים
      </Link>
      <h1 className="text-2xl font-bold mb-2" style={{ color: '#0A1628' }}>ליד #{id}</h1>
      <p className="text-gray-500 text-sm">דף פרטי ליד — בפיתוח</p>
    </div>
  )
}
