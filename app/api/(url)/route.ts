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

	try {
		const url = new model.URL({ url_id: URLId, original_url })

		await url.save()
	} catch (error) {
		console.log('error', error)
	}

	return NextResponse.json({ url: `https://lkei.site/${URLId}` })
}

export const OPTIONS = async (_: NextRequest) => {
	return new NextResponse('', {
		status: 200,
	})
}
