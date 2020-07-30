
const dictionary = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
};

export function integerToRoman(integer: number): string {
  let result = '';
  let number = integer;
  const numberOfDigits = Math.floor(Math.log10(number) + 1);
  
  for (let i = 0; i < numberOfDigits; i++) {
    const place = Math.pow(10, numberOfDigits - i - 1);
    const digit = Math.floor(number/place);
    
    if (digit === 4) {
      result += dictionary[place];
      result += dictionary[place * 5];
    } else if (digit === 9) {
      result += dictionary[place];
      result += dictionary[place * 10];
    } else {
      
      if (digit > 4) {
        result += dictionary[place * 5];
      }
      
      for (let i = 0; i < digit % 5; i++) {
        result += dictionary[place];
      }
    }
  
    number -= digit * place;
  }
  
  return result;
}
