import { expect, test } from 'vitest';
import { findObstaclePlacements } from './find-obstacle-placements';
import { getPathAndLoop } from './get-path-and-loop';
import { placeObstacle } from './place-obstacle';

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

test('should place obstacle', () => {
  expect(placeObstacle('6,3', testMap, testMap[0].length)).toEqual([
    '....#.....',
    '.........#',
    '..........',
    '..#.......',
    '.......#..',
    '..........',
    '.#.#^.....',
    '........#.',
    '#.........',
    '......#...',
  ]);
});
