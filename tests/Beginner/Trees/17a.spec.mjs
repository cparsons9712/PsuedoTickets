import { test, expect } from '@playwright/test';
import { getSortedProductPrices } from '../../../src/Beginner/Trees/17a.mjs';
import { bstRoot, singleNodeTree, duplicateTree } from '../../../src/Beginner/Trees/premadeTrees.mjs';

test.describe('getSortedProductPrices - @17a', () => {

  test('should return product prices in ascending order for a valid BST', async () => {
    const result = getSortedProductPrices(bstRoot);

    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([25, 50, 75, 100, 150, 200, 300]);
    expect(result[0]).toBe(25);
    expect(result[result.length - 1]).toBe(300);
    expect(result).toHaveLength(7);
  });

  test('should return an empty array for a null root (empty tree)', async () => {
    const result = getSortedProductPrices(null);

    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([]);
    expect(result).toHaveLength(0);
    expect(result).not.toContain(null);
    expect(result.every(item => typeof item === 'number')).toBe(true);
  });

  test('should handle edge cases like single node or duplicate prices', async () => {

    const singleNodeResult = getSortedProductPrices(singleNodeTree);
    const duplicateTreeResult = getSortedProductPrices(duplicateTree);

    expect(singleNodeResult).toEqual([500]);
    expect(singleNodeResult).toHaveLength(1);
    expect(singleNodeResult[0]).toBe(500);

    expect(duplicateTreeResult).toEqual([50, 100, 100]);
    expect(duplicateTreeResult).toHaveLength(3);
    expect(duplicateTreeResult).toContain(50);
    expect(duplicateTreeResult.filter(price => price === 100)).toHaveLength(2);
  });

});
