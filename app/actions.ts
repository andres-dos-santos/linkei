'use server'

import { cookies } from 'next/headers'

export async function setUser(userId: string) {
  const store = await cookies()

  store.set('userId', userId || '')
}

export async function getUser() {
  const store = await cookies()

  const user = store.get('userId')
  console.log('user', user)

  return user?.value
}
