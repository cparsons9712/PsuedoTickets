const { test, expect } = require("@playwright/test");
import {
  findMinMaxValues,
  rotateArray,
  removeDuplicates,
  findMissingSequences,
  mergeSortedRecords,
} from "../src/Beginner/arrayFunctions";
/*

2. Rotate Array: Learn array manipulation and index calculations.
3. Remove Duplicates from Sorted Array: Practice using two-pointer technique.
4. Find the Missing Number: Understand arithmetic properties and XOR operation.
5. Merge Two Sorted Arrays: Practice merging techniques.
*/




test.describe("removeDuplicates  @12c", () => {
  test("should remove duplicates from an array of numbers", () => {
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

  test("should handle arrays with no duplicates", () => {
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

  test("should handle edge cases for removeDuplicates", () => {
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

test.describe("findMissingSequences @12d", () => {
  test("should find missing sequences in the array up to the given limit", () => {
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

  test("should handle arrays with no missing numbers up to the given limit", () => {
    const result1 = findMissingSequences([1, 2, 3, 4, 5], 5);
    const result2 = findMissingSequences([1], 1);

    expect(result1).toEqual([]);
    expect(result2).toEqual([]);

    expect(result1).toHaveLength(0);
    expect(result2).toHaveLength(0);
  });

  test("should handle edge cases for findMissingSequences", () => {
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

test.describe('mergeSortedRecords @12e', () => {

  test('should merge and sort records from multiple lists by date', () => {
    const result1 = mergeSortedRecords([
      [{ date: '2023-01-01', amount: 100 }, { date: '2023-01-03', amount: 200 }],
      [{ date: '2023-01-02', amount: 150 }, { date: '2023-01-04', amount: 250 }]
    ]);
    const result2 = mergeSortedRecords([
      [{ date: '2023-02-01', amount: 300 }],
      [{ date: '2023-01-15', amount: 200 }, { date: '2023-02-05', amount: 100 }]
    ]);
    const result3 = mergeSortedRecords([
      [{ date: '2023-03-01', amount: 400 }],
      [{ date: '2023-03-01', amount: 100 }, { date: '2023-03-02', amount: 200 }]
    ]);
    const result4 = mergeSortedRecords([
      [{ date: '2023-01-01', amount: 100 }],
      []
    ]);
    const result5 = mergeSortedRecords([
      [],
      []
    ]);
    const result6 = mergeSortedRecords([
      [{ date: '2023-04-01', amount: 500 }, { date: '2023-04-02', amount: 600 }],
      [{ date: '2023-04-01', amount: 400 }, { date: '2023-04-03', amount: 700 }]
    ]);

    expect(result1).toEqual([
      { date: '2023-01-01', amount: 100 },
      { date: '2023-01-02', amount: 150 },
      { date: '2023-01-03', amount: 200 },
      { date: '2023-01-04', amount: 250 }
    ]);
    expect(result2).toEqual([
      { date: '2023-01-15', amount: 200 },
      { date: '2023-02-01', amount: 300 },
      { date: '2023-02-05', amount: 100 }
    ]);
    expect(result3).toEqual([
      { date: '2023-03-01', amount: 400 },
      { date: '2023-03-01', amount: 100 },
      { date: '2023-03-02', amount: 200 }
    ]);
    expect(result4).toEqual([
      { date: '2023-01-01', amount: 100 }
    ]);
    expect(result5).toEqual([]);
    expect(result6).toEqual([
      { date: '2023-04-01', amount: 500 },
      { date: '2023-04-01', amount: 400 },
      { date: '2023-04-02', amount: 600 },
      { date: '2023-04-03', amount: 700 }
    ]);
  });

  test('should handle cases with one empty list', () => {
    const result1 = mergeSortedRecords([
      [{ date: '2023-01-01', amount: 100 }],
      []
    ]);
    const result2 = mergeSortedRecords([
      [],
      [{ date: '2023-01-01', amount: 100 }]
    ]);

    expect(result1).toEqual([
      { date: '2023-01-01', amount: 100 }
    ]);
    expect(result2).toEqual([
      { date: '2023-01-01', amount: 100 }
    ]);

    expect(result1).toHaveLength(1);
    expect(result2).toHaveLength(1);
  });

  test('should handle edge cases for mergeSortedRecords', () => {
    const result1 = mergeSortedRecords([
      [{ date: '2023-03-01', amount: 100 }],
      [{ date: '2023-03-01', amount: 100 }]
    ]);
    const result2 = mergeSortedRecords([
      [],
      [{ date: '2023-04-01', amount: 200 }, { date: '2023-04-01', amount: 100 }]
    ]);
    const result3 = mergeSortedRecords([
      [{ date: '2023-05-01', amount: 300 }],
      [{ date: '2023-05-01', amount: 300 }]
    ]);

    expect(result1).toEqual([
      { date: '2023-03-01', amount: 100 },
      { date: '2023-03-01', amount: 100 }
    ]);
    expect(result1).toHaveLength(2);

    expect(result2).toEqual([
      { date: '2023-04-01', amount: 200 },
      { date: '2023-04-01', amount: 100 }
    ]);
    expect(result2).toHaveLength(2);

    expect(result3).toEqual([
      { date: '2023-05-01', amount: 300 },
      { date: '2023-05-01', amount: 300 }
    ]);
    expect(result3).toHaveLength(2);

    expect(Array.isArray(result1)).toBe(true);
    expect(Array.isArray(result2)).toBe(true);
    expect(Array.isArray(result3)).toBe(true);
  });

});
