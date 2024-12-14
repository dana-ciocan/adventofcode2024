import { expect, test } from "vitest";
import { getMiddleElement } from "./get-middle-element";

test('should return the only element if there is one element in the array', () => {
  expect(getMiddleElement([1])).toBe(1)
})

test('should return the middle element for arrays with lenghth of 3', () => {
  expect(getMiddleElement([3, 2, 1])).toBe(2)
})

test('should return the middle element for arrays with lenghth of 5', () => {
  expect(getMiddleElement([6, 9, 1, 2, 3])).toBe(1)
})

test('should return the middle element for arrays with lenghth of 7', () => {
  expect(getMiddleElement([6, 9, 1, 4, 2, 3, 8])).toBe(4)
})
