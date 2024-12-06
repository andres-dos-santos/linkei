'use server'

import { neon } from '@neondatabase/serverless'
import { nanoid } from 'nanoid'
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

  const data = await sql`select * from urls where userId = ${userId}`

  return data as Url[]
}

export async function setUrl(url: string) {
  const userId = await getUser()

  const sql = neon(process.env.DATABASE_URL ?? '')

  const originalUrl = url
  const shortUrl = 'https://linkei/' + nanoid(5)
  const faviconName = shortUrl.replace('https://linkei/', '').slice(0, 2)
  function faviconLink() {
    const urlObj = new URL(originalUrl)
    return `${urlObj.origin}/favicon.ico`
  }

  const data = await sql`insert into urls 
      (originalUrl,
      shortUrl,
      faviconName,
      faviconLink,
      visits,
      userId) 
      values 
      (${originalUrl},${shortUrl},${faviconName},${faviconLink()},0,${userId})`

  return data
}

export async function addVisit(id: string) {
  // const userId = await getUser()

  const sql = neon(process.env.DATABASE_URL ?? '')

  const data = await sql`update urls set visits = visits + 1 where id = ${id}`

  return data
}
