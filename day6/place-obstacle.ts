export const placeObstacle = (position: string, map: string[]) => {
  const [rowPos, colPos] = position.split(',');
  map[rowPos] =
    map[rowPos].substring(0, colPos) +
    '#' +
    map[rowPos].substring(Number(colPos) + 1);

  return map;
};
