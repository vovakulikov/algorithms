

// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
// Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// For instance

// 8     *
// 7     * ------ *
// 6     * ------ *
// 5     *  * --- *
// 4     *  * --- *
// 3     *  *  *  *
// 2  *  *  *  *  *   *
// 1  *  *  *  *  *   *

// So the answer for example above is [1, 4] cause max area of water places right between this two lines

export function getMostWaterContainer(field: Array<number>): [number, number] {
  
  if (!Array.isArray(field)) {
    return null;
  }

  let startPointer = 0;
  let endPointer = field.length - 1;
  
  let maxArea = 0;
  let bordersOfMaxArea: [number, number] = [0, 0];
  
  while (startPointer < endPointer) {
    const minBorder = Math.min(field[startPointer], field[endPointer]);
    const area = (endPointer - startPointer) * minBorder;
    
    if (area > maxArea) {
      bordersOfMaxArea = [startPointer, endPointer];
      maxArea = area;
    }
    
    if (field[startPointer] > field[endPointer]) {
      endPointer--;
    } else {
      startPointer++;
    }
  }
  
  return bordersOfMaxArea;
}
