import { MongoClient } from 'mongodb'

export async function POST() {
  return http.POST()
}

export async function GET() {
  // return http.GET()
}

const http = {
  POST: async () => {
    // const { url } = await req.json()

    const client = new MongoClient(
      process.env.NEXT_PUBLIC_MONGODB_URI ?? '',
      {},
    )

    try {
      await client.connect()

      const database = client.db('test')

      const collection = database.collection('urls')
      const allData = await collection.find({}).toArray()

      console.log(allData)
    } catch (error) {
      console.log(error)
      // res.status(500).json({ message: 'Something went wrong!' })
    } finally {
      await client.close()
    }

    return {}

    // const shortUrl = nanoid(8)

    // const shortnedUrl = await Url.create({
    //   data: {
    //     originalUrl: url,
    //     shortUrl: 'https://us/' + shortUrl,
    //     userId: 's',
    //   },
    // })

    // return NextResponse.json({ shortUrl: shortnedUrl.shortUrl })
  },
  // GET: async () => {
  //   const urls = await db.url.findMany({ orderBy: { createdAt: 'desc' } })

  //   return NextResponse.json(urls)
  // },
}
