import { expect, test } from 'vitest';
import { walkMap } from './walk-map';

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

test('should return the right answer for the test map when remove repeats is on', () => {
  expect(walkMap(testMap)).toEqual([
    '5,4',
    '4,4',
    '3,4',
    '2,4',
    '1,4',
    '1,5',
    '1,6',
    '1,7',
    '1,8',
    '2,8',
    '3,8',
    '4,8',
    '5,8',
    '6,8',
    '6,7',
    '6,6',
    '6,5',
    '6,4',
    '6,3',
    '6,2',
    '5,2',
    '4,2',
    '4,3',
    '4,5',
    '4,6',
    '5,6',
    '7,6',
    '8,6',
    '8,5',
    '8,4',
    '8,3',
    '8,2',
    '8,1',
    '7,1',
    '7,2',
    '7,3',
    '7,4',
    '7,5',
    '7,7',
    '8,7',
    '9,7',
    '10,7',
  ]);
});

test('should return the right answer for the test map when remove repeats is off', () => {
  expect(walkMap(testMap, false)).toEqual([
    '5,4',
    '4,4',
    '3,4',
    '2,4',
    '1,4',
    '1,5',
    '1,6',
    '1,7',
    '1,8',
    '2,8',
    '3,8',
    '4,8',
    '5,8',
    '6,8',
    '6,7',
    '6,6',
    '6,5',
    '6,4',
    '6,3',
    '6,2',
    '5,2',
    '4,2',
    '4,3',
    '4,4',
    '4,5',
    '4,6',
    '5,6',
    '6,6',
    '7,6',
    '8,6',
    '8,5',
    '8,4',
    '8,3',
    '8,2',
    '8,1',
    '7,1',
    '7,2',
    '7,3',
    '7,4',
    '7,5',
    '7,6',
    '7,7',
    '8,7',
    '9,7',
    '10,7',
  ]);
});

test('should add the starting square when that setting is on', () => {
  expect(walkMap(testMap, false, true)).toEqual([
    '6,4', // first loop start
    '5,4',
    '4,4',
    '3,4',
    '2,4',
    '1,4',
    '1,5',
    '1,6',
    '1,7',
    '1,8',
    '2,8',
    '3,8',
    '4,8',
    '5,8',
    '6,8',
    '6,7',
    '6,6',
    '6,5',
    '6,4', // first loop end
    '6,3',
    '6,2',
    '5,2',
    '4,2',
    '4,3',
    '4,4',
    '4,5',
    '4,6',
    '5,6',
    '6,6',
    '7,6',
    '8,6',
    '8,5',
    '8,4',
    '8,3',
    '8,2',
    '8,1',
    '7,1',
    '7,2',
    '7,3',
    '7,4',
    '7,5',
    '7,6',
    '7,7',
    '8,7',
    '9,7',
    '10,7',
  ]);
});
