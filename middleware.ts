import { NextResponse } from 'next/server'

export function middleware() {
	const res = NextResponse.next()

	res.headers.append(
		'Access-Control-Allow-Origin',
		process.env.NODE_ENV === 'development' ? '*' : 'https://lkei.site'
	)

	return res
}
