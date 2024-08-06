import { expect, test } from "playwright/test";
import { containsSubstring } from "../../../src/Beginner/String/11d.mjs";

test.describe("containsSubstring @11d", () => {
    test("should return true if substring is present, case-insensitively", async () => {
      expect(containsSubstring("OpenAI", "AI")).toBe(true);
      expect(containsSubstring("Hello World", "world")).toBe(true);
      expect(containsSubstring("Email content with Prize", "prize")).toBe(true);
      expect(containsSubstring("This is a Test", "test")).toBe(true);
      expect(containsSubstring("Security alert", "ALERT")).toBe(true);
    });

    test("should return false if substring is not present, case-insensitively", async () => {
      expect(containsSubstring("Hello World", "planet")).toBe(false);
      expect(containsSubstring("This is a Test", "exam")).toBe(false);
      expect(containsSubstring("Important notice", "spam")).toBe(false);
      expect(containsSubstring("Congratulations on your win", "loss")).toBe(
        false
      );
      expect(containsSubstring("Regular email content", "special")).toBe(false);
    });

    test("should handle edge cases", async () => {
      expect(containsSubstring("", "")).toBe(true);
      expect(containsSubstring("Any content", "")).toBe(true);
      expect(containsSubstring("", "non-empty")).toBe(false);
      expect(containsSubstring("CaseSensitive", "casesensitive")).toBe(true);
      expect(containsSubstring("Array and objects", "Array")).toBe(true);
    });
  });
