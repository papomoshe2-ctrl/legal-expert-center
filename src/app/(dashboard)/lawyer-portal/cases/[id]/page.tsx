export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <div className="p-8"><h1 className="text-2xl font-bold" style={{ color: '#0A1628' }}>תיק {id}</h1></div>
}
