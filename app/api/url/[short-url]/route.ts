import { type NextRequest, NextResponse } from 'next/server'

export async function GET(
	_: NextRequest,
	{
		params,
	}: {
		params: Promise<{ 'short-url': string }>
	}
) {
	const { 'short-url': shortUrl } = await params

	return NextResponse.json({ ok: true })

	// const sql = neon(process.env.DATABASE_URL ?? '')

	// const data =
	// 	await sql`select originalurl from urls where shorturl = ${shortUrl}`

	// const { originalurl } = data[0]

	// await sql`update urls set visits = visits + 1 where shorturl = ${shortUrl}`

	// return NextResponse.redirect(originalurl)
}
