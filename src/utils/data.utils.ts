// Returns a promise 'cause there's an 'await' on the return
export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url)
  return await response.json()
}
