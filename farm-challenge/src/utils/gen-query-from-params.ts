import { QueryParamsType } from '../types/types'

export const genQuery = (queryParams: QueryParamsType) =>
  Object.entries(queryParams).reduce((prev, [key, value]) => {
    const prefix = prev === '' ? '?' : '&'
    return prev + `${value ? `${prefix}${key}=${value}` : ''}`
  }, '')
