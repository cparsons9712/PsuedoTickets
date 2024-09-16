import {test, expect} from '@playwright/test'
import { detectSuspiciousTransactionPair } from '../../../src/Beginner/Hash_Table/16a.mjs';

test.describe('detectSuspiciousTransactionPair @16a', () => {

    test('should detect a pair of transactions that add up to the target sum', async () => {
      let result = detectSuspiciousTransactionPair([30, 50, 40, 60], 100);
      expect(result).toEqual([40, 60]);

      result = detectSuspiciousTransactionPair([10, 20, 30, 70, 50], 80);
      expect(result).toEqual([30, 50]);

      expect(result[0]).toBe(30);
      expect(result[1]).toBe(50);
      expect(result.length).toBe(2);
      expect(result).toContain(30);
      expect(result).toContain(50);
    });

    test('should return an empty array when no pairs add up to the target sum', async () => {
      let result = detectSuspiciousTransactionPair([5, 15, 25], 50);
      expect(result).toEqual([]);

      result = detectSuspiciousTransactionPair([20], 40);
      expect(result).toEqual([]);

      expect(result.length).toBe(0);
      expect(result).toEqual([]);
    });

    test('should handle edge cases', async () => {
      // Empty transaction list
      let result = detectSuspiciousTransactionPair([], 50);
      expect(result).toEqual([]);
      expect(result.length).toBe(0);

      // Single transaction (not enough to form a pair)
      result = detectSuspiciousTransactionPair([20], 40);
      expect(result).toEqual([]);
      expect(result.length).toBe(0);

      // Multiple pairs possible, but first valid pair should be returned
      result = detectSuspiciousTransactionPair([30, 50, 30, 70, 10], 100);
      expect(result).toEqual([30, 70]);
      expect(result.length).toBe(2);
      expect(result).toContain(30);
      expect(result).toContain(70);
    });
  });
