'use server'

import mongoose from 'mongoose'

export async function DBConnect() {
	await mongoose
		.connect(process.env.MONGODB_URL_CONNECTION ?? '')
		.then(() => console.log('Connected!'))
		.catch(console.log)
}
