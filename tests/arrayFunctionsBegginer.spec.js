const { test, expect } = require("@playwright/test");
import {
  findMinMaxValues,
  rotateArray,
  removeDuplicates,
  findMissingSequences,
  mergeSortedRecords,
} from "../src/Beginner/arrayFunctions";



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
