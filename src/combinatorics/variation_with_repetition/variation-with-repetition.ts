

// * Finds all the variations with repetition of given array.
// * Variations with repetition is the number of ways to sample k elements
// * from a set of elements (which may be repeated).

export function getVariationWithRepetition<T>(list: Array<T>, k: number): Array<Array<T>> {
  
  const length = list.length;
  const result: Array<Array<T>> = [];
  
  function getNextVariations(variations:Array<T>, level:number) {
    if (level === k) {
      return result.push(variations.slice());
    }
    
    for (let index = 0; index < length; index++) {
      variations[level] = list[index];
  
      getNextVariations(variations, level + 1);
    }
  }
  
  getNextVariations([], 0);
  
  return result;
}
