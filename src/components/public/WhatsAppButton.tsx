'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '972500000000'
  const message = encodeURIComponent('שלום, אני מעוניין/ת בייעוץ ראשוני לגבי חוות דעת משפטית.')
  const url = `https://wa.me/${number}?text=${message}`

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-end gap-3">
      {showTooltip && (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-3 max-w-[200px] text-sm text-gray-700 leading-snug">
          שלחו לנו הודעה בווצאפ — נחזור תוך דקות!
        </div>
      )}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        style={{ backgroundColor: '#25D366' }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  )
}
