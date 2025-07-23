export const baseUrl =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:3000/api/'
		: 'https://lkei.site/api/'
