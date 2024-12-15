export const isGuardOutOfBounds = (
  currentGuardPosition: number[],
  map: string[],
) => {
  const [guardRow, guardCol] = currentGuardPosition;

  if (
    guardRow >= 0 &&
    guardCol >= 0 &&
    guardRow < map.length &&
    map[guardRow]?.[guardCol]
  ) {
    return false;
  }
  return true;
};
