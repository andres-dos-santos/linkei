export async function api(url: string, init?: RequestInit) {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + url, {
    ...init,
    headers: { 'Content-Type': 'application/json' },
  })

  return response
}
