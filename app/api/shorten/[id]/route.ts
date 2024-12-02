import { NextApiRequest } from 'next'
import { redirect } from 'next/navigation'

import { db } from '@/lib/db'

export async function GET(
  req: NextApiRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  return http.GET(req, { params })
}

const http = {
  GET: async (
    _: NextApiRequest,
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

        redirect(updatedUrl.originalUrl)
      }
    }
  },
}
