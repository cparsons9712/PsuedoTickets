import { expect, test } from "playwright/test";
import {
  isString,
  extractUsername,
  reverseString,
  containsSubstring,
  countVowelsAndConsonants,
} from "../src/Beginner/stringFunctions.mjs";



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



test.describe('extractUsername @11b', () => {

  test('Normal use cases', async () => {
    expect(extractUsername("john.doe@example.com")).toBe("john.doe");
    expect(extractUsername("jane.smith@gmail.com")).toBe("jane.smith");
    expect(extractUsername("user123@yahoo.com")).toBe("user123");
    expect(extractUsername("username@domain.com")).toBe("username");
    expect(extractUsername("123@numbers.com")).toBe("123");
  });

  test('Negative results', async () => {
    expect(extractUsername("noatsymbol")).toBe("Please enter a valid email address");
    expect(extractUsername("@nousername.com")).toBe("Please enter a valid email address");
  });

  test('Edge cases', async () => {
    expect(extractUsername("username@")).toBe("username");
    expect(extractUsername("name.with.dots@domain.com")).toBe("name.with.dots");
    expect(extractUsername("noatsymbol")).toBe("Please enter a valid email address");
    expect(extractUsername("@nousername.com")).toBe("Please enter a valid email address");
    expect(extractUsername("123@numbers.com")).toBe("123");
  });

});




test.describe("reverseString @11c", () => {
  test("should reverse a simple string", async () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
    expect(reverseString("chat")).toBe("tahc");
    expect(reverseString("reverse")).toBe("esrever");
    expect(reverseString("string")).toBe("gnirts");
  });

  test("should handle edge cases", async () => {
    expect(reverseString("")).toBe("");
    expect(reverseString("a")).toBe("a");
    expect(reverseString("  ")).toBe("  ");
    expect(reverseString("ab")).toBe("ba");
    expect(reverseString("abc def")).toBe("fed cba");
  });
});

test.describe("containsSubstring @11d", () => {
  test("should return true if substring is present, case-insensitively", async () => {
    expect(containsSubstring("OpenAI", "AI")).toBe(true);
    expect(containsSubstring("Hello World", "world")).toBe(true);
    expect(containsSubstring("Email content with Prize", "prize")).toBe(true);
    expect(containsSubstring("This is a Test", "test")).toBe(true);
    expect(containsSubstring("Security alert", "ALERT")).toBe(true);
  });

  test("should return false if substring is not present, case-insensitively", async () => {
    expect(containsSubstring("Hello World", "planet")).toBe(false);
    expect(containsSubstring("This is a Test", "exam")).toBe(false);
    expect(containsSubstring("Important notice", "spam")).toBe(false);
    expect(containsSubstring("Congratulations on your win", "loss")).toBe(
      false
    );
    expect(containsSubstring("Regular email content", "special")).toBe(false);
  });

  test("should handle edge cases", async () => {
    expect(containsSubstring("", "")).toBe(true);
    expect(containsSubstring("Any content", "")).toBe(true);
    expect(containsSubstring("", "non-empty")).toBe(false);
    expect(containsSubstring("CaseSensitive", "casesensitive")).toBe(true);
    expect(containsSubstring("Array and objects", "Array")).toBe(true);
  });
});

test.describe("containsSubstring @11e", () => {
  test('should count vowels and consonants correctly', async () => {
    expect(countVowelsAndConsonants("hello")).toBe("Vowels: 2, Consonants: 3");
    expect(countVowelsAndConsonants("education")).toBe("Vowels: 5, Consonants: 4");
    expect(countVowelsAndConsonants("rhythm")).toBe("Vowels: 0, Consonants: 6");
    expect(countVowelsAndConsonants("sky")).toBe("Vowels: 0, Consonants: 3");
    expect(countVowelsAndConsonants("AEIOU")).toBe("Vowels: 5, Consonants: 0");
    expect(countVowelsAndConsonants("bcd")).toBe("Vowels: 0, Consonants: 3");
  });

  test('should handle non-string input correctly', async () => {
    expect(countVowelsAndConsonants(123)).toBe("Please enter a valid string");
    expect(countVowelsAndConsonants({})).toBe("Please enter a valid string");
    expect(countVowelsAndConsonants([])).toBe("Please enter a valid string");
    expect(countVowelsAndConsonants(null)).toBe("Please enter a valid string");
    expect(countVowelsAndConsonants(undefined)).toBe("Please enter a valid string");
  });

  test('should handle edge cases', async () => {
    expect(countVowelsAndConsonants("!@#")).toBe("Vowels: 0, Consonants: 0");
    expect(countVowelsAndConsonants(" ")).toBe("Vowels: 0, Consonants: 0");
    expect(countVowelsAndConsonants("\n")).toBe("Vowels: 0, Consonants: 0");
    expect(countVowelsAndConsonants("123abc")).toBe("Vowels: 1, Consonants: 2");
    expect(countVowelsAndConsonants("aeiouAEIOU")).toBe("Vowels: 10, Consonants: 0");
    expect(countVowelsAndConsonants("bcdfghjklmnpqrstvwxyz")).toBe("Vowels: 0, Consonants: 21");
  });
});
