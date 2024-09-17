import {test, expect} from '@playwright/test';
import { detectDuplicateTransactions } from '../../../src/Beginner/Hash_Table/16b.mjs';

test.describe('detectDuplicateTransactions @16b', () => {

    test('should detect duplicate transactions for valid input', async () => {
      const transactions = [
        { userID: 123, amount: 100, timestamp: "2024-09-17T12:00:00" },
        { userID: 123, amount: 200, timestamp: "2024-09-17T12:05:00" },
        { userID: 123, amount: 100, timestamp: "2024-09-17T12:45:00" },
        { userID: 456, amount: 300, timestamp: "2024-09-17T11:00:00" },
        { userID: 456, amount: 300, timestamp: "2024-09-17T11:59:59" },
      ];

      const result = detectDuplicateTransactions(transactions);

      expect(result).toHaveLength(2);
      expect(result).toContain("Duplicate transaction found for user 123");
      expect(result).toContain("Duplicate transaction found for user 456");
      expect(result[0]).toBe("Duplicate transaction found for user 123");
      expect(result[1]).toBe("Duplicate transaction found for user 456");
    });

    test('should handle empty transaction list', async () => {
      const transactions = [];

      const result = detectDuplicateTransactions(transactions);

      expect(result).toBe("No transactions found");
    });

    test('should return no duplicates for unique transactions', async () => {
      const transactions = [
        { userID: 789, amount: 50, timestamp: "2024-09-17T10:00:00" },
        { userID: 789, amount: 100, timestamp: "2024-09-17T10:05:00" },
        { userID: 456, amount: 300, timestamp: "2024-09-17T11:00:00" },
        { userID: 123, amount: 150, timestamp: "2024-09-17T12:45:00" },
      ];

      const result = detectDuplicateTransactions(transactions);

      expect(result).toBe("No duplicates found");
      expect(Array.isArray(result)).toBe(false);
      expect(result).not.toContain("Duplicate transaction found");
      expect(result).toBe("No duplicates found");
      expect(result.length).toBe(undefined);
    });
  });
