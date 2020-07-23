import { getMostWaterContainer } from "./most-water-container";

describe('Most water container', () => {
  
  test('should works correctly with normal input argument', () => {
    const field = [1,8,6,2,5,4,8,3,7];
    
    expect(getMostWaterContainer(field)).toEqual([1, 8]);
  });
  
  test('should works correctly with empty field', () => {
    const field = [];
  
    expect(getMostWaterContainer(field)).toEqual([0, 0]);
  });
  
  test('should return null with non array field', () => {
    const field = null;
    
    expect(getMostWaterContainer(field)).toEqual(null);
  });
});
