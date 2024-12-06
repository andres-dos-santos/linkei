import { neon } from '@neondatabase/serverless'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

export async function GET(
  _: NextApiRequest,
  { params }: { params: Promise<{ 'short-url': string }> },
) {
  const { 'short-url': shortUrl } = await params

  const sql = neon(process.env.DATABASE_URL ?? '')

  try {
    await sql`update urls set visits = visits + 1 where shorturl = ${shortUrl}`
  } catch (error) {
    console.log('error - ', error)
  }

  return NextResponse.json({ ok: true })
}
