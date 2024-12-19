import { test } from 'vitest';
import { findObstaclePlacements } from './find-obstacle-placements';
import { getPathAndLoop } from './get-path-and-loop';

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

test('should return obstacle placements', () => {
  const [path] = getPathAndLoop(testMap);
  console.log(
    findObstaclePlacements(
      path.slice(0, path.length - 1),
      testMap[0].length,
      testMap.length,
    ),
  );
});
