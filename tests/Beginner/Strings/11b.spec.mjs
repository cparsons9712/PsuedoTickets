import {test, expect} from '@playwright/test'
import { extractUsername } from '../../../src/Beginner/String/11b.mjs';


test.describe('extractUsername @11b', () => {

    test('Normal use cases', async () => {
      expect(extractUsername("john.doe@example.com")).toBe("john.doe");
      expect(extractUsername("jane.smith@gmail.com")).toBe("jane.smith");
      expect(extractUsername("user123@yahoo.com")).toBe("user123");
      expect(extractUsername("username@domain.com")).toBe("username");
      expect(extractUsername("123@numbers.com")).toBe("123");
    });

    test('Negative results', async () => {
      expect(extractUsername("noatsymbol")).toBe("Please enter a valid email address");
      expect(extractUsername("@nousername.com")).toBe("Please enter a valid email address");
    });

    test('Edge cases', async () => {
      expect(extractUsername("username@")).toBe("username");
      expect(extractUsername("name.with.dots@domain.com")).toBe("name.with.dots");
      expect(extractUsername("noatsymbol")).toBe("Please enter a valid email address");
      expect(extractUsername("@nousername.com")).toBe("Please enter a valid email address");
      expect(extractUsername("123@numbers.com")).toBe("123");
    });

});
