export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter(el => !b.includes(el));
}
