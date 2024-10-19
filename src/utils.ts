import type { SafeAny } from './types'

export function sort_by_key(array: SafeAny[], key: string) {
  return array.sort((a, b) => {
    const x = a[key]
    const y = b[key]

    return x < y ? -1 : x > y ? 1 : 0
  })
}
