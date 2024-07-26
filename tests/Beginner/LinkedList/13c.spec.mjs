import { test, expect } from '@playwright/test';
import mergeSortedLists, {ListNode, printList} from '../../../src/Beginner/Linked_List/13c.mjs';





test.describe('mergeSortedLists @13c', () => {

  test('should merge two sorted linked lists correctly', () => {
    const list1 = new ListNode(2, new ListNode(3, new ListNode(5)));
    const list2 = new ListNode(1, new ListNode(4, new ListNode(6)));
    const mergedList = mergeSortedLists(list1, list2);
    const result = printList(mergedList);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    expect(result.length).toBe(6);
    expect(result[0]).toBe(1);
    expect(result[5]).toBe(6);
    expect(result.includes(3)).toBeTruthy();
    expect(result).toContain(4);
  });

  test('should handle lists with duplicate elements', () => {
    const list1 = new ListNode(1, new ListNode(3, new ListNode(3)));
    const list2 = new ListNode(2, new ListNode(2, new ListNode(4)));
    const mergedList = mergeSortedLists(list1, list2);
    const result = printList(mergedList);

    expect(result).toEqual([1, 2, 2, 3, 3, 4]);
    expect(result.length).toBe(6);
    expect(result[0]).toBe(1);
    expect(result[5]).toBe(4);
    expect(result.includes(3)).toBeTruthy();
    expect(result).toContain(2);
  });

  test('should merge lists with one list significantly longer than the other', () => {
    const list1 = new ListNode(1);
    const list2 = new ListNode(2, new ListNode(3, new ListNode(4)));
    const mergedList = mergeSortedLists(list1, list2);
    const result = printList(mergedList);

    expect(result).toEqual([1, 2, 3, 4]);
    expect(result.length).toBe(4);
    expect(result[0]).toBe(1);
    expect(result[3]).toBe(4);
    expect(result.includes(2)).toBeTruthy();
    expect(result).toContain(3);
  });

  test('should merge lists where one list is entirely greater than the other', () => {
    const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
    const list2 = new ListNode(6, new ListNode(7, new ListNode(8)));
    const mergedList = mergeSortedLists(list1, list2);
    const result = printList(mergedList);

    expect(result).toEqual([1, 3, 5, 6, 7, 8]);
    expect(result.length).toBe(6);
    expect(result[0]).toBe(1);
    expect(result[5]).toBe(8);
    expect(result.includes(5)).toBeTruthy();
    expect(result).toContain(7);
  });

  test('should handle edge case with single element lists', () => {
    const list1 = new ListNode(1);
    const list2 = new ListNode(2);
    const mergedList = mergeSortedLists(list1, list2);
    const result = printList(mergedList);

    expect(result).toEqual([1, 2]);
    expect(result.length).toBe(2);
    expect(result[0]).toBe(1);
    expect(result[1]).toBe(2);
    expect(result.includes(1)).toBeTruthy();
    expect(result).toContain(2);
  });

});
