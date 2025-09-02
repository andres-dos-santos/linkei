import { type NextRequest, NextResponse } from 'next/server'
import ShortID from 'short-unique-id'

import { createClient } from '@/services/supabase/server'

const uid = new ShortID({ length: 8 })

export const POST = async (req: NextRequest) => {
	const { original_url } = await req.json()

	const URLId = uid.rnd()

	const supabase = await createClient()

	await supabase.from('urls').insert([{ original_url, url_id: URLId }])

	return NextResponse.json({ url: `https://lkei.site/api/${URLId}` })
}
