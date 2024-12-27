import { expect, test } from 'vitest';
import { findAntennaLocations } from './find-antenna-locations';

const testMap = [
  '............',
  '........0...',
  '.....0......',
  '.......0....',
  '....0.......',
  '......A.....',
  '............',
  '............',
  '........A...',
  '.........A..',
  '............',
  '............',
];

test('should return 0 and A', () => {
  expect(findAntennaLocations(testMap)).toEqual({
    0: [
      [1, 8],
      [2, 5],
      [3, 7],
      [4, 4],
    ],
    A: [
      [5, 6],
      [8, 8],
      [9, 9],
    ],
  });
});
