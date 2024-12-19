export const findObstaclePlacements = (
  path: number[][],
  mapWidth: number,
  mapHeight: number,
) => {
  const obstaclePlacements: string[] = [];
  for (let i = 0; i < path.length - 1; i++) {
    const [curRow, curCol] = path[i];
    const rowAbove = curRow - 1;
    const rowBelow = curRow + 1;
    const colLeft = curCol - 1;
    const colRight = curCol + 1;

    if (rowAbove > 0 && !obstaclePlacements.includes(`${rowAbove},${curCol}`)) {
      obstaclePlacements.push(`${rowAbove},${curCol}`);
    }
    if (
      rowBelow < mapHeight &&
      !obstaclePlacements.includes(`${rowBelow},${curCol}`)
    ) {
      obstaclePlacements.push(`${rowBelow},${curCol}`);
    }
    if (colLeft > 0 && !obstaclePlacements.includes(`${curRow},${colLeft}`)) {
      obstaclePlacements.push(`${curRow},${colLeft}`);
    }
    if (
      colRight < mapWidth &&
      !obstaclePlacements.includes(`${curRow},${colRight}`)
    ) {
      obstaclePlacements.push(`${curRow},${colRight}`);
    }
  }
  return obstaclePlacements.sort();
};
