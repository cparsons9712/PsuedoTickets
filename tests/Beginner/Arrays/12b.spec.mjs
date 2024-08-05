import { test, expect } from "@playwright/test";
import { rotateArray } from "../../../src/Beginner/Array/12b.mjs";

test.describe("rotateArray @12b", () => {
  test("should rotate arrays by given positions", async ({}) => {
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

  test("should handle edge cases with small or empty arrays", async ({}) => {
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

  test("should handle invalid input gracefully", async ({}) => {
    const result1 = rotateArray("not an array", 3);
    const result2 = rotateArray([1, 2, 3], -2);
    const result3 = rotateArray([1, 2, 3], "two");

    expect(result1).toBe("Please enter a valid array");
    expect(result2).toBe("Please enter a valid number of positions");
    expect(result3).toBe("Please enter a valid number of positions");

    expect(typeof result1).toBe("string");
    expect(typeof result2).toBe("string");
    expect(typeof result3).toBe("string");

    expect(result1.includes("valid")).toBeTruthy();
    expect(result2.includes("valid")).toBeTruthy();
    expect(result3.includes("valid")).toBeTruthy();

    expect(result1).not.toBe(null);
    expect(result2).not.toBe(null);
    expect(result3).not.toBe(null);
  });
});
