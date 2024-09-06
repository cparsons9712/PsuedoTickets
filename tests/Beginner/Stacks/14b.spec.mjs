import {test, expect} from '@playwright/test';
import { validateSyntax } from '../../../src/Beginner/Stacks/14b.mjs';

test.describe('validateSyntax @14b', () => {

    test('should return true for valid syntax', async () => {
      expect(validateSyntax("(function(){ return [1, 2, 3]; })")).toBe(true);
      expect(validateSyntax("{[()]}")).toBe(true);
      expect(validateSyntax("")).toBe(true);
      expect(validateSyntax("(((())))")).toBe(true);
      expect(validateSyntax("{{}}[[[]]]")).toBe(true);
    });

    test('should return false for invalid syntax', async () => {
      expect(validateSyntax("function missingBrace( { return 'error'; }")).toBe(false);
      expect(validateSyntax("{[()]})")).toBe(false);
      expect(validateSyntax("][")).toBe(false);
      expect(validateSyntax("function example() { if (true) { console.log('OK'); }")).toBe(false);
    });

    test('should handle edge cases', async () => {
      expect(validateSyntax("(function(){ return [1, 2, 3]; })")).toBe(true);
      expect(validateSyntax("function missingBrace( { return 'error'; }")).toBe(false);
      expect(validateSyntax("{[()]}")).toBe(true);
      expect(validateSyntax("{[()]})")).toBe(false);
      expect(validateSyntax("function example() { if (true) { console.log('OK'); }")).toBe(false);
    });

  });
