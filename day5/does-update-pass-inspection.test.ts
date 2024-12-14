import { expect, test } from "vitest";
import { doesUpdatePassInspection } from "./does-update-pass-inspection";

test('should pass with one matching rule', () => {
  expect(doesUpdatePassInspection([[1, 2]], [1, 2, 3, 4, 5])).toEqual(true);
})

test('should pass with two matching rules', () => {
  expect(doesUpdatePassInspection([[1, 2], [3, 4]], [1, 2, 3, 4, 5])).toEqual(true);
})

test('should pass with three matching rules', () => {
  expect(doesUpdatePassInspection([[1, 2], [3, 4], [1, 4]], [1, 2, 3, 4, 5])).toEqual(true);
})

test('should not pass if one of the rules does not match', () => {
  expect(doesUpdatePassInspection([[1, 2], [3, 4], [4, 1]], [1, 2, 3, 4, 5])).toEqual(false);
})
