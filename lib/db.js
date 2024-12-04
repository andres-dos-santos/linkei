import mongoose from 'mongoose'

const NEXT_PUBLIC_MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI

if (!NEXT_PUBLIC_MONGODB_URI) {
  throw new Error(
    'Please define the NEXT_PUBLIC_MONGODB_URI environment variable',
  )
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function db() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(NEXT_PUBLIC_MONGODB_URI)
      .then((mongoose) => {
        return mongoose
      })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export { db }
