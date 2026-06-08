import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ cases: [], total: 0 })
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    console.log('New case:', data)
    return NextResponse.json({ success: true, id: `case_${Date.now()}` }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'שגיאה ביצירת תיק' }, { status: 500 })
  }
}
