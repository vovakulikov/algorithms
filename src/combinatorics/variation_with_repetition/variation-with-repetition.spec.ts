import { getVariationWithRepetition } from "./variation-with-repetition";


describe('variation with repetition algorithm', () => {
  
  test('should generate correct result with common input', () => {
    
    const list = ['a', 'b'];
    
    expect(getVariationWithRepetition(list, 3)).toEqual([
      ['a','a','a'],
      ['a','a','b'],
      ['a','b','a'],
      ['a','b','b'],
      ['b','a','a'],
      ['b','a','b'],
      ['b','b','a'],
      ['b','b','b'],
    ])
  });
});
