export const changeGuardPosition = (
  map: string[][],
  curPos: number[],
  nextPos: number[],
  direction: string,
) => {
  const [curRow, curCol] = curPos;
  const [nextRow, nextCol] = nextPos;

  map[curRow][curCol] = '.';
  map[nextRow][nextCol] = direction;

  return map;
};
