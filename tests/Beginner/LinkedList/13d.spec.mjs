import {test, expect} from '@playwright/test'
import { removeNthFromEnd } from '../../../src/Beginner/Linked_List/13d.mjs'

test.describe('removeNthFromEnd function', () => {
    test('should remove the 1st node from the end of the list', () => {
        const taskList = createLinkedList([1, 2, 3, 4, 5]);
        const result = removeNthFromEnd(taskList, 1);
        expect(result.val).toBe(1);
        expect(result.next.val).toBe(2);
        expect(result.next.next.val).toBe(3);
        expect(result.next.next.next.val).toBe(4);
        expect(result.next.next.next.next).toBe(null);
    });

    test('should handle invalid inputs and return null', () => {
        expect(removeNthFromEnd(null, 2)).toBeNull();
        expect(removeNthFromEnd({}, 2)).toBeNull();
        expect(removeNthFromEnd(createLinkedList([1]), 'two')).toBeNull();
        expect(removeNthFromEnd(createLinkedList([1]), -1)).toBeNull();
        expect(removeNthFromEnd(createLinkedList([1]), 0)).toBeNull();
    });

    test('should handle edge cases with varying list lengths and indices', () => {
        const taskList1 = createLinkedList([1, 2, 3, 4, 5]);
        const result1 = removeNthFromEnd(taskList1, 3);
        expect(result1.val).toBe(1);
        expect(result1.next.val).toBe(2);
        expect(result1.next.next.val).toBe(4);
        expect(result1.next.next.next.val).toBe(5);
        expect(result1.next.next.next.next).toBe(null);

        const taskList2 = createLinkedList([1, 2, 3, 4, 5]);
        const result2 = removeNthFromEnd(taskList2, 5);
        expect(result2.val).toBe(2);
        expect(result2.next.val).toBe(3);
        expect(result2.next.next.val).toBe(4);
        expect(result2.next.next.next.val).toBe(5);
        expect(result2.next.next.next.next).toBe(null);

        const taskList3 = createLinkedList([1, 2, 3, 4, 5]);
        const result3 = removeNthFromEnd(taskList3, 6);
        expect(result3).toBeNull();
    });
});
