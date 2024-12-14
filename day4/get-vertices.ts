import { wordsearch as input } from './input.ts';

export const getVertices = (row: number, col: number) => {
  const vertices = [
    input?.[row - 1]?.[col - 1],
    input?.[row - 1]?.[col + 1],
    input?.[row + 1]?.[col + 1],
    input?.[row + 1]?.[col - 1]
  ].filter(Boolean);

  if (vertices.length === 4) {
    return vertices;
  }
}
