import mongoose from 'mongoose'

const URLSchema = new mongoose.Schema({
	url_id: { type: 'string', required: true },
	original_url: { type: 'string', required: true },
})

export const URL = mongoose.model('urls', URLSchema)
