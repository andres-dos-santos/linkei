import { createClient } from '@/services/supabase/server'
import { type NextRequest, NextResponse } from 'next/server'

interface Get {
	params: Promise<{ url: string }>
}

export const GET = async (_: NextRequest, { params }: Get) => {
	const { url: url_id } = await params

	const supabase = await createClient()

	const { data } = await supabase.from('urls').select('*').eq('url_id', url_id)

	if (!data) return NextResponse.json({ error: `Can't find this URL.` })

	return NextResponse.redirect(data[0].original_url)
}
