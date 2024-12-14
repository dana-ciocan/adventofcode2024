import { expect, test } from "vitest";
import { getValidRulesForUpdate } from "./get-valid-rules-for-update";

test('should return the matching rule', () => {
  expect(getValidRulesForUpdate([[1, 2]], [1, 2, 3, 4, 5])).toEqual([[1, 2]]);
})

test('should not return the non-matching rule', () => {
  expect(getValidRulesForUpdate([[6, 7]], [1, 2, 3, 4, 5])).toEqual([]);
})

test('should not return a rule with only one matching page', () => {
  expect(getValidRulesForUpdate([[6, 1]], [1, 2, 3, 4, 5])).toEqual([]);
})

test('should return multiple matching rules', () => {
  expect(getValidRulesForUpdate([[1, 2], [3, 4]], [1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4]]);
})

test('should return multiple matching rules, even if numbers are descending', () => {
  expect(getValidRulesForUpdate([[2, 1], [3, 4]], [1, 2, 3, 4, 5])).toEqual([[2, 1], [3, 4]]);
})
