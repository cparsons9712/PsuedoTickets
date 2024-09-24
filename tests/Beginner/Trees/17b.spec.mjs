import {test, expect } from '@playwright/test'
import { calculateMaxDepth } from '../../../src/Beginner/Trees/17b.mjs'
import { folderStructure, singleFolder, imbalancedTree } from '../../../src/Beginner/Trees/premadeTrees.mjs'

test.describe('calculateMaxDepth - @17b', () => {

    test('should return the correct maximum depth for a valid folder structure', async () => {


      const result = calculateMaxDepth(folderStructure);

      expect(result).toBe(4);
      expect(typeof result).toBe('number');
      expect(result).toBeGreaterThan(0);
      expect(result).toEqual(4);
      expect(result).not.toBe(3);
    });

    test('should return 0 for an empty tree', async () => {
      const result = calculateMaxDepth(null);

      expect(result).toBe(0);
      expect(typeof result).toBe('number');
      expect(result).toEqual(0);
      expect(result).not.toBeGreaterThan(0);
      expect(result).not.toBeLessThan(0);
    });

    test('should handle edge cases like single node and imbalanced tree', async () => {
     

      const singleNodeResult = calculateMaxDepth(singleFolder);
      const imbalancedTreeResult = calculateMaxDepth(imbalancedTree);

      expect(singleNodeResult).toBe(1);
      expect(singleNodeResult).toEqual(1);
      expect(singleNodeResult).toBeGreaterThan(0);
      expect(singleNodeResult).toBeLessThan(2);
      expect(singleNodeResult).not.toBe(0);

      expect(imbalancedTreeResult).toBe(4);
      expect(imbalancedTreeResult).toEqual(4);
      expect(imbalancedTreeResult).toBeGreaterThan(3);
      expect(imbalancedTreeResult).toBeLessThan(5);
      expect(imbalancedTreeResult).not.toBe(3);
    });

  });
