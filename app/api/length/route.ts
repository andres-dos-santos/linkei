'use server'

import { type NextRequest, NextResponse } from 'next/server'

import { URL } from '@/services/models/url'
import { DBConnect } from '@/services/mongo'

export const GET = async (req: NextRequest) => {
	await DBConnect()

	const length = await URL.countDocuments()

	return NextResponse.json({ length })
}
