import {test, expect} from '@playwright/test';
import { detectEnergySpike } from '../../../src/Beginner/Hash_Table/16d.mjs';

test.describe('detectEnergySpike @16d', () => {

    test('should return true for valid energy spikes with K threshold', async () => {
      const result1 = detectEnergySpike([2, 3, 1, 4, 6, 2, 1], 10);
      const result2 = detectEnergySpike([1, 2, 3, 4, 5], 15);
      const result3 = detectEnergySpike([5, 5, 5, 5], 10);

      expect(result1).toBe(true);
      expect(result2).toBe(true);
      expect(result3).toBe(true);

      const result4 = detectEnergySpike([1, 2, 3, 4], 9);
      const result5 = detectEnergySpike([2, 8, 1, 2, 7], 10);

      expect(result4).toBe(true);
      expect(result5).toBe(true);
    });

    test('should return false when no subarray sums to K', async () => {
      const result1 = detectEnergySpike([1, 1, 1, 1], 10);
      const result2 = detectEnergySpike([1, 2, 2, 1, 2], 15);
      const result3 = detectEnergySpike([3, 3, 3, 3], 5);

      expect(result1).toBe(false);
      expect(result2).toBe(false);
      expect(result3).toBe(false);

      const result4 = detectEnergySpike([2, 1, 3, 1, 1], 12);
      const result5 = detectEnergySpike([], 10);

      expect(result4).toBe(false);
      expect(result5).toBe(false);
    });

    test('should handle edge cases like empty arrays or all same numbers', async () => {
      const result1 = detectEnergySpike([], 5);
      const result2 = detectEnergySpike([0, 0, 0, 0], 0);

      expect(result1).toBe(false);
      expect(result2).toBe(true);

      const result3 = detectEnergySpike([10], 10);
      const result4 = detectEnergySpike([1, 1, 1, 1, 1, 1, 1, 1], 4);
      const result5 = detectEnergySpike([1, 2, 3, 4, 5, 6, 7, 8], 36);

      expect(result3).toBe(true);
      expect(result4).toBe(true);
      expect(result5).toBe(false);
    });

});
