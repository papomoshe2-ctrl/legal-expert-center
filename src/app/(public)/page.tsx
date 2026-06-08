import Hero from '@/components/public/Hero'
import ServicesSection from '@/components/public/ServicesSection'
import WhyUs from '@/components/public/WhyUs'
import AboutStav from '@/components/public/AboutStav'
import CaseStudies from '@/components/public/CaseStudies'
import ExpertNetwork from '@/components/public/ExpertNetwork'
import LawyersSection from '@/components/public/LawyersSection'
import KnowledgeCenter from '@/components/public/KnowledgeCenter'
import FAQ from '@/components/public/FAQ'
import ContactSection from '@/components/public/ContactSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Trust/Stats strip */}
      <div className="bg-white border-b border-gray-100 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { value: '500+', label: 'חוות דעת שהוגשו' },
              { value: '15+', label: 'שנות ניסיון' },
              { value: '200+', label: 'עורכי דין שותפים' },
              { value: '95%', label: 'שיעור שביעות רצון' },
              { value: '48h', label: 'זמן מענה ממוצע' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="text-xl font-bold" style={{ color: '#C9A84C' }}>{stat.value}</span>
                <span className="text-sm text-gray-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ServicesSection />
      <WhyUs />
      <AboutStav />
      <CaseStudies />
      <ExpertNetwork />
      <LawyersSection />
      <KnowledgeCenter />
      <FAQ />
      <ContactSection />
    </>
  )
}
