export function reorderArray<T>(order: number[], items: T[]) {
  return order.map((i) => items[i - 1]);
}
