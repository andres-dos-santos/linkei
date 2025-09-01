'use server'

import { type NextRequest, NextResponse } from 'next/server'

import { URL } from '@/services/models/url'

export const GET = async (req: NextRequest) => {
	const length = await URL.countDocuments()

	return NextResponse.json({ length })
}
