import { expect, test } from 'vitest';
import { findLoops } from './find-loops';

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

test('should return the right answer for the test map', () => {
  expect(findLoops(testMap)).toBe(6);
});
