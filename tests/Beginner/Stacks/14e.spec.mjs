import { test, expect } from '@playwright/test';
import { sortPackages } from '../../../src/Beginner/Stacks/14e.mjs';

test.describe('sortPackages', () => {

    test('should sort stacks of packages in non-decreasing order', async ({}) => {
      let stack1 = [5, 1, 3, 2, 4];
      sortPackages(stack1);
      expect(stack1).toEqual([1, 2, 3, 4, 5]);

      let stack2 = [10, 2, 8, 6];
      sortPackages(stack2);
      expect(stack2).toEqual([2, 6, 8, 10]);

      let stack3 = [1, 1, 1];
      sortPackages(stack3);
      expect(stack3).toEqual([1, 1, 1]);

      let stack4 = [9, 7, 12, 3, 5];
      sortPackages(stack4);
      expect(stack4).toEqual([3, 5, 7, 9, 12]);

      let stack5 = [4, 4, 2, 9, 8];
      sortPackages(stack5);
      expect(stack5).toEqual([2, 4, 4, 8, 9]);
    });

    test('should handle invalid inputs', async ({}) => {
      const result1 = sortPackages("not a stack");
      const result2 = sortPackages(123);
      const result3 = sortPackages(null);

      expect(result1).toBe("Please enter a valid stack of numbers");
      expect(result2).toBe("Please enter a valid stack of numbers");
      expect(result3).toBe("Please enter a valid stack of numbers");

      const result4 = sortPackages({});
      const result5 = sortPackages([5, "string", 3]);

      expect(result4).toBe("Please enter a valid stack of numbers");
      expect(result5).toBe("Please enter a valid stack of numbers");
    });

    test('should handle edge cases', async ({}) => {
      let stack1 = [];
      sortPackages(stack1);
      expect(stack1).toEqual([]);

      let stack2 = [3];
      sortPackages(stack2);
      expect(stack2).toEqual([3]);

      let stack3 = [9];
      sortPackages(stack3);
      expect(stack3).toEqual([9]);

      let stack4 = [100, 50];
      sortPackages(stack4);
      expect(stack4).toEqual([50, 100]);

      let stack5 = [-3, -1, -2];
      sortPackages(stack5);
      expect(stack5).toEqual([-3, -2, -1]);
    });

  });
