export function middle<T>(list: T[]): T {
  return list.length > 1 ? list[Math.floor(list.length / 2)] : list[0];
}
