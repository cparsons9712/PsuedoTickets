import { expect, test } from "playwright/test";
import { isString, getUsernameFromEmail } from "../src/Beginner/stringFunctions";

test.describe("isString @11a", () => {
    test("should return true for valid strings", async () => {
      expect(isString("Hello, World!")).toBe(true);
      expect(isString("12345")).toBe(true);
    });

    test("should return false for invalid strings", async () => {
      expect(isString(12345)).toBe(false);
      expect(isString(null)).toBe(false);
      expect(isString(undefined)).toBe(false);
    });

    test("should handle edge cases", async () => {
      expect(isString("")).toBe(true); // Empty string is still a string
      expect(isString([])).toBe(false); // Array is not a string
      expect(isString({})).toBe(false); // Object is not a string
      expect(isString(true)).toBe(false); // Boolean is not a string
    });
  });

  test.describe('getUsernameFromEmail @11b', () => {
    test('should return the username part of the email address', async () => {
      expect(getUsernameFromEmail('user@example.com')).toBe('user');
      expect(getUsernameFromEmail('john.doe@gmail.com')).toBe('john.doe');
      expect(getUsernameFromEmail('alice@company.org')).toBe('alice');
    });

    test('should handle edge cases', async () => {
      expect(getUsernameFromEmail('')).toBe('');
      expect(getUsernameFromEmail('@example.com')).toBe('');
      expect(getUsernameFromEmail('user@')).toBe('user');
      expect(getUsernameFromEmail('user@domain@extra.com')).toBe('user');
    });
  });
