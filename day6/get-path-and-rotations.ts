import { findLoops } from './find-loops.ts';
import { getGuardPosition } from './get-guard-position.ts';
import { isGuardOutOfBounds } from './is-guard-out-of-bounds.ts';
import { rotateGuard } from './rotate-guard.ts';

export const getPathAndRotations = (
  map: string[],
): [number[][], number[][], boolean] => {
  let currentGuardPosition: number[] = getGuardPosition(map);
  let guardDirection: string = '^';
  let path: number[][] = [];
  let rotations: number[][] = [];
  let loopedPath = false;

  path.push(currentGuardPosition);

  while (!isGuardOutOfBounds(currentGuardPosition, map) && !loopedPath) {
    const [guardRow, guardCol] = currentGuardPosition;
    let nextGuardPosition;

    switch (guardDirection) {
      case '^':
        nextGuardPosition = [guardRow - 1, guardCol];
        break;
      case '>':
        nextGuardPosition = [guardRow, guardCol + 1];
        break;
      case 'v':
        nextGuardPosition = [guardRow + 1, guardCol];
        break;
      case '<':
        nextGuardPosition = [guardRow, guardCol - 1];
        break;
    }

    const nextRow = map[nextGuardPosition[0]];
    const nextPosition = nextRow?.[nextGuardPosition[1]];

    if (nextPosition !== '#') {
      currentGuardPosition = nextGuardPosition;
      path.push(currentGuardPosition);
    } else {
      guardDirection = rotateGuard(guardDirection);
      rotations.push(currentGuardPosition);
    }
    loopedPath = findLoops(path);
  }
  return [path, rotations, loopedPath];
};
