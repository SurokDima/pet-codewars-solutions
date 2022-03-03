export function isIsogram(str: string): boolean {
  const chars = str.split('').map(el => el.toLowerCase());
  const uniqueChars = [...new Set(chars)];

  return uniqueChars.length === str.length;
}
