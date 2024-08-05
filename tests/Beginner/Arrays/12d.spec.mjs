import {test, expect} from "@playwright/test"
import { findMissingSequences } from "../../../src/Beginner/Array/12d.mjs"

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
