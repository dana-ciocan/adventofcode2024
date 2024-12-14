import { expect, test } from "vitest";
import { walkMap } from "./walk-map";

const testMap = ['....#.....',
  '.........#',
  '..........',
  '..#.......',
  '.......#..',
  '..........',
  '.#..^.....',
  '........#.',
  '#.........',
  '......#...'];

test('should return the right answer for the test map', () => {
  expect(walkMap(testMap)).toBe(41);
});

'....#.....',
  '....XXXXX#',
  '....X...X.',
  '..#.X...X.',
  '..XXXXX#X.',
  '..X.X.X.X..',
  '.#XXXXXXX.',
  '.XXXXXXX#.',
  '#XXXXXXX..',
  '......#X..'
