import { neon } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  _: NextRequest,
  {
    params,
  }: {
    params: Promise<{ 'short-url': string }>
  },
) {
  const { 'short-url': shortUrl } = await params

  const sql = neon(process.env.DATABASE_URL ?? '')

  const data =
    await sql`select originalurl from urls where shorturl = ${shortUrl}`

  const { originalurl } = data[0]
  console.log(originalurl)

  try {
    await sql`update urls set visits = visits + 1 where shorturl = ${shortUrl}`

    return NextResponse.redirect(originalurl)
  } catch (error) {
    console.log('error - ', error)
  }

  return NextResponse.json({ ok: true })
}
