import { expect, test } from "playwright/test";
import { isString, getUsernameFromEmail, reverseString, containsSubstring } from "../src/Beginner/stringFunctions";

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

test.describe('reverseString @11c', () => {
  test('should reverse a simple string', async () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('chat')).toBe('tahc');
    expect(reverseString('reverse')).toBe('esrever');
    expect(reverseString('string')).toBe('gnirts');
  });

  test('should handle edge cases', async () => {
    expect(reverseString('')).toBe('');
    expect(reverseString('a')).toBe('a');
    expect(reverseString('  ')).toBe('  ');
    expect(reverseString('ab')).toBe('ba');
    expect(reverseString('abc def')).toBe('fed cba');
  });
});

test.describe('containsSubstring @11d', () => {
  test('should return true if substring is present, case-insensitively', async () => {
      expect(containsSubstring('OpenAI', 'AI')).toBe(true);
      expect(containsSubstring('Hello World', 'world')).toBe(true);
      expect(containsSubstring('Email content with Prize', 'prize')).toBe(true);
      expect(containsSubstring('This is a Test', 'test')).toBe(true);
      expect(containsSubstring('Security alert', 'ALERT')).toBe(true);
  });

  test('should return false if substring is not present, case-insensitively', async () => {
      expect(containsSubstring('Hello World', 'planet')).toBe(false);
      expect(containsSubstring('This is a Test', 'exam')).toBe(false);
      expect(containsSubstring('Important notice', 'spam')).toBe(false);
      expect(containsSubstring('Congratulations on your win', 'loss')).toBe(false);
      expect(containsSubstring('Regular email content', 'special')).toBe(false);
  });

  test('should handle edge cases', async () => {
      expect(containsSubstring('', '')).toBe(true);
      expect(containsSubstring('Any content', '')).toBe(true);
      expect(containsSubstring('', 'non-empty')).toBe(false);
      expect(containsSubstring('CaseSensitive', 'casesensitive')).toBe(true);
      expect(containsSubstring('Array and objects', 'Array')).toBe(true);
  });
});
