import { nanoid } from 'nanoid'
import { NextResponse } from 'next/server'

import { db } from '@/lib/db'

export async function POST(req: Request) {
  return http.POST(req)
}

export async function GET() {
  return http.GET()
}

const http = {
  POST: async (req: Request) => {
    const { url } = await req.json()

    const shortUrl = nanoid(8)

    const shortnedUrl = await db.url.create({
      data: { originalUrl: url, shortUrl: 'https://us/' + shortUrl },
    })

    return NextResponse.json({ shortUrl: shortnedUrl.shortUrl })
  },
  GET: async () => {
    const urls = await db.url.findMany({ orderBy: { createdAt: 'desc' } })

    return NextResponse.json(urls)
  },
}
