import {test, expect} from '@playwright/test';
import { detectEngagementLoop } from '../../../src/Beginner/Hash_Table/16e.mjs';

test.describe('Detect Engagement Loops in User Behavior @16e', () => {

    test('should detect engagement loops in normal cases', async ({}) => {
      const result1 = detectEngagementLoop(["like Post X", "comment Post Y", "unlike Post X", "like Post X"]);
      const result2 = detectEngagementLoop(["like Post X", "unlike Post X", "like Post X", "unlike Post X"]);
      const result3 = detectEngagementLoop(["like Post A", "unlike Post A", "like Post B", "unlike Post A"]);
      const result4 = detectEngagementLoop([]);
      const result5 = detectEngagementLoop(["like Post X", "comment Post Y", "share Post Z"]);

      expect(result1).toBe(true); // cycle detected
      expect(result2).toBe(true); // cycle detected
      expect(result3).toBe(false); // no cycle
      expect(result4).toBe(false); // no interactions
      expect(result5).toBe(false); // no cycle
    });

    test('should return error for invalid input', async ({}) => {
      const result1 = detectEngagementLoop([123, "like Post X"]);
      const result2 = detectEngagementLoop(["like Post X", "unlike Post X", "share Post Z", 42]);
      const result3 = detectEngagementLoop(["like Post X", null, "share Post Z"]);
      const result4 = detectEngagementLoop([undefined]);
      const result5 = detectEngagementLoop(["like Post X", {}, "share Post Z"]);

      expect(result1).toBe("Please enter a valid interaction sequence");
      expect(result2).toBe("Please enter a valid interaction sequence");
      expect(result3).toBe("Please enter a valid interaction sequence");
      expect(result4).toBe("Please enter a valid interaction sequence");
      expect(result5).toBe("Please enter a valid interaction sequence");
    });

    test('should handle edge cases for engagement loops', async ({}) => {
      const result1 = detectEngagementLoop(["like Post X"]);
      const result2 = detectEngagementLoop(["comment Post Y", "like Post Z", "unlike Post Z", "comment Post Y"]);
      const result3 = detectEngagementLoop(["like Post A", "comment Post B", "share Post C", "like Post A"]);
      const result4 = detectEngagementLoop(["like Post X", "comment Post Y", "like Post X", "comment Post Y"]);
      const result5 = detectEngagementLoop(["like Post A", "unlike Post B", "like Post A", "unlike Post B"]);

      expect(result1).toBe(false); // single interaction, no cycle
      expect(result2).toBe(true); // cycle detected in comments
      expect(result3).toBe(true); // cycle detected in like/share
      expect(result4).toBe(true); // repeating like/comment loop
      expect(result5).toBe(true); // alternating pattern with cycle
    });

  });
