// const { test, expect } = require('@playwright/test');
// const { findIntersectionNode } = require('../../src/Advanced/linkedLists');

import {test, expect} from '@playwright/test';
import { findIntersectionNode, createLinkedList } from '../../../src/Beginner/Linked_List/13e.mjs';

test.describe('Find Intersection Point of Two Linked Lists for Unified User Profiles - @13e', () => {

  test('Ideal cases: matching unique identifier found', async () => {
    const listA1 = createLinkedList([1, 2, 3, 4, 5]);
    const listB1 = createLinkedList([9, 8]);
    listB1.next.next = listA1.next.next.next; // Intersection at node with value 4

    const listA2 = createLinkedList([10, 20, 30, 40]);
    const listB2 = createLinkedList([5, 15, 25, 35, 45]);
    listB2.next.next.next.next = listA2.next.next; // Intersection at node with value 30

    const listA3 = createLinkedList([1, 2]);
    const listB3 = createLinkedList([5, 10]);
    listB3.next.next = listA3; // Intersection at node with value 1

    expect(findIntersectionNode(listA1, listB1)).toBe(listA1.next.next.next);
    expect(findIntersectionNode(listA2, listB2)).toBe(listA2.next.next);
    expect(findIntersectionNode(listA3, listB3)).toBe(listA3);
  });

  test('Negative cases: no matching unique identifier found', async () => {
    const listA4 = createLinkedList([10, 20, 30]);
    const listB4 = createLinkedList([40, 50, 60]);

    const emptyList = createLinkedList([]);

    expect(findIntersectionNode(listA4, listB4)).toBeNull();
    expect(findIntersectionNode(emptyList, listB4)).toBeNull();
    expect(findIntersectionNode(listA4, emptyList)).toBeNull();
  });

  test('Edge cases: handling null or empty lists', async () => {
    const listA1 = createLinkedList([1, 2, 3, 4, 5]);
    const listB1 = createLinkedList([9, 8]);
    listB1.next.next = listA1.next.next.next; // Intersection at node with value 4

    expect(findIntersectionNode(null, listB1)).toBeNull();
    expect(findIntersectionNode(listA1, null)).toBeNull();
    expect(findIntersectionNode(null, null)).toBeNull();

    const emptyList = createLinkedList([]);

    expect(findIntersectionNode(emptyList, listB1)).toBeNull();
    expect(findIntersectionNode(listA1, emptyList)).toBeNull();
  });


});
