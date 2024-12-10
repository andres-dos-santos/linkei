import { neon } from '@neondatabase/serverless'
import { nanoid } from 'nanoid'
import { NextRequest, NextResponse } from 'next/server'

import { getUser } from '@/app/actions'

export async function POST(req: NextRequest) {
  const { url } = await req.json()

  const userId = await getUser()

  const sql = neon(process.env.DATABASE_URL ?? '')

  const originalUrl = url
  const shortUrl = nanoid(5)
  const faviconName = shortUrl.replace('https://linkei/', '').slice(0, 2)
  function faviconLink() {
    const urlObj = new URL(originalUrl)
    return `${urlObj.origin}/favicon.ico`
  }

  const data = await sql`insert into urls
      (originalUrl,
      shortUrl,
      faviconName,
      faviconLink,
      visits,
      userId)
      values
      (${originalUrl},${shortUrl},${faviconName},${faviconLink()},0,${userId}) returning id`

  return NextResponse.json({ data, shortUrl })
}
