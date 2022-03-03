export function reverseWords(str: string): string {
  return str.replace(/\w+\.?/g, (match: string) =>
    match.split('').reverse().join('')
  );
}
