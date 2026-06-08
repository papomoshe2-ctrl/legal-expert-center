import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  // In production: fetch from Supabase
  return NextResponse.json({
    leads: [],
    total: 0,
  })
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    // In production: insert into Supabase leads table
    console.log('New lead:', data)
    return NextResponse.json({ success: true, id: `lead_${Date.now()}` }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'שגיאה ביצירת ליד' }, { status: 500 })
  }
}
