import { expect, test } from 'vitest';
import { getGuardPosition } from './get-guard-position';

test('should find the guard in one row', () => {
  expect(getGuardPosition(['.#..^.....'])).toEqual([0, 4]);
});

test('should find the guard in a full map', () => {
  expect(
    getGuardPosition([
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
    ]),
  ).toEqual([6, 4]);
});
