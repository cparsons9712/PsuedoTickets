import { expect, test } from "playwright/test";
import { testingTheTest } from "../src/Beginner/Strings/utils";

test('returns type', async () => {
    const words = testingTheTest("this is a string")
    expect(words).toBe("string")
  });
