import ServicesSection from '@/components/public/ServicesSection'

export const metadata = {
  title: 'שירותים — המרכז לחוות דעת משפטיות',
}

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div style={{ backgroundColor: '#0A1628' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
            השירותים שלנו
          </p>
          <h1 className="text-4xl font-bold text-white">תחומי המומחיות</h1>
        </div>
      </div>
      <ServicesSection />
    </div>
  )
}
