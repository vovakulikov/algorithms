import { get2sum } from "./2-sum-problem";

describe('2 sum algorithm', () => {
  
  test('should works correct with basic case', () => {
    expect(get2sum([-1,0,1,22,11], 0)).toEqual([0, 2])
  })
});
