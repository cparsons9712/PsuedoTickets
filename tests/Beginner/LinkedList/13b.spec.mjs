import {test, expect} from "@playwright/test"
import { detectCycle, warehouseOrder, createLinkedList } from "../../../src/Beginner/Linked_List/13b.mjs";


test.describe("detectCycle @13b", () => {
  test("should detect cycle in a linked list (normal use cases)", async () => {
    const node1 = createLinkedList([1, 2, 3, 4, 5], 2); // Cycle exists
    const node2 = createLinkedList([1, 2, 3, 4, 5]); // No cycle
    const singleNode = new warehouseOrder(1); // Single node without a cycle

    expect(detectCycle(node1)).toBe(true);
    expect(detectCycle(node2)).toBe(false);
    expect(detectCycle(singleNode)).toBe(false);
    expect(detectCycle(null)).toBe(false);
    expect(detectCycle(new warehouseOrder(1))).toBe(false);
  });

  test("should return false for invalid inputs (negative cases)", async () => {
    expect(detectCycle("not a node")).toBe(false);
    expect(detectCycle([])).toBe(false);
    expect(detectCycle({})).toBe(false);
    expect(detectCycle(123)).toBe(false);
    expect(detectCycle(undefined)).toBe(false);
  });

  test("should handle edge cases", async () => {
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
