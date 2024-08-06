import { expect, test } from "playwright/test";
import { countVowelsAndConsonants } from "../../../src/Beginner/String/11e.mjs";

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
