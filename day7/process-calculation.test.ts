import { expect, test } from 'vitest';
import { processCalculation } from './process-calculation';

test('should return 2 for 1 + 1', () => {
  expect(processCalculation(['1', '+', '1'])).toEqual(2);
});

test('should return 5 for 2 + 3', () => {
  expect(processCalculation(['2', '+', '3'])).toEqual(5);
});

test('should return 6 for 2 * 3', () => {
  expect(processCalculation(['2', '*', '3'])).toEqual(6);
});

test('should return 12 for 2 + 2 * 3', () => {
  expect(processCalculation(['2', '+', '2', '*', '3'])).toEqual(12);
});

test('should return 12 for 5 + 2 * 3', () => {
  expect(processCalculation(['5', '+', '2', '*', '3'])).toEqual(21);
});

test('should return 292 for 11 + 6 * 16 + 20', () => {
  expect(processCalculation(['11', '+', '6', '*', '16', '+', '20'])).toEqual(
    292,
  );
});
