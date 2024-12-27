import { expect, test } from 'vitest';
import { findAntennaTypes } from './find-antenna-types';

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
  expect(findAntennaTypes(testMap)).toEqual(['0', 'A']);
});
