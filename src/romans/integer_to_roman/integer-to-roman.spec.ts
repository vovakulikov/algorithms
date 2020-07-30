import { integerToRoman } from "./integer-to-roman";


describe('Integer to roman algorithm', () => {
  
  describe('should works correctly with small numbers (<10)', () => {
    
    test('1', () => {
      expect(integerToRoman(1)).toEqual('I');
    });
  
    test('2', () => {
      expect(integerToRoman(2)).toEqual('II');
    });
  
    test('3', () => {
      expect(integerToRoman(3)).toEqual('III');
    });
  
    test('special case with 4 digit', () => {
      expect(integerToRoman(4)).toEqual('IV');
    });
  
    test('5', () => {
      expect(integerToRoman(5)).toEqual('V');
    });
  
    test('6', () => {
      expect(integerToRoman(6)).toEqual('VI');
    });
    
    test('7', () => {
      expect(integerToRoman(7)).toEqual('VII');
    });
  
    test('8', () => {
      expect(integerToRoman(8)).toEqual('VIII');
    });
  
    test('special case with 9', () => {
      expect(integerToRoman(9)).toEqual('IX');
    });
  });
  
  
  describe('should works correctly with numbers > 10', () => {
  
    test('11', () => {
      expect(integerToRoman(11)).toEqual('XI');
    });
  
    test('24', () => {
      expect(integerToRoman(24)).toEqual('XXIV');
    });
  
    test('39', () => {
      expect(integerToRoman(39)).toEqual('XXXIX');
    });
  
    test('44', () => {
      expect(integerToRoman(44)).toEqual('XLIV');
    });
  
    test('99', () => {
      expect(integerToRoman(99)).toEqual('XCIX');
    });
  });
});
