import { expect, test } from "playwright/test";
import { isString } from "../../../src/Beginner/String/11a.mjs";

test.describe("isString @11a", () => {
    test("should return true for valid strings", async () => {
      expect(isString("Hello, World!")).toBe(true);
      expect(isString("12345")).toBe(true);
      expect(isString("Mary Had a Little Lamb")).toBe(true);
    });

    test("should return false for invalid strings", async () => {
      expect(isString(12345)).toBe(false);
      expect(isString(null)).toBe(false);
      expect(isString(undefined)).toBe(false);
      expect(isString(true)).toBe(false);
    });

    test("should handle edge cases", async () => {
      expect(isString("")).toBe(true); // Empty string is still a string
      expect(isString([])).toBe(false); // Array is not a string
      expect(isString({})).toBe(false); // Object is not a string
      expect(isString(true)).toBe(false); // Boolean is not a string
    });
  });
