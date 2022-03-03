type RomanDigit = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M';
type RomanNumber = RomanDigit[];

type Arabic = number;

interface IRomanToArabic {
  roman: RomanNumber;
  arabic: Arabic;
}

type DigitMatching = IRomanToArabic[];

const digits: DigitMatching = [
  { roman: ['M'], arabic: 1000 },
  { roman: ['C', 'M'], arabic: 900 },
  { roman: ['D'], arabic: 500 },
  { roman: ['C', 'D'], arabic: 400 },
  { roman: ['C'], arabic: 100 },
  { roman: ['X', 'C'], arabic: 90 },
  { roman: ['L'], arabic: 50 },
  { roman: ['X', 'L'], arabic: 40 },
  { roman: ['X'], arabic: 10 },
  { roman: ['I', 'X'], arabic: 9 },
  { roman: ['V'], arabic: 5 },
  { roman: ['I', 'V'], arabic: 4 },
  { roman: ['I'], arabic: 1 },
];

export function solution(number: number): string {
  return convertNumber(number, digits).join('');
}

function convertNumber(number: number, digits: DigitMatching): RomanNumber {
  if (digits.length === 0) return [];

  const currDigit = digits[0];

  const quantity = Math.floor(number / currDigit.arabic);
  const remainder = number % currDigit.arabic;

  return [
    ...createNumber(currDigit.roman, quantity),
    ...convertNumber(remainder, digits.slice(1)),
  ];
}

function createNumber(number: RomanNumber, quantity: number = 1): RomanNumber {
  return Array<RomanNumber>(quantity)
    .fill(number)
    .reduce((acc, curr) => acc.concat(curr), []);
}
