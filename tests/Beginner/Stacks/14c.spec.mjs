import {test, expect} from '@playwright/test';
import { evaluatePostfixExpression } from '../../../src/Beginner/Stacks/14c.mjs';

test.describe('evaluatePostfixExpression @14c', () => {

  test('should return correct result for valid postfix expressions', async () => {
    expect(evaluatePostfixExpression([3, 4, '+', 2, '*', 7, '/'])).toBe(2);
    expect(evaluatePostfixExpression([5, 9, 1, '-', '*'])).toBe(40);
    expect(evaluatePostfixExpression([2, 3, '*', 5, '+'])).toBe(11);
    expect(evaluatePostfixExpression([1, 2, '+', 4, '*', 5, '+', 3, '-'])).toBe(14);
    expect(evaluatePostfixExpression([8, 2, '/', 3, '+'])).toBe(7);
  });

  test('should return "Invalid expression" for invalid postfix expressions', async () => {
    expect(evaluatePostfixExpression([])).toBe("Invalid expression");
    expect(evaluatePostfixExpression([2, '+'])).toBe("Invalid expression");
    expect(evaluatePostfixExpression([5, '*', '+'])).toBe("Invalid expression");
    expect(evaluatePostfixExpression(['+', 2, 3])).toBe("Invalid expression");
    expect(evaluatePostfixExpression([4, '/', '*', 7])).toBe("Invalid expression");
  });

  test('should handle edge cases', async () => {
    expect(evaluatePostfixExpression([3])).toBe(3);
    expect(evaluatePostfixExpression(['+', 3])).toBe("Invalid expression");
    expect(evaluatePostfixExpression([3, '+', 4, 5])).toBe("Invalid expression");
    expect(evaluatePostfixExpression([5, 9, '*', '+'])).toBe("Invalid expression");
    expect(evaluatePostfixExpression([9, 0, '/'])).toBe("Invalid expression"); // Handle division by zero
  });

});
