

const dictionary = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

export function romanToInteger(roman: string): number {
  
  if (roman.length < 2) {
    return dictionary[roman];
  }
  
  let pointer = 0;
  let aHeadPointer = 1;
  let result = 0;
  
  while (pointer < roman.length) {
    const pointValue = dictionary[roman[pointer]];
    
    // Safe value by ?? -Infinity cause we may have aHeadPointer value out of range of roman string
    const aHeadPointValue = dictionary[roman[aHeadPointer]] ?? -Infinity;
    
    if (pointValue < aHeadPointValue) {
      result += (aHeadPointValue - pointValue);
      
      pointer = aHeadPointer + 1;
      aHeadPointer = aHeadPointer + 2;
    } else {
      result += pointValue;
      
      pointer++;
      aHeadPointer++;
    }
  }
  
  return result;
}
