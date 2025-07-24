import { type NextRequest, NextResponse } from 'next/server'

import { model } from '@/services/models'
import { DBConnect } from '@/services/mongo'

interface Get {
	params: Promise<{ url: string }>
}

export const GET = async (_: NextRequest, { params }: Get) => {
	const { url: url_id } = await params

	await DBConnect()

	const data = await model.URL.findOne({ url_id }).exec()

	if (!data) return NextResponse.json({ error: `Can't find this URL.` })

	return NextResponse.redirect(data.original_url)
}
