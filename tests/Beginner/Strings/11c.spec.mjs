import { expect, test } from "playwright/test";
import { reverseString } from "../../../src/Beginner/String/11c.mjs";

test.describe("reverseString @11c", () => {
  test("should reverse a simple string", async () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
    expect(reverseString("chat")).toBe("tahc");
    expect(reverseString("reverse")).toBe("esrever");
    expect(reverseString("string")).toBe("gnirts");
  });

  test("should handle edge cases", async () => {
    expect(reverseString("")).toBe("");
    expect(reverseString("a")).toBe("a");
    expect(reverseString("  ")).toBe("  ");
    expect(reverseString("ab")).toBe("ba");
    expect(reverseString("abc def")).toBe("fed cba");
  });
});
