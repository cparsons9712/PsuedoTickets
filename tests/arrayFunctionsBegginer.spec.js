const { test, expect } = require('@playwright/test');
import { findMinMaxValues } from '../src/Beginner/arrayFunctions';
/*
1. Find Maximum and Minimum in an Array: Basic array traversal.
2. Rotate Array: Learn array manipulation and index calculations.
3. Remove Duplicates from Sorted Array: Practice using two-pointer technique.
4. Find the Missing Number: Understand arithmetic properties and XOR operation.
5. Merge Two Sorted Arrays: Practice merging techniques.
*/
test.describe('findMinMaxValues @12a', () => {

    test('should find min and max values in a normal array', async () => {
      expect(findMinMaxValues([23, 45, 12, 67, 34])).toEqual({ min: 12, max: 67 });
      expect(findMinMaxValues([10, 10, 10, 10, 10])).toEqual({ min: 10, max: 10 });
      expect(findMinMaxValues([-5, 0, 5, 10, 15])).toEqual({ min: -5, max: 15 });
      expect(findMinMaxValues([100])).toEqual({ min: 100, max: 100 });
      expect(findMinMaxValues([3, -7, 0, 8, 15, 9])).toEqual({ min: -7, max: 15 });
    });

    test('should handle negative and mixed arrays', async () => {
      expect(findMinMaxValues([3, -7, 0, 8, 15, 9])).toEqual({ min: -7, max: 15 });
      expect(findMinMaxValues([-1, -2, -3, -4, -5])).toEqual({ min: -5, max: -1 });
      expect(findMinMaxValues([-10, 10, -20, 20, -30])).toEqual({ min: -30, max: 20 });
      expect(findMinMaxValues([1.5, 2.5, -1.5, 0, 3.5])).toEqual({ min: -1.5, max: 3.5 });
      expect(findMinMaxValues([0, 0, 0, 0, 0])).toEqual({ min: 0, max: 0 });
    });

    test('should handle edge cases', async () => {
      let result = findMinMaxValues([]);
      expect(result.min).toBeNull();
      expect(result.max).toBeNull();

      result = findMinMaxValues([100]);
      expect(result.min).toEqual(100);
      expect(result.max).toEqual(100);

      result = findMinMaxValues([-1, 0, 1]);
      expect(result.min).toEqual(-1);
      expect(result.max).toEqual(1);

      result = findMinMaxValues([Number.MIN_VALUE, Number.MAX_VALUE]);
      expect(result.min).toEqual(Number.MIN_VALUE);
      expect(result.max).toEqual(Number.MAX_VALUE);

      result = findMinMaxValues([1e10, 1e-10]);
      expect(result.min).toEqual(1e-10);
      expect(result.max).toEqual(1e10);
    });

  });
