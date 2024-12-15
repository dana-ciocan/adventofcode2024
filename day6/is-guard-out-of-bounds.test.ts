import { expect, test } from 'vitest';
import { isGuardOutOfBounds } from './is-guard-out-of-bounds';

const testMap = [
  '....#.....',
  '.........#',
  '..........',
  '..#.......',
  '.......#..',
  '..........',
  '.#..^.....',
  '........#.',
  '#.........',
  '......#...',
];

test('should return false if guard is inside the map', () => {
  expect(isGuardOutOfBounds([2, 2], testMap)).toEqual(false);
});

test('should return false if guard is in the top left corner', () => {
  expect(isGuardOutOfBounds([0, 0], testMap)).toEqual(false);
});

test('should return false if guard is in the top right corner', () => {
  expect(isGuardOutOfBounds([0, 9], testMap)).toEqual(false);
});

test('should return false if guard is in the bottom right corner', () => {
  expect(isGuardOutOfBounds([9, 9], testMap)).toEqual(false);
});

test('should return false if guard is in the bottom left corner', () => {
  expect(isGuardOutOfBounds([9, 0], testMap)).toEqual(false);
});

test('should return true if guard is outside the map', () => {
  expect(isGuardOutOfBounds([-1, -1], testMap)).toEqual(true);
});
