
import {test, expect} from "@playwright/test";
import reverseLinkedList, { runnerStat } from "../../../src/Beginner/Linked_List/13a.mjs";



test.describe("reverseLinkedList @13a", () => {
    test("should reverse a standard linked list", () => {
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

    test("should handle empty list (negative case)", () => {
      const reversedHead = reverseLinkedList(null);

      expect(reversedHead).toBe(null);
    });

    test("should handle edge cases", () => {
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
