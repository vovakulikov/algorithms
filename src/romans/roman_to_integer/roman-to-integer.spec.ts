import { romanToInteger } from "./roman-to-integer";


describe('roman to integer algorithm', () => {
  
  test('should works correctly with complex case', () => {
    expect(romanToInteger('CXLIV')).toEqual(144)
  });
  
  
  test('should works correctly with one special case with 4', () => {
    expect(romanToInteger('XIV')).toEqual(14)
  });
  
  test('should works correctly with basic case', () => {
    expect(romanToInteger('VIII')).toEqual(8)
  });
  
  test('should works correctly with one special case with 9', () => {
    expect(romanToInteger('XIX')).toEqual(19)
  });
});
