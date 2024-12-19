import { test } from 'vitest';
import { findObstaclePlacements } from './find-obstacle-placements';
import { getPathAndRotations } from './get-path-and-rotations';

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
  const [path] = getPathAndRotations(testMap);
  console.log(
    findObstaclePlacements(
      path.slice(0, path.length - 1),
      testMap[0].length,
      testMap.length,
    ),
  );
});
