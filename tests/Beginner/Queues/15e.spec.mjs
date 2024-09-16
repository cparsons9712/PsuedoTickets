import {test, expect} from '@playwright/test'
import { reorderSeatingArrangement } from '../../../src/Beginner/Queues/15e.mjs'

test.describe('reorderSeatingArrangement @15e', () => {

    test('should interleave two equal halves', async () => {
      const result = reorderSeatingArrangement(
        ['Executive 1', 'Executive 2', 'Executive 3'],
        ['Developer 1', 'Developer 2', 'Developer 3']
      );
      expect(result).toEqual([
        'Executive 1', 'Developer 1', 'Executive 2',
        'Developer 2', 'Executive 3', 'Developer 3'
      ]);

      expect(result[0]).toBe('Executive 1');
      expect(result[1]).toBe('Developer 1');
      expect(result.length).toBe(6);
      expect(result[4]).toBe('Executive 3');
      expect(result[5]).toBe('Developer 3');
    });

    test('should handle different length halves', async () => {
      const result = reorderSeatingArrangement(
        ['Executive A', 'Executive B'],
        ['Developer X', 'Developer Y', 'Developer Z']
      );
      expect(result).toEqual([
        'Executive A', 'Developer X', 'Executive B',
        'Developer Y', 'Developer Z'
      ]);

      expect(result[0]).toBe('Executive A');
      expect(result[1]).toBe('Developer X');
      expect(result.length).toBe(5);
      expect(result[3]).toBe('Developer Y');
      expect(result[4]).toBe('Developer Z');
    });

    test('should handle edge cases', async () => {
      // Empty frontHalf
      let result = reorderSeatingArrangement([], ['Developer 1', 'Developer 2']);
      expect(result).toEqual(['Developer 1', 'Developer 2']);
      expect(result.length).toBe(2);
      expect(result[0]).toBe('Developer 1');
      expect(result[1]).toBe('Developer 2');

      // Empty backHalf
      result = reorderSeatingArrangement(['Executive 1'], []);
      expect(result).toEqual(['Executive 1']);
      expect(result.length).toBe(1);
      expect(result[0]).toBe('Executive 1');

      // Both halves empty
      result = reorderSeatingArrangement([], []);
      expect(result).toEqual([]);
      expect(result.length).toBe(0);
    });
});
