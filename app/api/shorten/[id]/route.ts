import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  return http.GET(req, { params })
}

const http = {
  GET: async (
    _: NextRequest,
    { params }: { params: Promise<{ id: string }> },
  ) => {
    const id = (await params).id

    if (id) {
      const url = await db.url.findUnique({
        where: { id: id.toString() },
      })

      if (url) {
        const updatedUrl = await db.url.update({
          where: { id: url.id },
          data: { visits: url.visits + 1 },
        })

        return NextResponse.json({ originalUrl: updatedUrl.originalUrl })
      }
    }
  },
}
