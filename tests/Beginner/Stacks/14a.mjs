import {test, expect} from '@playwright/test'
import { manageTextEditor } from '../../../src/Beginner/Stacks/14a.mjs'

test.describe('manageTextEditor @14a', () => {

    test('should handle typical text editor operations correctly', async () => {
      let state = '';

      state = manageTextEditor("type", "Hello");
      expect(state).toBe("Hello");

      state = manageTextEditor("delete", "Hell");
      expect(state).toBe("Hell");

      state = manageTextEditor("undo", "Hello");
      expect(state).toBe("Hello");

      state = manageTextEditor("redo", "Hell");
      expect(state).toBe("Hell");

      state = manageTextEditor("type", "Hellooo");
      expect(state).toBe("Hellooo");
    });

    test('should handle negative cases for invalid or unsupported actions', async () => {
      let state = "Hello";

      let result = manageTextEditor(123, state);
      expect(result).toBe("Invalid action");

      result = manageTextEditor("paste", state);
      expect(result).toBe("Unsupported action");

      result = manageTextEditor("undo", null);
      expect(result).toBe("Invalid text editor state");

      result = manageTextEditor("redo", null);
      expect(result).toBe("Invalid text editor state");

      result = manageTextEditor(null, state);
      expect(result).toBe("Invalid action");
    });

    test('should handle edge cases for undo/redo operations on empty or initial state', async () => {
      let state = "";

      state = manageTextEditor("undo", state);
      expect(state).toBe("");

      state = manageTextEditor("redo", state);
      expect(state).toBe("");

      state = manageTextEditor("type", "A");
      expect(state).toBe("A");

      state = manageTextEditor("undo", "");
      expect(state).toBe("");

      state = manageTextEditor("redo", "");
      expect(state).toBe("");
    });
  });
