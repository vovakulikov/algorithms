

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
