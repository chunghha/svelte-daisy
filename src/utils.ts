// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function sort_by_key(array: any[], key: string) {
  return array.sort(function (a, b) {
    const x = a[key]; const y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}
