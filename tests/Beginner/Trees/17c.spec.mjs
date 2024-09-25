import {test, expect} from '@playwright/test';
import { isSymmetric } from '../../../src/Beginner/Trees/17c.mjs';

test.describe('isSymmetric - @17c', () => {

    test('should return true for symmetric tree', async () => {
      const tree = {
        value: 1,
        left: { value: 2, left: { value: 3 }, right: { value: 4 } },
        right: { value: 2, left: { value: 4 }, right: { value: 3 } }
      };

      const result = isSymmetric(tree);

      expect(result).toBe(true);
      expect(isSymmetric({
        value: 1,
        left: { value: 2, left: { value: 3 }, right: { value: 4 } },
        right: { value: 2, left: { value: 4 }, right: { value: 3 } }
      })).toBe(true);

      expect(isSymmetric({
        value: 1,
        left: { value: 2, left: { value: 3 } },
        right: { value: 2, right: { value: 3 } }
      })).toBe(false);

      expect(isSymmetric(null)).toBe(true);

      expect(isSymmetric({
        value: 1
      })).toBe(true);
    });

    test('should return false for non-symmetric tree', async () => {
      const tree = {
        value: 1,
        left: { value: 2, right: { value: 3 } },
        right: { value: 2, right: { value: 3 } }
      };

      const result = isSymmetric(tree);

      expect(result).toBe(false);
      expect(isSymmetric({
        value: 1,
        left: { value: 2, left: { value: 3 } },
        right: { value: 2, right: { value: 3 } }
      })).toBe(false);

      expect(isSymmetric({
        value: 1,
        left: { value: 2, left: { value: 3 } },
        right: { value: 2 }
      })).toBe(false);

      expect(isSymmetric({
        value: 1,
        left: { value: 2, left: { value: 3 }, right: { value: 4 } },
        right: { value: 2, left: { value: 3 } }
      })).toBe(false);

      expect(isSymmetric({
        value: 1,
        left: { value: 2, right: { value: 4 } },
        right: { value: 2, left: { value: 4 } }
      })).toBe(false);
    });

    test('should handle edge cases for symmetric tree verification', async () => {
      expect(isSymmetric(null)).toBe(true);
      expect(isSymmetric({
        value: 1
      })).toBe(true);

      const tree1 = {
        value: 1,
        left: { value: 2, left: { value: 3 } },
        right: { value: 2, right: { value: 3 } }
      };
      expect(isSymmetric(tree1)).toBe(false);

      const tree2 = {
        value: 1,
        left: { value: 2, right: { value: 4 } },
        right: { value: 2, left: { value: 4 } }
      };
      expect(isSymmetric(tree2)).toBe(false);

      const tree3 = {
        value: 1,
        left: { value: 2, left: { value: 3 }, right: { value: 4 } },
        right: { value: 2, left: { value: 4 }, right: { value: 3 } }
      };
      expect(isSymmetric(tree3)).toBe(true);
    });

  });
