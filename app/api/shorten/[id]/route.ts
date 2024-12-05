export async function GET() {
  return http.GET()
}

const http = {
  GET: async () => {
    // const id = (await params).id

    // if (id) {
    //   const url = await db.url.findUnique({
    //     where: { id: id.toString() },
    //   })

    //   if (url) {
    //     const updatedUrl = await db.url.update({
    //       where: { id: url.id },
    //       data: { visits: url.visits + 1 },
    //     })

    //     return NextResponse.json({ originalUrl: updatedUrl.originalUrl })
    //   }
    // }
    return Response.json({ ok: true })
  },
}
