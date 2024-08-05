import {test, expect} from "@playwright/test"
import { removeDuplicates } from "../../../src/Beginner/Array/12c.mjs";

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
