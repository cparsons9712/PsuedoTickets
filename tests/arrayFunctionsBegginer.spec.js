const { test, expect } = require('@playwright/test');
import { findMinMaxValues, rotateArray, removeDuplicates } from '../src/Beginner/arrayFunctions';
/*

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

test.describe('rotateArray @12b', () => {

  test('should rotate arrays by given positions', async ({}) => {
      const result1 = rotateArray([1, 2, 3, 4, 5, 6], 2);
      const result2 = rotateArray([10, 20, 30, 40, 50], 3);
      const result3 = rotateArray([7, 8, 9], 1);

      expect(result1).toEqual([5, 6, 1, 2, 3, 4]);
      expect(result2).toEqual([30, 40, 50, 10, 20]);
      expect(result3).toEqual([9, 7, 8]);

      expect(result1.length).toBe(6);
      expect(result2.length).toBe(5);
      expect(result3.length).toBe(3);
  });

  test('should handle edge cases with small or empty arrays', async ({}) => {
      const result1 = rotateArray([], 4);
      const result2 = rotateArray([1, 2], 5);
      const result3 = rotateArray([1], 10);

      expect(result1).toEqual([]);
      expect(result2).toEqual([2, 1]);
      expect(result3).toEqual([1]);

      expect(result1.length).toBe(0);
      expect(result2.length).toBe(2);
      expect(result3.length).toBe(1);
  });

  test('should handle invalid input gracefully', async ({}) => {
      const result1 = rotateArray("not an array", 3);
      const result2 = rotateArray([1, 2, 3], -2);
      const result3 = rotateArray([1, 2, 3], "two");

      expect(result1).toBe("Please enter a valid array");
      expect(result2).toBe("Please enter a valid number of positions");
      expect(result3).toBe("Please enter a valid number of positions");

      expect(typeof result1).toBe('string');
      expect(typeof result2).toBe('string');
      expect(typeof result3).toBe('string');

      expect(result1.includes('valid')).toBeTruthy();
      expect(result2.includes('valid')).toBeTruthy();
      expect(result3.includes('valid')).toBeTruthy();

      expect(result1).not.toBe(null);
      expect(result2).not.toBe(null);
      expect(result3).not.toBe(null);
  });

});


test.describe('removeDuplicates  @12c', () => {

  test('should remove duplicates from an array of numbers', () => {
    const result1 = removeDuplicates([101, 101, 102, 103, 103, 104]);
    const result2 = removeDuplicates([201, 202, 202, 202, 203]);
    const result3 = removeDuplicates([301, 301, 301]);
    const result4 = removeDuplicates([401, 402, 403]);
    const result5 = removeDuplicates([601, 601, 602, 602, 602, 603]);

    expect(result1).toEqual([101, 102, 103, 104]);
    expect(result2).toEqual([201, 202, 203]);
    expect(result3).toEqual([301]);
    expect(result4).toEqual([401, 402, 403]);
    expect(result5).toEqual([601, 602, 603]);
  });

  test('should handle arrays with no duplicates', () => {
    const result = removeDuplicates([401, 402, 403]);
    expect(result).toEqual([401, 402, 403]);

    const result2 = removeDuplicates([]);
    expect(result2).toEqual([]);

    const result3 = removeDuplicates([501]);
    expect(result3).toEqual([501]);

    expect(result).toHaveLength(3);
    expect(result2).toHaveLength(0);
    expect(result3).toHaveLength(1);
  });

  test('should handle edge cases for removeDuplicates', () => {
    const result1 = removeDuplicates([101]);
    const result2 = removeDuplicates([999, 999, 999, 999]);
    const result3 = removeDuplicates([0, 1, 0, 1, 0, 1]);

    expect(result1).toEqual([101]);
    expect(result1).toHaveLength(1);

    expect(result2).toEqual([999]);
    expect(result2).toHaveLength(1);

    expect(result3).toEqual([0, 1]);
    expect(result3).toHaveLength(2);

    expect(Array.isArray(result1)).toBe(true);
    expect(Array.isArray(result2)).toBe(true);
    expect(Array.isArray(result3)).toBe(true);
  });

});

test.describe('findMissingSequences @12d', () => {

  test('should find missing sequences in the array up to the given limit', () => {
    const result1 = findMissingSequences([1, 2, 4, 5, 7], 7);
    const result2 = findMissingSequences([2, 3, 7], 7);
    const result3 = findMissingSequences([1, 2, 3, 4, 5], 5);
    const result4 = findMissingSequences([], 3);
    const result5 = findMissingSequences([1], 1);
    const result6 = findMissingSequences([1, 3, 4, 5, 6], 6);
    const result7 = findMissingSequences([2, 5, 6, 9], 10);

    expect(result1).toEqual([3, 6]);
    expect(result2).toEqual([1, 4, 5, 6]);
    expect(result3).toEqual([]);
    expect(result4).toEqual([1, 2, 3]);
    expect(result5).toEqual([]);
    expect(result6).toEqual([2]);
    expect(result7).toEqual([1, 3, 4, 7, 8, 10]);
  });

  test('should handle arrays with no missing numbers up to the given limit', () => {
    const result1 = findMissingSequences([1, 2, 3, 4, 5], 5);
    const result2 = findMissingSequences([1], 1);

    expect(result1).toEqual([]);
    expect(result2).toEqual([]);

    expect(result1).toHaveLength(0);
    expect(result2).toHaveLength(0);
  });

  test('should handle edge cases for findMissingSequences', () => {
    const result1 = findMissingSequences([], 1);
    const result2 = findMissingSequences([1, 2, 3], 3);
    const result3 = findMissingSequences([2, 3, 4, 5], 5);

    expect(result1).toEqual([1]);
    expect(result1).toHaveLength(1);

    expect(result2).toEqual([]);
    expect(result2).toHaveLength(0);

    expect(result3).toEqual([1]);
    expect(result3).toHaveLength(1);

    expect(Array.isArray(result1)).toBe(true);
    expect(Array.isArray(result2)).toBe(true);
    expect(Array.isArray(result3)).toBe(true);
  });

});
