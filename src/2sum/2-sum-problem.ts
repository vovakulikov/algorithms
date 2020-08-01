

export function get2sum(array: Array<number>, target: number): [number, number] {
  const hashMap = new Map();
  
  for (let i = 0; i < array.length; i++) {
    const compliment = target - array[i];
    
    if (hashMap.has(compliment)) {
      return [hashMap.get(compliment), i];
    }
    
    hashMap.set(array[i], i);
  }
  
  throw Error('Bad arguments: not match');
}
