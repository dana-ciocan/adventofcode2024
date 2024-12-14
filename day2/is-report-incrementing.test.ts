import { test, expect } from 'vitest';
import { isReportIncrementing } from './is-report-incrementing.ts';

test('should return true for reports whose levels increment', () => {
  expect(isReportIncrementing([1, 2, 3, 4, 5, 6])).toBe(true);
  expect(isReportIncrementing([94, 95, 96, 97, 98, 99])).toBe(true);
});

test('should return true for reports whose levels increment, even if there are two equal levels', () => {
  expect(isReportIncrementing([1, 2, 3, 3, 4, 5, 6])).toBe(true);
  expect(isReportIncrementing([94, 95, 96, 97, 98, 98, 99])).toBe(true);
});

test('should retrn true for reports whose levels are all equal', () => {
  expect(isReportIncrementing([5, 5, 5, 5, 5, 5])).toBe(true);
  expect(isReportIncrementing([999, 999, 999, 999, 999, 999])).toBe(true);
});

test('should return false for reports whose levels decrement', () => {
  expect(isReportIncrementing([6, 5, 4, 3, 2, 1])).toBe(false);
  expect(isReportIncrementing([99, 98, 97, 96, 95, 94])).toBe(false);
});

test('should return false for reports whose levels do not decrement', () => {
  expect(isReportIncrementing([1, 2, 3, 2, 5, 6])).toBe(false);
  expect(isReportIncrementing([94, 95, 93, 97, 98, 99])).toBe(false);
})
