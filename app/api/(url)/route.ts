'use server'

import ShortID from 'short-unique-id'
import { type NextRequest, NextResponse } from 'next/server'

import { DBConnect } from '@/services/mongo'
import { model } from '@/services/models'

const uid = new ShortID({ length: 8 })

export const POST = async (req: NextRequest) => {
	const { original_url } = await req.json()

	await DBConnect()

	const URLId = uid.rnd()

	const url = new model.URL({ url_id: URLId, original_url })

	await url.save()

	return NextResponse.json({ url: `https://lkei.site/${URLId}` })
}
