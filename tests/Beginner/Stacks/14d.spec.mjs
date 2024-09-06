import { test, expect } from '@playwright/test';
import { isPalindromeDNA } from '../../../src/Beginner/Stacks/14d.mjs';

test.describe('isPalindromeDNA - @14d', () => {

    test('should correctly identify palindromic DNA sequences', async ({}) => {
      const result1 = isPalindromeDNA("ATCGCTA");
      const result2 = isPalindromeDNA("GATTACAGATTACA");
      const result3 = isPalindromeDNA("CGATACATAGC");

      expect(result1).toBe(true);
      expect(result2).toBe(true);
      expect(result3).toBe(true);

      const result4 = isPalindromeDNA("CGTACGT");
      const result5 = isPalindromeDNA("A");

      expect(result4).toBe(false);
      expect(result5).toBe(true);
    });

    test('should return an error for invalid DNA sequences', async ({}) => {
      const result1 = isPalindromeDNA(12345);
      const result2 = isPalindromeDNA(null);
      const result3 = isPalindromeDNA("ATCGXTA");

      expect(result1).toBe("Please enter a valid DNA sequence");
      expect(result2).toBe("Please enter a valid DNA sequence");
      expect(result3).toBe("Please enter a valid DNA sequence");

      const result4 = isPalindromeDNA({});
      const result5 = isPalindromeDNA(["ATCG"]);

      expect(result4).toBe("Please enter a valid DNA sequence");
      expect(result5).toBe("Please enter a valid DNA sequence");
    });

    test('should handle edge cases correctly', async ({}) => {
      const result1 = isPalindromeDNA("");
      const result2 = isPalindromeDNA("A");
      const result3 = isPalindromeDNA("AT");
      const result4 = isPalindromeDNA("AAAAAA");
      const result5 = isPalindromeDNA("TACGCACTATCGT");

      expect(result1).toBe(true);
      expect(result2).toBe(true);
      expect(result3).toBe(false);

      expect(result4).toBe(true);
      expect(result5).toBe(false);
    });

});
