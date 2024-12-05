import { NextResponse } from 'next/server'
import { nanoid } from 'nanoid'

import { Url } from '@/models/url'
import { getUser } from '@/app/actions'
import { db } from '@/lib/db'

export async function GET() {
  await db()

  const urls = await Url.find({})

  return NextResponse.json({ urls })
}

export async function POST(request: Request) {
  await db()

  const { url } = await request.json()

  const originalUrl = url
  const shortUrl = 'https://linkei/' + nanoid(5)
  const userId = await getUser()

  if (userId) {
    const data = await Url.create({
      originalUrl,
      shortUrl,
      userId,
    })
    return NextResponse.json({ data })
  }

  return NextResponse.json({ data: { shortUrl } })
}
