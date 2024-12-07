'use server'

import { neon } from '@neondatabase/serverless'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'

export async function setUser(userId: string) {
  const store = await cookies()

  store.set('userId', userId || '')
}

export async function getUser() {
  const store = await cookies()

  const user = store.get('userId')

  return user?.value
}

type Url = {
  id: string
  originalurl: string
  shorturl: string
  faviconlink: string
  faviconname: string
  visits: number
  userid: string
}

export async function getData(): Promise<Url[]> {
  const userId = await getUser()

  const sql = neon(process.env.DATABASE_URL ?? '')

  const data =
    await sql`select * from urls where userId = ${userId} order by created_at desc`

  return data as Url[]
}

export async function addVisit(shortUrl: string) {
  const sql = neon(process.env.DATABASE_URL ?? '')

  await sql`update urls set visits = visits + 1 where shorturl = ${shortUrl}`
}

export async function revalidate(tag: string) {
  revalidateTag(tag)
}
