import ContactSection from '@/components/public/ContactSection'

export const metadata = {
  title: 'צור קשר — המרכז לחוות דעת משפטיות',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div style={{ backgroundColor: '#0A1628' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
            יצירת קשר
          </p>
          <h1 className="text-4xl font-bold text-white">צור קשר</h1>
        </div>
      </div>
      <ContactSection />
    </div>
  )
}
