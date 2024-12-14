import { test, expect } from 'vitest';
import { isReportDecrementing } from './is-report-decrementing.ts';

test('should return true for reports whose levels decrement', () => {
  expect(isReportDecrementing([6, 5, 4, 3, 2, 1])).toBe(true);
  expect(isReportDecrementing([99, 98, 97, 96, 95, 94])).toBe(true);
});

test('should return true for reports whose levels decrement, even if there are two equal levels', () => {
  expect(isReportDecrementing([6, 5, 4, 2, 2, 1])).toBe(true);
  expect(isReportDecrementing([99, 98, 97, 97, 95, 94])).toBe(true);
});

test('should retrn true for reports whose levels are all equal', () => {
  expect(isReportDecrementing([5, 5, 5, 5, 5, 5])).toBe(true);
  expect(isReportDecrementing([999, 999, 999, 999, 999, 999])).toBe(true);
});

test('should return false for reports whose levels increment', () => {
  expect(isReportDecrementing([1, 2, 3, 4, 5, 6])).toBe(false);
  expect(isReportDecrementing([94, 95, 96, 97, 98, 99])).toBe(false);
});

test('should return false for reports whose levels do not decrement', () => {
  expect(isReportDecrementing([6, 5, 4, 8, 2, 1])).toBe(false);
  expect(isReportDecrementing([99, 98, 100, 96, 95, 94])).toBe(false);
});
