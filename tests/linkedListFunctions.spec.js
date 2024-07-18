const { test, expect } = require('@playwright/test');
import { reverseLinkedList, detectCycle } from '../src/Beginner/linkedListFunctions.mjs';
import { runnerStat, warehouseOrder, createLinkedList, ListNode } from '../src/Beginner/helperFunctions.mjs';

  test.describe('reverseLinkedList @13a', () => {
    test('should reverse a standard linked list', () => {
      const node3 = new runnerStat(3, "01:30:00", 160, 10, "00:30:00");
      const node2 = new runnerStat(2, "01:00:00", 158, 10, "00:30:00", node3);
      const node1 = new runnerStat(1, "00:30:00", 155, 10, "00:30:00", node2);
      const head = new runnerStat(0, "00:00:00", 150, 10, "00:00:00", node1);

      const reversedHead = reverseLinkedList(head);

      expect(reversedHead.checkpointID).toBe(3);
      expect(reversedHead.next.checkpointID).toBe(2);
      expect(reversedHead.next.next.checkpointID).toBe(1);
      expect(reversedHead.next.next.next.checkpointID).toBe(0);
      expect(reversedHead.next.next.next.next).toBe(null);
    });

    test('should handle empty list (negative case)', () => {
      const reversedHead = reverseLinkedList(null);

      expect(reversedHead).toBe(null);
    });

    test('should handle edge cases', () => {
      const singleNode = new runnerStat(1, "00:00:00", 150, 10, "00:00:00");
      const reversedSingleNode = reverseLinkedList(singleNode);

      expect(reversedSingleNode.checkpointID).toBe(1);
      expect(reversedSingleNode.next).toBe(null);

      const node2 = new runnerStat(2, "00:30:00", 155, 10, "00:30:00");
      const node1 = new runnerStat(1, "00:00:00", 150, 10, "00:00:00", node2);
      const reversedTwoNodeList = reverseLinkedList(node1);

      expect(reversedTwoNodeList.checkpointID).toBe(2);
      expect(reversedTwoNodeList.next.checkpointID).toBe(1);
      expect(reversedTwoNodeList.next.next).toBe(null);
    });
  });

  test.describe('detectCycle @13b', () => {

    test('should detect cycle in a linked list (normal use cases)', async () => {
      const node1 = createLinkedList([1, 2, 3, 4, 5], 2); // Cycle exists
      const node2 = createLinkedList([1, 2, 3, 4, 5]); // No cycle
      const singleNode = new warehouseOrder(1); // Single node without a cycle

      expect(detectCycle(node1)).toBe(true);
      expect(detectCycle(node2)).toBe(false);
      expect(detectCycle(singleNode)).toBe(false);
      expect(detectCycle(null)).toBe(false);
      expect(detectCycle(new warehouseOrder(1))).toBe(false);
    });

    test('should return false for invalid inputs (negative cases)', async () => {
      expect(detectCycle("not a node")).toBe(false);
      expect(detectCycle([])).toBe(false);
      expect(detectCycle({})).toBe(false);
      expect(detectCycle(123)).toBe(false);
      expect(detectCycle(undefined)).toBe(false);
    });

    test('should handle edge cases', async () => {
      const node1 = createLinkedList([1]); // Single node without a cycle
      const node2 = createLinkedList([]); // Empty list
      const node3 = createLinkedList([1, 2, 3], 1); // Small cycle

      expect(detectCycle(node1)).toBe(false);
      expect(detectCycle(node2)).toBe(false);
      expect(detectCycle(null)).toBe(false);
      expect(detectCycle(node3)).toBe(true);
      expect(detectCycle(createLinkedList([1, 2, 3, 4, 5], 0))).toBe(true);
    });

  });
