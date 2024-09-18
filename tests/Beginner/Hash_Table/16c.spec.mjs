import {test, expect} from '@playwright/test'
import { groupAnagrams } from '../../../src/Beginner/Hash_Table/16c.mjs'

test.describe('groupAnagrams @16c', () => {

    test('should correctly group anagrams for a normal use case', async () => {
      const result1 = groupAnagrams(["tablet", "bleatt", "phone", "nepho", "laptop"]);
      expect(result1).toEqual([["tablet", "bleatt"], ["phone", "nepho"], ["laptop"]]);

      const result2 = groupAnagrams(["camera", "racema", "phone", "tablet", "bleatt"]);
      expect(result2).toEqual([["camera", "racema"], ["phone"], ["tablet", "bleatt"]]);

      const result3 = groupAnagrams(["mouse", "usemo", "laptop", "potpal"]);
      expect(result3).toEqual([["mouse", "usemo"], ["laptop", "potpal"]]);

      const result4 = groupAnagrams(["tablet", "phone", "laptop"]);
      expect(result4).toEqual([["tablet"], ["phone"], ["laptop"]]);

      const result5 = groupAnagrams([]);
      expect(result5).toEqual([]);
    });

    test('should return arrays with individual words when no anagrams are present', async () => {
      const result1 = groupAnagrams(["notanagram", "stillnot", "laptop"]);
      expect(result1).toEqual([["notanagram"], ["stillnot"], ["laptop"]]);

      const result2 = groupAnagrams(["cat", "dog", "bird"]);
      expect(result2).toEqual([["cat"], ["dog"], ["bird"]]);

      const result3 = groupAnagrams(["one", "two", "three"]);
      expect(result3).toEqual([["one"], ["two"], ["three"]]);

      const result4 = groupAnagrams(["abc", "xyz", "pqr"]);
      expect(result4).toEqual([["abc"], ["xyz"], ["pqr"]]);

      const result5 = groupAnagrams(["sun", "moon", "star"]);
      expect(result5).toEqual([["sun"], ["moon"], ["star"]]);
    });

    test('should handle edge cases with mixed inputs and varying lengths', async () => {
      const result1 = groupAnagrams(["abc", "cba", "xyz", "zyx", "cab"]);
      expect(result1.length).toBe(2);
      expect(result1).toContainEqual(["abc", "cba", "cab"]);
      expect(result1).toContainEqual(["xyz", "zyx"]);

      const result2 = groupAnagrams([""]);
      expect(result2).toEqual([[""]]);

      const result3 = groupAnagrams(["a", "a", "a", "b", "b", "c"]);
      expect(result3.length).toBe(3);
      expect(result3).toContainEqual(["a", "a", "a"]);
      expect(result3).toContainEqual(["b", "b"]);
      expect(result3).toContainEqual(["c"]);

      const result4 = groupAnagrams(["longestwordever", "everlongestword", "wordlongestever"]);
      expect(result4).toEqual([["longestwordever", "everlongestword", "wordlongestever"]]);

      const result5 = groupAnagrams(["single"]);
      expect(result5).toEqual([["single"]]);
    });
  });
