import {test, expect} from '@playwright/test';
import { generateBinaryNumbers } from '../../../src/Beginner/Queues/15d.mjs'

test.describe('generateBinaryNumbers @15d', () => {

    test('should generate binary numbers from 1 to n - Normal Use Case', async () => {
      const result = generateBinaryNumbers(5);
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(5);
      expect(result).toEqual(["1", "10", "11", "100", "101"]);
      expect(result[0]).toBe("1");
      expect(result[4]).toBe("101");
    });

    test('should return an empty array for invalid input - Negative Use Case', async () => {
      let result = generateBinaryNumbers(-5);
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(0);
      expect(result).toEqual([]);

      result = generateBinaryNumbers("five");
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(0);
      expect(result).toEqual([]);

      result = generateBinaryNumbers(null);
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(0);
      expect(result).toEqual([]);
    });

    test('should handle edge cases appropriately', async () => {
      let result = generateBinaryNumbers(0);
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(0);
      expect(result).toEqual([]);

      result = generateBinaryNumbers(1);
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(1);
      expect(result[0]).toBe("1");

      result = generateBinaryNumbers(10);
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(10);
      expect(result).toEqual(["1", "10", "11", "100", "101", "110", "111", "1000", "1001", "1010"]);

      result = generateBinaryNumbers(100);
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(100);
      expect(result[99]).toBe("1100100");
    });

  });
