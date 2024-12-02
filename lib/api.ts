const baseUrl = 'http://localhost:3000/api/'

export async function api(url: string, init?: RequestInit) {
  const response = await fetch(baseUrl + url, {
    ...init,
    headers: { 'Content-Type': 'application/json' },
  })

  return response
}
