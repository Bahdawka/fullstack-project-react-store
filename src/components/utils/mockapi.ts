export const API_URL = 'https://68c86f805d8d9f5147355d22.mockapi.io/products'

export const API_ITEMS_PER_PAGE_LIMIT = 12

export function createUrl(page: number | string, limit: number | string = API_ITEMS_PER_PAGE_LIMIT): string {

  const urlObject = new URL(API_URL)
  urlObject.searchParams.set('limit', `${limit}`)
  urlObject.searchParams.set('page', `${page}`)

  return urlObject.toString()
}