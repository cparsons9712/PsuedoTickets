import {test, expect} from '@playwright/test'
import { StackUsingQueues } from '../../../src/Beginner/Queues/15c.mjs'

test.describe('StackUsingQueues @15c', () => {

    test('should correctly push, pop, and peek elements in the undo stack', async () => {
      const undoStack = StackUsingQueues();

      undoStack.push('Type Hello');
      undoStack.push('Type World');
      undoStack.push('Delete World');

      expect(undoStack.peek()).toBe('Delete World');

      undoStack.pop(); // Undo 'Delete World'
      expect(undoStack.peek()).toBe('Type World');

      undoStack.pop(); // Undo 'Type World'
      expect(undoStack.peek()).toBe('Type Hello');

      expect(undoStack.isEmpty()).toBe(false);

      undoStack.pop(); // Undo 'Type Hello'
      expect(undoStack.isEmpty()).toBe(true);
    });

    test('should handle negative scenarios like popping from an empty stack', async () => {
      const undoStack = StackUsingQueues();

      expect(undoStack.isEmpty()).toBe(true);
      expect(undoStack.peek()).toBeUndefined(); // Peek on empty stack

      expect(() => undoStack.pop()).not.toThrow(); // Should handle empty stack gracefully

      undoStack.push('Action 1');
      expect(undoStack.isEmpty()).toBe(false);

      undoStack.pop(); // Pop the only action
      expect(undoStack.isEmpty()).toBe(true);

      expect(() => undoStack.pop()).not.toThrow(); // Further pops should be safe
    });

    test('should correctly handle edge cases with multiple pushes and pops', async () => {
      const undoStack = StackUsingQueues();

      undoStack.push('Action 1');
      undoStack.push('Action 2');
      undoStack.push('Action 3');

      expect(undoStack.peek()).toBe('Action 3');

      undoStack.pop(); // Undo 'Action 3'
      expect(undoStack.peek()).toBe('Action 2');

      undoStack.push('Action 4');
      expect(undoStack.peek()).toBe('Action 4');

      undoStack.pop(); // Undo 'Action 4'
      expect(undoStack.peek()).toBe('Action 2');

      undoStack.pop(); // Undo 'Action 2'
      expect(undoStack.peek()).toBe('Action 1');
    });

  });
